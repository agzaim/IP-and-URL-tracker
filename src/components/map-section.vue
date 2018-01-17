<template>
    <div class="map-section">
        <div class="map-placeholder-container"
             v-if="!visible">
                <p> Nothing to show</p>
        </div>
        <div class="section-container" v-if="visible">
<!--            <div class="map-container">-->
                <gmap-map
                    v-bind:center="center"
                    v-bind:zoom="7"
                    v-bind:options="mapStyle"
                >
                    <gmap-marker
                      :key="index"
                      v-for="(m, index) in markers"
                      :position="m.position"
                      :clickable="true"
                      :draggable="true"
                      @click="center=m.position"
                    ></gmap-marker>
                </gmap-map>
<!--            </div>-->
            <div class="info-container">
                    <h3 class="info-title">
                        <slot></slot> data
                    </h3>
                    <p class="info-element">
                        <slot></slot> IP adress / URL: 
                        <span class="info-data"> 
                            {{ userData.ip }} 
                        </span>
                    </p>
                    <p class="info-element">
                        <slot></slot> country: 
                        <span class="info-data"> 
                            {{ userData.country_name }} 
                        </span>
                    </p>
                    <p class="info-element">
                        <slot></slot> region: 
                        <span class="info-data"> 
                            {{ userData.region_name }} 
                        </span>
                    </p>
                    <p class="info-element">
                        <slot></slot> city: 
                        <span class="info-data">
                            {{ userData.city }} 
                        </span>
                    </p>
                    <p class="info-element">
                        <slot></slot> zip / postal code:
                        <span class="info-data">
                            {{ userData.zip_code }} 
                        </span>
                    </p>
            </div>
        </div>
    </div>
</template>

<script>

     export default {
         data () {
              return {
                userData: {},
                center: {lat: 51.1, lng: 17.0333},
                markers: [{
                  position: {lat: 51.1, lng: 17.0333}
                }],
                mapStyle: { 
                    styles: [{
                        "featureType": "all",
                        "elementType": "all",
                        "stylers": [
                            {"saturation": -100},
                            {"gamma": 0.5}
                        ]
                    }]
                }
              }
         },
         props: {
            visible: {
                type: Boolean,
                required: true
            }
         },
         created() {
             this.$http.get("http://freegeoip.net/json/").then(function(data) {
                       console.log(data);
                 this.userData = data.body;
                       })                
         }
     }
     
</script>

<style lang="scss">
    
    @import "../assets/styles/variables.scss";
    @import "../assets/styles/mixins.scss";
    
    .map-section {
        border: 1px solid $color-main-orange;
        border-radius: 6px;
        height: 300px;
    }
    
    .section-container {
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    /*    -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;*/
    }

   /* .map-container {
        width: 60%;
        height: 100%;
    }*/
    
    .vue-map-container {
        width: 60%;
        height: 100%;
    }

    .vue-map {
        border-radius: 6px 0 0 6px;
    }
    
    .info-container {
        width: 39%;
        padding-top: 25px;
        padding-left: 30px;
    }

    .info-title {
       @include titleStyles;        
        margin: 10px 0;
    }
    
    .info-element {
        margin-top: 17px;
        color: $color-main-font;
        font-size: 14px;
    }
    
    .info-data {
        color: #b3b3b3;
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 1px;
        padding-left: 5px;
    }

    .map-placeholder-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: $color-light-font;
        font-size: 18px;  
        height: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    
</style>
