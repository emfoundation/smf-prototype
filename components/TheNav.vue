<template>
  <header class="smf-navbar-wrap">
    <nav
      class="navbar smf-navbar"
      role="navigation"
      aria-label="main-navigation">
      <div class="navbar-brand smf-navbar-brand">
        <nuxt-link
          to="/"
          class="navbar-item logo-item">
          <div class="emf-logo"/>
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
              class="navbar-about navbar-item navbar-burger smf-burger is-large is-size-5-tablet has-text-weight-semibold"
              aria-label="about"
              aria-expanded="false">
              <slot>About</slot>
              <i class="about-arrow fas fa-lg fa-angle-right ml-2 mr-2"/>
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
$navbar-divider-background-color: red;
.smf-navbar-wrap {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100px;
}
.smf-navbar {
  background-color: transparent;
  z-index: 10;
  box-shadow: none;
}
.smf-navbar-brand {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
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
    width: 40px;
    height: 40px;
    &:hover {
      opacity: 0.8;
    }
  }
  .container-overflow-hidden {
    .rotated {
      overflow-y: hidden;
      transform: translate(26px, -33px) rotate(16deg);
      background-color: white;
      padding-top: 39px;
      padding-left: 3px;
      width: 100px;
      height: 100px;
    }
  }
  .navbar-about,
  .about-arrow {
    transition: $smf-transition;
    color: $secondary;

    &:hover {
      transition: $smf-transition;
      color: lighten($secondary, 20%);
      .about-arrow {
        transition: $smf-transition;
        color: $primary;
      }
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
    width: 2rem;
    .icon {
      margin-left: auto;
      margin-right: auto;
    }
  }
}
@include tablet() {
  .smf-navbar-brand {
    padding-left: 15px;
    padding-right: 15px;
    .emf-logo {
      background-image: url("~/assets/images/emf-logo.png");
      width: 206px;
      height: 53px;
    }
    .container-overflow-hidden {
      .rotated {
        overflow-y: hidden;
        transform: translate(35px, -33px) rotate(16deg);
        background-color: white;
        padding-top: 39px;
        padding-left: 12px;
        width: 140px;
        height: 107px;
      }
    }
  }
}
</style>
