import Input from "@/components/Input";
import Layout from "@/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Login() {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <Layout>
      <div className="flex flex-col md:items-center pt-20 lg:pt-24">
        <div className="md:px-16 px-4 md:w-1/2 lg:w-1/3">
          <h1 className="font-poppins text-2xl lg:text-3xl font-semibold mb-16 text-center">
            Welcome back
          </h1>
        </div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="md:px-16 px-4 md:w-1/2 lg:w-1/3"
        >
          <Input
            register={{ ...register("email") }}
            type="email"
            placeholder="Email"
            name="email"
            label=""
            value={formData.email}
            onChange={onChange}
            errorMessage={
              errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )
            }
          />

          <Input
            register={{ ...register("password") }}
            type="password"
            placeholder="Password"
            name="password"
            label=""
            value={formData.password}
            onChange={onChange}
            errorMessage={
              errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )
            }
          />

          <button
            className={`px-4 py-3 md:px-4 md:py-3 w-full text-sm md:text-lg bg-Yellow font-poppins font-semibold rounded-xl w-fit hover:bg -yellow-600 transition-all `}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                {" "}
                <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 mr-3" />{" "}
                Loading...{" "}
              </>
            ) : (
              "Log in"
            )}
          </button>
        </form>

        <div className="md:px-16 px-4 md:w-1/2 lg:w-1/3">
          <div className="flex items-center justify-center space-x-4 my-6">
            <hr className="w-24 lg:w-32 " />
            <p className="text-sm font-medium text-gray-700">or login with</p>
            <hr className="w-24 lg:w-32 " />
          </div>
          <button className="flex flex-row gap-3 items-center justify-center px-4 py-3 md:px-4 md:py-3 w-full text-sm md:text-lg bg-white hover:bg-[#E7E7E7] font-poppins font-semibold rounded-xl w-fit hover:bg -yellow-600 transition-all">
            <Image
              src="/google.svg"
              width={32}
              height={32}
              alt="Google"
              className="w-6"
            />
            Log in with Google
          </button>
        </div>
        <div className="flex justify-center items-center font-poppins gap-1 text-md mt-4">
          Don't have an account?{" "}
          <Link className="text-Teal font-medium underline" href="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </Layout>
  );
}
