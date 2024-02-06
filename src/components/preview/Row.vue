<template>
    <div><span>{{ label }}</span>: <span>{{ data }}</span></div>
</template>

<script>
export default {
    name: 'PreviewRow',
    props: ['label', 'data']
};
</script>
