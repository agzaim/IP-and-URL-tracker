<template>
    <section class="history-section">
        <h2 class="history-section-title">
            Last searches
        </h2>
        <ul class="search-list">
            <li class="list-element"
                v-for="search in searchList"
                v-on:click="loadingMap(search.input)">
                <div class="list-bullet"></div>
                <div class="text-container">
                    <p class="ip-number"> 
                        {{search.input}} 
                    </p>
                    <p class="country-name"> 
                        {{search.country}} 
                    </p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>

     export default {
         computed: {
            searchList() {
                return this.$store.state.searchList;  
            }
         },
         methods: {
             loadingMap(phrase) {
                 this.$store.dispatch('GET_SEARCHED_DATA', {input: phrase}); 
             }
         }
     }
     
</script>

<style lang="scss">
    
    @import "../assets/styles/variables.scss";
    @import "../assets/styles/mixins.scss";
    
    .history-section {
        width: 25%;
        padding: 25px;
        padding-right: 0;
        border: 1px solid #d6d6d6;
        border-radius: 6px;
         @include tablets {
             width: 40%;
             margin: 0 auto;
             margin-top: 20px;
        }
         @include smallTablets {
             width: 97%;
             margin: 0 auto;
             margin-top: 20px;
        }
    }

    .history-section-title {
        @include titleStyles;
        margin-bottom: 20px;
    }
    
    .search-list {
        list-style: none;
        height: 594px;
        overflow: auto;
        @include tablets {
            height: auto;
        }
    }
    
    .list-element {
        margin-bottom: 15px;
        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
    }
    
    .list-bullet {
        background-image: url("../assets/images/icons8-checked.png");
        height: 25px;
        width: 25px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 5px;
    }
    
    .text-container {
        display: inline-block;
    }
    
    .ip-number {
        letter-spacing: 1px;
        margin-bottom: 5px;
    }
    
    .country-name {
        font-size: 14px;
        color: $color-light-font;
    }
</style>