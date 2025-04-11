import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react"; // Thêm useEffect
import { getCsrfToken, getProviders, getSession, signIn } from "next-auth/react";
import Router from "next/router";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Định nghĩa giá trị ban đầu
const initialValues = {
  login_email: "",
  login_password: "",
  success: "",
  error: "",
  login_error: "",
};

// Schema validation với Yup
const loginValidation = Yup.object({
  login_email: Yup.string()
    .required("Nhập địa chỉ email.")
    .email("Vui lòng nhập địa chỉ email chính xác."),
  login_password: Yup.string().required("Vui lòng nhập mật khẩu"),
});

export default function Signin({ providers, callbackUrl, csrfToken }) {
  // Tải dữ liệu từ Local Storage nếu có
  const [formData, setFormData] = useState(() => {
    if (typeof window !== "undefined") {
      const savedEmail = localStorage.getItem("savedEmail") || "";
      const savedPassword = localStorage.getItem("savedPassword") || "";
      return {
        ...initialValues,
        login_email: savedEmail,
        login_password: savedPassword,
      };
    }
    return initialValues;
  });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // State cho checkbox

  const { login_email, login_password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setStatus("Đang đăng nhập...");
    setSubmitting(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: values.login_email,
        password: values.login_password,
      });

      if (res?.error) {
        setStatus(`Lỗi: ${res.error}`);
        setFormData((prev) => ({ ...prev, login_error: res.error }));
      } else {
        setStatus("Đăng nhập thành công!");
        // Lưu vào Local Storage nếu checkbox được tích
        if (rememberMe) {
          localStorage.setItem("savedEmail", values.login_email);
          localStorage.setItem("savedPassword", values.login_password);
        } else {
          localStorage.removeItem("savedEmail");
          localStorage.removeItem("savedPassword");
        }
        setFormData(initialValues);
        setTimeout(() => setStatus(""), 3000);
        Router.push("/dashboard");
      }
    } catch (error) {
      setStatus(`Lỗi: ${error.message || "Đã xảy ra lỗi khi đăng nhập"}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />

      <section
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `url('/banner3.jpg')`, // Thay bằng đường dẫn hình ảnh của bạn
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-md relative z-10 opacity-90">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Đăng nhập</h2>

          <Formik
            enableReinitialize
            initialValues={{
              login_email,
              login_password,
            }}
            validationSchema={loginValidation}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <input
                  type="hidden"
                  name="csrfToken"
                  defaultValue={csrfToken}
                />

                {/* Username or Email */}
                <div className="relative">
                  <label className="block text-white text-sm mb-2">
                    Địa chỉ Email <span className="text-orange-500">*</span>
                  </label>
                  <div className="flex items-center border border-gray-600 rounded-lg bg-gray-800 gap-4">
                    <span className="pl-3 text-orange-500">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      name="login_email"
                      value={login_email}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Username or email address"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="relative">
                  <label className="block text-white text-sm mb-2">
                    Mật khẩu <span className="text-orange-500">*</span>
                  </label>
                  <div className="flex items-center border border-gray-600 rounded-lg bg-gray-800 gap-4">
                    <span className="pl-3 text-orange-500">
                      <FaLock />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="login_password"
                      value={login_password}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Password"
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="pr-3 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember_me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-orange-500 bg-gray-800 border-gray-600 rounded focus:ring-orange-500"
                  />
                  <label className="ml-2 text-white text-sm">Lưu mật khẩu</label>
                </div>

                {/* Status Message */}
                {status && (
                  <p
                    className={`text-center ${
                      status.includes("thành công") ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {status}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || status === "Đang đăng nhập..."}
                  className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Đăng nhập
                </button>

                {/* Lost Password Link */}
                <div className="text-center">
                  <Link
                    href="/auth/quen-mat-khau"
                    className="text-white text-sm hover:text-orange-500 transition-colors"
                  >
                    Quên mật khẩu
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
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
        destination: "/dashboard",
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