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
        </div>
    </nav>
    <router-view/>
</template>

<script setup>

</script>
