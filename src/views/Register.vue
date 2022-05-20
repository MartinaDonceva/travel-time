<template>
    <div class="container m-auto">
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name">
            </div>
            <div class="mb-3">
                <label for="surname" class="form-label">Surname</label>
                <input type="text" class="form-control" id="surname">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email">
            </div>
            <div class="mb-3">
                <label for="Pass" class="form-label">Password</label>
                <input type="password" class="form-control" id="Pass">
            </div>
            <div class="mb-3">
                <label for="confPass" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confPass">
            </div>
            <router-link :to="{name: 'quiz'}" class="btn btn-primary">
                Register and attempt quiz
            </router-link>
        </form>
    </div>

</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>

</style>