import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: [String], // Chỉ chấp nhận mảng các URL hình ảnh
      required: true,
    },
    slug: {
      type: String,
      required: true, // Đảm bảo slug luôn có giá trị
      trim: true,
      unique: true, // Không cho phép trùng slug
    },
    content: {
      type: String,
      default: "", // Tránh lỗi nếu không nhập content
      trim: true,
    },
    meta: {
      type: String,
      default: "", // Tránh lỗi nếu không nhập meta
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0, // Đảm bảo giá sản phẩm không âm
    },
    salePrice: {
      type: Number,
      default: 0,
      min: 0, // Giá khuyến mãi không thể âm
    },
    unit: { type: String, required: true }, // Đơn vị tính (VD: "kg", "bó", "túi")
    availableQuantity: { type: Number, min: 0 }, // Số lượng rau có thể bán hôm nay
  },
  {
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);

// Kiểm tra nếu model chưa được tạo thì tạo mới
let Dataset =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Dataset;
