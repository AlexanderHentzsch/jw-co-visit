<template>
    <div>
        <Comp_header></Comp_header> <!-- heigth: 75px -->
        <Comp_day_nav></Comp_day_nav>
        <Comp_day_01 v-if="isSelectedDay(1)"></Comp_day_01>
        <Comp_day_02 v-if="isSelectedDay(2)"></Comp_day_02>
        <Comp_day_03 v-if="isSelectedDay(3)"></Comp_day_03>
        <Comp_day_04 v-if="isSelectedDay(4)"></Comp_day_04>
        <Comp_day_05 v-if="isSelectedDay(5)"></Comp_day_05>
        <Comp_day_06 v-if="isSelectedDay(6)"></Comp_day_06>
    </div>
</template>

<script>
    import Comp_header from "./components/Comp_header";
    import Comp_day_nav from "./components/Comp_day_nav";
    import Comp_day_01 from "./components/days/Comp_day_01";
    import Comp_day_02 from "./components/days/Comp_day_02";
    import Comp_day_03 from "./components/days/Comp_day_03";
    import Comp_day_04 from "./components/days/Comp_day_04";
    import Comp_day_05 from "./components/days/Comp_day_05";
    import Comp_day_06 from "./components/days/Comp_day_06";

    export default {
        name: "Main",
        components: {
            Comp_day_01,
            Comp_day_02,
            Comp_day_03,
            Comp_day_04,
            Comp_day_05,
            Comp_day_06,
            Comp_day_nav,
            Comp_header
        },
        methods: {
            isSelectedDay(routeLinkDayId) {
                const selectedDayId = parseInt(this.$route.params.dayId);
                routeLinkDayId = parseInt(routeLinkDayId);

                return selectedDayId === routeLinkDayId;
            }
        }
    }
</script>

<style>
    .container-day {
        padding: 16px
    }

</style>