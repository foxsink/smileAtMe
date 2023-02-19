<template>
    <div
        class="additional-content__container"
    >
        <slot>
            <component
                :is="tagData.elem || 'span'"
                v-if="tagData || false"
                :="combinedProps(globalAttrs, tagData.innerProps || {})"
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
        setup() {
            const combinedProps = (prop1, prop2) => Object.assign(
                {},
                prop2,
                Object.fromEntries(Object.entries(prop1).map(([key, value]) => [
                    key,
                    prop2[key] !== undefined ? `${value} ${prop2[key]}` : value,
                ])));

            return {
                combinedProps,
            };
        },
    }
</script>

<style scoped>

</style>
