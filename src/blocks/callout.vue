<template>
  <div :class="['notion-callout', blockColorClass(), blockColorClass('_co')]">
    <div>
      <NotionPageIcon v-bind="pass" />
    </div>
    <div class="notion-callout-text">
      <NotionTextRenderer :text="title" v-bind="pass" />
    </div>
  </div>
</template>

<script lang="ts">
import defineBlockComponent from "@/lib/blockable";
import NotionPageIcon from "@/blocks/helpers/page-icon.vue";
import NotionTextRenderer from "@/blocks/helpers/text-renderer.vue";

export default {
  extends: defineBlockComponent(),
  name: "NotionCallout",
  components: {
    NotionPageIcon,
    NotionTextRenderer,
  },
};
</script>
