<template>
  <div class="row">
    <router-link to="/app/employees" class="btn btn-primary"
      >All Employee</router-link
    >
  </div>
  <div class="">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-10 col-md-9">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Add Employee</h1>
                  </div>
                  <form
                    @submit.prevent="onAddEmployee"
                    enctype="multipart/form-data"
                  >
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Full Name"
                            v-model="form.name"
                          />
                          <small class="text-danger" v-if="error.errors.name">{{
                            error.errors.name[0]
                          }}</small>
                        </div>
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Email"
                            v-model="form.email"
                          />
                          <small
                            class="text-danger"
                            v-if="error.errors.email"
                            >{{ error.errors.email[0] }}</small
                          >
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Address"
                            v-model="form.address"
                          />
                          <small
                            class="text-danger"
                            v-if="error.errors.address"
                            >{{ error.errors.address[0] }}</small
                          >
                        </div>
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Sallery"
                            v-model="form.sallery"
                          />
                          <small
                            class="text-danger"
                            v-if="error.errors.sallery"
                            >{{ error.errors.sallery[0] }}</small
                          >
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="">Joining Date</label>
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="date"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter your Full Name"
                            v-model="form.joining_date"
                          />
                          <small
                            class="text-danger"
                            v-if="error.errors.joining_date"
                            >{{ error.errors.joining_date[0] }}</small
                          >
                        </div>
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Nid"
                            v-model="form.nid"
                          />
                          <small class="text-danger" v-if="error.errors.nid">{{
                            error.errors.nid[0]
                          }}</small>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputFirstName"
                            placeholder="Enter Your Phone number"
                            v-model="form.phone"
                          />
                          <small
                            class="text-danger"
                            v-if="error.errors.phone"
                            >{{ error.errors.phone[0] }}</small
                          >
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col-md-6">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="customFile"
                              @change="onFileSelect"
                            />
                            <label class="custom-file-label" for="customFile"
                              >Choose file</label
                            >
                          </div>
                          <small class="text-danger" v-if="error.errors.file">{{
                            error.errors.file[0]
                          }}</small>
                        </div>
                        <div class="col-md-6">
                          <img
                            :src="form.photo"
                            alt=""
                            style="height: 80px; width: 80px"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">
                        Add
                      </button>
                    </div>
                    <hr />
                  </form>
                  <hr />
                  <!-- <div class="text-center">
                    <router-link class="font-weight-bold small" to="/"
                      >Already have an account?</router-link
                    >
                  </div> -->
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
export default {
  name: "CreateEmployee",
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "/login" });
    }
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        address: null,
        sallery: null,
        photo: null,
        nid: null,
        joining_date: null,
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
  methods: {
    onAddEmployee() {
      axios
        .post("/api/employee/add", { ...this.form })
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

    onFileSelect(event) {
      const file = event.target.files[0];

      if (file.size > 1048770) {
        Toast.fire({
          icon: "warning",
          title: "Please select file less than 1mb",
        });
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          this.form.photo = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style></style>
