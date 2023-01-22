<template>
  <tr class="notion-simple-table-row">
    <td
      v-for="(columnId, columnIndex) in columns"
      :key="columnIndex"
      class="notion-simple-table-data"
    >
      <div :class="{ 'notion-simple-table-header': isHeader(columnIndex) }">
        <div class="notion-simple-table-cell-text">
          <NotionTextRenderer :text="cell(columnId)" v-bind="pass" />
        </div>
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import defineBlockComponent from "@/lib/blockable";
import NotionTextRenderer from "@/blocks/helpers/text-renderer.vue";

export default {
  extends: defineBlockComponent(),
  name: "NotionTableRow",
  components: {
    NotionTextRenderer,
  },
  computed: {
    hasHeaderColumn() {
      return this.parent?.value?.format?.table_block_column_header;
    },
    hasHeaderRow() {
      return this.parent?.value?.format?.table_block_row_header;
    },
    columns() {
      return this.parent?.value?.format?.table_block_column_order;
    },
  },
  methods: {
    cell(columnId:string) {
      // return empty notion decorated text if row is empty
      return this?.properties?.[columnId] ?? [[" ", false]];
    },
    isHeader(columnIndex:number) {
      return (
        (this.hasHeaderColumn && this.contentIndex == 0) ||
        (this.hasHeaderRow && columnIndex == 0)
      );
    },
  },
};
</script>
