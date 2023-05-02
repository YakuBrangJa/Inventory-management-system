<template>
  <div class="row">
    <router-link to="/app/create-employee" class="btn btn-primary"
      >Add Employee</router-link
    >
  </div>

  <div class="">
    <div class="row justify-content-center">
      <div class="col-xl-12 col-lg-10 col-md-9">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Employee</h1>
                  </div>

                  <hr />

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
  created() {
    if (!User.loggedIn()) {
      this.$router.push({ name: "/login" });
    }
  },
};
</script>

<style></style>
