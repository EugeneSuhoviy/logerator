<template>
    <label for="basic-url" class="form-label">{{ label }}</label>
    <div class="input-group mb-3">
        <div class="input-group-text">
            <input
                class="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
            />
        </div>
        <vee-field :name="name" as="select" class="form-select">
            <option value="Staging">Staging</option>
            <option value="Production">Production</option>
            <option value="Pre Production">Pre Production</option>
        </vee-field>
    </div>
</template>
<script>
export default {
    name: 'SelectField',
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
