import type { EnumStringMember } from "@babel/types"

export interface blocks{
    [pageId: string] : block
}

export interface block{
    role: string,
    value: blockValue // need to change,
}

export interface blockValue{
    alive:boolean,
    content:string[] // need to change,
    copied_from: string,
    created_by_id: string,
    created_by_table: string,
    created_time: number
    file_ids: string[],
    format: any, // {block_icon: 'https://s3-us-west-2.amazonaws.com/secure.notion-s…3-478a-8ba4-805623a2b72c/Element-Flame-Yellow.svg', block_full_width: true, copied_from_pointer: {…}},
    id: string,
    last_edited_by_id:string,
    last_edited_by_table:string,
    last_edited_time:number,
    parent_id: string,
    parent_table:string,
    permissions: blockValuePermission[], // (2) [{…}, {…}],
    properties: blockValueProperties, // {title: Array(1)},
    space_id:string,
    type:string
    version:number
}

export interface blockValueFormat{
    copied_from_pointer:{
        id: string,
        table: string,
        spaceId: string
    },
    page_full_width:boolean,
    page_icon:string
}

export interface blockValuePermission{
    role:string,
    type:string,
    user_id?:string,
    added_timestamp?:number
}

export interface blockValueProperties{
    [key: string]:string[]
}
