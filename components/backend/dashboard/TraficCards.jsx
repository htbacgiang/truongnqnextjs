'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import LargeCard from "./LargeCard";

export default function TraficCards() {
  const [stats, setStats] = useState([
    { period: "Hôm nay", sale: 0, color: "bg-green-600" },
    { period: "Hôm qua", sale: 0, color: "bg-blue-600" },
    { period: "Tháng này", sale: 0, color: "bg-orange-600" },
    { period: "Cả năm", sale: 0, color: "bg-purple-600" },
  ]);

  useEffect(() => {
    fetchGAStats();
  }, []);

  const fetchGAStats = async () => {
    try {
      const res = await axios.get("/api/ga-stats");
      const rows = res.data;

      const today = new Date().toISOString().split('T')[0].replace(/-/g, ''); // YYYYMMDD
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0].replace(/-/g, '');
      const thisMonth = new Date().getMonth();
      const thisYear = new Date().getFullYear();

      let todayTotal = 0,
        yesterdayTotal = 0,
        monthTotal = 0,
        allTimeTotal = 0;

      rows.forEach(row => {
        const date = row.dimensionValues[0].value; // YYYYMMDD từ GA
        const users = parseInt(row.metricValues[0].value); // activeUsers

        const dateObj = new Date(`${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6)}`);
        if (date === today) todayTotal += users;
        if (date === yesterday) yesterdayTotal += users;
        if (dateObj.getMonth() === thisMonth && dateObj.getFullYear() === thisYear)
          monthTotal += users;

        allTimeTotal += users;
      });

      setStats([
        { period: "Lượt truy cập hôm nay", sale: todayTotal, color: "bg-green-600" },
        { period: "Lượt truy cập hôm qua", sale: yesterdayTotal, color: "bg-blue-600" },
        { period: "Tháng này", sale: monthTotal, color: "bg-orange-600" },
        { period: "Cả năm", sale: allTimeTotal, color: "bg-purple-600" },
      ]);
    } catch (error) {
      console.error("Error fetching GA stats:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, i) => (
        <LargeCard data={item} key={i} />
      ))}
    </div>
  );
}