<template>
    <v-container grig-list-md fluid>
        <v-layout row wrap>
            <v-flex v-for="film in films"
                    :key="film.title"
                    xs12 sm6 md4 lg3 xl3 d-flex>
                <v-card @click.native="filmSelected(film)">
                    <v-img :src="film.image"  aspect-ratio="1"></v-img>
                    <v-card-title>
                        <div>
                            <h3 class="headline mb-0">{{film.title}}</h3>
                            <div>{{film.description}}</div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "AllFilms",
        computed:{
            films(){
                return this.$store.state.films
            }
        },
        methods:{
            filmSelected(film){
                this.$store.commit('setFilm', film.title);
                this.$router.push({name: 'cinemas', params: {cinemasId: film.cinemas}})
            }
        }
    }
</script>

<style scoped>

</style>