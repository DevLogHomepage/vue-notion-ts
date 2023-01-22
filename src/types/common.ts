import type { blocks } from "./blocks";
import type { pages } from "./pages";

export interface axiosResponse{
    config:any,
    data:blocks | pages,
    headers:any,
    request:any,
    status:number,
    statusText:string
}