import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        labels: 'kkakak',
        contacts:{},

    },

    mutations:{
        addLabel(state, label){
            state.labels.push(label)
        },
        addContacts(state, contact){
            state.contacts[contact.name] = contact
        }
    },
    getters:{
        notes(state){
            return state.labels
        }

    }

});
