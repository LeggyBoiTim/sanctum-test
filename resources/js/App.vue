<script setup lang="ts">
import { deleteAuth } from './domains/auth/store';

</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
         |
        <RouterLink to="/login">Login</RouterLink>
         | 
        <button @click="deleteAuth()" style="cursor: pointer;">Verwijder</button>
    </nav>
    <router-view></router-view>
</template>