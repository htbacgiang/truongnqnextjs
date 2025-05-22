import React from 'react';

const SEOBenefitComponent = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl py-5  justify-center mx-auto">
      {/* Left Panel - Image */}
      <div className="w-full md:w-1/2 p-4 md:p-6">
        <img
          src="/baner-web-2.jpg"
          alt="SEO Banner"
          className="w-full h-auto rounded-lg shadow-lg object-cover ]"
        />
      </div>

      {/* Right Panel - SEO Benefits */}
      <div className="w-full md:w-1/2 p-4 md:p-6 flex items-center">
        <div className="max-w-full md:max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Lợi ích của website chuẩn SEO
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <p className="text-gray-700 text-base md:text-lg">
                Tăng khả năng lên top Google, giúp website dễ dàng tiếp cận khách hàng tiềm năng.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <p className="text-gray-700 text-base md:text-lg">
                Giảm phụ thuộc vào quảng cáo, tiết kiệm chi phí marketing dài hạn.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 text-xl">✓</span>
              <p className="text-gray-700 text-base md:text-lg">
                Cung cấp website đẹp mắt, mạnh mẽ và dễ tùy chỉnh, đáp ứng mọi nhu cầu thiết kế.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SEOBenefitComponent;