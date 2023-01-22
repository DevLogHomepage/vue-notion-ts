<template>
  <div :style="style">
    <iframe class="notion-image-inset" :src="src" :allow="embedAllow" />
  </div>
</template>

<script lang="ts">
import defineBlockComponent from "@/lib/blockable";
import { defineComponent } from "vue";
import type { StyleValue } from "vue";
export default defineComponent({
  extends: defineBlockComponent(),
  name: "NotionAsset",
  computed: {
    src() {
      return this.type === "figma"
        ? this.properties.source[0][0]
        : this.f.display_source;
    },
    style():StyleValue {
      const aspectRatio =
        this.f.block_aspect_ratio || this.f.block_height / this.f.block_width;
      return {
        paddingBottom: `${aspectRatio * 100}%`,
        position: "relative",
      };
    },
  },
})
</script>