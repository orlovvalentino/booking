<template>
  <div>
    <current-model :current-modification="currentModification" />
    <div class="inspection-wrap">
      <current-dealer @on-next="$emit('on-next')"
                      :iconColor="'#C3002F'"
                      :current-dealer="currentDealer"/>

      <inspection-form/>
      <inspection-static/>
    </div>
    <inspection-bottom @on-next="$emit('on-next')"/>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {
    CurrentModel: () => import("../DealerStep/Top"),
    CurrentDealer: () => import("../DealerStep/CurrentDealer"),
    InspectionStatic: () => import("./Static"),
    InspectionForm: () => import("./Form"),
    InspectionBottom: () => import("./Bottom"),
  },
  props: {
    currentModification: {
      type: [Boolean, Object]
    },
    currentDealer: {
      type: [Boolean, Object]
    }
  },
}
</script>
