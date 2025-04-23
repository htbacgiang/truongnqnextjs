import { useEffect, useRef } from 'react';

const AdBanner = ({ adSlot }) => {
  const adRef = useRef(null); // Ref để theo dõi thẻ <ins>
  const isPushed = useRef(false); // Ref để kiểm tra xem push() đã được gọi chưa

  useEffect(() => {
    // Chỉ gọi push() nếu chưa gọi trước đó
    if (!isPushed.current && adRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isPushed.current = true; // Đánh dấu là đã gọi push()
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []); // Dependency array rỗng để chỉ chạy một lần khi component mount

  return (
    <div className="my-4">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1263328541634591"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner;