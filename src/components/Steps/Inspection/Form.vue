<template>
  <div class="form">
    <p class="title">Доступные предложения для вашего автомобиля</p>
    <ul class="options">
      <li class="options-item">
        <v-collapse-wrapper>
          <div class="collapse-header" v-collapse-toggle>
            <div class="options-header">
              <el-checkbox class="options-checkbox"/>
              <p class="txt">
                <span class="toggler">Регулярное техническое обслуживание</span><sup>1) 2)</sup>
                <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
              </p>
              <span class="price">11 377,93 руб.</span>
            </div>
          </div>
          <div class="collapse-content" v-collapse-content>
            <h3>В данное техническое обслуживание (45 т.км) входят следующие Запасные части:</h3>
            <div style='overflow-x:auto'>
              <table class="calc-parts-table" id="sparesTable" border="1">
                <tbody>
                <tr>
                  <th>Описание</th>
                  <th>Кол-во</th>
                  <th>Сумма (руб.)</th>
                </tr>
                <tr>
                  <td>УПЛОТНИТЕЛЬНОЕ КОЛЬЦО</td>
                  <td style="text-align: center;">1</td>
                  <td style="text-align: right;">75,84</td>
                </tr>
                <tr>
                  <td>МАСЛЯНЫЙ ФИЛЬТР</td>
                  <td style="text-align: center;">1</td>
                  <td style="text-align: right;">752,64</td>
                </tr>
                <tr>
                  <td>ФИЛЬТР ВОЗДУШНЫЙ</td>
                  <td style="text-align: center;">1</td>
                  <td style="text-align: right;">2 956,80</td>
                </tr>
                <tr>
                  <td>СВЕЧИ ЗАЖИГАНИЯ</td>
                  <td style="text-align: center;">4</td>
                  <td style="text-align: right;">192,00</td>
                </tr>
                <tr>
                  <td>НАБОР АВТОХИМИИ ДЛЯ ТЕХНИЧЕСКОГО ОБСЛУЖИВАНИЯ</td>
                  <td style="text-align: center;">1</td>
                  <td style="text-align: right;">1 256,53</td>
                </tr>
                <tr>
                  <td>МАСЛО МОТОРНОЕ</td>
                  <td style="text-align: center;">2,7</td>
                  <td style="text-align: right;">1 422,20</td>
                </tr>
                <tr>
                  <td>ЖИДКОСТЬ ТОРМОЗНАЯ</td>
                  <td style="text-align: center;">1</td>
                  <td style="text-align: right;">60,60</td>
                </tr>
                <tr>
                  <td style="text-align: right; font-weight: bold;">Итого (запчасти)</td>
                  <td></td>
                  <td style="text-align: right; font-weight: bold;">6 716,61</td>
                </tr>
                </tbody>
              </table>
            </div>
            <h3>Проверочные работы:</h3>
            <ul>
              <li>Система охлаждения двигателя</li>
              <li>Приводной ремень</li>
              <li>Свечи зажигания</li>
              <li>Воздушный фильтр</li>
              <li>Направление света фар</li>
              <li>Рабочая тормозная система, стояночная тормозная система и сцепление</li>
              <li>Тормозная система и гидравлический привод сцепления, рабочая жидкость</li>
              <li>Жидкость и шланги гидроусилителя рулевого управления</li>
              <li>Трансмиссионное масло механической коробки передач</li>
              <li>Система выпуска отработавших газов двигателя</li>
              <li>Тормозные колодки, диски, барабаны и другие компоненты тормозных механизмов</li>
              <li>Механизм и привод рулевого управления, детали осей и подвески, приводные валы</li>
              <li>Рабочая жидкость автоматической коробки передач</li>
            </ul>
          </div>
        </v-collapse-wrapper>
      </li>
      <li class="options-item">
        <div class="options-header">
          <el-checkbox class="options-checkbox"/>
          <p class="txt">
            <span class="toggler">Запасные части «Преимущество 3+» включая замену для а/м старше 3-х лет</span>
            <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
          </p>
          <span class="price">11 377,93 руб.</span>
        </div>
      </li>
      <li class="options-item">
        <div class="options-header">
          <el-checkbox class="options-checkbox"/>
          <p class="txt">
            <span class="toggler">«Преимущество 3+» : Запасные части для а/м старше 3х лет</span>
            <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
          </p>
          <span class="price">11 377,93 руб.</span>
        </div>
      </li>
      <li class="options-item">
        <div class="options-header">
          <el-checkbox class="options-checkbox"/>
          <p class="txt">
            <span class="toggler">Комплексная проверка автомобиля</span>
            <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
          </p>
          <span class="price">11 377,93 руб.</span>
        </div>
      </li>
      <li class="options-item">
        <div class="options-header">
          <el-checkbox class="options-checkbox"/>
          <p class="txt">
            <span class="toggler">Масляный сервис</span>
            <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
          </p>
          <span class="price">11 377,93 руб.</span>
        </div>
      </li>
      <li class="options-item">
        <div class="options-header">
          <el-checkbox class="options-checkbox"/>
          <p class="txt">
            <span class="toggler">Шинная кампания</span>
            <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
          </p>
          <span class="price">11 377,93 руб.</span>
        </div>
      </li>
      <li class="options-item">
        <div class="options-header">
          <el-checkbox class="options-checkbox"/>
          <p class="txt">
            <span class="toggler">Кампания по очистке кондиционера</span>
            <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
          </p>

          <span class="price">11 377,93 руб.</span>
        </div>
      </li>
      <li class="options-item">
        <v-collapse-wrapper>
          <div class="collapse-header" v-collapse-toggle>
            <div class="options-header">
              <el-checkbox class="options-checkbox"/>
              <p class="txt">
                <span class="toggler">Контракт Nissan сервис 3+</span>
                <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
              </p>

              <span class="price">11 377,93 руб.</span>
            </div>
          </div>
          <div class="collapse-content" v-collapse-content>
            <div>
              <el-radio-group v-model="radio">
                <el-radio :label="3">Программа Ниссан Сервис 3+ : продление действующего контракта</el-radio>
                <el-radio :label="6">Программа Ниссан Сервис 3+ : первичная покупка</el-radio>
              </el-radio-group>
            </div>
          </div>
        </v-collapse-wrapper>
      </li>
      <li class="options-item">
        <div class="options-header">
          <el-checkbox class="options-checkbox"/>
          <p class="txt">
            <span class="toggler">Сервисные пакеты</span>
            <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
          </p>

          <span class="price">11 377,93 руб.</span>
        </div>
      </li>
      <li class="options-item">
        <div class="options-header">
          <el-checkbox class="options-checkbox"/>
          <p class="txt">
            <span class="toggler">Слесарный ремонт и диагностика</span>
            <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
          </p>
          <span class="price">11 377,93 руб.</span>
        </div>
      </li>
      <li class="options-item">
        <div class="options-header">
          <el-checkbox class="options-checkbox"/>
          <p class="txt">
            <span class="toggler">Другие виды работ</span>
            <span class="options-tooltip tooltip" v-tooltip="'тест'">?</span>
          </p>
          <span class="price">11 377,93 руб.</span>
        </div>
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
import Vue from 'vue';

