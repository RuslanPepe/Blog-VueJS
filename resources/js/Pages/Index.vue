<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link :to="{ name: 'post.index' }" class="navbar-brand">Blog</router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name: 'post.index'}" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'post.create'}" class="nav-link">Create</router-link>
                    </li>
                </ul>
            </div>
            <router-link v-show="!userStore.isAuth" :to="{ name: 'user.reg' }" class="nav-link p-2">Reg</router-link>
            <router-link v-show="!userStore.isAuth" :to="{ name: 'user.login' }" class="nav-link p-2">Login</router-link>
            <button class="nav-link p-2" type="button" @click.prevent="userStore.userLogout">Logout</button>
<!--            //logout-->
        </div>
    </nav>
    {{ userStore.isAuth }}
    <router-view/>
</template>

<script setup>
import {useUserStore} from "../stores/user.js";
// import {onBeforeMount, onMounted} from "vue";

const userStore = useUserStore()

// onBeforeMount(() => {
    // userStore.userCheckAuth()
    // console.log(userStore.isAuth)
// })

</script>
