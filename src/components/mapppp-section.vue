<template>
    <div class="map-section">
      
        <div class="section-container" v-if="visible">
<!--            <div class="map-container">-->
                
<!--            </div>-->
                <info-section></info-section>
        </div>
    </div>
</template>

<script>

    
    
/*     export default {
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
         },*/
         /*components: {
            "infoSection": infoSection
       
        } ,     
         props: {
            visible: {
                type: Boolean,
                required: true
            }
         },*/
         created() {
             this.$http.get("http://freegeoip.net/json/").then(function(data) {
                       console.log(data);
                 this.userData = data.body;
                       })                
         }
     }
     
</script>

<style lang="scss">
    
/*    @import "../assets/styles/variables.scss";*/
    
    /*.map-section {
        border: 1px solid $color-main-orange;
        border-radius: 6px;
        height: 300px;
    }
    
    .section-container {
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;*/
    /*    -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;*/
    }

   /* .map-container {
        width: 60%;
        height: 100%;
    }*/
    
  
 /*   
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
    }*/
    
</style>
