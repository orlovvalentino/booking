<template>
  <div class="form">
    <p class="title">Доступные предложения для вашего автомобиля</p>
    <ul class="options">
      <li>
        <custom-checkbox value="foo" class="options-checkbox"/>
        <p class="txt">
          <span class="toggler">Регулярное техническое обслуживание</span><sup>1) 2)</sup>
          <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
        </p>
        <span class="price">11 377,93 руб.</span>
      </li>
      <li>
        <custom-checkbox value="foo" class="options-checkbox"/>
        <p class="txt">
          <span class="toggler">Запасные части «Преимущество 3+» включая замену для а/м старше 3-х лет</span>
          <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
        </p>
        <span class="price">11 377,93 руб.</span>
      </li>
      <li>
        <custom-checkbox value="foo" class="options-checkbox"/>
        <p class="txt">
          <span class="toggler">«Преимущество 3+» : Запасные части для а/м старше 3х лет</span>
          <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
        </p>
        <span class="price">11 377,93 руб.</span>
      </li>
      <li>
        <custom-checkbox value="foo" class="options-checkbox"/>
        <p class="txt">
          <span class="toggler">Комплексная проверка автомобиля</span>
          <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
        </p>
        <span class="price">11 377,93 руб.</span>
      </li>
      <li>
        <custom-checkbox value="foo" class="options-checkbox"/>
        <p class="txt">
          <span class="toggler">Масляный сервис</span>
          <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
        </p>
        <span class="price">11 377,93 руб.</span>
      </li>
      <li>
        <custom-checkbox value="foo" class="options-checkbox"/>
        <p class="txt">
          <span class="toggler">Шинная кампания</span>
          <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
        </p>
        <span class="price">11 377,93 руб.</span>
      </li>
      <li>
        <custom-checkbox value="foo" class="options-checkbox"/>
        <p class="txt">
          <span class="toggler">Кампания по очистке кондиционера</span>
          <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
        </p>

        <span class="price">11 377,93 руб.</span>
      </li>
      <li>
        <custom-checkbox value="foo" class="options-checkbox"/>
        <p class="txt">
          <span class="toggler">Контракт Nissan сервис 3+</span>
          <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
        </p>

        <span class="price">11 377,93 руб.</span>
      </li>
      <li>
        <custom-checkbox value="foo" class="options-checkbox"/>
        <p class="txt">
          <span class="toggler">Сервисные пакеты</span>
          <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
        </p>

        <span class="price">11 377,93 руб.</span>
      </li>
      <li>
        <custom-checkbox value="foo" class="options-checkbox"/>
        <p class="txt">
          <span class="toggler">Слесарный ремонт и диагностика</span>
          <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
        </p>
        <span class="price">11 377,93 руб.</span>
      </li>
      <li>
        <custom-checkbox value="foo" class="options-checkbox"/>
        <p class="txt">
          <span class="toggler">Другие виды работ</span>
          <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
        </p>
        <span class="price">11 377,93 руб.</span>
      </li>
    </ul>
    <p class="title">работы и услуги</p>
    <ul class="services">
      <li>
        <p class="txt">Техническая мойка автомобиля</p>
        <p class="price">Бесплатно</p>
      </li>
      <li>
        <p class="txt">Запасные части Преимущество 3+ включая замену</p>
        <p class="price">Бесплатно</p>
      </li>
    </ul>
  </div>
</template>

<script>
import CustomCheckbox from "@/components/Steps/Inspection/checkbox";

export default {
  name: "InspectionForm",
  components: {
    CustomCheckbox
  },
  data() {
    return {
      MySelectedValues: []
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  padding: 0;
  margin-top: 20px;
  @media (min-width: 768px) {
    padding: 0 15px;
    margin-top: 22px;
  }
  @media (min-width: 1024px) {
    padding: 0 24px;
  }
}

.title {
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  margin-bottom: 19px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
}

.toggler {
  font-weight: 300;
  text-decoration: underline;
  text-align: left;
  &:hover {
    text-decoration: none;
  }
  @media (min-width: 768px) {
    line-height: 20px;
  }
}

.options {
  list-style: none;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    margin-bottom: 21px;
  }

  li {
    border-bottom: 1px solid #EFEFEF;
    position: relative;
    padding-left: 34px;
    padding-top: 10px;
    padding-bottom: 9px;
    @media (min-width: 768px) {
      padding-left: 39px;
      padding-top: 12px;
      display: flex;
      justify-content: space-between;
    }
    @media (min-width: 1024px) {
      padding-bottom: 12px;
    }
    &:first-child {
      border-top: 1px solid #EFEFEF;
    }

    sup {
      color: #C3002F;
      margin-left: 5px;
      font-size: 10px;
    }

    .txt {
      line-height: 22px;
      margin-bottom: 4px;
      @media (min-width: 1024px) {
        margin-bottom: 0;
      }
    }
  }

  &-tooltip {
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 12px;
    line-height: 20px;
    margin-left: 9px;
  }

  .options-checkbox {
    position: absolute;
    left: 2px;
    top: 12px;
    @media (min-width: 768px) {
      left: 1px;
      top: 13px;
    }
    @media (min-width: 1024px) {
      left: -1px;
    }
  }

  .price {
    display: block;
    color: #C3002F;
    line-height: 22px;
    font-weight: 300;
  }
}

.services {
  list-style: none;
  margin-bottom: 19px;
  li {
    border-bottom: 1px solid #EFEFEF;
    font-weight: 300;
    padding-top: 10px;
    padding-bottom: 2px;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 14px;
      padding-bottom: 11px;
    }

    &:first-child {
      border-top: 1px solid #EFEFEF;
    }

    .txt {
      line-height: 22px;
      text-decoration: underline;
      margin-bottom: 4px;
      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }

    .price {
      color: #C3002F;
      margin-bottom: 10px;
      @media (min-width: 768px) {
        margin-bottom: 0;
        line-height: 19px;
        text-transform: lowercase;
      }
    }
  }
}

</style>