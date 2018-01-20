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
    @import "../assets/styles/mixins.scss";
    
    .vue-map-container {
        width: 58%;
        height: 100%;
        @include smallTablets {
            width: 100%;
            height: 300px;
        }
    }

    .vue-map {
        border-radius: 6px 0 0 6px;
        @include smallTablets {
            border-radius: 6px 6px 0 0;
        }
    }
    
</style>