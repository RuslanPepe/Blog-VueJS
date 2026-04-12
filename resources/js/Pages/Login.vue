<template>
    <form class="p-4 d-grid justify-content-center">
        <div class="mb-3">
            <label for="email" class="form-label">Почта</label>
            <input type="email" class="form-control" v-model="userStore.userLoginData.email" id="email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Пароль</label>
            <input type="password" v-model="userStore.userLoginData.password" autocomplete="off" class="form-control" id="password">
        </div>
        <button type="button" @click.prevent="userStore.userLogin()" class="btn btn-primary">Войти</button>
    </form>

    {{ userStore.userLoginData }}
</template>

<script setup>
import {useUserStore} from "../stores/user.js";

const userStore = useUserStore()

</script>

<style scoped>

</style>
