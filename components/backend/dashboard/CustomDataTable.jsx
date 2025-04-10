"use client";
import React, { useState, useEffect } from "react";

export default function CustomDataTable() {
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      try {
        setLoading(true);
        const response = await fetch(`/api/contact?page=${currentPage}&limit=${PAGE_SIZE}`, {
          method: "GET",
        });
        const result = await response.json();
        if (result.success) {
          setData(result.data);
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError("Không thể tải danh sách khách hàng");
        console.error("Lỗi khi gọi API:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchContacts();
  }, [currentPage]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/contact?id=${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.success) {
        setData(data.filter((item) => item._id !== id));
        setShowConfirm(false);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("Không thể xóa thông tin");
      console.error("Lỗi khi xóa:", error);
    }
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const numberofPages = Math.ceil(data.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentDisplayData = data.slice(startIndex, endIndex);
  const itemStartIndex = startIndex + 1;
  const itemEndIndex = Math.min(startIndex + PAGE_SIZE, data.length);

  if (loading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="">
      <h3 className="mb-4 text-green-800 dark:text-slate-50 font-bold">
        Danh sách khách hàng của Eco Bắc Giang
      </h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              
              <th scope="col" className="px-6 py-3">STT</th>
              <th scope="col" className="px-6 py-3">Tên khách hàng</th>
              <th scope="col" className="px-6 py-3">SĐT</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Chủ đề</th>
              <th scope="col" className="px-6 py-3">Tin nhắn</th>
              <th scope="col" className="px-6 py-3">Thời gian gửi</th>
              <th scope="col" className="px-6 py-3">Xóa</th>
            </tr>
          </thead>
          <tbody>
            {currentDisplayData.map((item, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
              
                <td className="px-6 py-4">{startIndex + i + 1}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.subject || "Không có"}</td>
                <td className="px-6 py-4">{item.message || "Không có"}</td>
                <td className="px-6 py-4">
                  {new Date(item.submittedAt).toLocaleString("vi-VN")}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => confirmDelete(item._id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
          aria-label="Table navigation"
        >
          <span className="text-slate-800 dark:text-slate-50 text-sm font-normal mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Hiện thị{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-50">
              {itemStartIndex}-{itemEndIndex}
            </span>{" "}
            của{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-50">
              {data.length}
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Lùi
              </button>
            </li>
            {Array.from({ length: numberofPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  disabled={currentPage === index + 1}
                  className={
                    currentPage === index + 1
                      ? "flex items-center justify-center px-3 h-8 leading-tight text-gray-50 bg-blue-600 border border-blue-300 hover:bg-blue-800 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === numberofPages}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Tiến
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Popup xác nhận xóa */}
      {showConfirm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-black">Xác nhận xóa</h3>
            <p className="mb-4 text-black">Bạn có chắc chắn muốn xóa thông tin này?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Hủy
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}