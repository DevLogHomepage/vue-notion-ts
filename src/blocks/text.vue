<template>
  <p v-if="properties" :class="['notion-text', blockColorClass()]">
    <NotionTextRenderer :text="title" v-bind="pass" />
  </p>
  <div v-else class="notion-blank">&nbsp;</div>
</template>

<script lang="ts">
import defineBlockComponent from "@/lib/blockable";
import NotionTextRenderer from "@/blocks/helpers/text-renderer.vue";

export default {
  extends: defineBlockComponent(),
  name: "NotionText",
  components: { NotionTextRenderer },
};
</script>
