<template>
  <form @submit.prevent="submit" class="form">
    <p class="title">ваши контактные данные</p>
    <div class="columns-wrapper">
      <div class="column-one">
        <fieldset class="ni-fieldset" :class="{ 'fieldset--error': $v.name.$error }">
          <legend class="ni-legend">Имя</legend>
          <input class="ni-input" v-model="$v.name.$model">
          <div class="error" v-if="!$v.name.required">это поле обязательно для заполнения</div>
        </fieldset>
        <fieldset class="ni-fieldset" :class="{ 'fieldset--error': $v.family.$error }">
          <legend class="ni-legend">Фамилия</legend>
          <input class="ni-input" v-model="$v.family.$model">
          <div class="error" v-if="!$v.family.required">это поле обязательно для заполнения</div>
        </fieldset>
        <fieldset class="ni-fieldset" :class="{ 'fieldset--error': $v.email.$error }">
          <legend class="ni-legend">e-mail</legend>
          <input class="ni-input" v-model="$v.email.$model">
          <div class="error" v-if="!$v.email.required">это поле обязательно для заполнения</div>
          <div class="error" v-if="!$v.email.email">введите правильный e-mail</div>
        </fieldset>
        <fieldset class="ni-fieldset" :class="{ 'fieldset--error': $v.phone.$error }">
          <legend class="ni-legend">Телефон</legend>
          <input class="ni-input" v-model="$v.phone.$model" placeholder="+7">
          <div class="error" v-if="!$v.phone.required">это поле обязательно для заполнения</div>
        </fieldset>
      </div>
      <div class="column-two">
        <div class="timevisit-block">
          <fieldset class="ni-fieldset" :class="{ 'fieldset--error': $v.dateVisit.$error }">
            <legend class="ni-legend">Дата</legend>
            <datepicker
                bootstrapStyling
                v-model="$v.dateVisit.$model"
                :format="DatePickerFormat"
                :language="language"
                :disabled-dates="disabledDates"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" class="vdp-datepicker-icon">
              <path
                  d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
            </svg>
            <div class="error" v-if="!$v.dateVisit.required">это поле обязательно для заполнения</div>
          </fieldset>
          <fieldset class="ni-fieldset">
            <legend class="ni-legend">Время</legend>

            <vue-timepicker hide-clear-button v-model="timeVisit"
                            :hour-range="[[9,20]]"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" class="vdp-datepicker-icon">
              <path
                  d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
            </svg>
          </fieldset>
          <p class="timevisit-block-note">Точные дату и время визита с вами согласует сотрудник дилерского центра</p>
        </div>
        <div class="vincar-block">
          <fieldset class="ni-fieldset" :class="{ 'fieldset--error': $v.vincar.$error }">
            <legend class="ni-legend">vin номер вашего автомобиля</legend>
            <input class="ni-input" v-model="$v.vincar.$model">
            <div class="error" v-if="!$v.vincar.required">это поле обязательно для заполнения</div>
          </fieldset>
          <p class="timevisit-block-note">Для осуществления записи необходимо введение корректного VIN номера</p>
        </div>
      </div>
      <div class="column-three">
        <fieldset class="ni-fieldset ni-fieldset-textarea">
          <legend class="ni-legend">комментарии</legend>
          <textarea v-model="comment" class="ni-textarea" placeholder="Ваш комментарий"/>
        </fieldset>
      </div>
    </div>

    <div class="confirm-note">
      <fieldset class="ni-fieldset" :class="{ 'fieldset--error': $v.userConfirm.$error }">
        <el-checkbox class="options-checkbox" v-model="$v.userConfirm.$model">Я подтверждаю, что введение дальнейшей
          информации означает мое согласие на
          <a href="#">обработку персональных</a> данных и на звонок представителя дилерского центра Nissan.
        </el-checkbox>
        <div class="error" v-if="$v.userConfirm.$error">это поле обязательно для заполнения</div>
      </fieldset>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <button class="bottom-button" type="button">отправить на почту</button>
        <button class="bottom-button" type="button">сохранить в pdf</button>
        <button class="bottom-button" type="button">печатать</button>
      </div>
      <div class="bottom-right">
        <button type="submit" class="ni-button">отправить заявку
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" class="ni-button-icon">
            <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
          </svg>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import {required, email} from 'vuelidate/lib/validators'
