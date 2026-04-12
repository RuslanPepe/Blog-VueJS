<template>
    <div class="col-9 py-4 p-5 d-flex justify-content-around">
        <div class="col-5">
            <div class="mb-3">
                <label for="nameInput" class="form-label">Имя</label>
                <input type="text" :disabled="!profileStore.profileState.isEdited" class="form-control" v-model="userStore.user.name" id="nameInput">
            </div>
        </div>
        <div class="col-5">
            <div class="mb-3">
                <label for="emailInput" class="form-label">Почта</label>
                <input type="email" :disabled="!profileStore.profileState.isEdited" class="form-control" v-model="userStore.user.email" id="emailInput">
            </div>
        </div>
    </div>
</template>

<script setup>

import {useUserStore} from "../stores/user.js";
import {useProfileStore} from "../stores/profile.js";
import ProfileComponent from "./ProfileComponent.vue";

const userStore = useUserStore()
const profileStore = useProfileStore()

</script>

<style scoped>

</style>
