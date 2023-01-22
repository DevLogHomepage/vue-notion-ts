
import type { blocks } from '@/types/blocks';
import type { axiosResponse } from '@/types/common';
import axios from 'axios'

const getPageTable = async (
  pageId:string,
  apiUrl = "https://api.vue-notion.workers.dev/v1"
) => await axios.get<axiosResponse>(`${apiUrl}/table/${pageId}`)

const getPageBlocks = async (
  pageId:string,
  apiUrl = "https://api.vue-notion.workers.dev/v1"
) => await axios.get<blocks>(`${apiUrl}/page/${pageId}`)

export { getPageTable, getPageBlocks };
