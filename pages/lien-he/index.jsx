import Head from "next/head";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import DefaultLayout from "../../components/layout/DefaultLayout";
import ContactForm from "../../components/header/ContactForm";
import SeoTheme from "../../components/profiles/SEOTheme";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Liên Hệ - Trường NQ Web</title>
        <meta
          name="description"
          content="Liên hệ với Trường NQ Web qua địa chỉ, email và số điện thoại. Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp thắc mắc của bạn."
        />
        <meta
          name="keywords"
          content="liên hệ, Trường NQ Web, địa chỉ, email, số điện thoại"
        />
        <meta name="robots" content="index, follow" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Liên Hệ - Trường NQ Web" />
        <meta
          property="og:description"
          content="Liên hệ với Trường NQ Web qua địa chỉ, email và số điện thoại."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <DefaultLayout> 
      <section className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-10">
            Liên Hệ
          </h1>
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-10">
            {/* Card: Địa chỉ */}
            <div className="bg-gray-700 p-8 rounded-lg text-center">
              <div className="text-pink-500 text-4xl mb-4 flex justify-center">
                <MdLocationOn />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                Địa chỉ
              </h3>
              <p className="text-gray-400">
                Đồng Tân, Ứng Hòa, Hà Nội
                <br></br>
                <p>
                    ( Cạnh cổng trường THPT Ứng Hòa B )
                </p>
              </p>
            </div>
            {/* Card: E-Mail */}
            <div className="bg-gray-700  p-8 rounded-lg text-center">
              <div className="text-pink-500 text-4xl mb-4 flex justify-center">
                <MdEmail />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                E-Mail
              </h3>
              <p className="text-gray-400">truong@truongnq.vn</p>
            </div>
            {/* Card: Số điện thoại */}
            <div className="bg-gray-700 p-8 rounded-lg text-center">
              <div className="text-pink-500 text-4xl mb-4 flex justify-center">
                <MdPhone />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                Số điện thoại
              </h3>
              <p className="text-gray-400">0866.572.271</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      </DefaultLayout>
    </>
  );
}
