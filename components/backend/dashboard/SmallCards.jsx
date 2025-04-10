'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import SmallCard from "./SmallCard";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

export default function OrderStatusCards() {
  const [stats, setStats] = useState([
    { title: "Đơn hàng hôm nay", number: 0, icon: ShoppingCart, iconBg: "bg-green-600" },
    { title: "Đơn hủy hôm nay", number: 0, icon: Loader2, iconBg: "bg-red-600" },
    { title: "Đơn hàng tháng này", number: 0, icon: RefreshCcw, iconBg: "bg-orange-600" },
    { title: "Đơn hủy tháng này", number: 0, icon: CheckCheck, iconBg: "bg-purple-600" },
  ]);

  useEffect(() => {
    fetchOrderStatus();
  }, []);

  const fetchOrderStatus = async () => {
    try {
      const res = await axios.get("/api/orders");
      const orders = res.data.orders;

      const today = new Date().toLocaleDateString("vi-VN");
      const thisMonth = new Date().getMonth();
      const thisYear = new Date().getFullYear();

      let todayOrders = 0,
        todayCancelled = 0,
        monthOrders = 0,
        monthCancelled = 0;

      orders.forEach(order => {
        const orderDate = new Date(order.createdAt);
        const orderDateString = orderDate.toLocaleDateString("vi-VN");

        if (orderDateString === today) {
          todayOrders++;
          if (order.status === "cancelled") todayCancelled++;
        }

        if (orderDate.getMonth() === thisMonth && orderDate.getFullYear() === thisYear) {
          monthOrders++;
          if (order.status === "cancelled") monthCancelled++;
        }
      });

      setStats([
        { title: "Đơn hàng hôm nay", number: todayOrders, icon: ShoppingCart, iconBg: "bg-green-600" },
        { title: "Đơn hủy hôm nay", number: todayCancelled, icon: Loader2, iconBg: "bg-red-600" },
        { title: "Đơn hàng tháng này", number: monthOrders, icon: RefreshCcw, iconBg: "bg-orange-600" },
        { title: "Đơn hủy tháng này", number: monthCancelled, icon: CheckCheck, iconBg: "bg-purple-600" },
      ]);
    } catch (error) {
      console.error("Error fetching order statuses:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
      {stats.map((data, i) => (
        <SmallCard key={i} data={data} />
      ))}
    </div>
  );
}