import Image from "next/image";

const ShowProduct = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4">
      {/* Top Images Section - 4 images in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Image 1 */}
        <div className="w-full h-[200px] relative">
          <Image
            src="/images/lap-trinh-web.jpg" // Placeholder path
            alt="Building"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Image 2 */}
        <div className="w-full h-[200px] relative">
          <Image
            src="/images/lap-trinh-web.jpg" // Placeholder path

            alt="Desk with notebooks"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Image 3 */}
        <div className="w-full h-[200px] relative">
          <Image
            src="/images/lap-trinh-web.jpg" // Placeholder path

            alt="Office desk"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Image 4 */}
     
      </div>

      {/* Text Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Looking back, We needed an upgrade, and we quickly began searching for a digital partner that could help us build a more user-friendly site.
        </p>
        <button className="mt-6 flex items-center mx-auto text-blue-600 font-semibold hover:underline">
          Click vào hình ảnh để xem sản phẩm
        </button>
      </div>

      {/* Bottom Images Section - 2 images in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Image 5 */}
        <div className="w-full h-[200px] relative">
          <Image
            src="/images/lap-trinh-web.jpg" // Placeholder path

            alt="Woman with laptop"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Image 6 */}
        <div className="w-full h-[200px] relative">
          <Image
            src="/images/lap-trinh-web.jpg" // Placeholder path

            alt="Team meeting"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;