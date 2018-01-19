<template>
    <div>
        <div class="error-container"
             v-if="error">
            IP adress or URL is invalid. Try again
        </div>
        <div class="search-container">
            <input class="search-box"
                   v-model="input"
                   v-on:keyup.enter="searchLocation(input)"
                   placeholder="Please enter IP adress or URL">
            <button class="search-btn"
                    v-on:click="searchLocation(input)">
                SEARCH
            </button>
        </div>
    </div>
</template>


<script>

    export default {
       /*  computed: {
            input() {
                return this.$store.state.input;  
            }
         },*/
         data() {
            return {
                input: "",
                error: false,
                regex: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})$|^((([a-zA-Z]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]))$/
            }
         },
         methods: {    
            searchLocation(phrase) {
                if(this.regex.test(phrase)) {      
                    this.$store.dispatch('GET_SEARCHED_DATA', {input: phrase});  
                    this.input = "";
                    this.error = false;
                } else {
                    this.error = true;
                }        
            }
         }
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
    
    .error-container {
        color:  #000080;
        font-weight: 800;
        text-align: center;
        margin-top: 20px;
    }
</style>