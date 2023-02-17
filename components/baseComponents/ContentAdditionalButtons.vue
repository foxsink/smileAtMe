<template>
    <div
        v-if="params || false"
        class="additional-content__container"
    >
        <slot>
            <component
                :is="params.elem"
                :="params.innerProps"
            >
                {{ params.text || '' }}
            </component>
        </slot>
    </div>
</template>

<script lang="ts">
    export default {
        name: "ContentAdditionalButtons",
        props: {
            params: {
                type: Object,
                default: () => {},
            },
        },
    }
</script>

<style scoped>

</style>
