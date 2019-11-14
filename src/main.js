import Vue from "vue/dist/vue"
import VueRouter from "vue-router/dist/vue-router"
import {routes} from "@/routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    router: new VueRouter({routes}),
    el: "#app"
});
