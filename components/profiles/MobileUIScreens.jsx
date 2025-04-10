import Image from "next/image";
const MobileUIScreens = () => {


    return (
        <>
            {/* Nội dung hiển thị */}
            <div className="relative flex flex-col items-center justify-center py-10">
                {/* Tiêu đề */}
                <div className="text-center text-black mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold pt-10">Thiết Kế Landing Page</h1>
                    <p className="text-lg md:text-xl mt-2">
                        Mẫu thiết kế giao diện ứng dụng smartphone chuyên nghiệp
                    </p>
                </div>

                {/* Container chính */}
                <div className="relative w-full max-w-7xl flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                    {/* Bên trái: Mockup lớn */}
                    <div className="relative w-72 md:w-80 transform hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/images/phone.png"
                            alt="Màn hình liên hệ - Thiết kế Landing Page chuyên nghiệp"
                            width={420}
                            height={840}
                            quality={85}
                            priority
                        />
                    </div>

                    {/* Bên phải: 6 màn hình nhỏ */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="relative w-32 md:w-40 transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/images/seo.jpg"
                                alt="Màn hình đăng nhập - Giao diện Landing Page tối ưu"
                                width={160}
                                height={320}
                                quality={85}
                                loading="lazy"
                                className="rounded-2xl shadow-md"
                            />
                        </div>
                        <div className="relative w-32 md:w-40 transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/images/seo-2.jpg" alt="Màn hình tên người dùng - Thiết kế UI/UX Landing Page"
                                width={160}
                                height={320}
                                quality={85}
                                loading="lazy"
                                className="rounded-2xl shadow-md"
                            />
                        </div>
                        <div className="relative w-32 md:w-40 transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/images/seo.jpg" alt="Màn hình camera - Tối ưu Landing Page cho mobile"
                                width={160}
                                height={320}
                                quality={85}
                                loading="lazy"
                                className="rounded-2xl shadow-md"
                            />
                        </div>
                        <div className="relative w-32 md:w-40 transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/images/seo-2.jpg" alt="Màn hình danh mục - Thiết kế Landing Page chuẩn SEO"
                                width={160}
                                height={320}
                                quality={85}
                                loading="lazy"
                                className="rounded-2xl shadow-md"
                            />
                        </div>
                        <div className="relative w-32 md:w-40 transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/images/seo.jpg" alt="Màn hình sản phẩm - Giao diện Landing Page đẹp"
                                width={160}
                                height={320}
                                quality={85}
                                loading="lazy"
                                className="rounded-2xl shadow-md"
                            />
                        </div>
                        <div className="relative w-32 md:w-40 transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/images/seo-2.jpg" alt="Màn hình chào bạn - Thiết kế Landing Page sáng tạo"
                                width={160}
                                height={320}
                                quality={85}
                                loading="lazy"
                                className="rounded-2xl shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileUIScreens;