<template>
    <header>
        <!--        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->
    </header>

    <main>
        <div class="container">
            <div class="row align-items-start">
                <div class="col">
                    <logger-form />
                </div>
                <div class="col">PREVIEW</div>
            </div>
        </div>
    </main>
</template>

<script>
import LoggerForm from '@/components/LoggerForm.vue';

export default {
    name: 'App',
    components: {
        LoggerForm
    },
    data() {
        return {};
    }
};
</script>
