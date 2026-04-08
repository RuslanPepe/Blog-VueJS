<template>
    <form class="p-4 d-grid justify-content-center">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Имя</label>
            <input type="text" class="form-control" id="name" v-model="userStore.user.name" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Почта</label>
            <input type="email" class="form-control" v-model="userStore.user.email" id="email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Пароль</label>
            <input type="password" v-model="userStore.user.password" class="form-control" id="password">
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
