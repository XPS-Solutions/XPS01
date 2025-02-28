<script lang="ts">
	import type { TaskModel } from "../models/domain/task.model";
	import { State } from "../enums/state.enum";
	import type { TaskViewModel } from "../models/view/task.view-model";
	
    let showNewTaskForm: boolean = $state(false);
    let tasks: TaskModel[] = $state([])
    let pendingTasks: TaskModel[] = $derived(tasks.filter(x => x.state == State.Pending));
    let completedTasks: TaskModel[] = $derived(tasks.filter(x => x.state == State.Completed));

    let newTask: TaskViewModel = $state({
        title: '',
        description: '',
    });

    let addTask = () => {
        showNewTaskForm = false;
        tasks.unshift({
            title: newTask.title,
            description: newTask.description,
            state: State.Pending,
            created: new Date()
        });
    }

    let deleteTask = (id: number) => {
        tasks.splice(id);
    }

    let completeTask = (id:number) => {
        tasks[id].state = State.Completed;
    }
</script>

<main>
    <button onclick={() => showNewTaskForm = !showNewTaskForm }>Add Task</button>
    {#if showNewTaskForm}
        <form onsubmit={addTask}>
            <label>
                Title: 
                <input type="text" bind:value={newTask.title}/>
            </label>
            <label>
                Description:
                <input type="text" bind:value={newTask.description}/>
            </label>
            <button>Add</button>
        </form>
    {/if}
    <details open>
        <summary>Pending Tasks</summary>
        <ul>
            {#each pendingTasks as task, index}
                <li>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <button onclick={() => deleteTask(index)}>Delete</button>
                    <button onclick={() => completeTask(index)}>Complete</button>
                </li>
            {/each}
        </ul>        
    </details>
    <details>
        <summary>Completed Tasks</summary>
        <ul>
            {#each completedTasks as task, index}
                <li>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <button onclick={() => deleteTask(index)}>Delete</button>
                </li>
            {/each}
        </ul>        
    </details>
</main>

<style>
    
</style>