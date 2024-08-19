<template>
  <div v-html="content"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  notionPageId: {
    type: String,
    required: true,
  },
});

const content = ref('Loading...');

onMounted(async () => {
  try {
    const response = await fetch(`/notion-content/${props.notionPageId}.md`);
    if (response.ok) {
      content.value = await response.text();
    } else {
      content.value = 'Failed to load content.';
    }
  } catch (error) {
    content.value = 'Error loading content.';
  }
});
</script>

<style scoped>
/* Add any styles you need for your component here */
</style>