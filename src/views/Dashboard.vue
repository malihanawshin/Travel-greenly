<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2xl font-bold text-gray-800"> Green Travel Dashboard</h1>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Summary -->
      <div class="bg-white rounded-xl shadow p-4">
        <h2 class="text-lg font-semibold">Summary</h2>
        <p class="text-gray-600 mt-2">Total Trips: {{ trips.length }}</p>
        <p class="text-green-700 font-bold">
          Total CO₂: {{ totalEmissions.toFixed(2) }} kg
        </p>
      </div>

      <!-- Chart placeholder -->
      <div class="bg-white rounded-xl shadow p-4 flex items-center justify-center">
        <p class="text-gray-500"> Emissions Chart Coming Soon</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTripsStore } from "../stores/trips";
import { computed } from "vue";

const tripsStore = useTripsStore();
const trips = tripsStore.trips;
const totalEmissions = computed(() => tripsStore.totalEmissions);
</script>
