<template>
    <div>
        <header-component></header-component>
        <main>
            <div class="grid">
                <div class="row">
                    <div class="col col-8-of-12 center">
                        <h1 class="title">Express Vue</h1>
                        <p>VueJS Middleware for ExpressJS.</p>
                        <p>Website coming soon</p>
                    </div>
                </div>
            </div>
        </main>
        <footer-component></footer-component>
    </div>
</template>

<script>
import headerComponent from "../../components/headerComponent.vue";
import footerComponent from "../../components/footerComponent.vue";
export default {
    components: {
        headerComponent,
        footerComponent
    },
    data: function () {
        return {
            title: ""
        }
    }
}
</script>