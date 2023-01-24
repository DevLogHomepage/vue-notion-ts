<template>
<div>
    <!-- <NotionTextRenderer :v-bind:pass/> -->
</div>
</template>

<script lang="ts">
import { NotionTextRenderer } from '@/components';
import defineBlockComponent from '@/lib/blockable';
import { defineComponent } from 'vue'

export default defineComponent({
    name: "NotionCollectionViewRow",
    extends: defineBlockComponent(),
    components: { NotionTextRenderer }
})
</script>