import axios from 'axios';
import { API_ROOT, TYPE } from './apiConfig';

export async function getUsers(num: number) {
    try {
        const response = await axios.get(`${API_ROOT}${TYPE.USERS}/${num}`);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}