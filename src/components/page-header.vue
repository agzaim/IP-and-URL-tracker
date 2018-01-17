<template>
    <header class="header">
          <div class="header-container">
              <div class="logo"></div>
              <div class="title-container">
                  <h1 class="header-title">
                      IP and URL tracker
                  </h1>
                  <h3 class="header-description">
                      Find out server location of all your favourite websites!
                  </h3>
              </div>
          </div>
      </header>
</template>

<script>

     export default {
     }
     
</script>

<style lang="scss">
    
     @import "../assets/styles/variables.scss";
      
    .header {
        background-color: #F0F0F0;
        width: 100%;
        height: 85px;
        margin-bottom: 20px;
        padding-top: 20px;
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
    }
    
</style>
