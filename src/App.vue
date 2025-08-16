<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navigation -->
    <nav class="bg-green-600 text-white px-6 py-4 flex space-x-6">
      <RouterLink to="/" class="hover:underline">Dashboard</RouterLink>
      <RouterLink to="/trips" class="hover:underline">Trips</RouterLink>
      <RouterLink to="/tips" class="hover:underline">Tips</RouterLink>
    </nav>

    <!-- Page Content -->
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
