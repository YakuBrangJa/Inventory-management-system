<template>
  <h1>Logout</h1>
</template>

<script>
export default {
  name: "LogoutMethod",
  created() {
    User.logout();
    Toast.fire({
      icon: "success",
      title: "Logout successfully",
    });
    this.$router.push("/");
  },
  methods: {
    onLogout() {
      User.logout();
    },
  },
};
</script>

<style></style>
