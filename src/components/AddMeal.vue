<template>
<v-app id="inspire">
    <v-row justify="center">
        <v-card width="600px" height="600px">
            <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Add Meal</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Date*" :rules="generalRules" v-model="date" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Time*" :rules="generalRules" v-model="time" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Text*" :rules="generalRules" v-model="text" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Calorie*" :rules="generalRules" v-model="numOfCalories" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <router-link to="/meals">
                    <v-btn color="blue darken-1" text>Back</v-btn>
                </router-link>
                <v-btn @click="confirm" small color="success">Add Meal</v-btn>
            </v-card-actions>
        </v-card>
    </v-row>
</v-app>
</template>

<script>
import {
    addMeal
} from '@/api';
import moment from 'moment';
import router from '../router';
export default {
    data() {
        return {
            date: moment().format('DD-MM-YYYY'),
            time: moment().format('HH:mm'),
            text: '',
            numOfCalories: '',
            generalRules: [
                v => !!v || 'This value is required',
            ],
        }
    },
    methods: {
        async confirm() {
            await addMeal({
                    date: this.date,
                    time: this.time,
                    text: this.text,
                    numOfCalories: this.numOfCalories,
                },
                router.push({
                    name: 'Meals'
                })
            )
        },
    },
}
</script>
