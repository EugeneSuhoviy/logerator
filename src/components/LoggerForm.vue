<template>
    <div class="container">
        <form-tabs :active-tab="tab" @tab-change="updateTab" />
    </div>
    <div class="container">
        <div v-if="tab === 'finished'">
            <form-finished />
        </div>
        <form-unfinished v-if="tab === 'unfinished'" />
    </div>
</template>
<script>
import FormFinished from '@/components/FormFinished.vue';
import FormUnfinished from '@/components/FormUnfinished.vue';
import FormTabs from '@/components/FormTabs.vue';

export default {
    name: 'LoggerForm',
    components: {
        FormFinished,
        FormUnfinished,
        FormTabs
    },
    data() {
        return {
            tab: 'finished'
        };
    },
    methods: {
        updateTab(tab) {
            this.tab = tab;
        }
    }
};
</script>
