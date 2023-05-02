<template>
  <div id="wrapper">
    <AppSidebar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <AppTopbar />
        <div class="container-fluid" id="container-wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTopbar from "./Topbar.vue";
import AppSidebar from "./Sidebar.vue";

export default {
  name: "HomePage",
  components: {
    AppTopbar,
    AppSidebar,
  },
};
</script>

<style></style>
