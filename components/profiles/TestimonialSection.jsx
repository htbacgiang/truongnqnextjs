'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function TestimonialSection() {
  const testimonials = [
    {
      image: '/images/mc-hong-quyen-1.webp',
      name: 'MC Hồng Quyên',
      position: 'Trung Tâm Đào Tạo MC Q&K Bắc Giang',
      company: 'Website: mcbacgiang.com',
      project: 'Website giáo dục',
      review:
      'Tôi rất ấn tượng với sự chuyên nghiệp và hiệu quả của dịch vụ SEO. Giao diện website mcbacgiang.com cũng được thiết kế rất đẹp mắt, thu hút, giúp học viên dễ dàng tìm hiểu và đăng ký khóa học. Nhờ đó, trung tâm đã thu hút được nhiều học viên hơn, và tôi rất hài lòng với kết quả này. Cảm ơn đội ngũ đã hỗ trợ tận tình!',
      rating: 5,
    },
    {
        image: '/images/anh-ky.jpg',
        name: 'Anh Lê Ngọc Kỳ',
        position: 'Tân Trường Giang',
        company: 'Website: tantruonggiang.com.vn',
        project: 'Tư Vấn Thiết Kế Nội Thất',
        review:
          'Tôi rất hài lòng với dịch vụ tư vấn thiết kế nội thất của Tân Trường Giang. Website tantruonggiang.com.vn được thiết kế rất chuyên nghiệp, giao diện đẹp mắt và dễ sử dụng, giúp tôi dễ dàng tìm hiểu các ý tưởng thiết kế nội thất phù hợp cho không gian sống của mình. Đội ngũ tư vấn tận tình, sáng tạo, đã mang đến cho gia đình tôi một không gian sống tiện nghi, sang trọng và đúng với sở thích. Tôi rất ấn tượng và sẽ tiếp tục ủng hộ trong tương lai!',
        rating: 5,
      },
      {
        image: '/images/giang-noi-tiet.jpg',
        name: 'Chị Hương Giang',
        position: 'Chuyên trang bệnh nội tiết',
        company: 'Website: benhnoithet.com',
        project: 'Tư Vấn Sức Khỏe',
        review:
          'Website benhnoithet.com có giao diện rất hiện đại và thân thiện, giúp tôi dễ dàng tìm kiếm thông tin cần thiết. Nội dung được trình bày rõ ràng, chuyên nghiệp, mang lại cảm giác tin cậy ngay từ lần truy cập đầu tiên. Tôi rất hài lòng với sự hỗ trợ nhiệt tình từ đội ngũ của website, họ đã giúp tôi giải đáp nhiều thắc mắc một cách chi tiết. Đây là một địa chỉ đáng tin cậy mà tôi sẽ giới thiệu cho bạn bè và người thân!',
        rating: 4,
      },
      {
        image: '/images/chi-bao-yen-univisport.jpg',
        name: 'Chị Bảo Yến',
        position: 'UnviSport',
        company: 'Website: unvisport.com',
        project: 'Đồng Phục PT Gym',
        review:
          'Đồng phục PT Gym mà tôi đặt tại unvisport.com thực sự rất chất lượng, thiết kế đẹp và chuyên nghiệp, đúng với mong đợi của tôi. Giao diện website unvisport.com rất bắt mắt, dễ sử dụng, giúp tôi nhanh chóng tìm được mẫu đồng phục phù hợp cho đội nhóm của mình. Đội ngũ hỗ trợ tư vấn rất nhiệt tình, giao hàng đúng hẹn, và tôi rất hài lòng với trải nghiệm mua sắm tại đây. Tôi chắc chắn sẽ tiếp tục hợp tác trong các dự án sắp tới!',
        rating: 5,
      },
  ];

  // State để theo dõi testimonial hiện tại
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hàm điều hướng
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
        <p className="md:text-3xl text-2xl md:mt-2 mt-4 font-semibold text-pink-500 uppercase tracking-wide mb-2 text-center">
            Ý kiến khách hàng
          </p>
        </div>

        {/* Testimonial Content - Centered */}
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-2">
            {/* Left: Image and Info */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-64 h-80 mb-4">
                <Image
                  src={currentTestimonial.image}
                  alt="Client"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-pink-500 uppercase font-semibold tracking-wide">
                  {currentTestimonial.name}
                </p>
            
                <p className="text-gray-600">{currentTestimonial.position}</p>
                <p className="text-gray-600 italic">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>

            {/* Right: Testimonial Text */}
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-full lg:w-[500px]">
              {/* Quote Icon */}
              <div className="absolute top-[-20px] left-8 text-6xl text-gray-200">
                “
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {currentTestimonial.project}
              </h4>
              <p className="text-gray-500 text-sm mb-4">
                {currentTestimonial.date}
              </p>
              <p className="text-gray-600 mb-4">
                {currentTestimonial.review}
              </p>
              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < currentTestimonial.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              {/* Navigation Arrows */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <FaArrowLeft className="text-gray-600" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"

                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}