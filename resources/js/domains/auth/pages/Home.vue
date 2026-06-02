<template>
    <b>Home</b>
    <div v-if="auth.isAuthenticated">
        <p>You are logged in.</p>
    </div>
    <div v-else>
        <p>You are not logged in.</p>
    </div>
    <div>
        <button @click="handleMe">Go to Me</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getAuth } from '../store';

const auth = getAuth();
const router = useRouter();

const handleMe = async () => {
    router.push('/me');
};
</script>