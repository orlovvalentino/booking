<template>
  <div id="app" class="main-content-wrapper">
    <header-nissan></header-nissan>
    <div class="main-content">
      <form-wizard v-if="!isScheduled"
                    color="false"
                   @on-complete="onComplete"
                   @on-change="onChangeTabs"
                   ref="tabsWrapper"
                   next-button-text=""
      >
        <div slot="title" class="car-step">
          <car-static-description v-if="!activeTab"/>
        </div>
        <tab-content title="автомобиль" icon="false" scope="props">
          <cars-grid @on-next="$refs.tabsWrapper.nextTab()" @on-modification="onModification"/>
        </tab-content>
        <tab-content title="дилер" icon="false">
          <dealer-step v-if="activeTab===1"
                       :current-modification="currentModification"
                       @on-next="onNext"/>
        </tab-content>
        <tab-content title="ТО И СЕРВИСНЫЕ работы" icon="false">
          <inspection-step
              v-if="activeTab===2"
              @on-next="$refs.tabsWrapper.nextTab()"
              :current-modification="currentModification"
              :current-dealer="currentDealer"
          />
        </tab-content>
        <tab-content title="отправьте заявку" icon="false">
          <send-request v-if="activeTab===3"
                        @on-next="$refs.tabsWrapper.nextTab()"
                        :current-modification="currentModification"
                        :current-dealer="currentDealer"/>
        </tab-content>
      </form-wizard>

      <VisitScheduled v-if="isScheduled && !isDone" @on-done="isDone = true"/>
      <success-block v-if="isDone" />
    </div>

    <footer-nissan></footer-nissan>
  </div>

</template>

<script>
import HeaderNissan from "@/components/Integration/HeaderNissan";
import FooterNissan from "@/components/Integration/FooterNissan"
import CarStaticDescription from "@/components/Steps/Car/CarStaticDescription";
import CarsGrid from "@/components/Steps/Car/CarsGrid";
import DealerStep from "@/components/Steps/DealerStep"


import {FormWizard, TabContent} from 'vue-form-wizard'

export default {
  name: "App",
  data() {
    return {
      activeTab: null,
      currentModification: null,
      currentDealer: null,
      isScheduled:false,
      isDone: false,
    }
  },
  components: {
    HeaderNissan,
    FooterNissan,
    CarsGrid,
    CarStaticDescription,
    FormWizard,
    TabContent,
    DealerStep,
    InspectionStep: () => import("@/components/Steps/Inspection"),
    SendRequest: () => import("@/components/Steps/SendRequest"),
    VisitScheduled: () => import("@/components/VisitScheduled"),
    SuccessBlock: () => import("@/components/Success"),
  },
  methods: {
    onChangeTabs(prevIndex, newIndex) {
      this.activeTab = newIndex;
    },
    onModification(value) {
      this.currentModification = value;
    },
    onNext(value) {
      this.currentDealer = value;
      this.$refs.tabsWrapper.nextTab()
    },
    onComplete: function () {
      this.isDone = true;
    }
  },
  computed: {
    slotProps() {
      return {
        nextTab: this.nextTab
      }
    }
  }
}
</script>
<style scoped lang="scss">
.main-content {
  max-width: 1128px;
  margin: 0 auto;
  padding: 40px 15px;
}
</style>