import $ from "jquery";
import Datepicker from 'vuejs-datepicker';
import ru from "vuejs-datepicker/dist/locale/translations/ru";
import VueTimepicker from 'vue2-timepicker'
import ElCheckbox from 'element-ui/packages/checkbox';

// CSS
import 'vue2-timepicker/dist/VueTimepicker.css'


export default {
  name: "Contacts",
  components: {
    Datepicker,
    VueTimepicker,
    ElCheckbox
  },
  data() {
    return {
      DatePickerFormat: 'dd.MM.yyyy',
      disabledDates: {
        to: new Date(new Date().setDate(new Date().getDate() - 1))
      },
      name: null,
      family: null,
      email: null,
      phone: null,
      dateVisit: new Date(),
      timeVisit: '09:00',
      vincar: null,
      comment: null,
      userConfirm: null,
      submitStatus: null,
      language: ru
    }
  },

  validations: {
    name: {
      required
    },
    family: {
      required
    },
    email: {
      required,
      email
    },
    phone: {
      required
    },
    dateVisit: {
      required
    },
    vincar: {
      required
    },
    userConfirm: {
      required
    }
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
    }
  }
}
</script>

<style lang="scss">
.vue__time-picker {
  display: block;
  width: 100%;
  height: 100%;

  input.display-time {
    border: none;
    width: 100%;
    height: 100%;
    padding: 0 16px;
  }
}

.el-checkbox__label {
  white-space: normal;
  text-decoration: none;
  line-height: 22px;
  @media (min-width: 768px) {
    padding-left: 19px;
    line-height: 20px;
  }
}

.el-checkbox__inner {
  right: -2px;
  top: 2px;
}
</style>
<style scoped lang="scss">
.form {
  margin-top: 20px;
  padding: 0 22px;
  @media (min-width: 768px) {
    padding-bottom: 34px;
  }
  @media (min-width: 1024px) {
    padding-bottom: 10px;
  }

  .ni-fieldset {
    margin-bottom: 34px;
  }
}

.title {
  line-height: 18px;
  text-transform: uppercase;
  margin-bottom: 34px;
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
}

.timevisit-block {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 34px;

  .ni-fieldset {
    flex: 1;
    @media (max-width: 767px) {
      margin-top: 0;
    }
    margin-bottom: 0;

    &:first-child {
      margin-right: 20px;
      margin-bottom: 8px;
    }
  }

  &-note {
    width: 100%;
    font-weight: 300;
    font-size: 11px;
    line-height: 15px;
  }
}

.vincar-block {
  margin-bottom: 33px;

  .ni-fieldset {
    margin-bottom: 8px;
  }
}

.columns-wrapper {
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }

  .column-one {
    @media (min-width: 768px) {
      flex: 1;
      margin-right: 50px;
    }
    @media (min-width: 1024px) {
      margin-right: 0;
    }

    .ni-fieldset:last-child {
      @media (min-width: 768px) {
        margin-bottom: 21px;
      }
    }
  }

  .column-two {
    @media (min-width: 768px) {
      flex: 1;
    }
    @media (min-width: 1024px) {
      margin-left: 60px;
      margin-right: 60px;
    }
  }

  .column-three {
    @media (min-width: 768px) {
      width: 100%;
      .ni-fieldset.ni-fieldset-textarea {
        margin-bottom: 29px
      }
    }
    @media (min-width: 1024px) {
      flex: 1;
      width: auto;
    }
  }
}

.confirm-note {
  margin-bottom: 30px;
  @media (min-width: 1024px) {
    margin-top: 9px;
  }
  .ni-fieldset{
    border: none;
  }
}

.bottom {
  &-button {
    letter-spacing: 0.01em;
    text-transform: uppercase;
    border: 2px solid #000;
    height: 48px;
    padding: 0 30px;
    background: none;
    line-height: 44px;
    width: 100%;
    margin-bottom: 20px;
    white-space: nowrap;
    @media (min-width: 768px) {
      height: 44px;
      padding: 0 20px;
      line-height: 40px;
      flex: 1;
      width: 210px;
    }
    @media (min-width: 1024px) {
      width: auto;
      flex: none;
      padding: 0 30px;
      &:nth-child(2n) {
        margin: 0 21px;
      }
    }
  }

  .ni-button {
    @media (max-width: 767px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      margin-left: auto;
      width: 210px;
    }
    @media (min-width: 1024px) {
      width: 240px;
    }
  }

  &-left {
    display: flex;
    justify-content: space-between;
  }

  &-right {
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
}
</style>
