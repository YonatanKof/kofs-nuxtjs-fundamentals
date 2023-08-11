export default defineNuxtRouteMiddleware((to, from) => {
	const loggedInUser = false;
	if (!loggedInUser) {
		return navigateTo({ path: '/login' });
	}
});
