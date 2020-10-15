<template>
<v-app id="inspire">
    <v-row justify="center">
        <v-card width="600px" height="600px">
            <v-toolbar color="primary" dark flat>
                <v-toolbar-title>User Profile</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Name*" v-model="user.name" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Username*" v-model="user.username" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select :items="['regular', 'user manager', 'admin',]" label="Role*" v-model="user.role" required></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field label="Calorie Limit*" v-model="user.dailyCalorieLimit" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <router-link to="/users">
                    <v-btn fab color="blue darken-1" text>Back</v-btn>
                </router-link>
                <v-btn @click="updateUser()" dark medium color="success">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-row>
</v-app>
</template>

<script>
import {
    fetchUser,
    updateUser,
} from '@/api';
import router from '../router';
export default {
    data() {
        return {
            user: '',
        }
    },
    created() {
        this.getUser(this.$route.params.id);
    },

    methods: {
        async getUser(id) {
            const {
                user
            } = await fetchUser(id);
            this.user = user;

            console.log(this.user);
        },
        async updateUser() {
            await updateUser(this.user);
            alert("Değişiklik Yapıldı");
            router.push({
                name: 'Users'
            });
        }
    }
}
</script>
