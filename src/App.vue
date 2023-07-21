<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0" :class="{ 'show': isMenuOpen }">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Inapoi</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

