<template>
  <nav
    class="navbar smf-navbar"
    role="navigation"
    aria-label="main-navigation">
    <div class="navbar-brand">
      <nuxt-link
        to="/"
        class="navbar-item">
        <img
          src="~/static/images/emf-logo.png"
          alt="The Ellen MacArthur Foundation Logo"
          class="emf-logo">
      </nuxt-link>
      <nuxt-link
        to="/search"
        class="navbar-item navbar-search has-text-white">
        <span class="icon is-size-5">
          <i class="fas fa-lg fa-search"/>
        </span>
      </nuxt-link>
      <div class="rotated">
        <a
          role="button"
          class="navbar-item navbar-burger smf-burger has-text-black is-large"
          aria-label="menu"
          aria-expanded="false">
          <span
            class="filling"
            aria-hidden="true"/>
          <span
            class="filling"
            aria-hidden="true"/>
          <span
            class="filling"
            aria-hidden="true"/>
        </a>
      </div>
    </div>
  </nav>
</template>

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
    opacity: 1;
    max-height: 100%;
    &:hover {
      opacity: 0.6;
    }
  }
  .rotated {
    transform: translate(30px, -20px) rotate(20deg);
    background-color: white;
    padding-top: 30px;
    width: 100px;
    height: 100px;
  }
  // Bulma override
  .smf-burger {
    transform: rotate(-20deg);
    position: relative;
    margin-left: 0;
    .filling {
      height: 3px;
      width: 22px;
      border-radius: 5px;
    }
    .filling:nth-child(1) {
      top: calc(50% - 8px);
    }
    .filling:nth-child(3) {
      top: calc(50% + 6px);
    }
  }

  .navbar-search {
    justify-self: right;
    margin-left: auto;
    width: $navbar-height;
    .icon {
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
