import { defineStore } from "pinia";

export const useTripsStore = defineStore("trips", {
  state: () => ({
    trips: [],
  }),
  actions: {
    addTrip(transport, distance) {
      const factors = { car: 0.12, bus: 0.05, train: 0.04, flight: 0.25 };
      const emission = distance * (factors[transport] || 0);
      this.trips.push({ transport, distance, emission });
    },
  },
  getters: {
    totalEmissions: (state) =>
      state.trips.reduce((sum, trip) => sum + trip.emission, 0),
  },
});
