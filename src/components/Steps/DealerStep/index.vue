<template>
  <div>
    <dealer-top :current-modification="currentModification"/>
    <dealer-middle @on-next="$emit('on-next')"/>
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
  mounted() {

  }
}
</script>

<style scoped>

</style>