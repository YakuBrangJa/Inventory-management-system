<template>
  <ul class="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      <div class="sidebar-brand-icon">
        <img src="../../../public/backend/img/logo/logo2.png" />
      </div>
      <div class="sidebar-brand-text mx-3">RuangAdmin</div>
    </a>
    <hr class="sidebar-divider my-0" />
    <li class="nav-item active">
      <router-link class="nav-link" to="/app/home">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></router-link
      >
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">Features</div>
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseBootstrap"
        aria-expanded="true"
        aria-controls="collapseBootstrap"
      >
        <i class="far fa-fw fa-window-maximize"></i>
        <span>Employee</span>
      </a>
      <div
        id="collapseBootstrap"
        class="collapse"
        aria-labelledby="headingBootstrap"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <!-- <h6 class="collapse-header">Bootstrap UI</h6> -->
          <router-link class="collapse-item" to="create-employee"
            >Add Employee</router-link
          >
          <router-link class="collapse-item" to="employees"
            >All Employees</router-link
          >
        </div>
      </div>
    </li>
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseBootstrap1"
        aria-expanded="true"
        aria-controls="collapseBootstrap1"
      >
        <i class="far fa-fw fa-window-maximize"></i>
        <span>Suppliers</span>
      </a>
      <div
        id="collapseBootstrap1"
        class="collapse"
        aria-labelledby="headingBootstrap"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <!-- <h6 class="collapse-header">Bootstrap UI</h6> -->
          <router-link class="collapse-item" to="">Add Supplier</router-link>
          <router-link class="collapse-item" to="">All Suppliers</router-link>
        </div>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="forms.html">
        <i class="fab fa-fw fa-wpforms"></i>
        <span>Forms</span>
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTable"
        aria-expanded="true"
        aria-controls="collapseTable"
      >
        <i class="fas fa-fw fa-table"></i>
        <span>Tables</span>
      </a>
      <div
        id="collapseTable"
        class="collapse"
        aria-labelledby="headingTable"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Tables</h6>
          <a class="collapse-item" href="simple-tables.html">Simple Tables</a>
          <a class="collapse-item" href="datatables.html">DataTables</a>
        </div>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="ui-colors.html">
        <i class="fas fa-fw fa-palette"></i>
        <span>UI Colors</span>
      </a>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">Examples</div>
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePage"
        aria-expanded="true"
        aria-controls="collapsePage"
      >
        <i class="fas fa-fw fa-columns"></i>
        <span>Pages</span>
      </a>
      <div
        id="collapsePage"
        class="collapse"
        aria-labelledby="headingPage"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Example Pages</h6>
          <a class="collapse-item" href="login.html">Login</a>
          <a class="collapse-item" href="register.html">Register</a>
          <a class="collapse-item" href="404.html">404 Page</a>
          <a class="collapse-item" href="blank.html">Blank Page</a>
        </div>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="charts.html">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Charts</span>
      </a>
    </li>
    <hr class="sidebar-divider" />
    <div class="version" id="version-ruangadmin"></div>
  </ul>
</template>

<script>
export default {
  name: "AppSidebar",
};
</script>

<style></style>
