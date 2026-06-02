<template>
    <p>Name: {{ auth.user?.name || 'N/A' }}</p>
    <p>Email: {{ auth.user?.email || 'N/A' }}</p>
    <button @click="handleBack">Go back</button>
</template>

<script setup>
import { getAuth } from '../store';
import { useRouter } from 'vue-router';

const auth = getAuth();
const router = useRouter();

const handleBack = async () => {
    router.push('/');
};
</script>