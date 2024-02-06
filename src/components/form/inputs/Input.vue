<template>
    <label for="basic-url" class="form-label">{{ label }}</label>
    <div class="input-group mb-3">
        <div class="input-group-text">
            <input
                class="form-check-input mt-0"
                type="checkbox"
                aria-label="Checkbox for following text input"
                tabindex="-1"
            />
        </div>
        <vee-field
            :name="name"
            type="text"
            class="form-control"
            aria-label="Text input with checkbox"
        />
        <ErrorMessage :name="name" />
    </div>
</template>

<script>
import { ErrorMessage } from 'vee-validate';

export default {
    name: 'InputField',
    components: { ErrorMessage },
    props: {
        label: {
            required: true
        },
        name: {
            required: true
        }
    },
    mounted() {
        // console.log('log_:', this.$refs.input);
    }
};
</script>
