<template>
    <v-app>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import Vuex from 'vuex'
    import Vue from 'vue'
    import router from './router'
    import AllFilms from './components/AllFilms'

    Vue.use(Vuex);
    const store = new Vuex.Store({
            state: {
                films: [
                    {
                        title: 'Смолфут',
                        description: 'Фильм переворачивает миф о бигфутах с ног на голову. В нем молодой находчивый йети сталкивается с тем, кто, по его глубокому убеждению, не существует – человеком.',
                        image: 'https://images.kinomax.ru/films/4/4038/560x302/p_265b4d4.jpg',
                        cinemas: [1, 2]
                    },
                    {
                        title: 'Богемская рапсодия',
                        description: '«Богемская рапсодия» - это чествование группы Queen, их музыки и их выдающегося вокалиста Фредди Меркьюри, который бросил вызов стереотипам и победил условности, чтобы стать одним из самых любимых артистов на планете.',
                        image: 'https://images.kinomax.ru/films/4/4053/560x302/p_f813db4.jpg',
                        cinemas: [0, 1]
                    }
                ],
                cinemas: [
                    {
                        title: 'первый кинотеатр',
                        address: 'ул. Первая, 1',
                        sessions: [
                            {
                                time: '12.00',
                                film: 1
                            },
                            {
                                time: '13.00',
                                films: 1
                            }]
                    },
                    {
                        title: 'второй кинотеатр',
                        address: 'ул. Вторая, 2',
                        sessions: [
                            {
                                time: '12.00',
                                film: 0
                            },
                            {
                                time: '13.00',
                                film: 1
                            }
                        ]
                    },
                    {
                        title: 'третий кинотеатр',
                        address: 'ул Третья, 3',
                        sessions: [{
                                time: '12.00',
                                film: 0
                            },
                            {
                                time: '13.00',
                                film: 0
                            }]
                    }

                ],
                film: null,
                cinema: null,
                time: null,

            },
            getters: {
                cinemas: state => title => {
                    return state.films.find(film => film.title === title)
                },
            },
            mutations: {
                setFilm(state,film){
                    state.film = film
                },
                setCinema(state, cinema){
                    state.cinema = cinema
                }
            }

        })
    ;

    export default {
        router,
        store,
        name: 'App',
        components: {

        },
        data() {
            return {
                //
            }
        },
    }
</script>
