<template>
  <div class="navbar">
    <img src="/assets/logo.svg" />
    <div v-if="menuActive" class="links">
      <a>Features</a>
      <a>Pricing</a>
      <a>Resources</a>
      <div class="navEnd">
        <a class="loginLink">Login</a>
        <a class="signupBtn">Sign Up</a>
      </div>
    </div>
    <div @click="menuActive = !menuActive" class="menuBtn">
      <template v-if="menuActive">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
          <path
            fill="hsl(257, 7%, 63%)"
            fill-rule="evenodd"
            d="M17.425.954l2.12 2.121-7.424 7.425 7.425 7.425-2.121 2.12L10 12.622l-7.425 7.425-2.12-2.121L7.878 10.5.454 3.075 2.575.955 10 8.378 17.425.954z"
          />
        </svg>
      </template>
      <template v-else>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
          <g fill="hsl(257, 7%, 63%)" fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
    };
  },
  created() {
    if (window.innerWidth > 1023) {
      this.menuActive = true;
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023) {
        this.menuActive = true;
      }
    });
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 24px 1rem;
}
.navbar .logo {
  margin-right: 10px;
}
.navbar .links {
  display: flex;
  width: calc(100% - 140px);
}
.navbar a {
  color: hsl(257, 7%, 63%);
  margin-left: 25px;
}
.navbar .links a {
  font-weight: 700;
}
.navbar .links .navEnd {
  margin-left: auto;
}
.navbar .signupBtn {
  background: hsl(180, 66%, 49%);
  color: #f5f5f5;
  padding: 5px 15px;
  border-radius: 20px;
  margin-left: 7px;
}
.navbar .menuBtn {
  margin-left: auto;
  display: none;
}
@media screen and (min-width: 1200px) {
  .navbar {
    padding: 24px 8rem;
  }
}
@media screen and (max-width: 1023px) {
  .navbar .links {
    position: absolute;
    top: 60px;
    left: 50%;
    display: block;
    z-index: 50;
    background: hsl(257, 27%, 26%);
    width: 80%;
    transform: translateX(-50%);
    padding: 24px;
    text-align: center;
    border-radius: 15px;
  }
  .navbar .links a {
    display: block;
    margin: 0;
    line-height: 50px;
    color: #f5f5f5;
  }
  .navbar .links .navEnd {
    border-top: hsl(257, 7%, 63%) solid 1px;
    margin-top: 16px;
    padding-top: 16px;
  }
  .navbar .links .signupBtn {
    display: inline-block;
    line-height: normal;
    margin: 10px 0 20px 0;
  }
  .navbar .menuBtn {
    display: block;
  }
}
</style>
