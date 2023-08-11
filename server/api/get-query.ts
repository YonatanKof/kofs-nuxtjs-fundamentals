export default defineEventHandler((event) => {
	return { message: getQuery(event) };
});

// Try this URL to see it in action
// http://localhost:3000/api/get-query?love=god&kedem=baby

