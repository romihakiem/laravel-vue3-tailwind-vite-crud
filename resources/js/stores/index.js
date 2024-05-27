import { createStore } from "vuex"
import tutorial from "./tutorial"

const store = createStore({
    modules: {
        tutorial,
    },
    state() {
        return {
            display: "light",
            sidebar: "full"
        }
    },
    mutations: {
        SET_DISPLAY: (state, display) => { state.display = display },
        SET_SIDEBAR: (state, display) => { state.sidebar = display },
    },
    actions: {
        async setDisplay({ commit }, display) {
            if (display === "dark") {
                document.body.classList.add("dark")
            } else {
                document.body.classList.remove("dark")
            }
            commit("SET_DISPLAY", display)
        },
        async setSidebar({ commit }, sidebar) {
            commit("SET_SIDEBAR", sidebar)
        },
    },
    getters: {
        getDisplay: state => state.display,
        getSidebar: state => state.sidebar,
    },
})

export default store
