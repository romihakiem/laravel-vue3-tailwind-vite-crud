import "./bootstrap"
import "../css/app.css"
import "sweetalert2/dist/sweetalert2.min.css"
import "vue-toastification/dist/index.css"
import "vue-loading-overlay/dist/css/index.css"
import "@fortawesome/fontawesome-free/css/all.css"
import { createApp } from "vue"
import router from "./routes"
import store from "./stores"
import core from "./core"
import components from "./components"

const app = createApp({})

app.use(router)
app.use(store)

core(app)
components(app)

app.mount("#app")
