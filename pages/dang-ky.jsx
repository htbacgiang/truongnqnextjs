import styles from "../styles/signin.module.scss";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
  country,
} from "next-auth/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPhoneAlt, FaLock } from "react-icons/fa";
import axios from "axios";
import Router from "next/router";
import logo from "../public/logo1.png";
import Image from "next/image";
import * as Yup from "yup";

const initialvalues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  conf_password: "",
  agree: false,
  success: "",
  error: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Họ và tên là bắt buộc"),
  email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  phone: Yup.string()
    .matches(/^(0[3|5|7|8|9])+([0-9]{8})\b$/, "Số điện thoại không hợp lệ")
    .required("Số điện thoại là bắt buộc"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Mật khẩu là bắt buộc"),
  conf_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
    .required("Nhập lại mật khẩu là bắt buộc"),
  agree: Yup.string().oneOf(["on"], "Bạn phải đồng ý với điều khoản"),
});

// Rename to Signup (uppercase S)
export default function Signup({ providers, callbackUrl, csrfToken }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialvalues);
  const { name, email, phone, password, conf_password, agree, success, error } = user;

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? (checked ? "on" : "") : value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const signUpHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/signup", {
        name,
        email,
        phone,
        password,
        conf_password,
        agree,
      });
      setUser({ ...user, error: "", success: data.message });
      setLoading(false);
      setTimeout(async () => {
        let options = {
          redirect: false,
          email: email,
          phone: phone,
          password: password,
        };
        const res = await signIn("credentials", options);
        Router.push("/");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setUser({
        ...user,
        agree: false,
        success: "",
        error: error.response?.data?.message || "Đã xảy ra lỗi.",
      });
      setTimeout(() => {
        setUser({ ...user, error: "" });
      }, 3000);
    }
  };

  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80)",
        }}
      >
        <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
            <div className="self-start hidden lg:flex flex-col text-white">
              <Image src={logo} className="mb-3" alt="Logo" width={200} />
              <h3 className="mb-3 font-bold text-2xl">
                👋 Chào mừng quay trở lại Eco Bắc Giang
              </h3>
              <p className="pr-3">
                Thân thiện với môi trường, bảo vệ sức khỏe cộng đồng - Hãy để
                Eco Bắc Giang trở thành người bạn đồng hành của gia đình bạn.
              </p>
            </div>
          </div>

          <div className="flex justify-center self-center z-10">
            <div className="p-4 pl-8 pr-8 bg-white mx-auto rounded-2xl w-100">
              <div className="mb-1">
                <p className="font-semibold text-2xl text-gray-800">
                  Đăng ký tài khoản
                  <span aria-label="emoji" className="ml-2" role="img">
                    👋
                  </span>
                </p>
              </div>

              <div className="space-y-5">
                <Formik
                  enableReinitialize
                  initialValues={{
                    name,
                    email,
                    phone,
                    password,
                    conf_password,
                  }}
                  onSubmit={(values) => {
                    console.log("Submitted Values:", values);
                    signUpHandler();
                  }}
                >
                  {(form) => (
                    <Form>
                      <div className="mb-1">
                        <label
                          htmlFor="name"
                          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Họ và tên
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <FaUser />
                          </span>
                          <input
                            type="text"
                            name="name"
                            className="pl-10 shadow-sm bg-gray-50 border border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Họ và tên"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="mb-1 w-60">
                          <label
                            htmlFor="email"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Email
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                              <FaEnvelope />
                            </span>
                            <input
                              type="email"
                              name="email"
                              className="pl-10 shadow-sm bg-gray-50 border border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                              placeholder="Nhập địa chỉ email"
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-1 w-40">
                          <label
                            htmlFor="phone"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Số điện thoại
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                              <FaPhoneAlt />
                            </span>
                            <input
                              type="text"
                              name="phone"
                              className="pl-10 shadow-sm bg-gray-50 border border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                              placeholder="Số điện thoại"
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="relative mb-1">
                        <label
                          htmlFor="password"
                          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Mật khẩu
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <FaLock />
                          </span>
                          <input
                            onChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="pl-10 shadow-sm bg-gray-50 border border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Nhập mật khẩu"
                            required
                          />
                          <span
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                        </div>
                      </div>

                      <div className="relative mb-1">
                        <label
                          htmlFor="password"
                          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Nhập lại mật khẩu
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <FaLock />
                          </span>
                          <input
                            onChange={handleChange}
                            type={showConfirmPassword ? "text" : "password"}
                            name="conf_password"
                            className="pl-10 shadow-sm bg-gray-50 border border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Nhập lại mật khẩu"
                            required
                          />
                          <span
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                          >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center my-2">
                        <input
                          type="checkbox"
                          id="agree"
                          name="agree"
                          checked={agree === "on"}
                          className="mr-2"
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="agree"
                          className="text-sm text-gray-700"
                        >
                          Tôi đồng ý với{" "}
                          <Link
                            href="/terms"
                            className="text-blue-600 hover:underline"
                          >
                            Điều khoản
                          </Link>{" "}
                          &{" "}
                          <Link
                            href="/privacy"
                            className="text-blue-600 hover:underline"
                          >
                            Chính sách bảo mật
                          </Link>
                          .
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                        disabled={loading}
                      >
                        {loading ? "Đang xử lý..." : "Đăng ký"}
                      </button>
                    </Form>
                  )}
                </Formik>

                <div>
                  {success && <span className="text-green-500 text-sm">{success}</span>}
                </div>
                <div>
                  {error && <span className="text-red-500 text-sm">{error}</span>}
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <span className="text-sm">
                  Bạn đã có tài khoản?
                  <Link href="/dang-nhap" className="text-blue-700">
                    {" "}
                    Đăng nhập
                  </Link>{" "}
                </span>
              </div>

              <div className="pt-2 text-center text-gray-400 text-xs">
                <span>
                  Copyright © 2024{" "}
                  <a
                    href="https://codepen.io/uidesignhub"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Ajimon"
                    className="text-green hover:text-green-500"
                  >
                    Eco Bắc Giang
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req, query } = context;

  const session = await getSession({ req });

  const providers = Object.values(await getProviders());
  return {
    props: {
      providers,
    },
  };
}