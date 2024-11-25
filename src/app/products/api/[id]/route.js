import { connectDB } from "@/lib/connectDB";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const productsCollection = db.collection("products");

  try {
    const product = await productsCollection.findOne({ _id: params.id });
    return Response.json(product);
  } catch (error) {
    return Response.json({ message: "No Data Found", error });
  }
};
