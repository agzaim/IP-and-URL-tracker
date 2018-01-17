<template>
    <div class="map-section">
        <div class="map-placeholder-container"
             v-if="!visible">
                <p> Nothing to show</p>
        </div>
        <div class="section-container" v-if="visible">
            <div class="map-container"></div>
            <div class="info-container">
                    <h3 class="info-title">
                        <slot></slot>
                    </h3>
                    <p class="info-element">
                        IP adress / URL: 
                        <span></span>
                    </p>
                    <p class="info-element">
                        Country: 
                        <span></span>
                    </p>
                    <p class="info-element">
                        Region: 
                        <span></span>
                    </p>
                    <p class="info-element">
                        City: 
                        <span></span>
                    </p>
                    <p class="info-element">
                        Zip / postal code:
                        <span></span>
                    </p>
            </div>
        </div>
    </div>
</template>

<script>

     export default {
         props: {
            visible: {
                type: Boolean,
                required: true
            }
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
    }

    .map-container {
        width: 60%;
        height: 100%;
        border-radius: 6px 0 0 6px;
    }

    .info-container {
        padding-top: 25px;
        padding-left: 30px;
        color: #333;
        font-size: 16px;
    }

    .info-title {
       @include titleStyles;        
        margin: 10px 0;
    }
    
    .info-element {
        margin-top: 17px;
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
