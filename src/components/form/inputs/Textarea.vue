<template>
    <label for="basic-url" class="form-label">{{ label }}</label>
    <div class="input-group mb-3">
        <div class="input-group-text">
            <input
                class="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
                tabindex="-1"
            />
        </div>
        <vee-field as="textarea" :name="name" id="description" rows="5" class="form-control" aria-label="Text input with checkbox"/>
    </div>
</template>
<script>
export default {
    name: 'TextareaField',
    props: {
        label: {
            required: true
        },
        name: {
            required: true
        }
    }
};
</script>
