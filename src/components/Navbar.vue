<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link :to="{name: 'home'}" class="navbar-brand" href="#">Travel Time</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" :to="{name: 'home'}">Почетна
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Категории
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <router-link :to="{name: 'category'}" class="dropdown-item" href="#">Планини
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'category'}" class="dropdown-item" href="#">Реки</router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'category'}" class="dropdown-item" href="#">Езера</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="d-flex">
                    <router-link :to="{name: 'login'}" class="me-2 text-white fs-6 text-decoration-none">
                      Најава
                    </router-link>
                    <router-link :to="{name: 'register'}" class="text-white fs-6 text-decoration-none">
                      Регистрација
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>