import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { request } from "../../api";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get(`/product/get/${id}`);
        if (response.data) {
          setData(response.data);
        } else {
          navigate("/not-found");
        }
      } catch {
        navigate("/not-found");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-200 to-gray-400">
        <div className="text-center flex flex-col justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75 mb-4"></div>
          <p className="text-xl font-medium text-gray-700">
            Loading product details...
          </p>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  const toggleWishlist = () => {
    setData((prev) => ({
      ...prev,
      isInWishlist: !prev?.isInWishlist,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex justify-center items-center py-8">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-4xl">
        <div className="p-8 flex flex-col items-center bg-white">
          <img
            src={data?.image || "https://via.placeholder.com/400"}
            alt={data?.name || "Product Image"}
            className="w-full max-w-[300px] rounded-lg"
          />
        </div>
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
            {data?.name}
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            {data?.description ||
              "No detailed information available for this product."}
          </p>

          <div className="flex justify-center items-center space-x-8 mb-6">
            <span className="text-3xl font-bold text-green-600">
              ${data?.price}
            </span>
            <span className="text-lg text-gray-400 line-through">
              ${data?.oldPrice || "400.00"}
            </span>
          </div>

          <div className="flex justify-center items-center mb-6">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="w-12 h-12 flex justify-center items-center text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              -
            </button>
            <span className="mx-4 text-xl font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="w-12 h-12 flex justify-center items-center text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              +
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <button className="py-4 bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700">
              Add to Cart
            </button>
            <button
              onClick={toggleWishlist}
              className={`py-4 rounded-full shadow-lg transition flex justify-center ${
                data?.isInWishlist
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              title="Add to Wishlist"
            >
              {data?.isInWishlist ? (
                <FaHeart size={20} />
              ) : (
                <FaRegHeart size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
