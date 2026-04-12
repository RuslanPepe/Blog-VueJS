<template>
    <div class="w-75 flex mx-auto">
        <p class="p-2 mx-3 mb-2 py-5 fs-4 d-inline-block">{{ userStore.user?.name }}</p>
        <div class="row">
            <div class="col-3 px-2" >
                <ul class="list-group list-group-flush" style="cursor: pointer; user-select: none">
                    <li class="list-group-item" @click="profileStore.setStatus(0)">Профиль</li>
<!--                    <li class="list-group-item" @click="profileStore.setStatus(1)">Записи(посты)</li>-->
                    <li class="list-group-item" @click="profileStore.setStatus(2)">...</li>
                    <li class="list-group-item" @click="profileStore.setStatus(3)">Данные <br>учетной записи</li>
                    <li class="list-group-item" @click="profileStore.setStatus(4)">...</li>
                </ul>
            </div>
<!--            <div class="col-9 py-4 p-5 d-flex" :class="{'justify-content-around': profileStore.status === 3}">-->
<!--            <div class="col-9 py-4 p-5" :class="{'justify-content-around': profileStore.status === 3}">-->
            <ProfileComponent v-if="profileStore.status === 0"/>
            <ProfileDataComponent v-else-if="profileStore.status === 3"/>
<!--            </div>-->
        </div>
    </div>

</template>

<script setup>
import {useUserStore} from "../stores/user.js";
import {useProfileStore} from "../stores/profile.js";
import ProfileDataComponent from "../Components/ProfileDataComponent.vue";
import ProfileComponent from "../Components/ProfileComponent.vue";
import {onBeforeMount, onBeforeUnmount} from "vue";

const userStore = useUserStore()
const profileStore = useProfileStore()

onBeforeUnmount(() => {
    profileStore.userPosts()
})

// console.log(userStore)


</script>

<style scoped>

</style>
