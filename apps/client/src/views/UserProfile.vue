<script lang="ts" setup>
import { useMeStore } from '../stores/me.js'

const { loading, me, error, getMe } = useMeStore()

onMounted(async () => {
  await getMe()
})
</script>

<template>
  <div>
    <h1>Profile</h1>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else-if="error">
      Error: {{ error }}
    </div>
    <div v-else-if="me">
      bienvenue,
      {{ me.username }} !
    </div>
  </div>
</template>
