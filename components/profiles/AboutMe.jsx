import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="md:py-12 py-5 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tiêu đề "About Me" */}
                <div className="flex items-center mb-8">
                    <h2 className="text-3xl font-bold font-heading"> Giới thiệu</h2>
                    <div className="ml-4 h-1 w-12 bg-pink-500"></div>
                </div>

                {/* Nội dung chính */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Hình ảnh bên trái */}
                    <div className="relative">
                        <Image
                            src="/truongnqvn.jpg" // Thay bằng đường dẫn hình ảnh của bạn
                            width={400}
                            height={500}
                            alt="About Me"
                            className="w-full h-auto rounded-2xl object-cover"
                        />
                    </div>

                    {/* Nội dung bên phải */}
                    <div className="flex flex-col justify-center">
                        {/* Tiêu đề "Who Am I?" */}
                        <h3 className="text-2xl font-bold font-heading mb-4">Tôi là ai?</h3>

                        {/* Mô tả */}
                        <p className="text-gray-600 mb-2">
                        Tôi là   <b> Trường – Founder của Trường NQ Web</b> , đơn vị chuyên cung cấp giải pháp thiết kế Website, SEO tổng thể, Ladipage và quảng cáo Google Ads.            </p>
                        <p className="text-gray-600 mb-2">
                            Với tư duy kết hợp giữa <b> công nghệ </b>và <b>marketing bền vững</b>, tôi giúp doanh nghiệp xây dựng nền tảng online chuyên nghiệp, tối ưu chuyển đổi và phát triển dài hạn, không phụ thuộc hoàn toàn vào quảng cáo trả phí.

                        </p>
                        <p className="text-gray-600 mb-5">
                        Tôi tin rằng mỗi thương hiệu đều có một câu chuyện xứng đáng được kể theo cách sáng tạo và hiệu quả nhất. Và tôi ở đây để biến điều đó thành hiện thực – qua từng dòng code, từng giao diện, từng chiến lược nội dung.
                        </p>
                        {/* Personal Info */}
                        <h4 className="text-xl font-bold font-heading mb-4">Thông tin cá nhân</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Phone */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mr-4">
                                    <svg
                                        className="w-6 h-6 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Số điện thoại</p>
                                    <p className="text-gray-800 font-semibold">0866 572 271</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mr-4">
                                    <svg
                                        className="w-6 h-6 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Email</p>
                                    <p className="text-gray-800 font-semibold">truong@truongnq.vn</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mr-4">
                                    <svg
                                        className="w-6 h-6 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Địa chỉ</p>
                                    <p className="text-gray-800 font-semibold">Ứng Hòa, Hà Nội</p>
                                </div>
                            </div>

                            {/* Birthday */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mr-4">
                                    <svg
                                        className="w-6 h-6 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Ngày sinh</p>
                                    <p className="text-gray-800 font-semibold">27/01/1996</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;