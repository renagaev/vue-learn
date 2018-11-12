<template>
    <v-container grig-list-md fluid>
        <v-layout row wrap>
            <v-flex v-for="cinema in cinemas"
                    :key="cinema.title"
                    xs12 sm6 md4 lg3 xl3 d-flex>
                <v-card @click.native="cinemaSelected(cinema)">
                    <v-card-title>
                        <div>
                            <h3 class="headline mb-0">{{cinema.title}}</h3>
                            <div>{{cinema.address}}</div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Cinemas",
        props: ['cinemasId'],
        computed:{
            cinemas(){
                let cinemasId = this.cinemasId;
                let cinemas = this.$store.state.cinemas;
                let d = [];
                cinemasId.forEach((item)=> {
                    d.push(cinemas[item])
                });
                return d
            }
        },
        methods: {
            cinemaSelected(cinema){
                this.$store.commit('setCinema', cinema.title)
            }
        }

    }
</script>

<style scoped>

</style>