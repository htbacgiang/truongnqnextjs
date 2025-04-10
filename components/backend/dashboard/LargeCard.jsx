import { Layers } from 'lucide-react';
import React from 'react';

export default function LargeCard({ data }) {
  const formattedValue = new Intl.NumberFormat('vi-VN').format(data.sale);

  return (
    <div className={`rounded-lg text-white shadow-md p-4 flex items-center flex-col gap-1 ${data.color}`}>
      <Layers />
      <h5>{data.period}</h5>
      <h2 className="lg:text-2xl text-xl">{formattedValue}</h2>
    </div>
  );
}