<template>
<div id="app">
    <v-app id="inspire">
        <v-row justify="center">
            <v-card width="600px" height="600px">
                <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>Change Meal</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Date*" v-model="meal.date" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Time*" v-model="meal.time" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Text*" v-model="meal.text" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Calorie*" v-model="meal.numOfCalories" required></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <router-link to="/meals">
                        <v-btn color="blue darken-1" text>Back</v-btn>
                    </router-link>
                    <v-btn @click="updateMeal" dark small color="primary">Update Meal
                    </v-btn>
                    <router-link to="/meals">
                    </router-link>
                </v-card-actions>
            </v-card>
        </v-row>
    </v-app>
</div>
</template>

<script>
import {
    updateMeal,
    fetchMeal,
} from '@/api';
import router from '../router';

export default {
    data() {
        return {
            meal: '',
            generalRules: [
                v => !!v || 'This value is required',
            ],
        }
    },
    created() {
        this.getMeal(this.$route.params.id);
    },
    methods: {
        async updateMeal() {
            await updateMeal(this.meal);
            router.push({
                name: 'Meals'
            });
        },
        async getMeal(id) {
            const {
                meal
            } = await fetchMeal(id);
            this.meal = meal;
            console.log(this.meal);
        }
    }
}
</script>
