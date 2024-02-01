<template>
    <div><h4>{{ label }}</h4>:<span>{{ data }}</span></div>
</template>

<script>
export default {
    name: 'PreviewRow',
    props: ['label', 'data'],
};
</script>
