<template>
  <form class="car-options" :style="'order: '+ setOrder" @submit.prevent="submit">
    <div class="car-options-left">
      <fieldset class="ni-fieldset" :class="{ 'fieldset--error': $v.carModification.$error }">
        <legend class="ni-legend">модификация</legend>
        <v-select v-model="$v.carModification.$model" label="Name" :options="carModifications" :clearable="false"/>
        <div class="error" v-if="!$v.carModification.required">это поле обязательно для заполнения</div>
      </fieldset>
      <fieldset class="ni-fieldset" :class="{ 'fieldset--error': $v.dateSale.$error }">
        <legend class="ni-legend">Год и месяц первичной продажи</legend>
        <datepicker :minimumView="'month'"
                    bootstrapStyling
                    v-model="$v.dateSale.$model"
                    :format="'MMMM yyyy'"
                    :language="language"
                    :disabled-dates="disabledDates"
        ></datepicker>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" class="vdp-datepicker-icon">
          <path
              d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
        </svg>
        <div class="error" v-if="!$v.dateSale.required">это поле обязательно для заполнения</div>
      </fieldset>
    </div>
    <div class="car-options-right">
      <fieldset class="car-slider">
        <legend class="car-slider-legend">пробег <span>{{ mileageValue }}</span></legend>
        <b-form-slider :step="100" :min="0" :max="2000000"
                       :value="mileageStart"
                       tooltip="hide"
                       ref="mySlider"
                       @change="changeSlider"></b-form-slider>

      </fieldset>
      <fieldset class="ni-fieldset" :class="{ 'fieldset--error': $v.warrantySelected.$error }">
        <legend class="ni-legend">автомобиль на гарантии?
          <span class="car-tooltip tooltip"
                v-tooltip="'Введите год и месяц первичной продажи вашего а/м или данные о начале гарантии из Вашей гарантийной книжки'">?</span>
        </legend>
        <v-select v-model="$v.warrantySelected.$model" :options="warrantyOptions" :clearable="false"/>
        <div class="error" v-if="!$v.warrantySelected.required">это поле обязательно для заполнения</div>
      </fieldset>
    </div>
    <div class="car-options-bottom">
      <button class="ni-button car-options-button" type="submit">выберите дилера
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" class="ni-button-icon">
          <path
              d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
        </svg>
      </button>
    </div>
  </form>
</template>

<script>
import bFormSlider from 'vue-bootstrap-slider/es/form-slider';
import Datepicker from 'vuejs-datepicker';
import ru from './ru.js';

import wnumb from "wnumb";
import vSelect from 'vue-select';
import {required} from 'vuelidate/lib/validators';


import '../../../assets/styles/bootstrap-slider/bootstrap-slider.scss';
import "../../../assets/styles/vue-select/vue-select.scss";
import "../../../assets/styles/vdp-datepicked.scss";

export default {
  name: "CarOptions",
  props: {
    modificationId: {
      type: [Boolean, Number],
      default: ''
    },
    currentCarIndex: {
      type: Number
    }
  },
  components: {
    bFormSlider,
    vSelect,
    Datepicker
  },
  data() {
    return {
      disabledDates: {
        from: new Date(new Date().setDate(new Date().getDate() + 1))
      },
      desktop: window.matchMedia('(min-width: 1024px)'),
      tablet: window.matchMedia('(min-width: 768px)'),
      mq: 3, // 1-mobile; 2- tablet;3-desktop
      mileageStart: 0,
      mileageValue: 0,
      mileage: 0,
      formatMileage: wnumb({
        thousand: ' ',
        suffix: ' км'
      }),
      warrantyOptions: [
        {label: 'да', code: 'yes'},
        {label: 'нет', code: 'no'}
      ],
      warrantySelected: '',
      carModifications: [],
      carModification: '',
      language: ru,
      dateSale: '',
      submitStatus: null
    };
  },
  validations: {
    carModification: {
      required
    },
    dateSale: {
      required
    },
    warrantySelected: {
      required
    }
  },
  mounted() {
    this.screenCheck();
    this.getCarModifications();
    this.desktop.addListener(this.screenCheck);
    this.tablet.addListener(this.screenCheck);
    this.mileageValue = this.formatMileage.to(this.mileageStart);

  },
  methods: {
    submit() {
      console.log('submit!');
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING';
        setTimeout(() => {
          this.submitStatus = 'OK';
          this.$emit('on-next');
        }, 500);
      }
    },
    screenCheck() {
      if (this.tablet.matches) {
        this.mq = 2;
        if (this.desktop.matches) {
          this.mq = 3;
        }
      } else {
        this.mq = 1;
      }
    },
    changeSlider(e) {
      this.mileage = e.newValue;
      this.mileageValue = this.formatMileage.to(e.newValue);
    },
    getCarModifications() {
      this.$axios.get('json/GetCarModifications.json', {baseURL: window.location.origin})
          .then((response) => {
            this.carModifications = response.data[this.modificationId];
            if (this.carModifications.length === 1) {
              this.carModification = this.carModifications[0];
            }
          })
          .catch((err) => {
            console.log(err);
          });
    }
  },
  computed: {
    setOrder() {
      let order;
      switch (this.mq) {
        case 2:
          if (this.currentCarIndex % 2 == 0) {
            return this.currentCarIndex * 10 + 5;
          } else {
            return (this.currentCarIndex + 1) * 10 + 5;
          }
        case 3:
          if (this.currentCarIndex % 4 == 0) {
            return this.currentCarIndex * 10 + 5;
          } else {
            return (this.currentCarIndex + (4 - (this.currentCarIndex % 4))) * 10 + 5;
          }
        default:
          return this.currentCarIndex * 10 + 5;
      }
    }
  },
  watch: {
    modificationId() {
      this.warrantySelected = '';
      this.carModification = '';
      this.dateSale = '';
      this.mileageValue = this.formatMileage.to(this.mileageStart);
      this.mileage = 0;
      this.$refs.mySlider.slider.setValue(this.mileageStart);
      this.$v.$reset();
      this.getCarModifications();
    }
  }
};
</script>

<style scoped lang="scss">
//
.car {
  &-options {
    width: 290px;
    margin: 0 auto 40px;
    @media (min-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }

    &-right,
    &-left {
      display: flex;
      flex-direction: column;
      @media (min-width: 768px) {
        width: 320px;
        margin-bottom: 10px;
      }
    }

    &-left {
      @media (min-width: 768px) {
        margin-right: 60px;
      }
    }

    &-button {
      width: 290px;
      margin: 0 auto;
    }

    &-bottom {
      width: 100%;
    }
  }

  &-slider {
    border: none;
    position: relative;
    height: 44px;
    margin-bottom: 20px;
    padding-right: 9px;
    margin-top: 13px;

    &-legend {
      padding: 0 3px 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10px;
      text-transform: uppercase;
      width: 100%;

      span {
        font-size: 14px;
      }
    }
  }

  &-tooltip {
    width: 16px;
    height: 16px;
    font-size: 10px;
    line-height: 16px;
  }
}


.vs {
  &__dropdown-toggle {
    padding: 0;
    height: 100%;
    border: none;
  }

  &__selected-options {
    padding: 0;
  }

  &__selected {
    padding: 0 0 0 16px;
    margin: 0;
    border: none;
  }
}

</style>
