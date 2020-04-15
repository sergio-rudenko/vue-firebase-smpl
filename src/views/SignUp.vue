<template>
  <div class="sign-up">
    <p>Let`s create a new account!</p>
    <input v-model="email" type="text" placeholder="Email" /><br />
    <input v-model="password" type="password" placeholder="Passwors" /><br />
    <button @click="signUp">Sign Up</button>
    <span
      >or go back to
      <router-link to="/login">login...</router-link>
    </span>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            window.console.log("Account has been created: " + user.email);
            this.$router.replace("home");
          },
          (err) => {
            alert("Oops, " + err.message);
          }
        );
    },
  },
};
</script>

<style scoped>
.signUp {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 25vmax;
  max-width: 80vw;
  padding: 15px;
}
button {
  margin-top: 10px;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 12px;
}
</style>
