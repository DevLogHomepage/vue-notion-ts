<template>
  <span>
    <NotionDecorator
      v-for="(t, i) in text"
      :key="i"
      :content="t"
      v-bind="pass"
    />
  </span>
</template>

<script lang="ts">
import defineBlockComponent from "@/lib/blockable";

import NotionDecorator from "@/blocks/decorator.vue";
import type { PropType } from "vue";

export default {
  extends: defineBlockComponent(),
  name: "NotionTextRenderer",
  props: { text: Object as PropType<string[] | string[][]> },
  components: {
    NotionDecorator,
  }
};
</script>
