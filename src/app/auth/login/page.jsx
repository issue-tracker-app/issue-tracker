"use client";

import { Button, Link, TextField } from "@radix-ui/themes";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";
import { loginSchema } from "../../validation/createIssueSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
  const {
    register,
    control,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex gap-4 py-20 px-16 items-center rounded-lg bg-violet-100">
      {/* Left Image */}
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <AspectRatio.Root ratio={16 / 9}>
          <Image
            className=""
            width="400"
            height="400"
            src="/login_img.svg"
            alt="Login Image"
          />
        </AspectRatio.Root>
      </div>

      {/* Right Login Form */}
      <form
        className="m-auto sm:w-3/4 md:w-1/2 lg:w-2/3 p-8 bg-white rounded-lg shadow-md"
        onSubmit={onSubmit}
      >
        <h2 className="text-3xl font-semibold mb-4">{"Let's Get In"}</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium"
          >
            Email
          </label>
          <TextField.Root>
            <TextField.Input
              placeholder="john@gmail.com"
              {...register("email")}
            />
          </TextField.Root>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium"
          >
            Password
          </label>
          <TextField.Root>
            <TextField.Input
              type="password"
              placeholder="********"
              {...register("password")}
            />
          </TextField.Root>
        </div>

        {/* Remember Me Checkbox */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2"
            {...register("rememberMe")}
          />
          <label htmlFor="rememberMe" className="text-sm text-gray-600">
            Remember me
          </label>
        </div>

        {/* Login Button */}
        <div className="mt-8">
          <Button className=" px-16 py-5 text-base cursor-pointer text-white rounded-md hover:bg-blue-600">
            Login
          </Button>
          <p className="mt-2">
            Not registered yet ? <Link href="#">Signup here</Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
