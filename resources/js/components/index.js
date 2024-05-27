import MyInput from "./MyInput.vue"
import MyTextarea from "./MyTextarea.vue"
import MyButton from "./MyButton.vue"
import MyCard from "./MyCard.vue"
import DropdownMenu from "./DropdownMenu.vue"
import DropdownItem from "./DropdownItem.vue"
import Pagination from "./Pagination.vue"

import AppHeader from "../pages/Layout/Header.vue"
import AppSidebar from "../pages/Layout/Sidebar.vue"
import AppNavigation from "../pages/Layout/Navigation.vue"
import AppFooter from "../pages/Layout/Footer.vue"
import AppMobile from "../pages/Layout/Mobile.vue"
import AppDropdown from "../pages/Layout/Dropdown.vue"

import {
  EllipsisVerticalIcon,
} from "@heroicons/vue/24/solid"

export default app => {
  app.component("MyInput", MyInput)
  app.component("MyTextarea", MyTextarea)
  app.component("MyButton", MyButton)
  app.component("MyCard", MyCard)
  app.component("DropdownMenu", DropdownMenu)
  app.component("DropdownItem", DropdownItem)
  app.component("Pagination", Pagination)
  app.component("EllipsisVerticalIcon", EllipsisVerticalIcon)

  app.component("AppHeader", AppHeader)
  app.component("AppSidebar", AppSidebar)
  app.component("AppNavigation", AppNavigation)
  app.component("AppFooter", AppFooter)
  app.component("AppMobile", AppMobile)
  app.component("AppDropdown", AppDropdown)
}
