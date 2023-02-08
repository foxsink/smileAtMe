<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script lang="ts">
    export default defineComponent({
        name: "App",
        setup() {
            useHead({
                title: 'My awesome site',
                link: [
                    {rel: "icon", type:"image/x-icon", href:'/favicon/favicon.ico'},
                ],
            });
            
            return {
            };
        },
    })

</script>