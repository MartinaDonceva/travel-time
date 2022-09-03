<template>
  <div>
    <div v-if="category" class="container py-4">
      <h1 class="text-center display-2 mb-3">
        {{category.name}}
      </h1>
      <div class="mb-4" v-for="(lecture, i) in category.lectures" :key="lecture.id">
        <div class="display-6 mb-2">
          {{i+1}}. {{lecture.title}}
        </div>
        <div class="row d-flex flex-row" :class="{'flex-row-reverse': i % 2}">
          <div class="col col-12 col-md-6 mb-3 d-flex align-items-center">
            <div class="fs-6">
              {{lecture.paragraph}}
            </div>
          </div>
          <div class="col col-12 col-md-6 mb-3 d-flex align-items-center">
            <img :src="lecture.image" alt="Image" class="img-fluid">
          </div>
        </div>
      </div>
      <div class="text-end">
        <router-link :to="{name: 'quiz', params: {id: category.id}}" class="btn btn-primary">
          Започни со квиз
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {BASE_URL} from "@/constants";

export default {
  name: "Category",
  data() {
    return {
      category: null
    }
  },
  methods: {
    async loadCategory() {
      const res = await this.axios.get(BASE_URL + '/categories/' + this.$route.params.id)
      this.category = res.data.data
    }
  },
  mounted() {
    this.loadCategory()
  },
  watch: {
    '$route': function() {
      this.loadCategory()
    }
  }
}
</script>

<style scoped>

</style>