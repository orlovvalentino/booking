<template>
  <footer>
    <div id="nissan_global_footer" class="helios"></div>
  </footer>
</template>

<script>
export default {
  name: "FooterNissan",
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

<style scoped>

</style>