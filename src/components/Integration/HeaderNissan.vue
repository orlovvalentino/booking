<template>
  <header>
    <div id="nissan_global_header" class="helios">

    </div>
  </header>
</template>

<script>

export default {
  name: "HeaderNissan",
  mounted() {
    let modernizr = document.createElement('script')
    modernizr.setAttribute('src', '//www-europe.nissan-cdn.net/content/dam/Nissan/header-footer/ru-RU/js/vendor/modernizr.min.js')
    document.head.appendChild(modernizr);

    let HeaderFooter = document.createElement('script')
    HeaderFooter.setAttribute('src', '//www-europe.nissan-cdn.net/content/dam/Nissan/header-footer/ru-RU/js/PACE-header-footer.min.js')
    document.head.appendChild(HeaderFooter)

  }
}
</script>

<style>
@import '//www-europe.nissan-cdn.net/content/dam/Nissan/header-footer/ru-RU/css/PACE-header-footer-v3.min.css';
</style>