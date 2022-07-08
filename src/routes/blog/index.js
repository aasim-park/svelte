import dbConnect from '$lib/db.js';
import Blogs from '$lib/models/blogs';

export async function get(request) {
	// const id = request.query;
	await dbConnect();
	const post = new Blogs({ name: 'First Post' });
	post.save();
	// console.log();
	return {
		status: 200,
		body: {
			body: 'Hii'
		}
	};
}

export async function post(request) {}

export async function put(request) {}

export async function del(request) {}
