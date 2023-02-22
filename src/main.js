import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
//<font-awesome-icon icon="fa-solid fa-dollar-sign" />
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'

library.add(faBell)
library.add(faLocationDot)
library.add(faUserGroup)
library.add(faDollarSign)
library.add(faFileLines)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
