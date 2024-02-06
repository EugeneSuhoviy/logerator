<template>
    <fieldset>
        <legend>Finished changelog:</legend>
        <select-field ref="environment" :name="'environment'" :label="'Environment'" />
        <input-field ref="branch" :name="'branch'" :label="'Branch'" />
        <input-field ref="branch" :name="'branch'" :label="'Branch'" />
        <textarea-field ref="current_status" :name="'current_status'" :label="'Current status'" />
        <textarea-field ref="next_steps" :name="'next_steps'" :label="'Next steps'" />
    </fieldset>
</template>
<script>
import SelectField from '@/components/form/inputs/Select.vue';
import InputField from '@/components/form/inputs/Input.vue';
import TextareaField from '@/components/form/inputs/Textarea.vue';

export default {
    name: 'Unfinished',
    components: { TextareaField, InputField, SelectField}
};
</script>
