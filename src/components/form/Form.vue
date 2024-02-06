<template>
    <div class="container">
        <form-tabs :active-tab="tab" @tab-change="updateTab" />
    </div>
    <div class="container">
        <vee-form @submit="onSubmit" :validation-schema="schema">
            <Finished ref="fields" v-if="tab === 'finished'" />
            <Unfinished ref="fields" v-if="tab === 'unfinished'" />
            <button type="submit" class="btn btn-primary">Submit</button>
        </vee-form>
    </div>
</template>
<script>

import Finished from '@/components/form/fields/Finished.vue';
import Unfinished from '@/components/form/fields/Unfinished.vue';
import FormTabs from '@/components/form/Tabs.vue';
import useFormStore from '@/stores/form.js';
import { mapStores } from 'pinia';

export default {
    name: 'LoggerForm',
    components: {
        FormTabs,
        Finished,
        Unfinished
    },
    emits: ['form-submitted'],
    computed: {
        ...mapStores(useFormStore)
    },
    data() {
        return {
            tab: 'finished',
            schema: {
                // pr_release: 'required'
            }
        };
    },
    methods: {
        updateTab(tab) {
            this.tab = tab;
        },
        onSubmit(values) {
            this.formStore.values = this.prepareJson(values);
            this.$emit('form-submitted', 1);
        },
        prepareJson(values) {
            const result = [];
            const valuesKeys = Object.keys(values); // same names are used for refs

            for (const element of valuesKeys) {
                result.push({

                    //TODO: refactor child's refs
                    label: this.$refs['fields'].$refs[element].label,
                    data: values[element],
                    inputType: this.$refs['fields'].$refs[element].$el,
                    name: this.$refs['fields'].$refs[element].label.name
                });
            }

            return result;
        }
    }
};
</script>
