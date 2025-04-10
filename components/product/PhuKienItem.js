import Link from "next/link";
import Image from "next/image";
const PhuKienItem = ({ product }) => {
  return (
    <div className="border w-full max-w-sm rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-transform translate-y-0.5 cursor-pointer">
      <Link href={`phu-kien-sieu-thi/${product.slug}`}>
        <a
          className="flex flex-col items-stretch"
          href={`phu-kien-sieu-thi/${product.slug}`}
        >
          <div className="aspect-16/9">
            <img
              alt={product.title}
              className="object-cover w-full aspect-[1.0] transition-transform
              hover:scale-105 ease duration-300"
              src={
                product.images && product.images.length > 0
                  ? product.images[0]
                  : ""
              }
            />
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between items-center">
            <div className="grid gap-1.5 ">
              <h3 className="font-semibold line-clamp-2 mb-1">
                {product.title}
              </h3>
            </div>
            <button className="bg-orange-600 text-white py-1 px-5 rounded-xl h-full">
              Chi tiết
            </button>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PhuKienItem;
