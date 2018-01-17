<template>
    <div class="search-container">
        <input class="search-box" id="search-input" placeholder="Please enter IP adress or URL">
        <button class="search-btn" id="btn">
            SEARCH
        </button>
    </div>
</template>


<script>

     export default {
//         props: {
//            title: {
//                type: String,
//                required: true
//            }
//         }
     }
     
</script>

<style lang="scss">
    
    @import "../assets/styles/variables.scss";
    
    
    .search-container {
        margin: 30px 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 35px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .search-box {
        height: 100%;
        width: 80%;
        border-radius: 4px;
        border: 1px solid $color-grey-medium;
        padding-left: 10px;
    }

    .search-btn {
        height: 100%;
        width: 15%;
        border-radius: 4px;
        background-color: $color-main-orange;
        font-size: 13px;
        letter-spacing: 1.5px;
        color: #FFF;
        border: 1px solid $color-main-orange;
    }

    .search-btn:hover {
        color: $color-main-orange;
        background-color: #FFF;
        cursor: pointer;
    }
    
</style>