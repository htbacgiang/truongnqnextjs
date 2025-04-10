import Head from "next/head";
import { useState, useContext } from "react";
import { getData } from "../../utils/fetchData";
import Image from "next/image";
import DefaultLayout from "../../components/layout/DefaultLayout";
import parse from "html-react-parser";
import BreadCrumbs from "../../components/layout/BreadCrumbs";
import Link from "next/link";
import Table from "react-bootstrap/Table";
const tabs = [
  {
    id: "Description",
    label: "Mô tả sản phẩm",
  },
  // Add more tabs as needed
];

const DetailProduct = (props) => {
  const [product] = useState(props.product);
  const [tab, setTab] = useState(0);

  const isActive = (index) => {
    if (tab === index) return " active";
    return "";
  };
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const breadCrumbs = [
    { name: "Trang chủ", url: "/" },

    { name: "Sản phẩm", url: "/san-pham" },
    {
      name: `${product.title?.substring(0, 20)} ...`,
      url: `/san-pham/${product?.slug}`,
    },
  ];
  return (
    <DefaultLayout>
      <Head>
        <title> {product.title} | Eco Bắc Giang </title>
        <meta name="description" content={product?.description} />
        <meta name="author" content="Giá kệ Tân Phát" />
        <meta
          property="og:title"
          content={`${product?.title} | Giá Kệ Tân Phát`}
        />
        <meta property="og:description" content={product?.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content={`https://giaketanphat.com/ke-sieu-thi/${product?.slug}`}
        />
      </Head>
      <div className="h-[80px] bg-white"></div>

      <section className="detail_page">

        <div className="xl:w-9/12 md:w-full mx-auto border-b-[1px] border-b-gray-300">
          <BreadCrumbs breadCrumbs={breadCrumbs} />

          <div className="max-w-container mx-auto px-2">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-8 gap-4 h-full -mt-5 xl:-mt-8 pb-10 p-1">
              <div className="h-full xl:col-span-3">
                <div className="flex flex-col">
                  <img
                    src={product.images[tab]}
                    alt={product.images[tab]}
                    className="w-full h-full aspect-square object-cover rounded-xl"
                  />

                  <div className="flex flex-row gap-1 h-24 mt-4">
                    {product.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={img}
                        className={` h-20 w-20 rounded-md img-thumbnail cursor-pointer ${isActive(
                          index
                        )}`}
                        onClick={() => setTab(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-full xl:col-span-5 mx-2">
                <h1 className="font-semibold text-2xl mb-4 text-dark dark:text-primary">
                  {product?.title}
                </h1>
                <p className="mb-4 text-gray-500 text-dark dark:text-primary">
                  {product?.description}
                </p>

                <ul className="mb-5">
                  <li>
                    <Table striped borderless>
                      <tbody className="mb-1">
                        <tr>
                          <th>
                            <b className="font-medium w-36 inline-block text-dark dark:text-primary">
                              Tình trạng:
                            </b>{" "}
                          </th>
                          <th>
                            <span className="text-green-500">Còn hàng</span>
                          </th>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <td>
                            {" "}
                            <b className="font-medium w-36 inline-block text-dark dark:text-primary">
                              Loại kệ:
                            </b>
                          </td>
                          <td>
                            <Link href="/ke-sieu-thi">
                              <span className="text-orange-500 cursor-pointer">
                                {product?.loaike}{" "}
                              </span>
                            </Link>
                          </td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <td>
                            <b className="font-medium w-36 inline-block text-dark dark:text-primary">
                              Chiều cao:
                            </b>
                          </td>
                          <td>
                            <span className="text-gray-500 text-dark dark:text-primary">
                              {product?.chieucao}
                            </span>
                          </td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <td>
                            <b className="font-medium w-36 inline-block text-dark dark:text-primary">
                              Chiều dài:
                            </b>
                          </td>
                          <td>
                            <span className="text-gray-500 text-dark dark:text-primary">
                              {product?.chieudai}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>
                            <b className="font-medium w-36 inline-block text-dark dark:text-primary">
                              Độ rộng mâm:
                            </b>
                          </td>
                          <td>
                            <span className="text-gray-500 text-dark dark:text-primary">
                              {product?.dorongmam}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>
                            <b className="font-medium w-36 inline-block text-dark dark:text-primary">
                              Số tầng:
                            </b>
                          </td>
                          <td>
                            <span className="text-gray-500 text-dark dark:text-primary">
                              {product?.sotang}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>
                            <b className="font-medium w-36 inline-block text-dark dark:text-primary">
                              Màu sắc:
                            </b>
                          </td>
                          <td>
                            <span className="text-gray-500 text-dark dark:text-primary">
                              {product?.mausac}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>
                            <b className="font-medium w-36 inline-block text-dark dark:text-primary">
                              Thương hiệu:
                            </b>
                          </td>
                          <td>
                            <span className="text-gray-500 text-dark dark:text-primary">
                              Giá kệ Tân Phát
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-5">
                  <button className="px-4 py-2 inline-block text-white bg-orange-600 border border-transparent rounded-md hover:bg-blue-700">
                    <i className="fa fa-shopping-cart mr-2"></i>
                    Hotline: 0866.527.271
                  </button>
                  <button className="px-4 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-blue-700">
                    <i className="fa fa-shopping-cart mr-2"></i>
                    Zalo: 0866.527.271
                  </button>
                </div>
              </div>
            </div>
            <div className="h-full w-full md:col-span-2 xl:col-span-4 xl:px-4 flex flex-col gap-6 justify-center">
              <div>
                <div className=" space-x-4  pt-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`${
                        activeTab === tab.id
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      } py-2 px-4  focus:outline-none`}
                      onClick={() => handleTabClick(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className="my-4">
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={activeTab === tab.id ? "" : "hidden"}
                    >
                      <div className="prose prose-lg dark:prose-invert mx-auto mt-1 max-w-2xl md:max-w-4xl lg:max-w-5xl">
                        {parse(product.content)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};
export async function getServerSideProps({ params: { slug } }) {
  const res = await getData(`product/${slug}`);
  return {
    props: {
      product: res.product,
    },
  };
}

export default DetailProduct;
