<template>
    <b>Login</b>
    <Form :user="user" @submit="handleSubmit" />
</template>

<script setup>
import { useRouter } from 'vue-router';
import { createAuth } from '../store';
import Form from '../components/Form.vue';
import { ref } from 'vue';
import axios from 'axios';

axios.get('/sanctum/csrf-cookie').then(response => {
    // Login
});

const router = useRouter();

const user = ref({
    email: '',
    password: '',
})

const handleSubmit = async (data) => {
    await createAuth(data);
    router.push({ name: 'home' });
}
</script>