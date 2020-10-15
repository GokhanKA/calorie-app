<template>
<v-app id="inspire">
    <v-row justify="center">
        <v-card width="600px" height="500px">
            <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Password</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Old Password*" type="password" :rules="generalRules" v-model="oldPassword" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="New Password*" type="password" :rules="generalRules" v-model="newPassword" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="New Password*" type="password" :rules="generalRules" v-model="newPasswordOne" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <router-link to="/users">
                    <v-btn color="blue darken-1" text>Back</v-btn>
                </router-link>
                <v-btn @click="changePassword()" dark small color="primary">Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-row>
</v-app>
</template>

<script>
import router from '../router';
import {
    updatePassword,
} from '@/api';

export default {
    data() {
        return {
            oldPassword: '',
            newPassword: '',
            newPasswordOne: '',
            generalRules: [
                v => !!v || 'This area is required',
            ],
        }
    },
    methods: {
        async changePassword() {
            if (this.newPassword === this.newPasswordOne) {
                await updatePassword(this.oldPassword, this.newPassword);
                router.push({
                    name: 'Meals'
                });
            } else {
                alert('Password did not match!!!')
            }
        }
    }
}
</script>
