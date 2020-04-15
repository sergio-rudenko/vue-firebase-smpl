import Vue from "vue";
import firebase from "firebase/app";

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Buefy);

const firebaseConfig = {
  apiKey: "AIzaSyC_o9lkuYcGjVS89Y_s7g1ChfVOEP3R1L4",
  authDomain: "vue-firebase-smpl-96c0c.firebaseapp.com",
  databaseURL: "https://vue-firebase-smpl-96c0c.firebaseio.com",
  projectId: "vue-firebase-smpl-96c0c",
  storageBucket: "vue-firebase-smpl-96c0c.appspot.com",
  messagingSenderId: "128234587248",
  appId: "1:128234587248:web:f2e624cc616a49267660b5",
  measurementId: "G-2FHY7KM9R1",
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  // eslint-disable-next-line
  if (!app) {
    var app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
