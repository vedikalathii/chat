import mongoose from "mongoose";

const connectToMongoDB = async () => {

	const url="mongodb+srv://Vanshika:Vanshika123@cluster0.tb5mdls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

	try {
		await mongoose.connect(url);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
