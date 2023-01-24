<template>
  <div :style="columnStyle">
    <div class="notion-column" >
      <slot />
    </div>
    <div class="notion-spacer" :style="spacerStyle" />
  </div>
</template>

<script lang="ts">
import type { StyleValue } from 'vue';


const baseWidth = 46; // todo: add magic numbers to a config json

export default {
  name: "NotionColumn",
  props: ["format"],
  computed: {
    columnStyle():StyleValue {
      const columns = Number((1 / this.format.column_ratio).toFixed(0));
      console.log(columns)
      const totalWidth = (columns - 1) * baseWidth;
      return {
        width: `calc((100% - ${totalWidth}px) * ${this.format.column_ratio})`,
        wordBreak:'break-all'
      };
    },
    spacerStyle() {
      return { width: `${baseWidth}px` };
    },
  },
};
</script>
