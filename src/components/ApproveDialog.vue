<template>
<v-dialog v-model="dialog" max-width="400px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn color="error" dark v-bind="attrs" v-on="on" fab x-small right>
            <v-icon small>mdi-delete</v-icon>
        </v-btn>
    </template>
    <v-card>
        <v-card-title class="headline">Are you sure?</v-card-title>
        <v-card-actions>
            <v-btn @click="close">
                No
            </v-btn>
            <v-spacer />
            <v-btn @click="submit">
                Yes
            </v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
        };
    },
    props: ['id'],
    methods: {
        submit() {
            this.$emit('approve', this.id);
            this.close();
        },
        close() {
            this.dialog = false;
            this.$emit('dialClose');
        },
    },
};
</script>
