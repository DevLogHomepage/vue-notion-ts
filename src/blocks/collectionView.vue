<template>
    <div class="notion-collection_view-block">
        <div>
            <div v-for="(columnType,columnIndex) in tableTypes" :key="columnIndex" v-on:click="setDisplayTable($event,columnIndex)">
                <div :style="underLine(columnIndex)">
                    <div>
                        <NotionTextRenderer :text=header(columnType) v-bind="pass"/>
                    </div>
                </div>
                <!-- <div>{{ columnName }}</div> -->
            </div>
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { NotionTextRenderer } from '@/components';
import defineBlockComponent from '@/lib/blockable';
import { defineComponent, ref, type StyleValue } from 'vue'
import type { collectionType } from "@/types/blocks"

export default defineComponent({
    name: "NotionCollectionView",
    extends: defineBlockComponent(),
    components: { NotionTextRenderer },
    setup(){
        const typesNumber = ref<number>(0)
        return{
            typesNumber
        }
    },
    computed:{
        tableTypes(){
            console.log(this.block?.collection.types)
            console.debug(this.block)
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
        header(columnType:collectionType){
            return [[columnType.name]]
        },
        setDisplayTable(target:MouseEvent,index:number){
            this.typesNumber = index
        },
        underLine(index:number):StyleValue{
            
            return (this.typesNumber === index) ? {borderBottom: 'solid 2px rgb(55,53,47)',paddingTop:'2px'} : ''
        }
    }
})
</script>