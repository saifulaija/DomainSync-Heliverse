import { Link } from "react-router-dom";

import assets from "@/assets";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import AddUserForm from "@/form/AddUserForm";

export default function Login() {
  return (
    <main className="flex  items-center justify-center p-2 mx-auto">
      <Card
        className={cn(
          "flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden"
        )}
      >
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-center text-3xl font-bold">
            Add User to Domain<span className="text-primary">S</span>ync
          </h1>
          <div className="space-y-5">
            <AddUserForm />
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
      </Card>
    </main>
  );
}
