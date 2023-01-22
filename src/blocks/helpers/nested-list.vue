<template>
  <ul v-if="type === 'bulleted_list'" class="notion-list notion-list-disc">
    <slot />
  </ul>
  <ol v-else class="notion-list notion-list-numbered">
    <slot />
  </ol>
</template>

<script lang="ts">
import defineBlockComponent from "@/lib/blockable";

import { getListNumber } from "@/lib/utils";
import { defineComponent } from "vue";

export default defineComponent({
  extends: defineBlockComponent(),
  name: "NotionNestedList",
  computed: {
    start() {
      const returnValue = getListNumber(this.value?.id, this.blockMap)
      return returnValue;
    },
  },
});
</script>
