<template>
  <div v-if="katex">
    <component :is="'katex-element'" :expression="equation" />
  </div>
  <NotionCode
    v-else
    v-bind="pass"
    overrideLang="latex"
    overrideLangClass="language-latex"
  />
</template>

<script lang="ts">
import defineBlockComponent from "@/lib/blockable";
import NotionCode from "@/blocks/code.vue";

export default {
  extends: defineBlockComponent(),
  name: "NotionEquation",
  components: { NotionCode },
  computed: {
    equation() {
      return this.properties?.title?.[0]?.[0];
    },
  },
};
</script>
