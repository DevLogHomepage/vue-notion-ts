import type { EnumStringMember } from "@babel/types"

export interface pages{
    [pageId: string] : page
}

export interface page{
    role: string,
    value: any // need to change,
}

export interface pageValue{
    alive:boolean,
    content:string[] // need to change,
    copied_from: string,
    created_by_id: string,
    created_by_table: string,
    created_time: number
    file_ids: string[],
    format: any, // {page_icon: 'https://s3-us-west-2.amazonaws.com/secure.notion-s…3-478a-8ba4-805623a2b72c/Element-Flame-Yellow.svg', page_full_width: true, copied_from_pointer: {…}},
    id: string,
    last_edited_by_id:string,
    last_edited_by_table:string,
    last_edited_time:number,
    parent_id: string,
    parent_table:string,
    permissions: pageValuePermission[], // (2) [{…}, {…}],
    properties: any, // {title: Array(1)},
    space_id:string,
    type:string
    version:number
}

export interface pageValueFormat{
    copied_from_pointer:{
        id: string,
        table: string,
        spaceId: string
    },
    page_full_width:boolean,
    page_icon:string
}

export interface pageValuePermission{
    role:string,
    type:string,
    user_id?:string,
    added_timestamp?:number
}
