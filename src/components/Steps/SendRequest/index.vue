<template>
  <div>
    <current-model :current-modification="currentModification"/>
    <div class="inspection-wrap">
      <current-dealer @on-next="$emit('on-next')"
                      :iconColor="'#C3002F'"
                      button-text="отправить заявку"
                      :current-dealer="currentDealer"/>
      <sendrequest-contacts @on-next="$emit('on-next')"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {
    CurrentModel: () => import("../DealerStep/Top"),
    CurrentDealer: () => import("../DealerStep/CurrentDealer"),
    SendrequestContacts:()=> import('./Contacts.vue')
  },
  props: {
    currentModification: {
      type: [Boolean, Object]
    },
    currentDealer: {
      type: [Boolean, Object]
    }
  }
}
</script>

<style scoped>

</style>
