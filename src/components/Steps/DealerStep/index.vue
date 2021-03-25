<template>
  <div>
    <dealer-top :current-modification="currentModification"/>
    <dealer-middle @on-next="onNext" :current-dealer="currentDealer"/>
  </div>

</template>

<script>
export default {
  name: "index",
  components: {
    DealerTop: () => import("./Top"),
    DealerMiddle: () => import("./Middle")
  },
  props:{
    currentModification:{
      type: [Boolean, Object]
    }
  },
  data() {
    return {
      currentDealer: false
    }
  },
  methods:{
    onNext(value){
      this.currentDealer = value;
      this.$emit('on-next',this.currentDealer)
    }
  }
}
</script>

<style scoped>

</style>