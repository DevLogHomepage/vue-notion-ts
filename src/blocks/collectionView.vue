<template>
    <div>
        <div class="notion-collection_view-block">
            <div>
                <div v-for="(columnType,columnIndex) in tableTypes" :key="columnIndex" v-on:click="setDisplayTable($event,columnIndex)">
                    <div :style="underLine(columnIndex)">
                        <div>
                            <NotionTextRenderer :text=header(columnType) v-bind="pass"/>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
        <div>
            
            <NotionDatabase 
            v-for="(blockValId,blockValIndex) in collection.types"
            :key="blockValIndex" 
            v-bind="pass"
            :collectionData="blockValId">
                <slot/>
            </NotionDatabase>
            
            <!-- <NotionTable v-bind="pass"><slot/></NotionTable> -->
        </div>
    </div>
</template>

<script lang="ts">
import { NotionTextRenderer } from '@/components';
import defineBlockComponent from '@/lib/blockable';
import { defineComponent, ref, type StyleValue } from 'vue'
import type { blockValue, collectionType } from "@/types/blocks"
import { NotionTable } from '@/components';
import NotionDatabase from '@/components/database.vue'

export default defineComponent({
    name: "NotionCollectionView",
    extends: defineBlockComponent(),
    components: { 
        NotionTextRenderer,
        NotionTable,
        NotionDatabase
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
            if(type.format.table_wrap)
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
            return (this.typesNumber === index) ? {borderBottom: 'solid 2px rgb(55,53,47)',paddingTop:'2px'} : ''
        }
    }
})
</script>