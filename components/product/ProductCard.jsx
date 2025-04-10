import React, { useState } from "react";
import Modal from "react-modal";
import { FaRegHeart, FaHeart, FaEye } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import Link from "next/link";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  setCart,
} from "../../store/cartSlice";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

const ProductCard = ({ product, view }) => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ảnh chính hiển thị trong Modal
  const [mainImage, setMainImage] = useState(product.images[0]);
  const handleThumbnailClick = (thumb) => {
    setMainImage(thumb);
  };

  // Lấy thông tin cart từ Redux
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const cartItem = Array.isArray(cartItems)
    ? cartItems.find((item) => item.product === product._id)
    : null;
  const quantity = cartItem ? cartItem.quantity : 0;

  // Xử lý yêu thích, mở/đóng Modal
  const handleToggleFavorite = () => setIsFavorite((prev) => !prev);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Hàm thêm sản phẩm vào giỏ hàng
  const handleAddToCart = async () => {
    const userId = session?.user?.id;
    if (userId) {
      try {
        const res = await axios.post("/api/cart", {
          user: userId,
          product: product._id,
          title: product.title,
          image: product.images[0],
          price: product.price,
          quantity: 1,
        });
        // Cập nhật Redux state với dữ liệu mới từ API
        dispatch(setCart(res.data));
        console.log("Add to cart (MongoDB) success:", res.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      dispatch(
        addToCart({
          product: product._id,
          title: product.title,
          image: product.images[0],
          price: product.price,
          quantity: 1,
        })
      );
    }
  };

  // Hàm tăng số lượng
  const handleIncreaseQuantity = async () => {
    if (session && session.user) {
      try {
        const res = await axios.put(
          `/api/cart/${session.user.id}/${product._id}`,
          { type: "increase" }
        );
        dispatch(setCart(res.data));
        console.log("Increase quantity (MongoDB) success:", res.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      dispatch(increaseQuantity(product._id));
    }
  };

  // Hàm giảm số lượng
  const handleDecreaseQuantity = async () => {
    if (session && session.user) {
      try {
        const res = await axios.put(
          `/api/cart/${session.user.id}/${product._id}`,
          { type: "decrease" }
        );
        dispatch(setCart(res.data));
        console.log("Decrease quantity (MongoDB) success:", res.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      dispatch(decreaseQuantity(product._id));
    }
  };

  // Hàm xóa sản phẩm khỏi giỏ (nếu cần)
  const handleRemove = async () => {
    if (session && session.user) {
      try {
        const res = await axios.delete(
          `/api/cart/${session.user.id}/${product._id}`
        );
        dispatch(setCart(res.data));
        console.log("Remove from cart (MongoDB) success:", res.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      dispatch(removeFromCart(product._id));
    }
  };

  return (
    <div className="relative border bg-white w-full rounded-lg overflow-hidden shadow-sm transition-transform translate-y-0.5 cursor-pointer">
      <div
        className={`${
          view === "list"
            ? "flex border rounded-lg bg-white p-4"
            : "relative border w-full rounded-lg overflow-hidden shadow-sm"
        }`}
      >
        <Link href={`/san-pham/${product.slug}`}>
          <img
            src={product.images[0]}
            alt={product.title}
            className={`${
              view === "list"
                ? "md:w-48 md:h-48 h-40 w-40 object-cover mr-4"
                : "object-cover w-full"
            } rounded`}
          />
        </Link>
        <div
          className={`flex-1 ${view === "list" ? "pr-4" : "p-3 text-center"}`}
        >
          <Link href={`/san-pham/${product.slug}`}>
            <h3 className="text-sm font-semibold">{product.title}</h3>
          </Link>
          <div
            className={`flex items-center space-x-2 ${
              view === "list" ? "" : "justify-center"
            }`}
          >
            <span className="text-green-500">{formatCurrency(product.price)}</span>
            {product.salePrice && (
              <span className="text-red-500 line-through">
                {formatCurrency(product.salePrice)}
              </span>
            )}
          </div>

          {/* Chế độ hiển thị dạng List */}
          {view === "list" && (
            <>
              <p className="text-sm text-gray-500 mt-2 md:block hidden">
                {product.description}
              </p>
              <div className="list-view flex flex-wrap items-center gap-2 mt-4">
                <button
                  className="p-2 rounded-full shadow bg-white hover:bg-gray-100"
                  onClick={handleToggleFavorite}
                >
                  {isFavorite ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-500" />
                  )}
                </button>
                <button
                  className="p-2 rounded-full shadow bg-white hover:bg-gray-100"
                  onClick={handleOpenModal}
                >
                  <FaEye className="text-blue-500" />
                </button>

                {quantity > 0 ? (
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button className="p-2" onClick={handleDecreaseQuantity}>
                      <FiMinus />
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button className="p-2" onClick={handleIncreaseQuantity}>
                      <FiPlus />
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-green-500 text-white md:px-2 px-2 py-2 rounded hover:bg-green-600 text-sm"
                    onClick={handleAddToCart}
                  >
                    Thêm giỏ hàng
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* Chế độ hiển thị dạng Grid */}
        {view !== "list" && (
          <>
            <div className="absolute top-2 right-2 flex-col flex space-y-1">
              <button
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                onClick={handleToggleFavorite}
              >
                {isFavorite ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-500" />
                )}
              </button>
              <button
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                onClick={handleOpenModal}
              >
                <FaEye className="text-blue-500" />
              </button>
            </div>

            <div className="flex justify-center items-center mt-2 pb-3 w-full">
              {quantity === 0 ? (
                <button
                  onClick={handleAddToCart}
                  className="bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 text-sm"
                >
                  Thêm giỏ hàng
                </button>
              ) : (
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    className="p-2 text-gray-600 hover:text-black"
                    onClick={handleDecreaseQuantity}
                  >
                    <FiMinus />
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    className="p-2 text-gray-600 hover:text-black"
                    onClick={handleIncreaseQuantity}
                  >
                    <FiPlus />
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Modal chi tiết sản phẩm */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        className="bg-white p-6 rounded-lg max-w-2xl mx-auto mt-20 shadow-lg relative modal"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-4 p-3">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full rounded-lg"
            />
            <div className="flex w-full mt-4 space-x-2 justify-center">
              {product.images.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 rounded border ${
                    mainImage === thumb ? "border-green-500" : "border-gray-300"
                  } cursor-pointer`}
                  onClick={() => handleThumbnailClick(thumb)}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 pl-4 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900">
              {product.title}
            </h2>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="text-sm text-gray-500 ml-2">
                ({product.ratings} Ratings)
              </span>
            </div>
            <div className="mt-4">
              <span className="text-green-600 text-2xl font-semibold">
                {formatCurrency(product.price)}
              </span>
              {product.salePrice && (
                <span className="text-red-500 line-through text-lg ml-4">
                  {formatCurrency(product.salePrice)}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Stock Available: {product.stock} pieces
            </p>
            <p className="text-sm text-gray-500 mt-2 md:block hidden">
              {product.description}
            </p>
            <div className="flex items-center mt-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  className="p-2 text-gray-600 hover:text-black"
                  onClick={handleDecreaseQuantity}
                >
                  <FiMinus />
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  className="p-2 text-gray-600 hover:text-black"
                  onClick={handleIncreaseQuantity}
                >
                  <FiPlus />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="ml-4 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
              >
                Thêm giỏ hàng
              </button>
            </div>
            <div className="mt-4">
              <button
                onClick={handleToggleFavorite}
                className="flex items-center text-gray-600 hover:text-black"
              >
                {isFavorite ? (
                  <FaHeart className="text-red-500 mr-2" />
                ) : (
                  <FaRegHeart className="mr-2" />
                )}
                {isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
