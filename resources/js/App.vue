<script setup lang="ts">
import { deleteAuth, getAuth } from './domains/auth/store';

const auth = getAuth();
</script>

<template>
    <nav>
        <RouterLink to="/">Home </RouterLink>
        <RouterLink v-if="!auth.isAuthenticated" to="/login">| Login </RouterLink>
        <button v-if="auth.isAuthenticated" @click="deleteAuth()" style="cursor: pointer;">| Logout </button>
    </nav>
    <router-view></router-view>
</template>