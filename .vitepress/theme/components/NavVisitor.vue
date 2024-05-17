<script setup lang="ts">
import { inject, Ref } from 'vue'

</script>

<template>
  <img
    class="visitor"
    src="https://visitor-badge.laobi.icu/badge?page_id=findallteam.github.io"
    onerror="this.style.display='none'"
  />
</template>

<style scoped>
.visitor {
  margin-left: 8px;
}
@media (min-width: 768px) and (max-width: 920px) {
  .visitor {
    display: none;
  }
}
</style>