<template>
    <b>Home</b>
    <div v-if="auth.isAuthenticated">
        <p>You are logged in.</p>
        <p>Welcome, {{ auth.user?.name }}!</p>
    </div>
    <div v-else>
        <p>You are not logged in.</p>
    </div>
</template>

<script setup>
import { getAuth } from '../store';

const auth = getAuth();
</script>