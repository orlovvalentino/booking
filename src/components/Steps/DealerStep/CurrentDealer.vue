<template>
  <div class="dealer">
    <div class="dealer-top">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 74">
        <g filter="url(#filter0_d)" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M58 6H10v48h18.355l5.959 6 5.958-6H58V6z" :fill="iconColor"/>
          <path
              d="M36.974 30.824a2.99 2.99 0 01-.19.01H33.1v.847h3.743c.032 0 .247-.003.296-.007.764-.068 1.112-.697 1.112-1.258 0-.567-.361-1.174-1.052-1.242-.137-.013-.246-.013-.302-.013l-.01.075v-.075h-2.435a1.35 1.35 0 01-.271-.022.357.357 0 01-.265-.358.37.37 0 01.27-.358c.06-.019.122-.019.256-.019h3.532v-.84h-3.591c-.153 0-.262.006-.358.018a1.185 1.185 0 00-1.044 1.199c0 .508.321 1.103 1.031 1.205.128.02.309.016.387.016h2.382c.044 0 .15.003.175.006.267.038.361.237.361.411a.406.406 0 01-.343.405zM29.998 30.824c-.028.003-.144.01-.19.01h-3.685v.847h3.744c.03 0 .246-.003.296-.007.763-.068 1.112-.697 1.112-1.258 0-.567-.362-1.174-1.056-1.242-.137-.013-.246-.013-.302-.013l-.01.075v-.075h-2.435a1.35 1.35 0 01-.271-.022.357.357 0 01-.265-.358.37.37 0 01.27-.358c.06-.019.122-.019.256-.019h3.532v-.84H27.41c-.152 0-.261.006-.358.018a1.184 1.184 0 00-1.043 1.199c0 .508.32 1.103 1.03 1.205.128.02.31.016.387.016h2.383c.046 0 .152.003.174.006.268.038.361.237.361.411a.405.405 0 01-.345.405zM24.198 27.544h-.925v4.158h.925v-4.158zM21.224 31.702v-4.158h-.928v3.1l-3.084-3.1H16.02v4.158h.925v-3.117l3.108 3.117h1.171zM51.055 27.544v3.1l-3.086-3.1h-1.193v4.158h.928v-3.117l3.105 3.117h1.171v-4.158h-.925zM43.493 30.173h-2.09l1.047-1.67 1.043 1.67zm-1.544-2.629l-2.614 4.158h1.125l.464-.74h3.05l.463.74h1.121l-2.613-4.158h-.996zM21.171 25.184c1.869-5.42 7.027-9.06 12.832-9.06 5.809 0 10.967 3.64 12.832 9.06l.019.043h4.086v-.486l-.059-.006-1.641-.19c-1.047-.121-1.271-.58-1.554-1.162l-.069-.14c-2.457-5.198-7.802-8.555-13.614-8.555-5.812 0-11.153 3.357-13.608 8.555l-.068.14c-.283.58-.508 1.04-1.554 1.162l-1.642.19-.059.006v.486h4.087l.012-.043zM46.9 34.023h-.046l-.016.043c-1.868 5.42-7.023 9.06-12.832 9.06-5.808 0-10.963-3.643-12.832-9.063l-.015-.043h-4.087v.486l.06.006 1.638.19c1.05.121 1.27.58 1.554 1.162l.068.14c2.455 5.198 7.796 8.559 13.608 8.559h.003c5.812 0 11.154-3.358 13.608-8.553l.068-.14c.284-.58.508-1.04 1.554-1.162 0 0 1.54-.177 1.642-.19l.06-.006v-.486h-.066c-.408-.003-3.623-.003-3.968-.003z"
              fill="#fff"/>
        </g>
        <defs>
          <filter id="filter0_d" x="0" y="0" width="68" height="74" filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="5"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
        </defs>
      </svg>
      <p class="dealer-name">{{suggestedName }}</p>
    </div>
    <div class="description">
      <div class="address">
        <p class="address-label dealer-title">Адрес</p>
        <p class="address-txt">{{ city }}, {{ addressLine }}</p>
        <p class="address-txt"><a :href="'tel:'+phone">Телефон: {{ phone }}</a></p>
        <p class="address-txt"><a class="web" :href="website" target="_blank">Веб-сайт</a></p>
      </div>
      <div class="hours">
        <p class="hours-title dealer-title">Время работы</p>
        <p class="hours-txt">{{ openingHoursText }}</p>
      </div>
      <div class="price">
        <p class="price-title dealer-title">Стоимость ТО</p>
        <p class="price-value">11 377,93 руб.</p>
        <button class="ni-button" type="button" @click="$emit('on-next')">
          подробнее
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" class="ni-button-icon">
            <path
                d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "CurrentDealer",
  props: {
    iconColor: {
      type: [String],
      default: '#000'
    },
    currentDealer: {
      type: [Object,Boolean],
      default: () => ({})
    }
  },
  data() {
    return {
      suggestedName: this.currentDealer.suggestedName ?? null,
      addressLine: this.currentDealer.address.addressLine1 ?? null,
      city: this.currentDealer.address.city ?? null,
      phone:  this.currentDealer.contact.phone ?? null,
      website: this.currentDealer.contact.website ?? null,
      openingHoursText: this.currentDealer.openingHours.openingHoursText ?? null
    }
  }
}
</script>

<style lang="scss" scoped>
.dealer {
  border: 1px solid #EFEFEF;
  padding: 15px;
  @media (min-width: 768px) {
    padding: 21px 24px 0;
  }

  &-top {
    display: flex;
    margin-bottom: 8px;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }

    svg {
      transform: translate(-9px, -3px);
      width: 55px;
      flex: none;
      @media (min-width: 768px) {
        transform: translate(-11px, -6px);
        width: 67px;
      }
    }
  }

  &-name {
    font-size: 18px;
    line-height: 20px;
    font-weight: 300;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 48px;
    }
  }

  &-title {
    font-size: 12px;
    line-height: 20px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
}

.description {
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1024px) {
    margin-bottom: 9px;
  }
}

.address {
  margin-bottom: 16px;
  @media (min-width: 768px) {
    width: 170px;
    margin-right: 49px;
  }
  @media (min-width: 1024px) {
    width: 289px;
    margin-right: 60px;
  }

  &-label {
  }

  &-txt {
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 5px;

    a {
      color: #C3002F;
    }

    .web {
      text-decoration: underline;
      color: #000;
    }
  }
}

.hours {
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 13px;
  @media (min-width: 768px) {
    width: 133px;
  }

  &-title {

  }

  &-txt {
    font-weight: 300;
  }
}

.price {
  @media (min-width: 768px) {
    width: 240px;
    margin-left: auto;
  }

  &-title {
    margin-bottom: 0;
  }

  &-value {
    font-size: 24px;
    line-height: 30px;
    color: #C3002F;
    font-weight: 300;
    margin-bottom: 18px;
    text-transform: uppercase;
  }

  button {
    width: 100%;
  }
}
</style>