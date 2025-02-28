<script lang="ts">
	import type { TaskModel } from "../models/domain/task.model";
	import { State } from "../enums/state.enum";
	import type { TaskViewModel } from "../models/view/task.view-model";
	
    let showNewTaskForm: boolean = $state(false);
    let tasks: TaskModel[] = $state([])

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
    <ul>
        {#each tasks as task}
            <li>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </li>
        {/each}
    </ul>
</main>

<style>
    
</style>