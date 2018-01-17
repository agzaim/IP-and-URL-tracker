<template>
    <section class="history-section">
        <h2 class="history-section-title">
            Last searches
        </h2>
        <div class="history-container">
        </div>
    </section>
</template>

<script>

     export default {
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
    }
    
</style>