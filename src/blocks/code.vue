<template>
  <pre
    v-if="prism && supported"
    :class="['notion-code', langClass]"
  ><prismComponent :language="lang">{{ properties.title[0][0] }}</prismComponent></pre>
  <pre
    v-else
    :class="['notion-code', langClass]"
  ><code :class="langClass">{{ properties.title[0][0] }}</code></pre>
</template>

<script lang="ts">
import Prism from "prismjs";
// import PrismComponent from "vue-prism-component";
import prismComponent from "@/lib/prism";
import defineBlockComponent from "@/lib/blockable";

export default {
  extends: defineBlockComponent(),
  name: "NotionCode",
  components: { prismComponent },
  props: { overrideLang: String, overrideLangClass: String },
  data() {
    return { Prism };
  },
  computed: {
    lang() {
      return (
        this.overrideLang || this.properties?.language?.[0]?.[0]?.toLowerCase()
      );
    },
    langClass() {
      return this.overrideLangClass || `language-${this.lang}`;
    },
    supported() {
      return this.Prism.languages[this.lang];
    },
  },
};
</script>
