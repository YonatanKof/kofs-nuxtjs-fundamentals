export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to, from, "from the 'logger' named middleware");
})
