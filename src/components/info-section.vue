<template>
    <div class="info-container">
            <h3 class="info-title">
                <slot></slot> location
            </h3>
            <p class="info-element">
                IP adress: 
                <span class="info-data"> 
                    {{ locationData.ip }} 
                </span>
            </p>
            <p class="info-element">
                Country: 
                <span class="info-data"> 
                    {{ locationData.country_name }} 
                </span>
            </p>
            <p class="info-element">
                Region: 
                <span class="info-data"> 
                    {{ locationData.region_name }} 
                </span>
            </p>
            <p class="info-element">
                City: 
                <span class="info-data">
                    {{ locationData.city }} 
                </span>
            </p>
            <p class="info-element">
                Zip / postal code:
                <span class="info-data">
                    {{ locationData.zip_code }} 
                </span>
            </p>
    </div>
</template>
    
    
<script>

     export default {
         props: {
             locationData: {
                 type: Object,
                 required: true
             }
         }
     }
     
</script>
     

<style lang="scss">
    
    @import "../assets/styles/variables.scss";
    @import "../assets/styles/mixins.scss";
    
    
    .info-container {
        width: 42%;
        padding-top: 25px;
        padding-left: 30px;
        @include smallTablets {
            width: 100%;
            height: auto;
            padding-bottom: 25px;
        }
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

    
</style>