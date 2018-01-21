<template>
    <header class="header">
          <div class="header-container">
              <div class="logo"></div>
              <div class="title-container">
                  <h1 class="header-title">
                      IP and URL tracker
                  </h1>
                  <h3 class="header-description">
                      Find out server locations of all your favourite websites!
                  </h3>
              </div>
          </div>
      </header>
</template>


<style lang="scss">
    
     @import "../assets/styles/variables.scss";
     @import "../assets/styles/mixins.scss";
      
    .header {
        background-color: #F0F0F0;
        width: 100%;
        height: 85px;
        margin-bottom: 20px;
        padding-top: 20px;
        @include bigScreens {
            height: 130px;
        }
    }
    
     .header-container {
        width: 90%;
        margin: 0 auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
         @include smallTablets {
             width: 97%;
         }
    }
    
    .header-title {
        color: $color-main-orange;
        font-size: 20px;
        font-weight: 800;
    }

    .header-description {
        color: $color-grey-medium;
        font-size: 14px;
        font-weight: 100;
        letter-spacing: 1.2px;
    }

    .logo {
        background-image: url("../assets/images/icons8-zoom.png");
        background-position: 0 -3px;
        background-repeat: no-repeat;
        background-size: cover;
        height: 45px;
        width: 45px;
        margin-right: 10px;
        @include smallTablets {
             background-position: -3px 2px;
        }
    }
    
</style>
