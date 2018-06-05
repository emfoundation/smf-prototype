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
$navbar-divider-background-color: red;
.smf-navbar {
  position: absolute;
  width: 100%;
  background-color: transparent;
  z-index: 10;
  box-shadow: none;
  // overflow: hidden;
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
  .rotated {
    transform: translate(18px, -33px) rotate(16deg);
    background-color: white;
    padding-top: 36px;
    padding-left: 7px;
    width: 100px;
    height: 100px;
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
