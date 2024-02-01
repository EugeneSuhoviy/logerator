<template>
    <h2>Preview</h2>

    <div class="preview">
        <div class="preview__source" v-if="this.formStore.values.length">
            <h1>@EugeneSuhoviy</h1>

            <br />
            <span>Tasks is ready for testing.</span>
            <br />
            <br />
            <h4>Changelog:</h4>

            <template v-for="value in this.formStore.values" :key="value.name">
                <preview-row :label="`${value.label}`" :data="value.data" />
            </template>
        </div>
    </div>
</template>
<script>
import copy from 'copy-to-clipboard';
import TurndownService from 'turndown';

import PreviewRow from '@/components/preview/Row.vue';
import useFormStore from '@/stores/form.js';
import { mapStores } from 'pinia';

export default {
    name: 'LoggerPreview',
    components: {
        PreviewRow
    },
    computed: {
        ...mapStores(useFormStore)
    },
    data() {
        return {};
    },
    mounted() {
        //TODO: To refactor / move to separate component?
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
                var turndownService = new TurndownService();
                var markdown = turndownService.turndown(block.querySelector('.preview__source'));

                console.log('log_:', markdown);
                copy(markdown);

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