import VueCollapse from 'vue2-collapse'
Vue.use(VueCollapse);

import ElCheckbox from 'element-ui/packages/checkbox';
import ElRadio from 'element-ui/packages/radio';
import ElRadioGroup from 'element-ui/packages/radio-group';

export default {
  name: "InspectionForm",
  components: {
    ElRadio,
    ElRadioGroup,
    ElCheckbox
  },
  data() {
    return {
      radio: '0',
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
    margin-top: 16px;
  }
  @media (min-width: 1024px) {
    padding: 0 24px;
    margin-top: 31px;
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
  @media (min-width: 1024px) {
    margin-bottom: 29px;
  }
}

.toggler {
  font-weight: 300;
  text-decoration: underline;
  text-align: left;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    line-height: 20px;
  }
}

.vc-collapse {
  flex: 1;
}

.options {
  list-style: none;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    margin-bottom: 21px;
  }

  .options-header {
    padding-left: 34px;
    position: relative;
    @media (min-width: 768px) {
      padding-left: 39px;
      display: flex;
      justify-content: space-between;
    }

  }

  .options-item {
    border-bottom: 1px solid #EFEFEF;
    position: relative;

    padding-top: 10px;
    padding-bottom: 9px;
    @media (min-width: 768px) {
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
    top: 2px;
    @media (min-width: 768px) {
      left: -1px;
      top: 1px;
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

.v-collapse-content {
  display: none;

  h3 {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 12px;
    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 20px;
    }
    @media (min-width: 1024px) {
      margin-bottom: 23px;
    }
  }

  ul {
    li {
      font-weight: 300;
      font-size: 14px;
      line-height: 25px;
      list-style: none;
      margin-bottom: 9px;

      &:before {
        content: "—";
        margin-right: 3px;
      }

      @media (min-width: 768px) {
        line-height: 20px;
        margin-bottom: 12px;
      }
      @media (min-width: 1024px) {
        line-height: 14px;
        margin-bottom: 18px;
      }

    }
  }

  table {
    border: none;
    margin-bottom: 30px;
    width: 100%;
    @media (min-width: 768px) {
      margin-bottom: 20px;
    }
    @media (min-width: 1024px) {
      margin-bottom: 35px;
    }

    th, td {
      border-color: #EFEFEF;
      white-space: nowrap;
    }

    tr {
      th {
        font-weight: 400;
        padding: 8px 12px;

        &:first-child {
          padding-left: 12px;
        }

        &:last-child {
          padding-right: 30px;
        }
      }

      td {
        font-weight: 300;
        padding: 8px 12px;

        &:first-child {
          padding-left: 12px;
        }

        &:last-child {
          padding-right: 30px;
        }
      }
    }
  }

  .el-radio-group {

  }

  .el-radio {
    margin-bottom: 26px;
  }
}

.v-collapse-content-end {
  display: block;
  padding-top: 24px;
  @media (min-width: 768px) {
    padding-top: 29px;
  }
  @media (min-width: 768px) {
    padding-top: 12px;
  }
}

</style>
