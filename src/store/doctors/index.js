export default {
  state: {
    doctors: [{ text: "Dr. Sam", value: 1 }]
  },
  getters: {
    doctors(state) {
      return state.doctors;
    }
  },
  mutations: {
    doctors(state, doctors) {
      state.doctors = doctors;
    }
  },
  actions: {}
};
