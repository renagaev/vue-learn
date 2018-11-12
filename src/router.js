import Vue from 'vue'
import AllFilms from './components/AllFilms'
import Cinemas from './components/Cinemas'
import Router from 'vue-router'
Vue.use(Router);


export default new Router({
    routes:[
        {
            path: '/',
            name: 'allFilms',
            component: AllFilms
        },
        {
            path: '/cinemas',
            name:'cinemas',
            component: Cinemas,
            props: true
        }

    ]
})