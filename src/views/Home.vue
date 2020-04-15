<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <span>User: "{{ currentUserEmail }}" <br> uid: "{{currentUserUid}}"</span
    ><br />
    <button @click="logout">logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import firebase from "firebase";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    currentUserEmail: function() {
      return firebase.auth().currentUser
        ? firebase.auth().currentUser.email
        : "none";
    },
    currentUserUid() {
      return firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "none";
    }
   },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
  },
};
</script>

<style scoped>
span {
  display: block;
  background: yellow;
  margin-top: 20px;
  font-size: 16px;
}
</style>
