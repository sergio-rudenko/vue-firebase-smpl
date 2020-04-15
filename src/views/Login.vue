<template>
  <div class="login">
    <h1>Sign In</h1>
    <input v-model="email" type="text" placeholder="Email" /><br />
    <input v-model="password" type="password" placeholder="Password" /><br />
    <button @click="login">Login</button>
    <p>
      Or sign up with:<br />
      <b-button
        @click="socialLogin"
        rounded
        icon-left="google"
        class="social-login-button"
      >
        Google </b-button
      ><br />
      <b-button
        @click="socialLogin"
        rounded
        icon-left="apple"
        class="social-login-button"
        disabled
      >
        Apple </b-button
      ><br />
      <b-button
        @click="socialLogin"
        rounded
        icon-left="microsoft"
        class="social-login-button"
        disabled
      >
        Microsoft </b-button
      ><br />
    </p>
    <div id="vk_auth"></div>
    <p>
      Don`t have an account? You can
      <router-link to="/sign-up">create one!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      vk: {},
    };
  },
  mounted() {
    window.VK.init({ apiId: 7412323 });
    window.VK.Widgets.Auth("vk_auth", {
      onAuth: function(data) {
        this.vk = data;
        alert("user " + data["uid"] + " authorized");
      },
      authUrl: "/dev/login"
    });
  },
  methods: {
    socialLogin: function() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.replace("home");
        })
        .catch((err) => {
          alert("Oops. " + err.message);
        });
    },

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
  margin-top: 10px;
}

.social-login-button {
  width: 30%;
  margin-top: 5px;
}

/* .social-login-button:active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 1);
}

.social-login-button img {
  width: 100%;
} */

input {
  /* color: brown; */
  margin: 10px 0;
  width: 50%;
  padding: 5px;
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
