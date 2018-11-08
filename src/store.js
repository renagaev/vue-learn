import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:
        { labels: ['first', 'second', 'third'],
        contacts:{},
        },

    mutations:{
        addLabel(state, label){
            state.labels.push(label)
        },
        addContacts(state, contact){
            state.contacts[contact.name] = contact
        }
    }
});
export default {
    store
}