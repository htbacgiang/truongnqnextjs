import styles from "../styles/signin.module.scss";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
} from "next-auth/react";
import Router from "next/router";
import logo from "../public/logo1.png";
import Image from "next/image";
import { FaUser, FaEnvelope, FaPhoneAlt, FaLock } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialvalues = {
  login_email: "",
  login_password: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
  success: "",
  error: "",
  login_error: "",
};

// Rename to Signin (uppercase S)
export default function Signin({ providers, callbackUrl, csrfToken }) {
  const [user, setUser] = useState(initialvalues);
  const [loading, setLoading] = useState(false);
  const [canResend, setCanResend] = useState(true);
  const [cooldown, setCooldown] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [resendMessage, setResendMessage] = useState("");

  const { login_email, login_password, password, error, login_error } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Nhập địa chỉ email.")
      .email("Vui lòng nhập địa chỉ email chính xác."),
    login_password: Yup.string().required("Vui lòng nhập mật khẩu"),
  });

  const signInHandler = async () => {
    setLoading(true);
    let options = {
      redirect: false,
      email: login_email,
      password: login_password,
    };
    const res = await signIn("credentials", options);
    setUser({ ...user, success: "", error: "" });
    setLoading(false);

    if (res?.error) {
      setLoading(false);
      if (res.error.includes("chưa được xác nhận")) {
        setUser({ ...user, login_error: res.error, showResend: true });
      } else {
        setUser({ ...user, login_error: res.error, showResend: false });
      }
    } else {
      return Router.push(callbackUrl || "/");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleResendEmail = async () => {
    const res = await fetch("/api/auth/resendVerification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: login_email }),
    });

    const data = await res.json();

    if (data.cooldown) {
      setCooldown(data.cooldown);
      setCanResend(false);
      setResendMessage(
        "Link xác nhận đã được gửi lại, vui lòng kiểm tra email."
      );
      toast.warning(
        `Vui lòng chờ ${Math.floor(data.cooldown / 60)} phút ${
          data.cooldown % 60
        } giây để gửi lại.`
      );
    } else {
      toast.success(data.message);
      setResendMessage(
        "Link xác nhận đã được gửi lại, vui lòng kiểm tra email."
      );
      setCanResend(false);
      setCooldown(15 * 60);
    }
  };

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />

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
                <h3 className="font-semibold text-2xl text-gray-800">
                  Đăng nhập
                </h3>
                <p className="text-gray-500">
                  Hãy đăng nhập tài khoản của bạn.
                </p>
              </div>
              <div className="space-y-5">
                <Formik
                  enableReinitialize
                  initialValues={{
                    login_email,
                    login_password,
                  }}
                  validationSchema={loginValidation}
                  onSubmit={() => {
                    signInHandler();
                  }}
                >
                  {(form) => (
                    <Form method="post" action="/api/auth/signin/email">
                      <input
                        type="hidden"
                        name="csrfToken"
                        defaultValue={csrfToken}
                      />

                      <div className="relative mb-1">
                        <label
                          htmlFor="login_email"
                          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Email
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <FaEnvelope />
                          </span>
                          <input
                            onChange={handleChange}
                            type="email"
                            name="login_email"
                            className="pl-10 shadow-sm bg-gray-50 border border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Nhập email"
                            required
                          />
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
                            name="login_password"
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
                      <div>
                        <div className="flex items-center justify-between mb-2 mt-3">
                          <div className="flex items-center">
                            <input
                              id="remember_me"
                              name="remember_me"
                              type="checkbox"
                              className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                            />
                            <label
                              htmlFor="remember_me"
                              className="ml-2 block text-sm text-gray-800"
                            >
                              Nhớ mật khẩu
                            </label>
                          </div>
                          <div className="text-sm">
                            <Link
                              href="/auth/quen-mat-khau"
                              className="text-green-400 hover:text-green-500"
                            >
                              Quên mật khẩu?
                            </Link>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                        >
                          Đăng nhập
                        </button>
                      </div>
                      {login_error && (
                        <div className="text-center mt-2">
                          {resendMessage ? (
                            <span className="text-green-500 text-sm">
                              {resendMessage}
                            </span>
                          ) : login_error ? (
                            <span className="text-red-500 text-sm">
                              {login_error}
                            </span>
                          ) : null}

                          <br />
                          {canResend ? (
                            <button
                              className="text-blue-500 underline mt-2"
                              onClick={handleResendEmail}
                            >
                              Gửi lại email xác nhận
                            </button>
                          ) : (
                            <span className="text-gray-500 mt-2">
                              Vui lòng chờ {Math.floor(cooldown / 60)} phút{" "}
                              {cooldown % 60} giây để gửi lại
                            </span>
                          )}
                        </div>
                      )}
                    </Form>
                  )}
                </Formik>
              </div>
              <div className={styles.login__socials}>
                <span className="text-sm">
                  Bạn chưa có tài khoản?
                  <Link href="/dang-ky" className="text-blue-700">
                    {" "}
                    Đăng ký ngay
                  </Link>{" "}
                </span>

                <span className={styles.or}>Hoặc đăng nhập với</span>
                <div className={styles.login__socials_wrap}>
                  {providers.map((provider) => {
                    if (provider.name == "Credentials") {
                      return;
                    }
                    return (
                      <div key={provider.name}>
                        <button
                          className={styles.social__btn}
                          onClick={() => signIn(provider.id)}
                        >
                          <img
                            src={`../../icons/${provider.name}.png`}
                            alt=""
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-5 text-center text-gray-400 text-xs">
                <span>
                  Copyright © 2025{" "}
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
  const callbackUrl = query.callbackUrl || null;

  if (session) {
    return {
      redirect: {
        destination: callbackUrl || "/",
      },
    };
  }

  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();

  return {
    props: {
      providers: providers ? Object.values(providers) : [],
      csrfToken: csrfToken || null,
      callbackUrl,
    },
  };
}
