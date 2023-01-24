export interface blocks{
    [pageId: string] : block
}

export interface block{
    role: string,
    value: blockValue
    types: string,
    collection: blockCollection // need to change,
    data: any //need to change
    start_date:string,
    end_date:string
}

export interface blockValue{
    alive:boolean,
    content:string[]
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
    page_sort: string[],
    parent_table:string,
    permissions: blockValuePermission[], 
    properties: blockValueProperties,
    space_id:string,
    type:string,
    version:number,
    
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

export interface blockCollection{
    title:string,
    schema:{
        [key:string]: blockCollectionSchema
    },
    types:collectionType[]
}

export interface blockCollectionSchema{
    name:string,
    type:string,
    options: collectionOption[],
    groups: collectionGroup[],
    version: string,
    property: string,
    collection_id: string,
    collection_pointer: {
        id:string,
        table: string,
        spaceId: string
    },
    data:collectionData
}

export interface collectionOption{
    id: string,
    color: string,
    value: string,
}

export interface collectionGroup{
    id:string,
    name: string,
    color: string,
    optionsIds:string[]
}

export interface collectionType{
    id: string,
    version: number,
    type: string,
    name: string,
    format: {
       table_wrap:boolean,
       property_filters:collectionFilter
       table_properties:collectionProperty[],
       collection_pointer:{
           id:string,
           table:string,
           spaceId:string
       }
       collection_page_properties:collectionProperty[]
    },


}

export interface collectionFilter{
    id: string,
    filter:{
        filter: collectionFilter
    }
    value:{
        type:string,
        value:string
    }
}

export interface collectionProperty{
    width:number,
    visible: boolean,
    property: string
}

export interface collectionData{
    [key:string]:(string|block)[]
}