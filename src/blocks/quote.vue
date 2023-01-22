<template>
  <blockquote v-if="properties" class="notion-quote">
    <NotionTextRenderer :text="title" v-bind="pass" />
  </blockquote>
</template>

<script lang="ts">
import blockBlockCompoment from "@/lib/blockable";
import NotionTextRenderer from "@/blocks/helpers/text-renderer.vue";

export default {
  extends: blockBlockCompoment(),
  name: "NotionQuote",
  components: { NotionTextRenderer },
};
</script>
