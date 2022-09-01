<template>
  <div class="container py-5">
    <div class="text-center">
      <h4 class="fw-bold mb-5">Најава</h4>
    </div>
    <form class="col col-12 col-md-8 col-lg-6 col-xl-5 mx-auto">
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="email" placeholder="name@example.com">
        <label for="email">Електронска пошта</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="password" placeholder="Password">
        <label for="password">Лозинка</label>
      </div>
      <div class="text-center mb-3">
        <button class="btn btn-primary rounded rounded-3">
          Најави се
        </button>
      </div>
    </form>
    <div class="text-center">
      Немате сеуште регистрирано сметка. Регистрирајте
      <router-link :to="{name:'register'}">овде</router-link>
      .
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
input {
  border: 1px solid black;
}
</style>