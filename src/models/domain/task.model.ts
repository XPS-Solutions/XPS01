import type { State } from "../../enums/state.enum";

export interface TaskModel {
    title: string,
    description: string,
    state: State,
    created: Date,
}