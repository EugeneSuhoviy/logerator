<template>
    <ul class="nav nav-underline">
        <li class="nav-item">
            <button
                class="nav-link"
                :class="{ active: activeTab === 'finished' }"
                @click.prevent="onClick('finished')"
            >
                Finished
            </button>
        </li>
        <li class="nav-item">
            <button
                class="nav-link"
                :class="{ active: activeTab === 'unfinished' }"
                @click.prevent="onClick('unfinished')"
            >
                Unfinished
            </button>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'FormTabs',
    props: ['activeTab'],
    emits: ['tab-change'],
    methods: {
        onClick(tab) {
            this.$emit('tab-change', tab);
        }
    }
};
</script>
