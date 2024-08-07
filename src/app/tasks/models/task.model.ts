export interface TaskModel {
    readonly id?: string,
    readonly assigner_id?: string,
    readonly assignee_id?: string,
    readonly project_id?: string,
    readonly section_id?: string,
    readonly parent_id?: string,
    readonly order?: number,
    readonly content?: string,
    readonly description?: string,
    readonly is_completed?: boolean,
    readonly labels?: string[],
    readonly priority?: number,
    readonly comment_count?: number,
    readonly creator_id?: string,
    readonly created_at?: string,
    readonly due?: {
        readonly date?: string,
        readonly string?: string,
        readonly lang?: string,
        readonly is_recurring?: boolean
    },
    readonly url?: string,
    readonly duration?: {
        readonly amount?: number,
        readonly unit?: string
    }
}