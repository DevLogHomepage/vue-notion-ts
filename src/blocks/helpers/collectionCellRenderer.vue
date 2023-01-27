<template>
  <div class="notion-database-table-cell">
    <div class="notion-database-table-text">
      <NotionTextRenderer :text="text" v-bind="pass"/>
    </div>
  </div>
</template>

<script lang="ts">
import defineBlockComponent from "@/lib/blockable";

import NotionDecorator from "@/blocks/decorator.vue";
import { defineComponent,type PropType, type StyleValue } from "vue";
import { NotionTextRenderer } from "@/components";

export default defineComponent({
  extends: defineBlockComponent(),
  name: "CollectionCellRenderer",
  props: { text: Object as PropType<string[] | string[][]> },
  components: {
    NotionDecorator,
    NotionTextRenderer
  },
});
</script>
