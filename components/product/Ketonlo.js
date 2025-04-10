"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import banner from "../../public//images/social-banner.jpg";
import Gif from "../../public//images/ke-ton-lo.gif";
import BH from "../../public//images/baohanh.gif";
import kedoi from "../../public//images/ke-sieu-thi-ton-lo.jpg";

import Link from "next/link";
// import post1 from "../../../public/images/post-1-min.jpg";
// import post2 from "../../../public/images/post-2-min.jpg";

const storyContent = {
  kstText: {
    heading: "Kệ siêu thị tôn đục lỗ",
    p1: "Đối với những chủ cửa hàng muốn tìm kiếm một đối tác uy tín cung cấp giải pháp kệ hàng cho siêu thị mini hoặc cửa hàng tạp hoá của mình, Giá kệ Tân Phát là sự lựa chọn đáng tin cậy. Chúng tôi tự hào cung cấp một loạt các mẫu kệ siêu thị chất lượng, đa dạng về kiểu dáng và kích thước, đảm bảo đáp ứng mọi nhu cầu của khách hàng.",
  },
  kstWhy: {
    heading: "1. Kệ siêu thị tôn đục lỗ là gì?",
    p1: "Với những ưu điểm vượt trội như vậy, không ngạc nhiên khi kệ siêu thị tôn đục lỗ trở thành sự lựa chọn hàng đầu cho các cửa hàng, siêu thị và doanh nghiệp bán lẻ khi họ cần giải pháp lưu trữ hàng hóa hiệu quả và linh hoạt.",
  },
  kstTS: {
    heading: "2. Kích thước và trọng tải của kệ siêu thị tôn lỗ như thế nào?",
  },

  kstGia: {
    heading: "3. Giá cả và ưu đãi của kệ tôn đục lỗ",
    p1: "Dòng kệ siêu thị tôn đục lỗ tại Tân Phát không chỉ nổi bật với mức giá phải chăng mà còn được đánh giá cao về tính linh hoạt và hiệu suất. Với khả năng chịu lực tốt, khách hàng có thể yên tâm trưng bày hàng hóa một cách an toàn và tiện lợi. Bên cạnh đó, việc lắp đặt và di chuyển kệ cũng trở nên dễ dàng hơn bao giờ hết, giúp tối ưu hóa không gian trưng bày mà không cần đầu tư quá nhiều công sức.",
    p2: "Để biết thêm thông tin chi tiết và tư vấn cụ thể về các mẫu kệ siêu thị tôn đục lỗ, quý khách vui lòng liên hệ với đội ngũ nhân viên bán hàng tại Tân Phát. Chúng tôi cam kết cung cấp cho quý khách hàng những thông tin chính xác và đáng tin cậy nhất, giúp quý khách có được sự lựa chọn phù hợp nhất với nhu cầu của mình.",
    p3: "Ngoài ra, để giúp quý khách hàng tiết kiệm thời gian và công sức, Tân Phát cung cấp dịch vụ vận chuyển và lắp đặt tận nhà miễn phí. Đội ngũ nhân viên chuyên nghiệp của chúng tôi sẽ đảm bảo rằng quá trình vận chuyển và lắp đặt diễn ra một cách nhanh chóng và hiệu quả, giúp quý khách hàng có được trải nghiệm mua sắm tốt nhất.",
  },
  kstLapdat: {
    heading: "4. Lắp đặt và bảo hành cho kệ tôn đục lỗ",
    p1: "Việc lắp đặt kệ siêu thị tôn đục lỗ tại Tân Phát không chỉ đơn giản mà còn dễ dàng thực hiện, nhờ vào hướng dẫn chi tiết đi kèm và tính linh hoạt của sản phẩm. Chúng tôi tự hào là đơn vị có dịch vụ hỗ trợ lắp đặt và bảo trì sau khi bán hàng, mang lại sự an tâm và yên tâm cho khách hàng.",
    p2: "Độ bền cao là một trong những đặc điểm nổi bật của các mẫu kệ siêu thị tôn đục lỗ mà Tân Phát cung cấp. Tất cả các sản phẩm đều được cam kết về độ bền cao và được bảo hành trong 5 năm, giúp khách hàng yên tâm sử dụng mà không cần phải lo lắng về việc kệ có thể bị hỏng hoặc hỏng hóc trong quá trình sử dụng.",
    p3: "Nhờ vào sự cam kết này, khách hàng có thể hoàn toàn tập trung vào việc kinh doanh mà không cần phải lo lắng về vấn đề vận hành của hệ thống lưu trữ hàng hóa. Chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu và cam kết đem lại sản phẩm chất lượng cùng dịch vụ chăm sóc khách hàng tận tình nhất.",
  },
  kstWhy2: {
    heading: "5. Tại sao nên mua kệ siêu thị tôn đục lỗ tại Giá kệ Tân Phát",
    p1: "Giá kệ Tân Phát là một trong những địa chỉ uy tín và đáng tin cậy khi bạn cần mua kệ siêu thị tôn đục lỗ. Với nhiều năm kinh nghiệm trong lĩnh vực cung cấp các giải pháp lưu trữ hàng hóa, Giá kệ Tân Phát cam kết cung cấp sản phẩm chất lượng, dịch vụ tốt nhất và giá cả cạnh tranh nhất trên thị trường.",
  },
  kstList2: [
    {
      title:
        "1. Chất lượng đảm bảo: Tân Phát cung cấp các sản phẩm chất lượng cao, bền bỉ và đáng tin cậy. Kệ siêu thị lưng lưới được thiết kế và sản xuất với các tiêu chuẩn nghiêm ngặt, đảm bảo sự an toàn cho hàng hóa và người sử dụng.",
    },
    {
      title:
        "2. Đa dạng mẫu mã: Tân Phát cung cấp nhiều mẫu kệ siêu thị lưng lưới với đa dạng về kích thước, màu sắc và kiểu dáng, từ kệ đơn giản đến kệ đa năng, phù hợp với mọi loại cửa hàng và nhu cầu trưng bày sản phẩm.",
    },
    {
      title:
        "3. Dịch vụ chuyên nghiệp: Đội ngũ nhân viên tại Tân Phát có kinh nghiệm và chuyên môn cao trong việc lắp đặt kệ siêu thị lưng lưới. Chúng tôi cam kết cung cấp dịch vụ lắp đặt nhanh chóng, chính xác và chuyên nghiệp, đảm bảo sự hài lòng của khách hàng.",
    },
    {
      title:
        "4. Bảo hành dài hạn: Tân Phát cam kết bảo hành sản phẩm trong thời gian dài, thường là 5 năm, để đảm bảo sự yên tâm và an tâm cho khách hàng.",
    },
    {
      title:
        "5. Giá cả cạnh tranh: Tân Phát cam kết cung cấp giá cả cạnh tranh và hợp lý cho các sản phẩm và dịch vụ của mình, đảm bảo sự hiệu quả kinh doanh và tiết kiệm chi phí cho khách hàng.",
    },
    {
      title:
        "6. Dịch vụ hậu mãi tốt: Sau khi lắp đặt, Tân Phát vẫn sẽ tiếp tục hỗ trợ khách hàng với các dịch vụ hậu mãi như sửa chữa, bảo trì và tư vấn về việc bố trí không gian trưng bày hàng hóa.",
    },
  ],
};

