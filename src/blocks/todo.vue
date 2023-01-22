<template>
  <div>
    <input
      type="checkbox"
      :value="title"
      :checked="properties.checked"
      disabled="true"
    />
    <label>
      <NotionTextRenderer :text="title" v-bind="pass" />
    </label>
  </div>
</template>

<script lang="ts">
// TODO: add notion styling
// TODO: add strikethrough
type Booleanish = boolean | 'true' | 'false'
import defineBlockComponent from "@/lib/blockable";
import NotionTextRenderer from "@/blocks/helpers/text-renderer.vue";

export default {
  extends: defineBlockComponent(),
  name: "NotionTodo",
  components: {
    NotionTextRenderer,
  },
};
</script>
