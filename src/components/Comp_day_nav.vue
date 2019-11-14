<template>
    <div>
        <div id="container-day-nav">
            <router-link to="/1">Di</router-link>
            <router-link to="/2">Mi</router-link>
            <router-link to="/3">Do</router-link>
            <router-link to="/4">Fr</router-link>
            <router-link to="/5">Sa</router-link>
            <router-link to="/6">So</router-link>
        </div>

        <h3>{{selectedDay}}</h3>
    </div>
</template>

<script>
    export default {
        name: "comp_day_nav",
        data() {
            return {
                days: [
                    "Dienstag, 19.11.2019",
                    "Mittwoch, 20.11.2019",
                    "Donnerstag, 21.11.2019",
                    "Freitag, 22.11.2019",
                    "Samstag, 23.11.2019",
                    "Sonntag, 24.11.2019",
                ],
                daysShort: ["Di", "Mi"]
            }
        },
        computed: {
            selectedDay() {
                const selectedDayId = parseInt(this.$route.params.dayId);
                return this.days[selectedDayId - 1];
            }
        }
    }
</script>

.Spring-1-hex { color: #1A222F; } /* black */
.Spring-2-hex { color: #008E74; } /* dark green */
.Spring-3-hex { color: #B2E097; } /* light green */
.Spring-4-hex { color: #FFE9AD; } /* yellow */
.Spring-5-hex { color: #D24335; } /* red */

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

    h3{
        font-size: 14px;
        padding: 0 16px;
    }
</style>