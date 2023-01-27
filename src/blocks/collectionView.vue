<template>
    <div>
        <div class="notion-database-table-block">
            <div class="notion-database-table-header">
                <div
                class="notion-database-table-header-cell" 
                v-for="(columnType,columnIndex) in tableTypes" 
                :key="columnIndex" 
                v-on:click="setDisplayTable($event,columnIndex)"
                >
                    <div :style="underLine(columnIndex)">
                        <CollectionCellRenderer :text="header(columnType)" v-bind="pass"/>
                    </div>
                </div>
    
            </div>
        </div>
        <div v-for="(blockValId,blockValIndex) in collection.types" :key="blockValIndex">
            <NotionDatabase v-if="blockValIndex == typesNumber"
            v-bind="pass"
            :collectionData="blockValId">
                <slot/>
            </NotionDatabase>
        </div>
    </div>
</template>

<script lang="ts">
import { NotionTextRenderer } from '@/components';
import defineBlockComponent from '@/lib/blockable';
import { defineComponent, ref, type StyleValue } from 'vue'
import type { blockValue } from "@/types/blocks"
import { NotionTable } from '@/components';
import NotionDatabase from '@/components/database.vue'
import CollectionCellRenderer from '@/blocks/helpers/collectionCellRenderer.vue'

export default defineComponent({
    name: "NotionCollectionView",
    extends: defineBlockComponent(),
    components: { 
        NotionTextRenderer,
        NotionTable,
        NotionDatabase,
        CollectionCellRenderer
     },
    setup(){
        const typesNumber = ref<number>(0)
        return{
            typesNumber
        }
    },
    computed:{
        tableTypes(){
            return this.block?.collection.types
        },
    },
    created(){
        this.block?.collection.types.forEach((type,index) => {
            if(type.format?.table_wrap)
                this.typesNumber  = index
        })
    },
    methods:{
        header(columnType:blockValue){
            return [[columnType.name]]
        },
        setDisplayTable(_:MouseEvent,index:number){
            this.typesNumber = index
        },
        underLine(index:number):StyleValue{
            return (this.typesNumber === index) ? {borderBottom: 'solid 2px rgb(55,53,47)',paddingTop:'2px',color: 'rgba(55,53,47,1)'} : ''
        }
    }
})
</script>