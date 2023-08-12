export default defineNuxtRouteMiddleware((to, from) => {
	const loggedInUser = useLoggedInUser();
	if (!loggedInUser.value) {
		return navigateTo({ path: '/login' });
	}
});
