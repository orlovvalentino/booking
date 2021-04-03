<template>
  <div>
    <div class="cars-grid" ref="carsGrid">
      <div class="car" v-for="(car, i) in cars" :key="car.model_name" :style="'order:'+ ++i * 10 "
           @click="bubblingClick">
        <div class="img-wrap">
          <img class="img" :alt="car.model_name"
               :src="'https://customer360.ru/CarMaintenance/CarPicture/'+car.models[0].id" loading="lazy">
        </div>
        <h3 class="car-name">{{ car.model_name }}</h3>
        <ul class="models">
          <li class="model" v-for="model in car.models">
            <button class="model-link" type="button" @click="choiceModel(model.id,i,$event)">{{ model.model_code }}
              {{ model.year_start }}-{{ model.year_end }}
            </button>
          </li>
        </ul>
      </div>
      <car-options @on-next="$emit('on-next')"
                   v-if="modificationId"
                   :modificationId="modificationId"
                   :current-car-index="currentCarIndexInGrid"/>
    </div>
  </div>
</template>

<script>

export default {
  name: "CarsGrid",
  components: {
    CarOptions: () => import("./CarOptions")
  },
  data() {
    return {
      cars: [],
      modificationId: '',
      currentCarIndexInGrid: null
    }
  },
  mounted() {
    this.$axios.get('json/cars.json', {baseURL: window.location.origin})
        .then((response) => {
          this.cars = response.data;
        })
        .catch((err) => {
          console.log(err)
        });
  },
  methods: {
    choiceModel(id, index, event) {
      this.modificationId = +id;
      this.currentCarIndexInGrid = index;
      this.$refs.carsGrid.querySelectorAll('.car').forEach((el) => {
        el.classList.remove('active')
      });

      this.$emit('on-modification', this.getModelData(id));
    },
    bubblingClick(event) {
      event.currentTarget.classList.add('active');
    },
    getModelData(id) {
      let model;
      this.cars.forEach((item) => {
        let i = item.models.filter((i) => {
          return i.id == id;
        })
        if (i.length) {
          model = i[0];
          model.model_name = item.model_name;
        }
      })
      return model;
    }
  }
}
</script>

<style scoped lang="scss">
.cars-grid {
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    &::after {
      content: "";
      width: calc(25% - 18px);
      order: 999;
    }
  }
}

.car {
  height: 320px;
  border: 1px solid #EFEFEF;
  padding: 0 15px;
  box-sizing: border-box;
  margin-bottom: 20px;

  &.active {
    box-shadow: 0 0 0 2px #C3002F;
    border-color: #fff;
    @media (min-width: 768px) {
      margin-bottom: 30px;
    }

  }

  @media (min-width: 768px) {
    width: calc(50% - 10px);
  }
  @media (min-width: 1024px) {
    width: calc(25% - 18px);
    margin-bottom: 20px;
  }
}

.car-name {
  font-size: 18px;
  line-height: 40px;
  font-weight: 700;
}

.img-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  @media (min-width: 1024px) {
    flex-direction: column;
  }
}

.img {
  height: 100%;
  width: auto;
  @media (min-width: 1024px) {
    flex: none;
    height: auto;
    width: 100%;
  }
}

.models {
  list-style: none;
  margin: 0;
  padding: 0;
}

.model-link {
  font-weight: 300;
  font-size: 14px;
  line-height: 30px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
