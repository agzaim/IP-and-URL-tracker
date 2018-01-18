<template>
    <gmap-map
        v-bind:center="center"
        v-bind:zoom="7"
        v-bind:options="mapStyle">
            <gmap-marker
                v-bind:key="index"
                v-for="(m, index) in markers"
                v-bind:position="m.position"
                v-bind:clickable="true"
                v-bind:draggable="true"
                v-on:click="center=m.position">
            </gmap-marker>
    </gmap-map>
</template>

<script>
    
    export default {
         props: {
             locationData: {
                 type: Object,
                 required: true
             }
         },
         computed: {
             center() {
                 return {
                     lat: this.locationData.latitude, 
                     lng: this.locationData.longitude
                 }
             },
             markers() {
                 return [{
                      position: {
                         lat: this.locationData.latitude, 
                         lng: this.locationData.longitude
                     }
                 }]
             }
         },
         data () {
              return {
                /*center: {lat: 51.1, lng: 17.0333},
                markers: [{
                  position: {lat: 51.1, lng: 17.0333}
                }],*/
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
         }
    }

</script>

<style lang="scss">
    
    @import "../assets/styles/variables.scss";
    
    .vue-map-container {
        width: 60%;
        height: 100%;
    }

    .vue-map {
        border-radius: 6px 0 0 6px;
    }
    
</style>