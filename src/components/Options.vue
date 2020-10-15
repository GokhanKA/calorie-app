<template>
<v-app id="inspire">
    <v-row justify="center">
        <v-card width="600px" height="400px">
            <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Options Page</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field label="Role*" type="text" v-model="role" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field label="New Role*" type="text" v-model="newRole" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field label="Daily Calorie Limit*" type="text" v-model="dailyCalorieLimit" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field label="New Daily Calorie Limit*" type="text" v-model="newDailyCalorieLimit" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <ApproveDialog @approve="updateUser">
                    <v-btn dark small color="warning">
                        Save</v-btn>
                </ApproveDialog>
            </v-card-actions>
        </v-card>
    </v-row>
</v-app>
</template>

<script>
export default {
    data() {
        return {
            role: '',
            newRole: '',
            dailyCalorieLimit: '',
            newDailyCalorieLimit: '',
        }
    }
}
</script>
