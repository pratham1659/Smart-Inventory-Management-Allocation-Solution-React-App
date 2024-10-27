import smart from "../images/smart.png";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({
      name: "John Doe",
      // avatar: "../temp/images/avatar512.png",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <main className="flex-grow flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-xs space-y-4 bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold text-center">Sign in to your account</h2>
            <form className="space-y-3">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-xs font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="E-Mail"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-xs font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaRegEyeSlash className="h-5 w-5 text-gray-400" /> : <FaRegEye className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
              </div>
              <div className="text-right">
                <a href="/" className="text-sm text-blue-700 hover:text-blue-500 hover:no-underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Sign in
              </button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or continue with</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <a
                    href="/"
                    className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xs font-medium text-gray-500 hover:bg-gray-50 no-underline hover:no-underline focus:no-underline active:no-underline">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                    <span className="text-sm">Google</span>
                  </a>
                </div>
                <div>
                  <a
                    href="/"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 no-underline hover:no-underline focus:no-underline active:no-underline">
                    Login with SSO
                  </a>
                </div>
              </div>
              {}
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">
              Need any help?{" "}
              <a
                href="/"
                className="font-medium text-blue-700 hover:text-blue-500 no-underline hover:no-underline focus:no-underline active:no-underline">
                Contact now
              </a>
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-gray-50 p-8 flex flex-col justify-center items-center text-center space-y-4 shadow-left">
          <h3 className="text-2xl font-bold">Smart Inventory, Smarter Business</h3>
          <div className="relative w-full max-w-md aspect-[4/3]">
            <img src={smart} alt="Analytics Dashboard" className="w-3/4 h-auto my-0 mx-auto" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Efficient Inventory, Effortless Success</h3>
            <p className="text-gray-600">Revolutionize Your Inventory, Realize Your Potential</p>
          </div>
        </div>
      </main>
    </div>
  );
}
