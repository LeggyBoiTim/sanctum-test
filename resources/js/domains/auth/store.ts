import { ref } from "vue";
import { deleteRequest, getRequest, postRequest } from "../../services/http";

const state = ref({
    user: null,
    isAuthenticated: false,
});

export const getAuth = () => state.value;

export const fetchUser = async () => {
    try {
        const { data } = await getRequest('user');
        if (data?.user) {
            state.value.user = data.user;
            state.value.isAuthenticated = true;
        }
    } catch {
        state.value.user = null;
        state.value.isAuthenticated = false;
    }
};

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
