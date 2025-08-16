<script setup>
import { ref, computed } from "vue";
import { useTripsStore } from "../stores/trips";

const distance = ref(null);
const mode = ref("car");
const tripsStore = useTripsStore();

const emissions = computed(() => {
  const dist = Number(distance.value); // always a number
  if (!dist || isNaN(dist)) return 0;

  const factors = {
    car: 0.12,
    bus: 0.05,
    train: 0.04,
    flight: 0.18,
    bike: 0,
    walk: 0,
  };

  return dist * factors[mode.value];
});

function addTrip() {
  const dist = Number(distance.value); // force numeric
  if (!dist || isNaN(dist)) return;

  tripsStore.addTrip({
    distance: dist,
    mode: mode.value,
    emissions: emissions.value,
  });

  // reset form
  distance.value = null;
  mode.value = "car";
}

const trips = computed(() => tripsStore.trips);
const totalEmissions = computed(() => tripsStore.totalEmissions);
</script>

<template>
  <div class="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4">
    <h2 class="text-xl font-bold text-gray-700"> Add a Trip</h2>

    <form @submit.prevent="addTrip" class="space-y-4">
      <!-- Transport type -->
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-600">Transport</label>
        <select v-model="mode" class="w-full border rounded-lg p-2">
          <option disabled value="">Select transport</option>
          <option value="car"> Car</option>
          <option value="bus"> Bus</option>
          <option value="train"> Train</option>
          <option value="flight"> Flight</option>
          <option value="bike"> Bike</option>
          <option value="walk"> Walk</option>
        </select>
      </div>

      <!-- Distance -->
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-600">Distance (km)</label>
        <input
          v-model="distance"
          type="number"
          min="1"
          class="w-full border rounded-lg p-2"
          placeholder="Enter distance in km"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        Add Trip
      </button>
    </form>

    <!-- Result -->
    <div class="mt-4 p-4 bg-gray-50 rounded-lg">
      <p class="text-sm text-gray-600">Total Trips: {{ trips.length }}</p>
      <p class="text-lg font-semibold text-green-700">
         Total CO₂ Emissions: {{ totalEmissions.toFixed(2) }} kg
      </p>
      <p class="text-sm text-gray-500">This trip: {{ emissions.toFixed(2) }} kg CO₂</p>
    </div>
  </div>
</template>