const Ketonlo = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <motion.div
          inherit={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.8,
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
          className="lg:flex flex-col mt-5 text-left w-full lg:w-10/12 mx-auto "
        >
          {storyContent.kstText.heading && (
            <h1 className="text-center uppercase font-bold text-[#ff5e00fb] text-2xl md:text-3xl text-gray-800 mb-5 dark:text-light dark:text-primary">
              {storyContent.kstText.heading}
            </h1>
          )}

          {storyContent.kstText.p1 && (
            <b className="leading-relaxed text-gray-500 mb-2 text-dark dark:text-primary">
              {storyContent.kstText.p1}
            </b>
          )}
          <p className="leading-relaxed text-gray-500 mb-2 text-dark dark:text-primary">
            Đặc biệt, chúng tôi cung cấp dịch vụ vận chuyển và lắp đặt miễn phí
            tận nhà để tiết kiệm thời gian và công sức của bạn. Đừng ngần ngại
            liên hệ qua số điện thoại{" "}
            <b className="text-[#ff5e00fb]">0866.572.271 </b> để biết thêm thông
            tin chi tiết về các mẫu kệ và nhận tư vấn từ đội ngũ chuyên nghiệp
            của chúng tôi. Nếu máy bận, vui lòng để lại tin nhắn và chúng tôi sẽ
            gọi lại ngay sau đó.
          </p>
          {storyContent.kstText.p1 && (
            <b className="leading-relaxed text-gray-500 mb-2 text-dark dark:text-primary">
              {storyContent.kstText.p1}
            </b>
          )}

          <Image src={banner} alt="gia-ke-sieu-thi-tan-phat" />
          {storyContent.kstWhy.heading && (
            <h2 className="font-bold text-gray-800 text-xl md:text-2xl mt-2 mb-5 dark:text-light dark:text-primary">
              {storyContent.kstWhy.heading}
            </h2>
          )}

          <p className="leading-relaxed text-dark dark:text-primary">
            <Link href="/ke-ton-duc-lo">
              <a className="text-[red]">
                <i> Kệ siêu thị tôn đục lỗ</i>
              </a>
            </Link>{" "}
            đã từ lâu trở thành một giải pháp lưu trữ hàng hóa hiệu quả và phổ
            biến trong ngành bán lẻ. Với thiết kế từ tôn thép chất lượng cao,
            chúng mang lại độ bền và độ ổn định cao, đồng thời cung cấp sự linh
            hoạt trong việc điều chỉnh kích thước và định dạng để phù hợp với
            nhu cầu cụ thể của từng cửa hàng.
          </p>
          <span className="leading-relaxed text-dark dark:text-primary">
            <b> Kệ có độ bền và độ ổn định cao: </b>
            Đã từ lâu trở thành một giải pháp lưu trữ hàng hóa hiệu quả và phổ
            biến trong ngành bán lẻ. Với thiết kế từ tôn thép chất lượng cao,
            chúng mang lại độ bền và độ ổn định cao, đồng thời cung cấp sự linh
            hoạt trong việc điều chỉnh kích thước và định dạng để phù hợp với
            nhu cầu cụ thể của từng cửa hàng.
          </span>
          <span className="leading-relaxed text-dark dark:text-primary">
            <b>Linh hoạt trong việc điều chỉnh kích thước và định dạng: </b>
            Một trong những ưu điểm lớn của kệ siêu thị tôn đục lỗ là khả năng
            điều chỉnh kích thước và định dạng. Điều này cho phép các cửa hàng
            linh hoạt trong việc tùy chỉnh kệ theo kích thước và hình dạng cụ
            thể để phù hợp với không gian và nhu cầu lưu trữ của họ. Việc này
            giúp tối ưu hóa sử dụng không gian và tạo ra một bố cục trưng bày
            hàng hóa hấp dẫn và thu hút khách hàng.
          </span>
          {storyContent.kstWhy.p1 && (
            <i className="leading-relaxed mb-2 text-dark dark:text-primary">
              {storyContent.kstWhy.p1}
            </i>
          )}
          <Image alt="ke-sieu-thi-luoi-doi" src={kedoi} />

          {storyContent.kstTS.heading && (
            <h2 className="font-bold text-gray-800 text-xl md:text-2xl mt-2 mb-5 dark:text-light dark:text-primary">
              {storyContent.kstTS.heading}
            </h2>
          )}
          <span className="leading-relaxed text-dark dark:text-primary">
            <b>
              {" "}
              Kệ siêu thị tôn đục lỗ có thể được thiết kế theo nhiều kích thước
              khác nhau để phù hợp với không gian và nhu cầu lưu trữ cụ thể của
              từng cửa hàng. Đồng thời, chúng có khả năng chịu lực tốt, với
              trọng tải đa dạng từ nhẹ đến nặng, đảm bảo rằng bạn có thể lưu trữ
              và trưng bày hàng hóa một cách an toàn và hiệu quả.{" "}
            </b>
          </span>
          <div className="flex flex-col">
            <span className="leading-relaxed text-dark dark:text-primary">
              <b> Chiều cao: </b>
              Có thể lựa chọn từ 120cm, 150cm, 180cm và 210cm.
            </span>
            <span className="leading-relaxed text-dark dark:text-primary">
              <b> Chiều dài: </b>
              Có các tùy chọn chiều dài là 70cm, 90cm và 120cm
            </span>
            <span className="leading-relaxed text-dark dark:text-primary">
              <b> Chiều rộng kệ đơn: </b>
              41cm
            </span>
            <span className="leading-relaxed text-dark dark:text-primary">
              <b> Chiều rộng kệ đôi: </b>
              76cm
            </span>
            <span className="leading-relaxed text-dark dark:text-primary">
              <b> Chiều rộng mâm tầng: </b>
              Có sẵn các kích thước 30cm - 35cm
            </span>
            <span className="leading-relaxed text-dark dark:text-primary">
              <b> Tải trọng kệ: </b>
              Tải trọng mỗi tầng kệ dao động từ 50kg đến 70kg, tùy thuộc vào cấu
              trúc và chất liệu của kệ
            </span>
            <span className="labout:blank#blockedeading-relaxed text-dark dark:text-primary">
              <b> Số tầng kệ: </b>
              Có thể lựa chọn từ 3 đến 6 tầng tùy theo nhu cầu sử dụng và không
              gian trưng bày.
            </span>
            <span className="labout:blank#blockedeading-relaxed text-dark dark:text-primary">
              <b>Màu sắc: </b>
              Màu sắc phổ biến trắng sữa, đen
            </span>
            <span className="labout:blank#blockedeading-relaxed text-dark dark:text-primary">
              <b>Diềm mica chắn hàng: </b>
              Có các màu sắc như xanh dương, xanh lá, đỏ, trắng sữa và mica
              trong để lựa chọn.
            </span>
          </div>
          <Image src={Gif} alt="ke-sieu-thi-ton-lo" />

          {storyContent.kstGia.heading && (
            <h2 className="font-bold text-gray-800 text-xl md:text-2xl mt-2 mb-2 dark:text-light dark:text-primary ">
              {storyContent.kstGia.heading}
            </h2>
          )}
          {storyContent.kstGia.p1 && (
            <p className="mb-1 dark:text-light dark:text-primary ">
              {storyContent.kstGia.p1}
            </p>
          )}
          {storyContent.kstGia.p2 && (
            <p className="mb-1 dark:text-light dark:text-primary ">
              {storyContent.kstGia.p2}
            </p>
          )}
          {storyContent.kstGia.p3 && (
            <p className="dark:text-light dark:text-primary ">
              {storyContent.kstGia.p3}
            </p>
          )}
          {storyContent.kstLapdat.heading && (
            <h2 className="font-bold text-gray-800 text-xl md:text-2xl mt-2 mb-2 dark:text-light dark:text-primary ">
              {storyContent.kstLapdat.heading}
            </h2>
          )}
          {storyContent.kstLapdat.p1 && (
            <p className="mb-1 dark:text-light dark:text-primary ">
              {storyContent.kstLapdat.p1}
            </p>
          )}
          {storyContent.kstLapdat.p2 && (
            <p className="mb-1 dark:text-light dark:text-primary ">
              {storyContent.kstLapdat.p2}
            </p>
          )}
          {storyContent.kstLapdat.p3 && (
            <b className=" text-gray-800 dark:text-light dark:text-primary ">
              {storyContent.kstLapdat.p3}
            </b>
          )}
          <Image src={BH} alt="bao-hanh-ke-sieu-thi" />

          {storyContent.kstWhy2.heading && (
            <h2 className="font-bold text-gray-800 text-xl md:text-2xl mt-2 mb-2 dark:text-light dark:text-primary ">
              {storyContent.kstWhy2.heading}
            </h2>
          )}
          {storyContent.kstWhy2.p1 && (
            <b className=" text-gray-800 dark:text-light dark:text-primary ">
              {storyContent.kstWhy2.p1}
            </b>
          )}
          <b className="text-dark dark:text-primary text-gray-800">
            {" "}
            Lắp đặt kệ siêu thị lưng lưới tại{" "}
            <Link href="https://giaketanphat.com/">
              <a className="text-[red]"> Tân Phát </a>
            </Link>{" "}
            có nhiều lợi ích mà bạn nên xem xét:
          </b>
          <ul className="list-none">
            {storyContent.kstList2.map((item, index) => (
              <li className="flex items-start mb-1" key={item.title}>
                <div>
                  <p className="text-dark dark:text-primary">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="justify-center items-center flex flex-col mt-1 mb-2">
            <Image
              alt="Kệ siêu thị tôn đục lỗ đơn"
              className=""
              width={530}
              height={800}
              src="https://res.cloudinary.com/digaabr5l/image/upload/v1714114231/gktanphat/ke-don-ton-lo_clrd92.jpg"
            />
            <p className="mt-1">Kệ siêu thị tôn đục lỗ đơn</p>
          </div>
          <div className="justify-center items-center flex flex-col mt-2 mb-2">
            <Image
              alt="Kệ tôn đục lỗ cho siêu thị mini"
              className=""
              width={800}
              height={530}
              src="https://res.cloudinary.com/digaabr5l/image/upload/v1705832605/gktanphat/sr7z32bvyipzmqpybjll.jpg"
            />
            <p className="mt-1">Kệ tôn đục lỗ cho siêu thị mini</p>
          </div>
          <div className="justify-center items-center flex flex-col mt-2 mb-2">
            <Image
              alt="Lắp đặt kệ tôn đục lỗ cho cửa hàg mẹ và bé"
              className=""
              width={800}
              height={530}
              src="https://res.cloudinary.com/digaabr5l/image/upload/v1714114223/gktanphat/ke-ton-duc-lo-don_kl0o5g.jpg"
            />
            <p className="mt-1">Lắp đặt kệ tôn đục lỗ cho cửa hàg mẹ và bé </p>
          </div>
          <i className="leading-relaxed text-dark dark:text-primary">
            Đội ngũ chuyên viên của chúng tôi sẽ đồng hành cùng bạn để đưa ra
            các giải pháp tối ưu nhất, phù hợp với nhu cầu và yêu cầu cụ thể của
            bạn. Hãy liên hệ ngay để nhận được sự hỗ trợ tận tình và chuyên
            nghiệp nhất từ Giá kệ siêu thị Tân Phát!
          </i>
          <div className="flex-col flex  text-dark dark:text-primary mt-3">
            <h3 className="font-bold">
              {" "}
              Liên hệ ngay hôm nay để biết thêm chi tiết và nhận ưu đãi đặc
              biệt:
            </h3>
            <span>
              <b>Địa chỉ: </b>{" "}
              <span className="text-[#ff5e00fb]">
                Thị trấn Phùng, huyện Đan Phượng, thành phố Hà Nội{" "}
              </span>
            </span>
            <span>
              <b>Hotline </b>{" "}
              <span className="text-[#ff5e00fb]">0866.572.271 </span>
            </span>
            <span>
              <b>Email: </b>
              <span className="text-[#ff5e00fb]">
                kinhdoanh@giaketanphat.com{" "}
              </span>
            </span>
            <span>
              <b>Website: </b>{" "}
              <span className="text-[#ff5e00fb]">giaketanphat.com </span>
            </span>
            <span>
              <b>Fanpage: </b>{" "}
              <span className="text-[#ff5e00fb]">
                {" "}
                <Link href="https://www.facebook.com/giaketanphathn">
                  <a className="text-[#ff5e00fb] font-bold">
                    {" "}
                    Giá kệ Tân Phát{" "}
                  </a>
                </Link>{" "}
              </span>
            </span>
            <b className="text-[green]">
              Tạo sự thay đổi cho cửa hàng của bạn và làm cho nó đẹp hơn với giá
              kệ siêu thị Tân Phát!
            </b>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ketonlo;
