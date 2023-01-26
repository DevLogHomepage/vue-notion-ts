<template>
    <div v-if="isType('table')">1</div>
    <div v-else-if="isType('board')">2</div>
    <div v-else-if="isType('calendar')"></div>
    <div v-else-if="isType('timeline')"></div>
    <!-- <div v-if="isDatabaseType()"></div>

  </div> -->
  <!-- todo: maybe add message on !production if block type unsupported -->
  <!-- <div v-else-if="visible"><slot /></div> -->
</template>

<script lang="ts">
import defineBlockComponent from '@/lib/blockable';
import type { blockValue } from '@/types/blocks';
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
    extends:defineBlockComponent(),
    name:'NotionDatabase',
})
</script>

<style scoped>

</style>
