<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

/**
 * As it turns out, naming a Vue component
 * with the same name as a standard HTML
 * element has its problems because the
 * browser will resolve the <footer />
 * tag to the HTML standard element, not
 * the vue component
 */
export default defineComponent({
  name: 'BottomNavbar',

  setup() {
    const { t } = useI18n();
    return { t };
    }
})
</script>

<template>
  <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <span class="text-muted">Place sticky footer content here.</span>
    </div>
  </footer>
</template>

<style scoped>
</style>
