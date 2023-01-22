<template>
  <img
    v-if="icon.includes('http')"
    :class="[
      format.page_cover && 'notion-page-icon-offset',
      big ? 'notion-page-icon-cover' : 'notion-page-icon',
    ]"
    :src="(mapImageUrl as Function)(icon, block)"
    :alt="title ? getTextContent(title) : 'Icon'"
  />
  <span
    v-else-if="icon"
    role="img"
    :aria-label="icon"
    :class="[
      'notion-emoji',
      format.page_cover && 'notion-page-icon-offset',
      big ? 'notion-page-icon-cover' : 'notion-page-icon',
    ]"
  >
    {{ icon }}
  </span>
</template>

<script lang="ts">
import defineBlockComponent from "@/lib/blockable";
export default {
  extends: defineBlockComponent(),
  name: "NotionPageIcon",
  props: { big: Boolean },
};
</script>
