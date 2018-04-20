<template>
  <nav class="navbar is-light" role="navigation" aria-label="main-navigation">
      <div class="navbar-brand">
        <nuxt-link to="/">
          <img src="~/static/images/emf-logo.png" alt="The Ellen MacArthur Foundation Logo" class="emf-logo">
        </nuxt-link>

        <nuxt-link to="/" class="navbar-item">
          <h2 class="is-size-4"><strong>CE</strong> Learning</h2>
        </nuxt-link>

        <nuxt-link to="/search" class="navbar-item navbar-search is-secondary">
          <span class="icon">
            <i class="fas fa-lg fa-search"></i>
          </span>
        </nuxt-link>

        <a role="button" class="navbar-item navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
  </nav>  
</template>

<style lang="scss" scoped>
.emf-logo {
  opacity: 1;
  height: 3rem;
  width: 3rem;
  &:hover {
    opacity: 0.6;
  }
}
.navbar-brand {
  width: 100%;
  padding: 15px;
  .navbar-burger {
    margin-left: 0;
  }
  .navbar-search {
    justify-self: right;
    margin-left: auto;
  }
}
strong {
  font-weight: 900;
}
</style>

