<template>
<div id="app">
    <v-app id="inspire">
        <v-card>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field label="Start Date" v-model="startDate"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field label="End Date" v-model="endDate"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field label="Start Time" v-model="startTime"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field label="End Time" v-model="endTime" requied></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="filterMeals">Filter</v-btn>
            </v-card-actions>
        </v-card>
        <v-col v-if="currentUser.role == 'admin'" cols="12" sm="6">
            <v-select :items="users" return-object label="User" item-text="name" v-model="user" @change="userChange"></v-select>
        </v-col>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Days</th>
                        <th class="text-left">Times</th>
                        <th class="text-left">Meals</th>
                        <th class="text-left">Calories</th>
                        <th class="text-right">
                            <router-link to="/addmeal">
                                <v-btn color="primary" small right>
                                    Add Meal
                                </v-btn>
                            </router-link>
                        </th>
                    </tr>
                </thead>
                <tbody class="normalCalorie">
                    <tr v-for="meal in meals" :key="meal._id">
                        <td class="text-left">{{ meal.date }}</td>
                        <td class="text-left">{{ meal.time }}</td>
                        <td class="text-left">{{ meal.text }}</td>
                        <td class="text-left">{{ meal.numOfCalories }}</td>
                        <td class="text-right">
                            <router-link :to="`/changemeal/${meal._id}`">
                                <v-btn fab color="primary" small right>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </router-link>
                            <v-btn @click="deleteMeal(meal._id)" fab color="error" small right>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-app>
</div>
</template>

<script>
import {
    deleteMeal,
    fetchUsers,
    fetchMealsByUser,
} from '@/api';

export default {
    data() {
        return {
            startDate: '',
            endDate: '',
            startTime: '',
            endTime: '',
            meals: [],
            currentUser: '',
            user: '',
        }
    },
    async created() {
        await this.getUsers();
        this.user = this.currentUser;
        this.getMeals();
    },
    methods: {
        async getMeals() {
            const {
                meals
            } = await fetchMealsByUser(this.user._id);
            this.meals = meals;
        },

        async deleteMeal(id) {
            await deleteMeal(id);
            await this.getMeals();
            alert("Meal was deleted!!!")
        },
        async filterMeals() {
            const {
                meals
            } = await fetchMealsByUser(this.user._id);
            this.meals = meals.filter((item) => {
                return item.date >= this.startDate &&
                    item.date <= this.endDate &&
                    item.time >= this.startTime &&
                    (!this.endTime || item.time <= this.endTime);
            });
        },

        async getUsers() {
            const {
                users,
                user
            } = await fetchUsers();
            this.users = users;
            this.currentUser = user;
        },
        async userChange() {
            return this.getMeals();
        }
    },
}
</script>
