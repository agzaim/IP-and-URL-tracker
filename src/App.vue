<template>
  <div id="app">
      <page-header></page-header>
      <div class="content-container">
          <history-section></history-section>
          <section class="content-section">
              <map-section v-bind:visible="clientMap">
                  Your 
              </map-section>
              <searching-section></searching-section>
              <map-section v-bind:visible="searchedMap">
                  Searched 
              </map-section>
          </section>
      </div>
  </div>
</template>

<script>
    
    import pageHeader from "./components/page-header.vue";
    import historySection from "./components/history-section.vue";
    import mapSection from "./components/map-section.vue";
    import searchingSection from "./components/searching-section.vue";
    
    
    export default {
        data() {
            return {
                clientMap: true,
                searchedMap: false
            }
        },
        components: {
            "pageHeader": pageHeader,
            "historySection": historySection,
            "mapSection": mapSection,
            "searchingSection": searchingSection
        }        
    }
</script>


<style lang="scss">

@import "./assets/styles/main.scss";
    
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
    }
    
    .content-section {
        width: 70%;
    }
        
</style>
