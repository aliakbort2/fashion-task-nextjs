// import { connectDB } from "@/lib/connectDB";

// export const GET = async () => {
//   const db = await connectDB();
//   const productsCollection = db.collection("products");

//   try {
//     const resp = await productsCollection.find().toArray();
//     return Response.json({ message: "All Products Load Successfully" });
//   } catch (error) {
//     return Response.json({ message: "No Data Found", error });
//   }
// };
