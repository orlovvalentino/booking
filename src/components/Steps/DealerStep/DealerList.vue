<template>
  <div v-if="currentDealer">
    <current-dealer v-for="n in 10" :key="n"
                    :iconColor="'#C3002F'"
                    @on-next="$emit('on-next',currentDealer)"
                    :current-dealer="currentDealer"
    />
  </div>
</template>

<script>
export default {
  name: "DealerList",
  data() {
    return {
      currentDealer: false
    }
  },
  components: {
    CurrentDealer: () => import("./CurrentDealer")
  },
  mounted() {
    this.getCurrentDealer();
  },
  methods: {
    getCurrentDealer() {
      this.$axios.get('json/Dealer.json', {baseURL: window.location.origin})
          .then((response) => {
            this.currentDealer = response.data;
          })
          .catch((err) => {
            console.log(err)
          });
    }
  }
}
</script>