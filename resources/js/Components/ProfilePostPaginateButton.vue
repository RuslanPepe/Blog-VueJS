<template>
    <button type="button" class="mx-2 paginate-link py-3" :style="!props.url ? 'color: rgba(0,0,0,.6); cursor: default' : ''" :disabled="!props.url" @click="profileStore.postGetPaginate(url)">{{ props.label }}</button>
</template>

<script setup>
import {useProfileStore} from "../stores/profile.js";

const props = defineProps({
    url: '',
    label: ''
})

const profileStore = useProfileStore()

</script>

<style scoped>
.paginate-link {
    cursor: pointer;
    border: none;
    background: none;
    //border-radius: 5px;
}
</style>
