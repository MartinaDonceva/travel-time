<template>
    <div class="container py-5">
        <h1 class="text-center display-2 mb-3">Планини
        </h1>
        <div v-for="i in 5">
            <div class="display-6 mb-2">
                1. Осогово
            </div>
            <div class="row d-flex flex-row" :class="{'flex-row-reverse': i % 2}">
                <div class="col col-12 col-md-6 mb-3">
                    <div class="fs-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                        the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                        desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
                <div class="col col-12 col-md-6 mb-3">
                    <img src="../assets/images/image1.jpg" alt="Image" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category"
    }
</script>

<style scoped>

</style>