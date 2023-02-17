<template>
    <div
        class="additional-content__container"
    >
        <slot>
            <component
                :is="tagData.elem || 'span'"
                v-if="tagData || false"
                :="{...tagData.innerProps, ...globalAttrs}"
            >
                {{ tagData.text || '' }}
            </component>
        </slot>
    </div>
</template>

<script lang="ts">
    export default {
        name: "ContentAdditionalButtons",
        props: {
            tagData: {
                type: Object,
                default: () => {},
            },
            globalAttrs: {
                type: Object,
                default: () => {},
            },
        },
    }
</script>

<style scoped>

</style>
