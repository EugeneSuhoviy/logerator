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
import LoggerForm from '@/components/form/Form.vue';
import LoggerPreview from "@/components/preview/Preview.vue";

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
