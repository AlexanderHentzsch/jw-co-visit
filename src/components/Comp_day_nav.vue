<template>
    <div>
        <div id="container-day-nav">
            <template v-for="i in [1,2,3,4,5,6]">
                <router-link :to="'/' + i">{{getDayName(i)}}</router-link>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "comp_day_nav",
        data() {
            return {
                days: [
                    "Di, 19.11.",
                    "Mi, 20.11.",
                    "Do, 21.11.",
                    "Fr, 22.11.",
                    "Sa, 23.11.",
                    "So, 24.11.",
                ]
            }
        },
        computed: {
            selectedDay() {
                const selectedDayId = parseInt(this.$route.params.dayId);
                return this.days[selectedDayId - 1];
            }
        },
        methods: {
            getDayName(dayId) {
                const dayByRoute = parseInt(this.$route.params.dayId);
                const i = parseInt(dayId) - 1;
                return (dayByRoute === dayId) ? this.days[i] : this.days[i].substr(0, 2);
            }
        }
    }
</script>

<style scoped>
    .router-link-active {
        background-color: #D24335;
        color: #fff;
        border-bottom: solid 3px #D24335;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    a {
        padding: 12px 20px;
        display: inline-block;
        text-decoration: none;
    }

    #container-day-nav {
        text-align: center;
    }

    h3 {
        font-size: 14px;
        padding: 0 16px;
    }
</style>