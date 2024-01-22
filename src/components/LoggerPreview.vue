<template>
    <h2>Preview</h2>

    <div class="preview">
        <div class="preview__source">
            <ul>
                <li v-for="field in this.formStore.values" :key="field">
                    {{ field }}
                </li>
            </ul>

            <h1>H1 test</h1>
        </div>
    </div>
</template>
<script>
import copy from 'copy-to-clipboard';
import { convert } from 'html-to-text';

import useFormStore from '@/stores/form.js';
import { mapStores } from 'pinia';

export default {
    name: 'LoggerPreview',
    computed: {
        ...mapStores(useFormStore)
    },
    data() {
        return {};
    },
    mounted() {
        const codeBlocks = document.querySelectorAll('.preview');
        codeBlocks.forEach((block) => {
            const copyPrompt = document.createElement('div');
            copyPrompt.className = 'copy-prompt';
            const copyPromptText = document.createElement('p');
            copyPromptText.innerHTML = '👆 Click here to copy';
            const copyIcon = document.createElement('img');
            copyIcon.src = '/icons/ic_copy.svg';
            copyPrompt.appendChild(copyIcon);
            copyPrompt.appendChild(copyPromptText);
            block.appendChild(copyPrompt);
            block.querySelector('.copy-prompt > p').addEventListener('click', (evt) => {
                console.log(
                    'log_without_convert:',
                    block.querySelector('.preview__source').textContent
                );
                console.log(
                    'log_with_convert:',
                    convert(block.querySelector('.preview__source').textContent)
                );
                copy(convert(block.querySelector('.preview__source').textContent));

                block.querySelector('.copy-prompt > p').innerHTML = 'Copied!';
                setTimeout(() => {
                    block.querySelector('.copy-prompt > p').innerHTML = '👆 Click to copy';
                }, 1000);
            });
        });
    }
};
</script>
<style>
code {
}
</style>
