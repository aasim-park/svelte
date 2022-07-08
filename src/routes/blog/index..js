import dbConnect from '$lib/db.js';
export async function get(request) {
	const id = request.query;
	const dbconnection = await dbConnect();
	console.log(dbconnection);
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
