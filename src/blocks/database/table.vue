<template>
  <div>
    <div class="notion-database-table-row" v-for="rowIndex in data.length + 1">
      <tr>
        <td
          v-for="(columnProperty, columnIndex) in properties"
          :key="columnIndex"
          class="notion-database-table-data"
        >
          <div :style="{width:`${columnProperty.width}PX`}" v-if="isVisible(columnProperty)">
            <CollectionCellRenderer :text="isheaderTitle(rowIndex-1,columnProperty)" v-bind="pass"/>
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
    methods: {
      isheaderTitle(rowIndex:number,columnProperty:blockValueProperties){
        if(!rowIndex) return [[this.schema[columnProperty.property].name]]
        return this.data[rowIndex - 1][this.schema[columnProperty.property].name] ?? [[' ']]
      },
      isVisible(columnId:blockValueProperties){
        return columnId.visible
      }
    },
})
</script>