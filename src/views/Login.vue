<template>
  <div class="login">
    <h1>Sign In</h1>
    <input v-model="email" type="text" placeholder="Email" /><br />
    <input v-model="password" type="password" placeholder="Password" /><br />
    <button @click="login">Login</button>
    <p>
      Don`t have an account? You can
      <router-link to="/sign-up">create one!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      result: {},
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("home");
        })
        .catch((err) => {
          alert("Oops. " + err.message);
        });
    },
  },
};
</script>

<style scoped>
.login {
  margin-top: 20px;
}

input {
  /* color: brown; */
  margin: 10px 0;
  width: 25%;
  padding: 15px;
}

button {
  margin-top: 20px;
  cursor: pointer;
}

p {
  margin-top: 40px;
  font-size: 13px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
