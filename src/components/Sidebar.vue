<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Sidebar',

  setup() {
    const { t } = useI18n();
    return { t };
    }
})
</script>

<template>
  <div class="text-center text-md">
    <h3>Sidebar goes here</h3>
  </div>
</template>

<style scoped>
</style>
