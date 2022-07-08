import mongoose from 'mongoose';

/* PetSchema will correspond to a collection in your MongoDB database. */
const BlogsSchema = new mongoose.Schema({
	Title: {
		/* The name of this pet */
		type: String
	},
	description: {
		/* The name of this pet */
		type: String
	},
	excerpt: {
		/* The name of this pet */
		type: String
	}
});

export default mongoose.models.Blogs || mongoose.model('Blogs', BlogsSchema);
