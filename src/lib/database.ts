import type { blocks,blockValue } from "@/types/blocks";
import type { pageLinkOptions } from "@/types/pageLinkOptions";
import type { PropType } from "vue";

import { defineComponent } from "vue";


export default function defineDBComponent(){
  return defineComponent({
    props:{
      blockMap: { type: Object as PropType<blocks>, required: true },
      blockOverrides: { type: Object, default: () => ({}) },
      contentId: { type: String, required: false },
      contentIndex: { type: Number, default: 0 },
      collectionData:{type: Object as PropType<blockValue>},
      embedAllow: { type: String, default: "fullscreen" },
      fullPage: { type: Boolean, default: false },
      hideList: { type: Array, default: () => [] },
      imageOptions: Object,
      katex: { type: Boolean, default: false },
      level: { type: Number, default: 0 },
      mapImageUrl: Function,
      mapPageUrl: Function,
      pageLinkOptions: Object as PropType<pageLinkOptions>,
      pageLinkTarget: { type: String, default: "_self" },
      prism: { type: Boolean, default: false },
      textLinkTarget: { type: String, default: "_blank" },
      todo: { type: Boolean, default: false }
    },
    computed:{
        pass() {
          // todo: make this more dynamic by iterating over blockProps attributes
          return {
            blockMap: this.blockMap,
            blockOverrides: this.blockOverrides,
            contentId: this.contentId,
            contentIndex: this.contentIndex,
            collectionData: this.collectionData,
            embedAllow: this.embedAllow,
            fullPage: this.fullPage,
            hideList: this.hideList,
            imageOptions: this.imageOptions,
            katex: this.katex,
            level: this.level,
            mapImageUrl: this.mapImageUrl,
            mapPageUrl: this.mapPageUrl,
            pageLinkOptions: this.pageLinkOptions,
            prism: this.prism,
            todo: this.todo
          };
        },
        collection(){
            return this.collectionData
        },
        format(){
            return this.collection?.format
        },
        properties(){
            return this.format?.table_properties ?? []
        },
        parent_id(){
            return this.collection?.parent_id ?? 'null'
        },
        parent(){
            return this.blockMap[this.parent_id]
        },
        data(){
            return this.parent.collection.data
        },
        schema(){
            return this.parent.collection.schema
        }

    }
})}