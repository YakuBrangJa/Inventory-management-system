import { createApp } from "vue";

import HomePage from "./components/Home.vue";

// Router
import router from "./router";

//
import User from "./helpers/User";
window.User = User;

// Sweet Alert
import Swal from "sweetalert2";
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

window.Toast = Toast;

const app = createApp();
app.use(router);
app.mount("#app");
