import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "product",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

const CartProductModal = mongoose.model("cartProduct", cartSchema);

export default CartProductModal;
