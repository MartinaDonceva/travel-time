<template>
    <div class="container m-auto">
        <form>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email">
            </div>
            <div class="mb-3">
                <label for="Pass" class="form-label">Password</label>
                <input type="password" class="form-control" id="Pass">
            </div>
            <button type="submit" class="btn btn-primary">Log in</button>
            <router-link :to="{name: 'register'}" class="btn btn-primary">
                Sign in
            </router-link>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>