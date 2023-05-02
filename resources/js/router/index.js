import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "../components/auth/Login.vue";
import RegisterPage from "../components/auth/Register.vue";
import ForgetPage from "../components/auth/Forget.vue";
import HomePage from "../components/Home.vue";
import MainSection from "../components/Main.vue";
import Employees from "../components/Employee/index.vue";
import CreateEmployee from "../components/Employee/Create.vue";
import LogoutMethod from "../components/auth/Logout.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/forget", component: ForgetPage },
  { path: "/logout", component: LogoutMethod },
  {
    path: "/app",
    component: HomePage,
    children: [
      { path: "home", component: MainSection },
      { path: "employees", component: Employees },
      { path: "create-employee", component: CreateEmployee },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
