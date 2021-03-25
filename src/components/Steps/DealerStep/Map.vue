<template>
  <div>
    <div class="gmap-wrapper">
      <gmap-map
          class="gmap-container"
          ref="gmap"
          :center="center"
          @tilesloaded="mapLoaded"
          :zoom="7">
        <gmap-cluster
            :clusterClass="'customClasterClass'"
            :styles="clusterStyles">
          <gmap-marker v-for="m in dealers"
                       :key="m.id"
                       :position="m.geolocation"
                       :icon="m.marker"
                       @click="clicked(m)"
                       :clickable="true">
            <gmap-info-window :opened="m.infoWindowOpened">
              <p class="gmap-info-title">{{ m.tradingName }}</p>
              <p class="gmap-info-price">11 377,93 руб.</p>
            </gmap-info-window>
          </gmap-marker>
        </gmap-cluster>
      </gmap-map>
    </div>
    <current-dealer v-if="currentDealer" @on-next="$emit('on-next', currentDealer)" :current-dealer="currentDealer"/>
  </div>
</template>

<script>
import Vue from 'vue';
import * as GmapVue from 'gmap-vue';
import GmapCluster from 'gmap-vue/dist/components/cluster';

Vue.use(GmapVue, {
  load: {
    key: '',
    libraries: 'places'
  },
  installComponents: true
})

export default {
  name: "Map",
  components: {
    GmapCluster,
    CurrentDealer: () => import("./CurrentDealer")
  },
  data() {
    return {
      currentDealerId: null,
      currentDealer: null,
      clusterStyles: [{
        "textColor": "#fff",
        "fontFamily": "Nissan",
        "textDecoration": "inherit",
        "textSize": "16",
        "width": "68",
        "lineHeight": "60",
        "url": "/cluster.svg"
      }],
      marker: "marker.svg",
      markerActive: "marker-active.svg",
      dealers: [],
      center: {
        lat: 55.8286148,
        lng: 37.4048445
      }
    }
  },
  methods: {
    mapLoaded() {
      console.log('map loaded');
      // this.fitBounds();
    },
    clicked(value) {
      if (value.infoWindowOpened) {
        value.infoWindowOpened = false;
        value.marker = this.marker;
      } else {
        value.infoWindowOpened = true;
        value.marker = this.markerActive;
      }
      this.getCurrentDealer()
      this.currentDealerId = value['dealerId'];
    },
    getCurrentDealer(){
      this.$axios.get('json/Dealer.json', {baseURL: window.location.origin})
          .then((response) => {
            this.currentDealer = response.data;
          })
          .catch((err) => {
            console.log(err)
          });
    },
    fitBounds() {
      let bounds = new google.maps.LatLngBounds();
      for (let dealer of this.dealers) {
        bounds.extend(dealer.geolocation)
      }
      this.$refs.gmap.fitBounds(bounds);
    }
  },
  mounted() {
    console.log('map mounted')
    this.$axios.get('json/GetDealers.json', {baseURL: window.location.origin})
        .then((response) => {
          this.dealers = response.data.dealers.map((i) => {
            i.marker = 'marker.svg';
            i.markeractive = 'marker-active.svg';
            i.infoWindowOpened = false;
            return i;
          })
        })
        .catch((err) => {
          console.log(err)
        });
    // this.fitBounds();
  }
}
</script>

<style scoped lang="scss">
.gmap {
  &-wrapper {
    margin-left: -15px;
    margin-right: -15px;
    margin-bottom: 20px;
    @media (min-width: 1024px) {
      margin: 0 0 22px;
    }
  }

  &-container {
    width: 100%;
    height: 350px;
    @media (min-width: 768px) {
      height: 475px;
    }
  }
}

</style>
<style lang="scss">
.customClasterClass > div {
  line-height: 54px;
}

.gm-style {
  .gm-style-iw-t {
    &:after {
      display: none;
    }
  }

  .gm-style-iw-c {
    transform: none;
    padding: 8px 13px !important;
    max-height: none !important;
    left: 24px;
    top: 17px;
    border-radius: 0;
  }

  .gm-style-iw-d {
    padding: 0 !important;
    overflow: visible !important;
    max-height: none !important;
  }

  .gm-ui-hover-effect {
    display: none !important;
  }
}

.gmap-info-title {
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 4px;
}

.gmap-info-price {
  font-size: 16px;
  line-height: 16px;
  color: #C3002F;
}

</style>