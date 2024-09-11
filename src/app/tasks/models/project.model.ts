export interface ProjectModel {
    readonly id: string,
    readonly name: string,
    readonly comment_count: number,
    readonly order: number,
    readonly color: string,
    readonly is_shared: boolean,
    readonly is_favorite: boolean,
    readonly is_inbox_project: boolean,
    readonly is_team_inbox: boolean,
    readonly view_style: boolean,
    readonly url: string,
    readonly parent_id?: string
  }