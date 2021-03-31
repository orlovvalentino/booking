<template>
  <div>
    <h2 class="title">визит в сервис запланирован</h2>
    <p class="txt">Спасибо за запланированный визит в сервисный центр Nissan.</p>
    <p class="txt">Для уточнения деталей вашего визита с вами свяжется сотрудник в течение 3-х рабочих часов в
      соответствии с графиком работы выбранного Вами дилерского центра (по местному времени).</p>
    <p class="txt">Обратите внимание, что заявка может быть обработана только в случае предоставления Вами корректных
      данных и VIN
      номера Вашего автомобиля.</p>
    <div class="time">
      <p class="time-title">Время работы вашего дилерского центра:</p>
      <div class="schedule">
        <div class="schedule-item">
          <p class="day">ПН — СБ:</p>
          <p class="worktime">9:00 — 22:00</p>
        </div>
        <div class="schedule-item">
          <p class="day">ВС:</p>
          <p class="worktime">9:00 — 21:00</p>
        </div>
      </div>
    </div>
    <p class="txt">Поделитесь Вашими впечатлениями от использования системы Онлайн записи на сервис.</p>
    <p class="txt">Есть ли у Вас пожелания об улучшении работы системы?</p>
    <div class="bottom">
      <button class="ni-button" @click="$emit('on-done')">ДА</button>
      <button class="bottom-button" @click="$emit('on-done')">НЕТ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Visit Scheduled"
}
</script>

<style scoped lang="scss">
.title {
  font-size: 28px;
  line-height: 34px;
  font-weight: 300;
  position: relative;
  margin-bottom: 40px;
  text-transform: uppercase;

  &:before {
    content: '';
    width: 72px;
    height: 4px;
    background: #C3002F;
    position: absolute;
    left: 0;
    top: -20px;
  }

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 58px;
  }
}

.txt {
  line-height: 22px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
}

.time {
  margin: 40px 0;

  &-title {
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    margin-bottom: 16px;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
}

.schedule {
  font-size: 14px;
  line-height: 20px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }

  .day {
    width: 80px;
    @media (min-width: 768px) {
      width: 89px;
    }
  }

  .worktime {
    font-weight: 300;
  }

  &-item {
    display: flex;
  }
}

.bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  button {
    width: 135px;
    text-align: center;
    height: 44px;
    @media (min-width: 768px) {
      width: 120px;
    }
  }

  &-button {
    border: 2px solid #000000;
    background: none;
    border-radius: 0;
    line-height: 40px;
  }

  .ni-button {
    text-align: center;
    justify-content: center;
    @media (min-width: 768px) {
      margin-right: 24px;
    }
  }
}
</style>
