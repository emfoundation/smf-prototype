<template>
  <nav
    class="navbar smf-navbar"
    role="navigation"
    aria-label="main-navigation">
    <div class="navbar-brand">
      <nuxt-link to="/">
        <img
          src="~/static/images/emf-logo.png"
          alt="The Ellen MacArthur Foundation Logo"
          class="emf-logo">
      </nuxt-link>
      <nuxt-link
        to="/search"
        class="navbar-item navbar-search has-text-white">
        <span class="icon is-size-6">
          <i class="fas fa-lg fa-search"/>
        </span>
      </nuxt-link>

      <a
        role="button"
        class="navbar-item navbar-burger has-text-white is-large"
        aria-label="menu"
        aria-expanded="false">
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

$navbar-divider-background-color: red;
.smf-navbar {
  position: absolute;
  width: 100%;
  background-color: transparent;
  z-index: 10;
  box-shadow: none;
}
.navbar-brand {
  width: 100%;
  padding-left: 2vw;

  .emf-logo {
    margin-top: 1.5rem;
    opacity: 1;
    height: 3rem;
    &:hover {
      opacity: 0.6;
    }
  }
  .navbar-burger {
    margin-left: 0;
    span {
      height: 2px;
      border-radius: 5px;
    }
  }

  .navbar-search {
    justify-self: right;
    margin-left: auto;
    // border-left: solid 1px darkgrey;
    // border-right: solid 1px darkgrey;
    width: $navbar-height;
    .icon {
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
