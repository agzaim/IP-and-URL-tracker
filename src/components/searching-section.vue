<template>
    <div>
        <div class="error-container"
             v-if="error">
            IP adress or URL is invalid. Try again
        </div>
        <div class="search-container">
            <input class="search-box"
                   v-model="input"
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
         data() {
            return {
                input: "",
                error: false,
                regex1: RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/),
                regex2: RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/),
                regex3: RegExp(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i)
            }
         },
         methods: {    
            searchLocation(phrase) {
                if(this.regex3.test(phrase)) {
                console.log("Yeeee");
                    } else {
                        this.error = true;
             console.log("dupa");
            }
                
                
                
                
         /*       if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(phrase)) {
                    console.log("Yeeee");
                    } else {
                        this.error = true;
             console.log("dupa");
         }*/
//               this.$store.dispatch('GET_SEARCHED_DATA', {input: phrase});       
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