<template>
  <div>
    <div class="notion-database-table-row">
      <tr>
        <td
          v-for="(columnId, columnIndex) in properties"
          :key="columnIndex"
          class="notion-database-table-data"
        >
          <div :style="{width:`${columnId.width}PX`}" v-if="isVisible(columnId)">
            <CollectionCellRenderer :text="headerTitle(columnId)" v-bind="pass"/>
          </div>
        </td>
      </tr>
    </div>
  </div>
</template>

<script lang="ts">
import type { blockValueProperties } from '@/types/blocks';
import { defineComponent } from 'vue'
import defineDBComponent from '@/lib/database';
import CollectionCellRenderer from '../helpers/collectionCellRenderer.vue';

export default defineComponent({
    extends: defineDBComponent(),
    name: "NotionTableRow",
    components: {
        CollectionCellRenderer
    },
    computed: {

        // hasHeaderColumn() {
        // return this.parent?.value?.format?.table_block_column_header;
        // },
        // hasHeaderRow() {
        // return this.parent?.value?.format?.table_block_row_header;
        // },
        // columns() {
        // // return this.;
        // },
    },
    methods: {
      headerTitle(columnId:blockValueProperties){
        return [[this.schema[columnId.property].name]]
      },
      isVisible(columnId:blockValueProperties){
        return columnId.visible
      }
        // cell(columnId:string) {
        // // return empty notion decorated text if row is empty
        // return this?.properties?.[columnId] ?? [[" ", false]];
        // },
        // isHeader(columnIndex:number) {
        // return (
        //     (this.hasHeaderColumn && this.contentIndex == 0) ||
        //     (this.hasHeaderRow && columnIndex == 0)
        // );
        // },
    },
})
</script>