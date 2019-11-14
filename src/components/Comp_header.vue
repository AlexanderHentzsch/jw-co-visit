<template>
    <div id="container-header">
        <h1>Dienstwoche vom 19. bis 24.11.2019</h1>
        <h2>Versammlung Wittenberg-Nord</h2>
    </div>
</template>

<script>
    export default {
        name: "Comp_header"
    }
</script>

<style scoped>
    h1, h2 {
        margin: 0;
    }

    h1 {
        font-size: 20px;
    }

    h2 {
        font-size: 14px;
    }

    #container-header{
        background-color: #008E74;
        color: #fff;
        padding: 9px 16px;
        height: 75px;
    }
</style>