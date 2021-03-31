<template>
  <div class="current-model">
    <div class="img-wrap">
      <img class="img" :alt="model_name"
           :src="'https://customer360.ru/CarMaintenance/CarPicture/'+id" loading="lazy">
    </div>
    <div>
      <h2 class="car-name">{{ model_name }}</h2>
      <p class="car-subtitle">поколение</p>
      <p class="car-generation">{{ model_code }} {{ year_start }}-{{ year_end }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: {
    currentModification: {
      type: [Boolean, Object],
      default: {}
    },
    buttonText:{
      type: String,
      default:'qweqwe'
    }
  },
  data() {
    return {}
  },
  computed: {
    model_name() {
      return this.currentModification?.model_name
    },
    id() {
      return this.currentModification?.id
    },
    year_start() {
      return this.currentModification?.year_start
    },
    year_end() {
      return this.currentModification?.year_end
    },
    model_code() {
      return this.currentModification?.model_code
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  width: 193px;
}

.current-model {
  border-bottom: 1px solid #EFEFEF;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    display: flex;
    padding-bottom: 20px;
    border: none;
  }
  @media (min-width: 1024px) {
    margin-top: 0;
  }
}

.img-wrap {
  margin-bottom: 10px;
  @media (min-width: 768px) {
    margin-right: 23px;
    margin-bottom: 0;
  }
}

.car {
  &-name {
    font-size: 24px;
    font-weight: 300;
    line-height: 40px;
    margin-bottom: 10px;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 49px;
      margin-bottom: 11px;
    }
  }

  &-subtitle {
    font-size: 11px;
    line-height: 20px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &-generation {
    font-size: 18px;
    line-height: 30px;
    font-weight: 300;
    margin-bottom: 10px;
    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 34px;
    }
  }
}


</style>
