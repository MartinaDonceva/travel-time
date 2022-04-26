<template>
    <div class="container py-5">
        <div class="text-center display-6 mb-3">
            Квиз за Планини
        </div>
        <div class="row">
            <div class="col col-12 col-md-6 mx-auto">
                <div class="ratio ratio-16x9 mb-3">
                    <img src="../assets/images/image1.jpg" class="img-fluid object-fit-cover">
                </div>
                <div class="fs-5 fw-bold mb-2">
                    {{currentQuestion.question}}
                </div>
                <div v-for="answer in currentQuestion.answers" class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" :id="answer">
                    <label class="form-check-label" :for="answer">
                        {{answer}}
                    </label>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-3">
                    <button class="btn btn-primary" @click="prevQuestion" v-if="currQuestionId > 0">
                        Назад
                    </button>
                    <div v-else></div>
                    <button class="btn btn-primary" @click="nextQuestion">
                        <span v-if="currQuestionId < questions.length - 1">Следно</span>
                        <router-link v-else :to="{name: 'finishedQuiz'}">
                            Заврши
                        </router-link>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Quiz",
        data() {
            return {
                questions: [
                    {
                        question: 'Каде се наоѓа планината осогово?',
                        answers: [
                            'Кочани',
                            'Скопје',
                            'Штип',
                            'Радовиш'
                        ]
                    },
                    {
                        question: 'На која надморска висина е Осогово?',
                        answers: [
                            '1900м',
                            '3000м',
                            '100м',
                            '4500м'
                        ]
                    }
                ],
                currentQuestion: null,
                currQuestionId: 0
            }
        },
        mounted() {
            this.currentQuestion = this.questions[0]
        },
        methods: {
            nextQuestion() {
                if (this.currQuestionId === this.questions.length - 1) return;
                this.currentQuestion = this.questions[++this.currQuestionId]
            },
            prevQuestion() {
                if (this.currQuestionId === 0) return
                this.currentQuestion = this.questions[--this.currQuestionId]
            }
        }
    }
</script>

<style scoped>

</style>