<template>
  <div v-if="isType('board')">1</div>
  <div v-else-if="isType('calendar')">2</div>
  <div v-else-if="isType('gallery')">3</div>
  <div v-else-if="isType('list')">4</div>
  <NotionDatabaseTable v-if="isType('table')" v-bind="pass"/>
  <div v-if="isType('timeline')">6</div>
</template>

<script lang="ts">
import defineBlockComponent from '@/lib/blockable';
import NotionDatabaseTable from '@/blocks/database/table.vue'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
    extends:defineBlockComponent(),
    name:'NotionDatabase',
    components:{
      NotionDatabaseTable
    }
})
</script>

<style scoped>

</style>
