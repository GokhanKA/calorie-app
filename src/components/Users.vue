<template>
<div id="app">
    <v-app id="inspire">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Users</th>
                        <th class="text-left">Roles</th>
                        <th class="text-left">Calorie Limit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.username">
                        <td class="text-left">{{ user.username }}</td>
                        <td class="text-left">{{ user.role }}</td>
                        <td class="text-left">{{ user.dailyCalorieLimit }}</td>
                        <td class="text-right">
                            <router-link :to="`/user/${user._id}`">
                                <v-btn color="primary" fab small dark right>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </router-link>
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
    fetchUsers,
} from '@/api';
export default {
    data() {
        return {
            users: [],
        }
    },
    created() {
        this.getUsers();
    },
    methods: {
        async getUsers() {
            const {
                users
            } = await fetchUsers();
            this.users = users;
        },
    }
}
</script>
