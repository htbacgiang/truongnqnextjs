import Head from "next/head";

export default function Test() {
  return (
    <>
      <Head>
        <title>Trang Thử Nghiệm</title>
        <meta name="description" content="Đây là trang thử nghiệm" />
        <meta property="og:title" content="Trang Thử Nghiệm OG" />
        <meta property="og:description" content="OG Description" />
        <meta
          property="og:image"
          content="https://via.placeholder.com/1200x630.png?text=Test"
        />
      </Head>
      <div>
        <h1>Trang Thử Nghiệm</h1>
      </div>
    </>
  );
}