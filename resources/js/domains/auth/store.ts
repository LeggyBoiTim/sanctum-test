import { ref } from "vue";
import { deleteRequest, postRequest } from "../../services/http";

const state = ref({
    user: null,
    isAuthenticated: false,
});

export const getAuth = () => state.value;

export const createAuth = async (credentials) => {
    const { data } = await postRequest('auth', credentials);
    if (data?.user) {
        state.value.user = data.user;
        state.value.isAuthenticated = true;
    }
    return data;
};
export const deleteAuth = async () => {
    await deleteRequest('auth');
    state.value.user = null;
    state.value.isAuthenticated = false;
};



// import { storeModuleFactory } from '../../services/store';
// import { onMounted } from 'vue';

// const authStore = storeModuleFactory('auth');

// authStore.actions.getAll();

// // getters
// export const getAuth = authStore.getters.all;

// // actions
// export const createAuth = async (newAuth) => {
//     await authStore.actions.create(newAuth);
// };

// export const deleteAuth = async (id) => {
//     await authStore.actions.delete(id);
// };