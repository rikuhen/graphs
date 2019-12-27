// Core
import _ from 'lodash'
import 'bootstrap'
import './scss/app.scss';
import Vue from 'Vue';
import VueRouter from 'vue-router'
import App from './App.vue';

//lo que necesitamos para la app
import routes from './routes';
Vue.config.productionTip = false;

Vue.use(VueRouter)

const router = new VueRouter({ mode: 'history', routes })


new Vue({
    el: "#app",
    render: h => h(App),
    router,
})


