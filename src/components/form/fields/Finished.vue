<template>
    <fieldset>
        <legend>Finished changelog:</legend>

        <textarea-field ref="changelog" :name="'changelog'" :label="'Changelog'" />
        <textarea-field ref="qa_notes" :name="'qa_notes'" :label="'QA Notes'" />
        <textarea-field ref="deployment_notes" :name="'deployment_notes'" :label="'Deployment notes'" />

        <input-link-field ref="link_store" :name="'link_store'" :label="'Link to Store'" />
        <input-link-field ref="screenshot" :name="'screenshot'" :label="'Attached screenshots'" />
        <input-link-field ref="pr_release" :name="'pr_release'" :label="'PR Release'" />
        <input-link-field ref="pr_staging" :name="'pr_staging'" :label="'PR Staging'" />

        <select-field ref="environment" :name="'environment'" :label="'Environment'" />
        
    </fieldset>
</template>
<script>
import InputLinkField from '@/components/form/inputs/InputLink.vue';
import TextareaField from '@/components/form/inputs/Textarea.vue';
import SelectField from '@/components/form/inputs/Select.vue';

export default {
    name: 'Finished',
    components: { TextareaField, InputLinkField, SelectField }
};
</script>
