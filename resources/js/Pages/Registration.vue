<template>
    <form class="p-4 d-grid justify-content-center">
        <div class="mb-3">
            <label for="name" class="form-label">Имя</label>
            <input type="text" class="form-control" id="name" v-model="userStore.userRegData.name" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Почта</label>
            <input type="email" class="form-control" v-model="userStore.userRegData.email" id="email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Пароль</label>
            <input type="password" v-model="userStore.userRegData.password" autocomplete="off" class="form-control" id="password">
        </div>
        <div class="mb-3">
            <label for="password_confirmation" class="form-label">Повторите пароль</label>
            <input type="password" v-model="userStore.userRegData.password_confirmation" autocomplete="off" class="form-control" id="password_confirmation">
        </div>
        <button type="button" @click.prevent="userStore.userRegister()" class="btn btn-primary">Submit</button>
    </form>

    {{ userStore.user }}
</template>

<script setup>
import {useUserStore} from "../stores/user.js";

const userStore = useUserStore()

</script>

<style scoped>

</style>
