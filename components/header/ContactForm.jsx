'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Đang gửi...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Gửi thành công!');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        setStatus(`Lỗi: ${result.message}`);
      }
    } catch (error) {
      setStatus('Đã xảy ra lỗi khi gửi form');
    }
  };

  return (
    <div className="bg-gray-50 border border-pink-500 rounded-2xl p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section: Text */}
        <div>
          <h2 className="text-xl font-semibold text-pink-500 uppercase tracking-wide mb-2">
            Liên hệ với chúng tôi
          </h2>
          <h3 className="text-sm font-bold text-gray-900 mb-4">
            Nâng tầm thương hiệu của bạn với TruongNQ Web
          </h3>
          <p className="text-lg text-gray-600">
            Hãy để TruongNQ Web giúp bạn xây dựng website chuyên nghiệp, tối ưu SEO và giảm phụ thuộc vào quảng cáo.
          </p>
          <p>Liên hệ ngay để nhận tư vấn!</p>
        </div>

        {/* Right Section: Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Họ và tên"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Số điện thoại"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email của bạn"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Chủ đề"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tin nhắn của bạn"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-semibold py-3 rounded-full hover:bg-pink-600 transition-colors flex items-center justify-center gap-2"
            >
              Gửi ngay <span>→</span>
            </button>
          </form>
          {status && <p className="mt-2 text-center text-gray-600">{status}</p>}
        </div>
      </div>
    </div>
  );
}