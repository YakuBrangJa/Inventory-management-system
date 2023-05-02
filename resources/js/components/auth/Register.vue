<template>
  <div class="">
    <div class="row justify-content-center">
      <div class="col-xl-8 col-lg-12 col-md-9">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Register</h1>
                  </div>
                  <form @submit.prevent="onSignup">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputFirstName"
                        placeholder="Enter your Full Name"
                        v-model="form.name"
                      />
                      <small class="text-danger" v-if="error.errors.name">{{
                        error.errors.name[0]
                      }}</small>
                    </div>

                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address"
                        v-model="form.email"
                      />
                      <small class="text-danger" v-if="error.errors.email">{{
                        error.errors.email[0]
                      }}</small>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="form.password"
                      />
                      <small class="text-danger" v-if="error.errors.password">{{
                        error.errors.password[0]
                      }}</small>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPasswordRepeat"
                        placeholder="Cofirm Password"
                        v-model="form.password_confirmation"
                      />
                      <small
                        class="text-danger"
                        v-if="error.errors.password_confirmation"
                        >{{ error.errors.password_confirmation[0] }}</small
                      >
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">
                        Register
                      </button>
                    </div>
                    <hr />
                  </form>
                  <hr />
                  <div class="text-center">
                    <router-link class="font-weight-bold small" to="/"
                      >Already have an account?</router-link
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
export default {
  name: "RegisterPage",
  created() {
    if (User.loggedIn()) {
      this.$router.push("/app/home");
    }
  },
  methods: {
    onSignup() {
      axios
        .post("/api/auth/signup", this.form)
        .then((res) => {
          this.data = res.data;
          User.responseAfterLogin(res.data);
          Toast.fire({
            icon: "success",
            title: "Signed up successfully",
          });
          console.log(res.data);
          this.$router.push("/app/home");
        })
        .catch((err) => {
          console.log(err.response.data);
          this.error = err.response.data;
        });
    },
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      data: null,
      error: {
        errors: {
          name: null,
          email: null,
          password: null,
          password_confirmation: null,
        },
      },
    };
  },
};
</script>

<style></style>
