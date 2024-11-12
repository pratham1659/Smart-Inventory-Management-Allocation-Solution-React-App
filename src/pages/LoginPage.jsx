import React from "react";
import smart from "../images/smart.png";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-gray-100">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-bold">Sign in to your account</h1>
                </div>
                <form className="space-y-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input id="password" type={showPassword ? "text" : "password"} required />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                        {showPassword ? <FaRegEyeSlash className="h-4 w-4" /> : <FaRegEye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <Link to="/" className="text-sm text-blue-700 hover:text-blue-500 hover:no-underline">
                      Forgot Password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Sign In
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div>
                    <Link
                      to="/"
                      className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xs font-medium text-gray-500 hover:bg-gray-50 no-underline hover:no-underline focus:no-underline active:no-underline">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                      </svg>
                      <span className="text-sm">Google</span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 no-underline hover:no-underline focus:no-underline active:no-underline">
                      Login with SSO
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <p className="text-sm text-gray-600"> Already have an account?</p>
                  <Link to="/register" className="text-sm text-blue-700 hover:text-blue-500 no-underline">
                    Sign Up
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
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
};

export default LoginPage;
