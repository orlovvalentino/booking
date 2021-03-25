<template>
  <div>
    <div class="middle-top">
      <p class="middle-title">выберите дилера</p>
      <button class="tab" :class="{ active: activeTabMap }" @click="changeTab(true)">
        <svg width="12" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M6 .481A5.83 5.83 0 00.167 6.315C.167 10.69 6 17.148 6 17.148s5.833-6.458 5.833-10.833A5.83 5.83 0 006 .48zm0 7.917A2.084 2.084 0 116 4.23 2.084 2.084 0 016 8.398z"
              fill="currentColor"/>
        </svg>
        <span class="label">На карте</span>
      </button>

      <button class="tab" :class="{ active: !activeTabMap }" @click="changeTab(false)">
        <svg width="15" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M.943.814h14v2h-14zM.943 5.814h14v2h-14zM.943 10.815h14v2h-14z"/>
        </svg>
        <span class="label">списком</span>
      </button>
    </div>
    <form class="form-map">
      <input class="input"/>
      <button type="submit" class="form-button">
        <svg width="18" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M12.5 11.815h-.79l-.28-.27A6.471 6.471 0 0013 7.314a6.5 6.5 0 10-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"
              fill="#C3002F"/>
        </svg>
      </button>
    </form>
    <dealer-map @on-next="onNext" v-if="activeTabMap"/>

    <dealer-list @on-next="onNext" v-if="!activeTabMap"/>

  </div>
</template>

<script>
export default {
  name: "Middle",
  components: {
    DealerMap: () => import("./Map"),
    DealerList: () => import("./DealerList")
  },
  data() {
    return {
      currentDealer: null,
      activeTabMap: true // if false active tab list
    }
  },
  methods: {
    changeTab(value) {
      this.activeTabMap = value;
    },
    onNext(value){
      this.currentDealer = value;
      this.$emit('on-next',this.currentDealer)
    }
  }
}
</script>

<style scoped lang="scss">

.middle {
  &-top {
    display: flex;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  &-title {
    font-size: 12px;
    line-height: 20px;
    margin-right: auto;
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
}

.tab {
  border: none;
  background: none;

  @media (max-width: 767px) {
    width: 20px;
    height: 20px;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  &.active {
    svg {
      color: #C3002F;
    }
  }

  .label {
    display: none;
    font-size: 10px;
    text-transform: uppercase;
    @media (min-width: 768px) {
      display: block;
      margin-left: 9px;
    }
  }

  &:last-child {
    margin-left: 19px;
    @media (min-width: 768px) {
      margin-left: 31px;
      margin-right: 5px;
    }
  }
}

.form-map {
  position: relative;
  margin-bottom: 28px;

  .input {
    border: 1px solid #000;
    height: 44px;
    font-size: 12px;
    line-height: 42px;
    font-weight: 300;
    padding: 0 36px 0 12px;
    width: 100%;
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
}

.form-button {
  position: absolute;
  right: 4px;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>