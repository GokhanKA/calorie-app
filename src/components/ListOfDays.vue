<template>
<div id="app">
    <v-app id="inspire">
        <v-col v-if="currentUser.role == 'admin'" cols="12" sm="6">
            <v-select :items="users" return-object label="User" item-text="name" v-model="user" @change="userChange"></v-select>
        </v-col>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Days</th>
                        <th class="text-left">Calories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :class="[currentUser.dailyCalorieLimit >= day.calorie ? normal : edge]" v-for="day in days" :key="day.day">
                        <td class="text-left">{{ day.day }}</td>
                        <td class="text-left">{{ day.calorie }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-app>
</div>
</template>

<script>
import {
    fetchMealsByUser,
    fetchUsers,
} from '@/api';
export default {
    data() {
        return {
            days: [],
            usersName: [],
            normal: "green",
            edge: "red",
            currentUser: '',
            user: '',
        }
    },
    async created() {
        await this.getUsers();
        this.user = this.currentUser;
        this.dailyCalorie();
    },
    methods: {
        async dailyCalorie() {
            const {
                meals
            } = await fetchMealsByUser(this.user._id);

            let days = [];
            this.days = meals.map(item => {
                return {
                    id: item._id,
                    day: item.date,
                    calorie: item.numOfCalories,
                }

            }).reduce((sum, item) => {
                if (!sum[item.day]) {
                    sum[item.day] = {
                        day: item.day,
                        calorie: 0
                    };
                    days.push(sum[item.day])
                }
                sum[item.day].calorie += item.calorie;
                return sum;
            }, {}, );
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
            return this.dailyCalorie();
        }
    }
}
</script>

<style scoped>
.green {
    background-color: rgb(159, 221, 159);
}

.red {
    background-color: rgb(235, 92, 92);
}
</style>
