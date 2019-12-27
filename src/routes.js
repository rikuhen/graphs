const routes = [
    {
        path: '/',
        component: require('./components/home.vue').default
    },
    {
        path: '/d-3',
        component: require('./components/d3.vue').default
    },
    {
        path: '/chart-js',
        component: require('./components/chart-js.vue').default
    },
    {
        path: '/vega',
        component: require('./components/vega.vue').default
    },
    {
        path: '*',
        redirect: '/'
    }
]

export default routes;