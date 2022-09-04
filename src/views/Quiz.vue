<template>
  <div class="container py-5" v-if="category && currentQuestion">
    <router-link :to="{name: 'category', params: {id: category.id}}">
      < Назад кон категоријата
    </router-link>
    <div class="text-center display-6 mb-3">
      Квиз за {{category.name}}
    </div>
    <div class="row">
      <div class="col col-12 col-md-6 mx-auto">
        <div class="ratio ratio-16x9 mb-3">
          <img :src="category.lectures[0].image" class="img-fluid object-fit-cover" alt="">
        </div>
       <div v-if="!show">
         <div class="fs-5 fw-bold mb-2">
           {{ currentQuestion.text }}
         </div>
         <div v-for="answer in currentQuestion.question_answers" class="form-check">
           <input class="form-check-input" type="radio" name="flexRadioDefault" :id="answer"
                  :value="answer" v-model="choice">
           <label class="form-check-label" :for="answer">
             {{ answer.text }}
           </label>
         </div>
         <div v-if="choice" class="fs-6 mb-3 text-decoration-underline text-primary cursor-pointer"
         @click="choice = null">
           Отселектирај избор
         </div>
         <div class="d-flex align-items-center justify-content-between mt-3">
           <button class="btn btn-primary" @click="prevQuestion" v-if="currQuestionId > 0">
             Назад
           </button>
           <div v-else></div>
           <button v-if="currQuestionId < questions.length - 1" class="btn btn-primary" @click="nextQuestion">
             <span>Следно</span>
           </button>
           <button v-else @click="show = true">
             Заврши
           </button>
         </div>
       </div>
        <div v-else class="text-center fs-3 fw-bold">
          На квизот имавте {{correctAnswers}} точни прашања од вкупно {{category.questions.length}} прашања
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {BASE_URL} from "@/constants";

export default {
  name: "Quiz",
  data() {
    return {
      category: null,
      questions: null,
      currentQuestion: null,
      currQuestionId: 0,
      choice: null,
      correctAnswers: 0,
      show: false
    }
  },
  watch: {
    '$route': async function() {
      await this.loadCategory()
    }
  },
  async mounted() {
    await this.loadCategory()
    this.currentQuestion = this.questions[0]
  },
  methods: {
    async loadCategory() {
      const res = await this.axios.get(BASE_URL + '/categories/' + this.$route.params.id)
      this.category = res.data.data
      this.questions = res.data.data.questions
    },
    nextQuestion() {
      if (this.currQuestionId === this.questions.length - 1) return;
      if (this.choice)
        this.correctAnswers += this.choice.correct
      this.choice = null
      this.currentQuestion = this.questions[++this.currQuestionId]
    },
    prevQuestion() {
      if (this.currQuestionId === 0) return
      --this.correctAnswers
      this.choice = null
      this.currentQuestion = this.questions[--this.currQuestionId]
    }
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>