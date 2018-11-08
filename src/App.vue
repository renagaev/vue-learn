<template>
    <v-app>
        <v-navigation-drawer>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title>All</v-list-tile-title>

                    <v-list-group>
                        <v-list-tile slot="activator" @click="test">
                            <v-list-tile-content>
                                <v-list-tile-title>Labels</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-list-tile v-for="label in labels" @click="">
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{label}}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-content>

        </v-content>
    </v-app>
</template>

<script>
    import store from './store'

    export default {
        store,
        name: 'App',
        components: {

        },
        data() {
            return {
                //
            }
        },
        computed: {
            labels(){
                return this.$store.labels;
            }
        },
        methods: {
            test(){
                console.log(this.$store.labels)
            }
        }
    }
</script>
