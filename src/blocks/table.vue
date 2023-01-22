<template>
  <div class="notion-simple-table-wrapper">
    <table class="notion-simple-table">
      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import defineBlockComponent from "@/lib/blockable";

export default {
  extends: defineBlockComponent(),
  name: "NotionTable",
};
</script>
