<template>
    <div class="preview">
        <div class="preview__source" v-if="this.formStore.values.length">
            <span>@assignee</span>
            <br />
            <br />
            <span>Tasks is ready for testing.</span>
            <br />
            <template v-for="value in this.formStore.values" :key="value.name">
                <preview-row :label="`${value.label}`" :data="value.data" />
            </template>
        </div>
        <copy-btn />
    </div>
</template>
<script>
import PreviewRow from '@/components/preview/Row.vue';
import useFormStore from '@/stores/form.js';
import { mapStores } from 'pinia';
import CopyBtn from '@/components/preview/CopyBtn.vue';

export default {
    name: 'LoggerPreview',
    components: {
        CopyBtn,
        PreviewRow
    },
    computed: {
        ...mapStores(useFormStore)
    },
    data() {
        return {};
    }
};
</script>

<style>
code {
}
</style>
