<template>
  <NotionRenderer
    v-bind="pass"
    :blockMap="blockMap"
    :contentId="referencePointerId"
  />
</template>

<script lang="ts">
import defineBlockComponent from "@/lib/blockable";

export default {
  extends: defineBlockComponent(),
  name: "NotionSyncPointer",
  computed: {
    referencePointerId() {
      return this.format?.transclusion_reference_pointer?.id;
    },
  },
};
</script>
