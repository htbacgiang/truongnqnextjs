import React from 'react'
import LargeCards from '../../../components/backend/dashboard/LargeCards'
import SmallCards from '../../../components/backend/dashboard/SmallCards'
import DashboardCharts from '../../../components/backend/dashboard/DashboardCharts'
import CustomDataTable from '../../../components/backend/dashboard/CustomDataTable'
import AdminLayout from '../../../components/layout/AdminLayout'
import Heading from '../../../components/backend/Heading'

export default function index() {
  return (
    <AdminLayout title="Dashboard">
      <Heading title="Dashboard" />
    <div className='p-8 bg-white dark:bg-slate-900 text-slate-50 min-h-screen'>
      <LargeCards />
      <SmallCards />
      {/* Charts */}
      <DashboardCharts />
      {/* Rencent Orders Table */}
      <CustomDataTable />
    </div>

      </AdminLayout>

  )
}
