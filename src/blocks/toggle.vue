<template>
  <details class="notion-toggle">
    <summary><NotionTextRenderer :text="title" v-bind="pass" /></summary>
    <div><slot /></div>
  </details>
</template>

<script lang="ts">
import defineBlockComponent from "@/lib/blockable";
import NotionTextRenderer from "@/blocks/helpers/text-renderer.vue";

export default {
  extends: defineBlockComponent(),
  name: "NotionToggle",
  components: { NotionTextRenderer },
};
</script>
