<template>
    <vee-form @submit="onSubmit" :validation-schema="schema">
        <textarea-field :label="'Changelog'" />

        <textarea-field :label="'QA Notes'" />

        <textarea-field :label="'Deployment notes'" />

        <input-link-field :name="'link_store'" :label="'Link to Store'" />
        <input-link-field :name="'screenshot'" :label="'Attached screenshots'" />

        <input-link-field :name="'pr_staging'" :label="'PR Staging'" />
        <input-link-field :name="'pr_release'" :label="'PR Release'" />

        <label for="basic-url" class="form-label">Environment</label>
        <div class="input-group mb-3">
            <div class="input-group-text">
                <input
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                />
            </div>
            <select class="form-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">Staging</option>
                <option value="2">Production</option>
                <option value="3">Pre Production</option>
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </vee-form>
</template>
<script>
import TextareaField from '@/components/fields/Textarea.vue';
import InputLinkField from '@/components/fields/InputLink.vue';
import useFormStore from '@/stores/form.js';
import { mapStores } from 'pinia';

export default {
    name: 'FormFinished',
    components: {
        TextareaField,
        InputLinkField
    },
    computed: {
        ...mapStores(useFormStore)
    },
    data() {
        return {
            schema: {
                pr_release: 'required'
            }
        };
    },
    methods: {
        onSubmit(values) {
            this.formStore.values = values;

            console.log('log_:', values);
        }
    }
};
</script>
