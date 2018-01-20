<template>
  <div id="app">
      <page-header></page-header>
      <div class="content-container">
          <history-section></history-section>
          <section class="content-section">
              <div class="map-box">
                  <div class="section-container">
                      <map-section v-bind:locationData="userData">
                      </map-section>
                      <info-section v-bind:locationData="userData">
                          Your
                      </info-section>
                  </div>
              </div>
              <searching-section></searching-section>
              <div class="map-box">
                  <placeholder v-if="visible"></placeholder>
                  <div class="section-container" 
                       v-else>
                      <map-section v-bind:locationData="searchedData">
                      </map-section>
                      <info-section v-bind:locationData="searchedData">
                          Searched
                      </info-section>
                  </div>
              </div>
          </section>
      </div>
  </div>
</template>

<script>
    
    import pageHeader from "./components/page-header.vue";
    import historySection from "./components/history-section.vue";
    import placeholder from "./components/placeholder.vue";
    import mapSection from "./components/map-section.vue";
    import infoSection from "./components/info-section.vue";
    import searchingSection from "./components/searching-section.vue";
    
    
    export default {
        computed: {
            userData() {
                return this.$store.state.userData;  
            },
            searchedData() {
                return this.$store.state.searchedData;
            },
             visible() {
                return this.$store.state.visible;  
            }
        },
        components: {
            "pageHeader": pageHeader,
            "historySection": historySection,
            "placeholder": placeholder,
            "mapSection": mapSection,
            "infoSection": infoSection,
            "searchingSection": searchingSection
        },
        created() {
            this.$store.dispatch('GET_USER_DATA');
        }
    }
</script>


<style lang="scss">

@import "./assets/styles/main.scss";
@import "./assets/styles/variables.scss";
@import "./assets/styles/mixins.scss";
    
    .content-container {
        width: 90%;
        margin: 0 auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-bottom: 30px;
        @include tablets {
            width: 100%;
            -webkit-box-orient: vertical;
            -webkit-box-direction: reverse;
            -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;   
        }
    }
    
    .content-section {
        width: 70%;
        @include tablets {
            width: 100%;
        }
    }
    
    .map-box {
        border: 1px solid $color-main-orange;
        border-radius: 6px;
        height: 300px;
        @include tablets {
            width: 97%;
            margin: 0 auto;
        }
         @include smallTablets {
             height: auto;
        }
    }
    
    .section-container {
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        @include smallTablets {
            display: block;
        }
    }
        
</style>
