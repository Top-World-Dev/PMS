import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPrescription, faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faUserSecret);
library.add(faPrescription);
library.add(faPlus);

Vue.component("font-awesome-icon", FontAwesomeIcon);
