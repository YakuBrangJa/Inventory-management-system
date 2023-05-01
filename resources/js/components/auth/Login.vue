<template>
  <div class="">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Login</h1>
                  </div>
                  <form class="user" @submit.prevent="onLogin">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address"
                        v-model="form.email"
                      />
                      <small
                        class="text-danger"
                        v-if="loginError.errors.email"
                        >{{ loginError.errors.email[0] }}</small
                      >
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="form.password"
                      />
                      <small
                        class="text-danger"
                        v-if="loginError.errors.password"
                        >{{ loginError.errors.password[0] }}</small
                      >
                    </div>
                    <div class="form-group">
                      <div
                        class="custom-control custom-checkbox small"
                        style="line-height: 1.5rem"
                      >
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label class="custom-control-label" for="customCheck"
                          >Remember Me</label
                        >
                      </div>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">
                        Login
                      </button>
                    </div>
                    <hr />
                  </form>
                  <div class="text-center">
                    <router-link class="font-weight-bold small" to="/register"
                      >Create an Account!</router-link
                    >
                  </div>
                  <div class="text-center">
                    <router-link class="font-weight-bold small" to="/forget"
                      >Forget Password?</router-link
                    >
                  </div>
                  <div class="text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import User from "../../helpers/User";

export default {
  name: "LoginPage",
  created() {
    if (User.loggedIn()) {
      this.$router.push("/home");
    }
  },
  methods: {
    onLogin() {
      axios
        .post("/api/auth/login", this.form)
        .then((res) => {
          this.loginData = res.data;
          User.responseAfterLogin(res.data);
          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
          console.log(res.data);
          this.$router.push("/home");
        })
        .catch((err) => {
          console.log(err.response.data);
          this.loginError = err.response.data;
          Toast.fire({
            icon: "warning",
            title: "Wrong Credentials",
          });
        });
    },
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      loginData: null,
      loginError: {
        errors: {
          email: null,
          password: null,
        },
      },
    };
  },
};
</script>

<style></style>
