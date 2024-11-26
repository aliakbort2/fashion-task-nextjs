import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const productsCollection = db.collection("products");

  try {
    const product = await productsCollection.findOne({ _id: params.id });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ message: "No Data Found", error });
  }
};
