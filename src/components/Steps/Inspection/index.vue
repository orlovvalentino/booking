<template>
  <div>
    <current-model :current-modification="currentModification" class="current-model"/>
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

<style lang="scss">
.inspection-wrap {
  padding-top: 11px;
  @media (min-width: 768px) {
    border: 1px solid #EFEFEF;
    margin-bottom: 32px;
  }

  .dealer {
    border: none;
    padding: 0;

  }

  .dealer-name {
    font-size: 20px;
    line-height: 26px;
    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  .dealer-top {
    margin-bottom: 4px;
    @media (min-width: 768px) {
      padding: 19px 0 0 24px;
    }

    svg {
      transform: translate(0px, -7px);
      width: 68px;
      margin-left: -10px;
      margin-right: 5px;
      @media (min-width: 768px) {
        transform: translate(-2px, 0px);
        margin-top: -16px;
        margin-right: 8px;
      }
    }
  }

  .dealer-title {
    font-size: 14px;
    line-height: 18px;
    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 20px;
    }
  }

  .address {
    margin-bottom: 25px;
  }

  .address-txt {
    font-size: 14px;
    line-height: 21px;
    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 17px;
    }
  }
  .hours{
    margin-bottom: 25px;
    @media (min-width: 768px) {
      margin-bottom: 21px;
    }
  }
  .hours-txt{
    font-size: 14px;
    line-height: 21px;
    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 17px;
    }
  }
  .description{
    border-bottom: 1px solid #EFEFEF;
    margin-left: -15px;
    margin-right: -15px;
    padding-bottom: 29px;
    padding-left: 15px;
    padding-right: 15px;
    @media (min-width: 768px) {
      padding-left: 22px;
      margin-left: 0;
      margin-right: 0;
      padding-right: 22px;
      padding-bottom: 0px;
    }

    .price-value{
      line-height: 34px;
    }
  }

}

.current-model.dealer-top {
  margin-left: -15px;
  margin-right: -15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 9px;
  @media (min-width: 768px) {
    margin-top: 39px;
    margin-left: 0;
    padding: 0;
    margin-right: 0;
    border: none;
    margin-bottom: 51px;
  }
}
</style>