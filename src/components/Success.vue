<template>
  <div class="success">
    <h2 class="title">спасибо</h2>
    <p class="txt">Ваша заявка успешно отправлена.<br>Представитель дилера свяжется с&nbsp;вами в&nbsp;ближайшее время для уточнения деталей.</p>
    <button class="ni-button" type="button" @click="reload">
      Вернуться
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" class="ni-button-icon">
        <path
            d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "Success",
  methods:{
    reload(){
      window.location.reload();
    }
  }
}
</script>

<style scoped lang="scss">
.success {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .ni-button {
    align-self: stretch;
    @media (min-width: 768px) {
      width: 220px;
      align-self: center;
    }
  }
}

.title {
  font-weight: 300;
  text-transform: uppercase;
  font-size: 28px;
  line-height: 34px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 58px;
  }
}
.txt{
  line-height: 22px;
  text-align: center;
  font-weight: 300;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
}
</style>
