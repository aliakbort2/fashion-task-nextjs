import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const productsCollection = db.collection("products");

  try {
    const product = await productsCollection.findOne({
      _id: new ObjectId(params.id),
    });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "No Data Found", error });
  }
};
