<template>
    <div class="w-75 flex mx-auto">
        <p class="p-2 mx-3 py-5 fs-4">Profile: {{ userStore.user.name }}</p>
        <div class="row">
            <div class="col-3 px-2">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
            </div>
            <div class="col-9 py-4 p-5">
                
            </div>
        </div>
    </div>
</template>

<script setup>

import {useUserStore} from "../stores/user.js";

const userStore = useUserStore()

</script>

<style scoped>

</style>
