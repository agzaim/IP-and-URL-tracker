<template>
    <div>
        <div class="error-container"
             v-if="errors.has('url')">
            IP adress or URL is invalid. Try again
        </div>
        <div class="search-container">
            <input class="search-box"
                   v-model="input"
                   name="url"
                   v-validate="'url'"
                   data-vv-delay="600"
                   v-bind:class="{'input': true, 'is-danger': errors.has('url') }"
                   placeholder="Please enter IP adress or URL">
            <button class="search-btn"
                    v-bind:disabled="errors.any()"
                    v-on:click="searchLocation(input)">
                SEARCH
            </button>
        </div>
    </div>
</template>


<script>

    export default {
         data() {
            return {
                input: ""
            }
         },
         methods: {  
            searchLocation(phrase) {
                this.$store.dispatch('GET_SEARCHED_DATA', {input: phrase});  
                this.input = "";
            }
         }
     }
     
</script>

<style lang="scss">
    
    @import "../assets/styles/variables.scss";
    @import "../assets/styles/mixins.scss";
    
    
    .search-container {
        margin: 30px 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        @include tablets {
            width: 97%;
            margin: 30px auto;
        }
        @include smallTablets {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
        }
    }

    .search-box {
        height: 35px;
        width: 80%;
        border-radius: 4px;
        border: 1px solid $color-grey-medium;
        padding-left: 10px;
        @include smallTablets {
             width: 100%;
             margin-bottom: 10px;
        }
    }

    .search-btn {
        height: 35px;
        width: 15%;
        border-radius: 4px;
        background-color: $color-main-orange;
        font-size: 13px;
        letter-spacing: 1.5px;
        color: #FFF;
        border: 1px solid $color-main-orange;
        @include smallTablets {
             width: 100%;
        }
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