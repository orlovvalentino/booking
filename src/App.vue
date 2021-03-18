<template>
  <div id="app" class="main-content">
    <form-wizard color="false" @on-change="onChangeTabs" ref="tabsWrapper"
                 next-button-text=""
    >
      <div slot="title" class="car-step">
        <car-static-description v-if="!activeTab"/>
      </div>
      <tab-content title="автомобиль" icon="false" scope="props">
        <cars-grid  @on-next="$refs.tabsWrapper.nextTab()"/>
      </tab-content>
      <tab-content title="дилер" icon="false">
        My second tab content
      </tab-content>
      <tab-content title="ТО И СЕРВИСНЫЕ работы" icon="false">
        Yuhuuu! This seems pretty damn simple
      </tab-content>
      <tab-content title="отправьте заявку" icon="false">
        cancel
      </tab-content>

    </form-wizard>

  </div>

</template>

<script>
import CarStaticDescription from "@/components/Steps/Car/CarStaticDescription";
import CarsGrid from "@/components/Steps/Car/CarsGrid";

import {FormWizard, TabContent} from 'vue-form-wizard'

export default {
  name: "App",
  data() {
    return {
      activeTab: null
    }
  },
  components: {
    CarsGrid,
    CarStaticDescription,
    FormWizard,
    TabContent
  },
  methods: {
    onChangeTabs(prevIndex, newIndex) {
      this.activeTab = newIndex;
    }
  },
  computed:{
    slotProps () {
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
