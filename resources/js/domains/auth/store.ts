import { storeModuleFactory } from '../../services/store';
import { onMounted } from 'vue';

const authStore = storeModuleFactory('auth');

authStore.actions.getAll();

// getters
export const getAuth = authStore.getters.all;

// actions
export const createAuth = async (newAuth) => {
    await authStore.actions.create(newAuth);
};

export const deleteAuth = async (id) => {
    await authStore.actions.delete(id);
};