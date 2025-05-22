import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import DefaultLayout from "../../components/layout/DefaultLayout";
import ContactForm from "../../components/profiles/ContactForm";

export default function ContactPage() {
  return (
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
               Trầm Lộng, Ứng Hòa, Hà Nội
                <br />
              </p>
            </div>
            {/* Card: E-Mail */}
            <div className="bg-gray-700 p-8 rounded-lg text-center">
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
  );
}

export async function getServerSideProps() {
  const meta = {
    title: "Liên Hệ - Trường NQ Web",
    description:
      "Liên hệ với Trường NQ Web qua địa chỉ, email và số điện thoại. Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp thắc mắc của bạn.",
    keywords: "liên hệ, Trường NQ Web, địa chỉ, email, số điện thoại",
    robots: "index, follow",
    canonical: "https://truongnq.vn/lien-he",
    og: {
      title: "Liên Hệ - Trường NQ Web",
      description:
        "Liên hệ với Trường NQ Web qua địa chỉ, email và số điện thoại.",
      type: "website",
      url: "https://truongnq.vn/lien-he",
      image: "https://truongnq.vn/baner-web.jpg",
      imageWidth: "1200",
      imageHeight: "630",
      siteName: "Trường NQ Web",
    },
    twitter: {
      card: "summary_large_image",
      title: "Liên Hệ - Trường NQ Web",
      description:
        "Liên hệ với Trường NQ Web qua địa chỉ, email và số điện thoại.",
      image: "https://truongnq.vn/baner-web.jpg",
    },
  };

  return {
    props: {
      meta,
    },
  };
}