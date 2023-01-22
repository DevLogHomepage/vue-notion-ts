<template>
  <div id="app">
    <NotionRenderer :blockMap="(blockMap as blocks)" fullPage />
  </div>
</template>
<script lang="ts">
// import { NotionRenderer, getPageBlocks } from "";

import { ref } from 'vue';
import NotionRenderer from './components/notion-renderer.vue';
import type { blocks } from './types/blocks';
import { getPageBlocks } from './entry';

export default {
  components: { NotionRenderer },
  setup(){
    const blockMap = ref<blocks>()
    return{
      blockMap
    }
  },
  async created() {
    this.blockMap = (await getPageBlocks("0c996ac0bf5948e49f235c42efc80ce8")).data;
  },
};
</script>

<style>
@import url(./styles.css);
</style>