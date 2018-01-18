<template>
    <section class="history-section">
        <h2 class="history-section-title">
            Last searches
        </h2>
        <div class="history-container" 
             v-for="search in searchList">
            <li class="list-element">
                <p class="ip-number"> 
                    {{search.input}} 
                </p>
                <p class="country-name"> 
                    {{search.country}} 
                </p>
            </li>
        </div>
    </section>
</template>

<script>

     export default {
         computed: {
            searchList() {
                return this.$store.state.searchList;  
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
        border: 1px solid #d6d6d6;
        border-radius: 6px;
    }

    .history-section-title {
         @include titleStyles;
         margin-bottom: 20px;
    }
    
    .list-element {
        list-style: none;
    }
    
    .ip-number {
        letter-spacing: 1px;
        margin: 10px 0 5px 0;
    }
    
    .country-name {
        font-size: 14px;
        color: $color-light-font;
    }
</style>