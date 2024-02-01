<template>
    <fieldset>
        <legend>Finished changelog:</legend>

        <textarea-field :label="'Changelog'" />
        <textarea-field :label="'QA Notes'" />
        <textarea-field :label="'Deployment notes'" />

        <input-link-field ref="link_store" :name="'link_store'" :label="'Link to Store'" />
        <input-link-field ref="screenshot" :name="'screenshot'" :label="'Attached screenshots'" />
        <input-link-field ref="pr_release" :name="'pr_release'" :label="'PR Release'" />
        <input-link-field ref="pr_staging" :name="'pr_staging'" :label="'PR Staging'" />

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
    </fieldset>
</template>
<script>
import InputLinkField from '@/components/form/inputs/InputLink.vue';
import TextareaField from '@/components/form/inputs/Textarea.vue';

export default {
    name: 'Finished',
    components: { TextareaField, InputLinkField }
};
</script>
