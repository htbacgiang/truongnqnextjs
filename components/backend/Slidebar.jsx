"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react"; // Thêm NextAuth để xử lý đăng xuất

import {
  LayoutGrid,
  ListOrdered,
  MenuSquare,
  Notebook,
  Settings,
  Users2,
  UserCircle,
  LogOut,
  ChevronRight,
  ShoppingCart,
  FolderPlus,
  SquarePen,
  ChevronDown,
  ChevronUp,
  Component,
  AppWindow,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../src/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../src/components/ui/collapsible";
import { useRouter } from "next/router";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const router = useRouter();
  const pathname = router.pathname;
  const { data: session, status } = useSession(); // Lấy trạng thái phiên từ NextAuth

  const sildebarLinks = [
    {
      title: "Đặt hàng",
      icon: ListOrdered,
      href: "/dashboard/dat-hang",
    },
    {
      title: "Bài viết",
      icon: Notebook,
      href: "/dashboard/bai-viet",
    },
    {
      title: "Khách hàng",
      icon: Users2,
      href: "/dashboard/khach-hang",
    },
    {
      title: "Cài đặt",
      icon: Settings,
      href: "/dashboard",
    },
  ];

  const catalogueLinks = [
    {
      title: "Sản phẩm",
      icon: ShoppingCart,
      href: "/dashboard/san-pham",
    },
    {
      title: "Thêm sản phẩm",
      icon: FolderPlus,
      href: "/dashboard/tao-san-pham",
    },
    {
      title: "Mã giảm giá",
      icon: Component,
      href: "/dashboard/ma-giam-gia",
    },
    {
      title: "Thêm bài viết",
      icon: SquarePen,
      href: "/dashboard/them-bai-viet",
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);

  // Hàm xử lý đăng xuất
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" }); // Chuyển hướng về trang chủ sau khi đăng xuất
  };

  // Nếu đang tải trạng thái phiên, hiển thị loading
  if (status === "loading") {
    return <div>Đang tải...</div>;
  }

  return (
    <div
      className={
        showSidebar
          ? "hidden sm:block mt-16 sm:mt-0 dark:bg-slate-700 bg-slate-50 space-y-6 w-52 h-screen dark:text-slate-50 text-slate-800 fixed left-0 top-0 shadow-md overflow-y-scroll"
          : "mt-16 hidden sm:mt-0 sm:block dark:bg-slate-700 bg-slate-50 space-y-6 w-52 h-screen dark:text-slate-50 text-slate-800 fixed left-0 top-0 shadow-md overflow-y-scroll"
      }
    >
      <Link onClick={() => setShowSidebar(false)} className="mb-6" href="/">
        <Image height={200} width={200} alt="avatar" src="/logo1.png" />
      </Link>

      <div className="space-y-3 flex flex-col mt-14">
        <Link
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 py-2 px-6 border-l-4 border-lime-600 text-lime-500"
              : "flex items-center space-x-3 py-2 px-6 "
          }
        >
          <LayoutGrid />
          <span>DashBoard</span>
        </Link>

        <Collapsible>
          <CollapsibleTrigger
            className=""
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div className="flex items-center space-x-3 px-6">
              <div className="flex items-center space-x-3">
                <MenuSquare />
                <span>Danh mục </span>
              </div>
              {openMenu ? <ChevronUp /> : <ChevronDown />}
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="px-3 pt-3 pl-8">
            {catalogueLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSidebar(false)}
                  href={item.href}
                  key={i}
                  className={
                    pathname === item.href
                      ? "flex items-center space-x-3 py-2 text-lime-500"
                      : "flex items-center space-x-3 py-2"
                  }
                >
                  <Icon />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sildebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              href={item.href}
              key={i}
              className={
                item.href === pathname
                  ? "flex items-center space-x-3 py-2 px-6 border-l-4 border-lime-600 text-lime-500"
                  : "flex items-center space-x-3 py-2 px-6 "
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}

        {/* Hiển thị nút Đăng xuất chỉ khi người dùng đã đăng nhập */}
        {session && (
          <div className="px-6 py-2">
            <button
              onClick={handleSignOut} // Gắn hàm đăng xuất
              className="bg-green-600 rounded-md dark:text-slate-50 text-slate-50 flex items-center space-x-3 px-4 py-3"
            >
              <LogOut />
              <span>Đăng xuất</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}