import Vue from "vue";
import Home from "./Home";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookSquare, faTwitter, faPinterest, faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Home),
}).$mount("#app");
