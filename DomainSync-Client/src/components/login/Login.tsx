import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import assets from "@/assets";







export default function Login() {
  return (
    <main className="flex  items-center justify-center p-5 mx-auto">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-center text-3xl font-bold">
            Login to Medi<span className="text-blue-600">M</span>art
          </h1>
          <div className="space-y-5">
            <LoginForm />
            <Link to="/signup" className="block text-center hover:underline">
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
        <img
          src={assets.images.register}
          alt="login"
          className="hidden w-1/2 object-cover md:block object-center"
        />
      </div>
    </main>
  );
}
