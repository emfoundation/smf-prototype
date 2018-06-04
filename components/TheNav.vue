<template>
  <nav
    class="navbar smf-navbar"
    role="navigation"
    aria-label="main-navigation">
    <div class="navbar-brand smf-navbar-brand">
      <nuxt-link
        to="/"
        class="navbar-item logo-item">
        <div class="emf-logo"/>
        <!-- <img
          src="~/static/images/emf-logo.png"
          alt="The Ellen MacArthur Foundation Logo"
          class="emf-logo"> -->
      </nuxt-link>
      <nuxt-link
        to="/search"
        class="navbar-item navbar-search has-text-white">
        <span class="icon is-size-5">
          <i class="fas fa-lg fa-search"/>
        </span>
      </nuxt-link>
      <div class="container-overflow-hidden">
        <div class="rotated">
          <nuxt-link
            to="/about"
            class="navbar-item navbar-burger smf-burger is-large has-text-dark has-text-weight-semibold"
            aria-label="about"
            aria-expanded="false">
            <slot>About</slot>
            <i class="fas fa-lg fa-angle-right ml-2 mr-2"/>
          </nuxt-link>
        </div>
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
.smf-navbar-brand {
  width: 100%;
  padding-left: 2vw;
  height: 4rem;
  .logo-item {
    padding-bottom: 0;
  }
  .emf-logo {
    background-image: url("~/assets/images/emf-logo_no-text.png");
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 1;
    transition: $smf-transition;
    width: 55px;
    height: 53px;
    &:hover {
      opacity: 0.8;
    }
  }
  .container-overflow-hidden {
    .rotated {
      overflow-y: hidden;
      transform: translate(18px, -33px) rotate(16deg);
      background-color: white;
      padding-top: 36px;
      padding-left: 3px;
      width: 100px;
      height: 100px;
    }
  }
  // Bulma override
  .smf-burger {
    transform: rotate(-16deg);
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
@include tablet() {
  .smf-navbar-brand {
    .emf-logo {
      background-image: url("~/assets/images/emf-logo.png");
      width: 206px;
      height: 53px;
    }
  }
}
</style>
