<template>
  <div v-if="currentDealer">
    <current-dealer v-for="n in 10" :key="n"
                    :iconColor="'#C3002F'"
                    @on-next="$emit('on-next')"
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
  methods:{
    getCurrentDealer(){
      this.$axios.get('json/Dealer.json', {baseURL: window.location.origin})
          .then((response) => {
            // const data = response.data;
            // console.log(response.data)
            this.currentDealer = response.data;
            console.log(response.data);
            // this.dealer = data;
            // this.suggestedName = data.suggestedName;
            // this.city = data.address.city;
            // this.addressLine = data.address.addressLine1;
            // this.phone = data.contact.phone;
            // this.website = data.contact.website;
            // this.openingHoursText = data.openingHours.openingHoursText;
          })
          .catch((err) => {
            console.log(err)
          });
    }
  }
}
</script>

<style scoped>

</style>