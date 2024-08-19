<template>
    <v-sheet
    class="pa-4 text-left mx-auto"
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
  >
    <h3 class="text-h4 mb-6">{{ title }}</h3>
    <p class="mb-4 text-body text-info">
    {{ description }}
    </p>
    <p class="text-secondary">{{ date }}</p>
    <div class="text-start">
      <v-btn
        class="text-primary"
        color="success"
        variant="flat"
        width="90"
        rounded
      >
        View event
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    date: String,
    thumbnail: String,
    link: String
  }
}
</script>

<style scoped>
.gj-event {
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.gj-event img {
  width: 100%; /* Adjust according to your styling needs */
  max-width: 300px;
  height: auto;
  margin-bottom: 10px;
}

.gj-event h3 {
  color: #333; /* Adjust title color */
}

.gj-event a {
  color: #007BFF;
  text-decoration: none;
}
</style>
