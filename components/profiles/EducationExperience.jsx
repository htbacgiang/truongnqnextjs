import Link from "next/link";
export default function EducationExperience() {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="md:text-3xl text-2xl md:mt-2 mt-4 font-semibold text-pink-500 uppercase tracking-wide mb-2">
                        Học vấn & Kinh nghiệm
                    </h2>
                    <h3 className="md:text-2xl text-xl font-bold text-gray-900 mb-4">
                        Trau dồi Kiến thức và Kỹ năng
                    </h3>
                    <p className="text-base text-gray-600">
                        Hành trình học vấn và kinh nghiệm của tôi đã giúp tôi phát triển kỹ năng chuyên môn và khả năng sáng tạo trong nhiều lĩnh vực khác nhau.
                    </p>
                </div>
                <h3 className="text-2xl  font-bold text-gray-900 mb-8">
                    Học vấn
                    <span className="block w-12 h-0.5 bg-gray-300 mt-2"></span>
                </h3>
                
                {/* Education & Experience Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 2 */}
                    <div className="bg-gray-50 border border-pink-500 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            Kỹ sư Điện tử Máy tính
                        </h3>
                        <p className="text-md font-medium text-gray-500 mb-2">
                            Học viện Công nghệ Bưu chính Viễn thông
                        </p>
                        <p className="text-sm text-gray-500 mb-4">2014-2020</p>
                        <p className="text-gray-600">
                            Tôi đã hoàn thành chương trình Kỹ sư điện tử Máy tính, nơi tôi học được các kiến thức nền tảng về công nghệ và phát triển kỹ năng giải quyết vấn đề
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-50 border border-pink-500 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            UNITAS Japanese Language School Kofu
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">2023</p>
                        <p className="text-gray-600">
                            Tôi đã tham gia khóa học tiếng Nhật tại UNITAS, giúp tôi nâng cao khả năng giao tiếp và hiểu biết về văn hóa Nhật Bản, hỗ trợ trong các dự án quốc tế.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-gray-50 border border-pink-500 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            Thạc sỹ Quản trị kinh doanh
                        </h3>
                        <p className="text-md font-medium text-gray-500 mb-2">
                            Học viện Công nghệ Bưu chính Viễn thông
                        </p>
                        <p className="text-sm text-gray-500 mb-4">2023-2025</p>
                        <p className="text-gray-600">
                            Tôi đang theo học chương trình Thạc sỹ Quản trị kinh doanh, tập trung vào phát triển kỹ năng quản lý và chiến lược kinh doanh để áp dụng vào các dự án khởi nghiệp
                        </p>
                    </div>
                    {/* Card 5 */}
                    <div className="bg-gray-50 border border-pink-500 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            Chuỗi các khóa học khác
                        </h3>

                        <p className="text-gray-600">
                            Tôi luôn tìm kiếm cơ hội học hỏi và phát triển để nâng cao chuyên môn và đóng góp giá trị cho cộng đồng  </p>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li>Chuỗi khóa học của diễn giả <span><Link href="https://www.maiquocbinh.com/"  // Thay thế URL này bằng URL chính xác của Mai Quốc Bình
                                className="text-pink-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer">Mai Quốc Bình </Link> </span> CEO Thế giới giấy</li>
                            <li>Chuỗi khóa học khởi sự cho doanh nghiệp 2024 do <span><Link href="https://vtcnetviet.com/"  // Thay thế URL này bằng URL chính xác của Mai Quốc Bình
                                className="text-pink-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"> VTC NetViet tổ chức</Link> </span></li>
                            <li>Lập trình web tại <span><Link href="https://fullstack.edu.vn/"  // Thay thế URL này bằng URL chính xác của Mai Quốc Bình
                                className="text-pink-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"> F8 Fullstack</Link> </span></li>
                            <li>Khóa học thiết kế - anh  <span><Link href="https://www.facebook.com/trungbatigoltn"  // Thay thế URL này bằng URL chính xác của Mai Quốc Bình
                                className="text-pink-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"> Hoàng Hoa Trung</Link> </span> sáng lập dự án Nuôi em</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}