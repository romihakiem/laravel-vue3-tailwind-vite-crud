import * as Api from "./apis"
import * as Form from "./form"

import Toast from "vue-toastification"
import { LoadingPlugin } from "vue-loading-overlay"
import Swal from "sweetalert2"

export default app => {
    app.provide("$http", Api)
    app.provide("$form", Form)
    app.provide("$swal", Swal)

    app.use(Toast, {
        position: "bottom-right",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
    })

    app.use(LoadingPlugin)
}
