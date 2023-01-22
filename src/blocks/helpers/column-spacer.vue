<template>
  <div class="notion-spacer" :style="spacerStyle" />

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "NotionColumnSpacer",
  setup(){
    return{
      baseWidth:46 // todo: add magic numbers to a config json
    }
  },
  computed: {
    spacerStyle() {
      return { width: `${this.baseWidth}px` };
    },
  },
})
</script>

<style scoped>

</style>

