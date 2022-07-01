export async function get() {
	const blogs = [{ id: 1, name: 'first post', description: 'FIrst post description' }];
	return {
		status: 200,
		body: { blogs }
	};
}
