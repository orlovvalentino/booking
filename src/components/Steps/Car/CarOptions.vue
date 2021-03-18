<template>
  <form class="car-options" :style="'order: '+ setOrder" @submit.prevent="submit">
    <div class="car-options-left">
      <fieldset class="car-fieldset" :class="{ 'fieldset--error': $v.carModification.$error }">
        <legend class="car-legend">модификация</legend>
        <v-select v-model="$v.carModification.$model" label="Name" :options="carModifications" :clearable="false"/>
        <div class="error" v-if="!$v.carModification.required">это поле обязательно для заполнения</div>
      </fieldset>
      <fieldset class="car-fieldset" :class="{ 'fieldset--error': $v.dateSale.$error }">
        <legend class="car-legend">Год и месяц первичной продажи</legend>
        <datepicker :minimumView="'month'"
                    bootstrapStyling
                    v-model="$v.dateSale.$model"
                    :format="'MMMM yyyy'"
                    :language="language"></datepicker>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" class="vdp-datepicker-icon">
          <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
        </svg>
        <div class="error" v-if="!$v.dateSale.required">это поле обязательно для заполнения</div>
      </fieldset>
    </div>
    <div class="car-options-right">
      <fieldset class="car-slider">
        <legend class="car-slider-legend">пробег <span>{{ mileageValue }}</span></legend>
        <b-form-slider :step="100" :min="0" :max="1000000"
                       :value="mileageStart"
                       tooltip="hide"
                       ref="mySlider"
                       @change="changeSlider"></b-form-slider>

      </fieldset>
      <fieldset class="car-fieldset" :class="{ 'fieldset--error': $v.warrantySelected.$error }">
        <legend class="car-legend">автомобиль на гарантии?
          <span class="car-tooltip" v-tooltip="'Введите год и месяц первичной продажи вашего а/м или данные о начале гарантии из Вашей гарантийной книжки'">?</span>
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
import ru from "vuejs-datepicker/src/locale/translations/ru";
import $ from "jquery";
import wnumb from "wnumb";
import vSelect from 'vue-select';
import { required } from 'vuelidate/lib/validators'


import '../../../assets/styles/bootstrap-slider/bootstrap-slider.scss'
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
      desktop: window.matchMedia('(min-width: 1024px)'),
      tablet: window.matchMedia('(min-width: 768px)'),
      mq: 1, // 1-mobile; 2- tablet;3-desktop
      mileageStart:0,
      mileageValue: 0,
      mileage:0,
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
      carModification:'',
      language: ru,
      dateSale: '',
      submitStatus: null
    }
  },
  validations: {
    carModification: {
      required
    },
    dateSale:{
      required
    },
    warrantySelected:{
      required
    }
  },
  mounted() {
    this.screenCheck();
    this.getCarModifications();
    this.desktop.addEventListener('change', this.screenCheck);
    this.tablet.addEventListener('change', this.screenCheck);
    this.mileageValue = this.formatMileage.to(this.mileageStart);
  },
  methods: {
    submit(){
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          this.$emit('on-next');
        }, 500)
      }
      console.log(this.submitStatus);
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
      // this.mileage = e.newValue;
      this.mileageValue = this.formatMileage.to(e.newValue);
    },
    getCarModifications() {
      this.$axios.get('json/GetCarModifications.json', {baseURL: window.location.origin})
          .then((response) => {
            this.carModifications = response.data[this.modificationId];
          })
          .catch((err) => {
            console.log(err)
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
      this.warrantySelected = false;
      this.carModification = '';
      this.dateSale = '';
      this.mileageValue = this.formatMileage.to(this.mileageStart);
      this.mileage = 0;
      this.$refs.mySlider.slider.setValue(this.mileageStart);
      this.getCarModifications();
    }
  }
}
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
    &-bottom{
      width: 100%;
    }
  }

  &-fieldset {
    position: relative;
    border: 1px solid #000;
    height: 44px;
    margin-bottom: 20px;
    margin-top: 13px;
    .error{
      font-size: 10px;
      text-transform: lowercase;
      padding-left: 10px;
      color:#C3002F;
      display: none;
    }
    &.fieldset--error{
      border-color: #C3002F;
      .error{
        display: block;
      }
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

  &-legend {
    position: absolute;
    left: 8px;
    top: -14px;
    font-size: 10px;
    text-transform: uppercase;
    padding: 0 8px;
    background: #fff;
    line-height: 22px;
    z-index: 1;
    display: flex;
    align-items: center;
  }
  &-tooltip{
    border: none;
    border-radius: 50%;
    background-color: #EFEFEF;
    display: block;
    width: 16px;
    height: 16px;
    text-align: center;
    font-size: 10px;
    line-height: 16px;
  }
}

.vdp-datepicker-icon {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  fill: #C3002F;
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