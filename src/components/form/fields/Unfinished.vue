<template>
    <fieldset>
        <legend>Finished changelog:</legend>

        <input-link-field ref="link_store" :name="'link_store'" :label="'Link to Store'" />
        <input-link-field ref="screenshot" :name="'screenshot'" :label="'Attached screenshots'" />
        <input-link-field ref="pr_release" :name="'pr_release'" :label="'PR Release'" />
    </fieldset>
</template>
<script>
import InputLinkField from '@/components/form/inputs/InputLink.vue';

export default {
    name: 'Unfinished',
    components: { InputLinkField }
};
</script>
