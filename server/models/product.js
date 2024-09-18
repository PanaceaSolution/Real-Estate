import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address :{
     type:String,
     required:true,
    },
    imageUrl: {
      type: String,
    },
    imagePublicId: {
      type: String,
    },
    createdby: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
    },
  },
  },
  { timestamps: true }
);

export const Product = mongoose.model("product", productSchema);
