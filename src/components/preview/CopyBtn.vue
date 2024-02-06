<template>
    <div class="preview__copy">
        <button type="button" class="preview__btn btn btn-dark" @click.prevent="onClick">Copy</button>
    </div>
</template>
<script>
import TurndownService from 'turndown';
import copy from 'copy-to-clipboard';

export default {
    name: 'CopyBtn',
    methods: {
        onClick() {
            const turndownService = new TurndownService();
            const markdown = turndownService.turndown(document.querySelector('.preview__source'));

            console.log(markdown);
            copy(markdown);

            document.querySelector('.preview__btn').innerHTML = 'Copied!';
            setTimeout(() => {
                document.querySelector('.preview__btn').innerHTML = 'Copy';
            }, 1000);
        }
    }
};
</script>
