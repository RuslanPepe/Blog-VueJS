<template>
    <button type="button" class="page-item mx-2 paginate-link" :style="!props.url ? 'color: rgba(0,0,0,.6); cursor: default' : ''" :disabled="!props.url" @click="emit('paginate', props.url)">{{ props.label }}</button>
</template>

<script setup>

const props = defineProps({
    url: '',
    label: ''
})

const emit = defineEmits(['paginate'])

</script>

<style scoped>
.paginate-link {
    cursor: pointer;
}
</style>
