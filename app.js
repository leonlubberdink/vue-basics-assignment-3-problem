const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  watch: {
    result() {
      const newThis = this;
      setTimeout(() => {
        newThis.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.counter < 37) return "Not there yet";
      if (this.counter > 37) return "Too much!";
      return this.counter;
    },
  },
  methods: {
    add(value) {
      this.counter = this.counter + value;
    },
  },
});

app.mount("#assignment");
