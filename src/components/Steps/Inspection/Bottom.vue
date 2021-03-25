<template>
  <div class="price">
    <div class="price-left">
      <p class="price-title">Стоимость ТО</p>
      <p class="price-value">11 377,93 руб.</p>
    </div>
    <div class="price-right">
      <button class="ni-button" type="button" @click="$emit('on-next')">
        отправить заявку
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" class="ni-button-icon">
          <path
              d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InspectionBottom"
}
</script>

<style scoped lang="scss">
.price {
  @media (min-width: 768px) {
    display: flex;
  }

  &-left {
    @media (min-width: 768px) {
      margin-left: auto;
      margin-right: 44px;
      text-transform: uppercase;
    }
  }

  &-right {
    @media (min-width: 768px) {
      width: 240px;
    }
  }

  &-title {
    text-transform: uppercase;
    margin-bottom: 0;
    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 20px;
    }
  }

  &-value {
    font-size: 24px;
    line-height: 30px;
    color: #C3002F;
    font-weight: 300;
    margin-bottom: 18px;
    text-transform: uppercase;
    @media (min-width: 768px) {
      line-height: 29px;
    }
  }

  button {
    width: 100%;
  }
}
</style>