import mongoose from "mongoose";

const catogerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const CategoryModal = mongoose.model("category", catogerySchema);

export default CategoryModal;
