<template>
  <header class="notion-page-header">
    <div class="notion-nav-breadcrumbs">
      <!-- todo: breadcrumbs -->
    </div>
  </header>
</template>

<script lang="ts">
import defineBlockComponent from "@/lib/blockable";
import Decorator from "@/blocks/decorator.vue";

export default {
  extends: defineBlockComponent(),
  name: "NotionPageHeader",
  components: { Decorator },
};
</script>
