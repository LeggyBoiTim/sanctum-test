<script setup lang="ts">
import { onMounted } from 'vue';
import { deleteAuth, fetchUser, getAuth } from './domains/auth/store';
import { useRouter } from 'vue-router';

const auth = getAuth();
const router = useRouter();

onMounted(() => {
    fetchUser();
});

const handleLogout = async () => {
    await deleteAuth();
    router.push('/');
};
</script>

<template>
    <nav>
        <RouterLink to="/">Home </RouterLink>
        <RouterLink v-if="!auth.isAuthenticated" to="/login">| Login </RouterLink>
        <button v-if="auth.isAuthenticated" @click="handleLogout" style="cursor: pointer;">| Logout </button>
    </nav>
    <router-view></router-view>
</template>