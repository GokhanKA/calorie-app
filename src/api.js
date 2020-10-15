import axios from 'axios';
import router from './router';
import store from './store';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.common['Authorization'] = 'jwt ' + localStorage.getItem('user');

export async function login({ username, password }) {
    try { 
    const response = await axios.post('/users/login', {
        username,
        password
    }, {
        validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
        }
    });
    const { token, error } = response.data;
    if(error) {
        return alert(error);
    }
    console.log(token);
    localStorage.setItem('user',token);
    store.commit('LOGIN');
    router.push({ name: 'ListOfDays' });
    console.log('TRACE');
    console.dir(response);
    axios.defaults.headers.common['Authorization'] = 'jwt ' + localStorage.getItem('user');
    return response;
    } catch(err) {
        console.log('TRACE2');
        console.log(err);
    }
}

export async function register({ name, username, password, role, dailyCalorieLimit }) {
    await axios.post('/users/register', {
        name,
        username,
        password,
        role,
        dailyCalorieLimit,
    });
    router.push({ name: 'Meals' })
}

export async function fetchMeals() {
    const response = await axios.get('/meals');
    return response.data;
}

export async function fetchMealsByUser(user) {
    const response = await axios.get(`/meals/${user}`);
    return response.data;
}

export async function fetchMeal(id) {
    const response = await axios.get(`/meal/${id}`);
    return response.data;
}

export async function addMeal({ date, time, text, numOfCalories }) {
    await axios.post('/meals', {
        date,
        time,
        text,
        numOfCalories,
    })}

export async function deleteMeal(id) {
    await axios.delete(`/meal/${id}`);
}

export async function updateMeal(meal) {
    await axios.put(`/meal/${meal._id}`, meal);
}

export async function updateUser(user) {
    await axios.put(`/user/edituser/${user._id}`, user);
    router.push({
        name: 'Users'
    });
}

export async function updatePassword(oldPassword, newPassword) {
    await axios.put(`/user/password`, 
    {
        oldPassword,
        newPassword,
    }
   );
}
export async function fetchUsers() {
    const { data } = await axios.get('/users');
    const { user } = data;
    store.commit('SET_USER', { user });
    return data;
}

export async function fetchUser(userId) {
    const response = await axios.get(`/user/${userId}`);
    return response.data;
}