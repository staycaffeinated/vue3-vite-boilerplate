<script lang="ts">

import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Home',

  setup() {
    const { t, availableLocales, locale } = useI18n();

    const toggleLocales = () => {
      const locales = availableLocales;
      locale.value =
        locales[(locales.indexOf(locale.value)+1) % locales.length];
    };

    return { t };
  }


});
</script>

<template>
  <div class="container max-w-3xl mx-auto mt-60">
    <div class="h-60 mb-8">
      {{ t('index_page') }}
    </div>
  </div>
</template>

