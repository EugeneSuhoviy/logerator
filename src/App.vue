<template>
    <main>
        <div class="container">
            <div class="row align-items-start">
                <div class="col">
                    <logger-form />
                </div>
                <div class="col">
                    <logger-preview />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import LoggerForm from '@/components/LoggerForm.vue';
import LoggerPreview from "@/components/LoggerPreview.vue";

export default {
    name: 'App',
    components: {
        LoggerForm,
        LoggerPreview
    },
    data() {
        return {};
    }
};
</script>
