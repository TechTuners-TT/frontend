<template>
  <header class="bg-gray-950 text-white w-full">
    <div class="flex items-center justify-between mx-auto header-container">
      <!-- Логотип -->
      <h1 class="bebas_neue-font logo">SelfSound</h1>

      <!-- Іконка гамбургер-меню -->
      <button
        class="block lg:hidden text-white focus:outline-none cursor-pointer"
        @click="toggleMenu"
        aria-label="Toggle navigation"
        :aria-expanded="isMenuOpen"
      >
        <svg
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Навігація -->
      <nav
        class="font-inter hidden lg:flex items-center space-x-10 h-full"
        aria-label="Main navigation"
      >
        <router-link
          to="/premium"
          class="hover:text-purple-700 font-normal nav-link"
        >
          Premium
        </router-link>
        <router-link
          to="/support"
          class="hover:text-purple-700 font-normal nav-link"
          >Support</router-link
        >
        <div class="w-px h-6 bg-white" aria-hidden="true"></div>
        <router-link
          to="/home"
          class="hover:text-purple-700 font-normal nav-link"
          >Guest mode</router-link
        >
        <router-link
          to="/sign-in"
          class="hover:text-purple-700 font-normal nav-link"
          >Log in</router-link
        >
        <router-link
          to="/sign-up"
          class="flex items-center justify-center bg-white text-blue-900 font-semibold rounded-full hover:bg-purple-700 hover:text-white duration-300 sign-up-button"
        >
          Sign up
        </router-link>
      </nav>
    </div>

    <!-- Мобільне меню -->
    <div
      v-if="isMenuOpen"
      class="bg-gray-950 text-white px-10 py-5 space-y-4 lg:hidden"
      style="
        position: absolute;
        top: var(--header-height);
        left: 0;
        width: 100%;
        z-index: 9999;
      "
    >
      <router-link to="/premium" class="block hover:text-purple-700">
        Premium
      </router-link>
      <router-link to="/support" class="block hover:text-purple-700">
        Support
      </router-link>
      <router-link to="/home" class="block hover:text-purple-700">
        Guest mode
      </router-link>
      <router-link to="/sign-in" class="block hover:text-purple-700">
        Log in
      </router-link>
      <router-link to="/sign-up" class="block hover:text-purple-700">
        Sign up
      </router-link>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// Стан для відстеження відкриття мобільного меню
const isMenuOpen = ref(false);

// Функція для перемикання меню
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Скидання глобальних стилів */
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Стилі для header */
header {
  width: 100%;
  background-color: #060310;
}

.header-container {
  padding: 25px 104px;
  padding-left: 174px;
  height: var(--header-height);
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  --header-height: 100px;
  --logo-font-size: 48px;
  --nav-a-font-size: 24px;
  --sign-up-a-font-size: 24px;
  --sign-up-a-width: 140px;
  --sign-up-a-height: 50px;
}

.logo {
  font-size: var(--logo-font-size);
}

.nav-link {
  font-size: var(--nav-a-font-size);
}

.sign-up-button {
  font-size: var(--sign-up-a-font-size);
  width: var(--sign-up-a-width);
  height: var(--sign-up-a-height);
}

/* Tailwind breakpoints */
@media (max-width: 1536px) {
  /* 2xl */
  .header-container {
    --header-height: 90px;
    --logo-font-size: 43.2px;
    --nav-a-font-size: 21.6px;
    --sign-up-a-font-size: 21.6px;
    --sign-up-a-width: 126px;
    --sign-up-a-height: 45px;
    padding: 25px 90px;
    padding-left: 150px;
  }
}

@media (max-width: 1280px) {
  /* xl */
  .header-container {
    --header-height: 80px;
    --logo-font-size: 38.4px;
    --nav-a-font-size: 19.2px;
    --sign-up-a-font-size: 19.2px;
    --sign-up-a-width: 112px;
    --sign-up-a-height: 40px;
    padding: 25px 80px;
    padding-left: 130px;
  }
}

@media (max-width: 1024px) {
  /* lg */
  .header-container {
    --header-height: 70px;
    --logo-font-size: 34px;
    --nav-a-font-size: 17px;
    --sign-up-a-font-size: 17px;
    --sign-up-a-width: 100px;
    --sign-up-a-height: 35px;
    padding: 25px 60px;
    padding-left: 100px;
  }
}

@media (max-width: 768px) {
  /* md */
  .header-container {
    --header-height: 60px;
    --logo-font-size: 30px;
    --nav-a-font-size: 15px;
    --sign-up-a-font-size: 15px;
    --sign-up-a-width: 90px;
    --sign-up-a-height: 30px;
    padding: 25px 40px;
    padding-left: 80px;
  }
}

@media (max-width: 640px) {
  /* sm */
  .header-container {
    --header-height: 50px;
    --logo-font-size: 26px;
    --nav-a-font-size: 13px;
    --sign-up-a-font-size: 13px;
    --sign-up-a-width: 80px;
    --sign-up-a-height: 25px;
    padding: 25px 20px;
    padding-left: 60px;
  }
}
</style>
