"use client";

import { Link, TextField } from "@radix-ui/themes";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { loginSchema } from "../../validation/createIssueSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";

import {
  Alert,
  Anchor,
  Button,
  Checkbox,
  Input,
  PasswordInput,
} from "@mantine/core";
import { Spinner } from "../../components";
import { useRouter } from "next/navigation";
import { useLoginUser } from "../../hooks/useAuthUser";
import { useStateValue } from "../../context/StateProvider";

const LoginPage = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const router = useRouter();

  const { data: res, isSuccess, mutate: login } = useLoginUser();
  const [{}, dispatch] = useStateValue();
  const {
    register,
    control,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit((data) => {
    setIsFormSubmitting(true);
    try {
      const payload = {
        data: data,
      };
      login(payload);
    } catch (error) {
      setIsFormSubmitting(false);
    }
  });
  useEffect(() => {
    if (isSuccess && res?.token) {
      dispatch({
        type: "SET_USER",
        user: {
          accessToken: res.token,
        },
      });
      router.push("/");
    }
  }, [dispatch, isSuccess, res, router]);

  return (
    <div className="flex gap-4 py-20 px-16 items-center rounded-lg bg-violet-100">
      {/* Left Image */}
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <AspectRatio.Root ratio={16 / 9}>
          <Image
            className=""
            width="300"
            height="300"
            src="/login_img.svg"
            alt="Login Image"
          />
        </AspectRatio.Root>
      </div>

      {/* Right Login Form */}
      <form className="m-auto sm:w-3/4 md:w-1/2 lg:w-2/3 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Login Here</h2>

        {/* Email Input */}
        <div className="mb-4 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium"
            >
              Email
            </label>
            {errors.email && (
              <Alert variant="light" color="red" radius="md">
                <span className="text-red-800 flex items-center gap-2">
                  <IoInformationCircleOutline /> {errors.email.message}
                </span>
              </Alert>
            )}
          </div>
          {/* <TextField.Root>
            <TextField.Input
              placeholder="john@gmail.com"
              {...register("email")}
            />
          </TextField.Root> */}
          <Input
            size="md"
            radius="md"
            defaultValue="example@email.com"
            placeholder="john@gmail.com"
            {...register("email")}
            leftSection={<MdEmail size={16} />}
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-1 mb-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium"
            >
              Email
            </label>
            {errors.password && (
              <Alert variant="light" color="red" radius="md">
                <span className="text-red-800 flex items-center gap-2">
                  <IoInformationCircleOutline /> {errors.password.message}
                </span>
              </Alert>
            )}
          </div>
          {/* <TextField.Root>
            <TextField.Input
              type="password"
              placeholder="********"
              {...register("password")}
            />
          </TextField.Root> */}
          <PasswordInput
            size="md"
            radius="md"
            placeholder="********"
            defaultValue="P@sswd123."
            {...register("password")}
            leftSection={<RiLockPasswordFill size={16} />}
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="mb-4 flex items-center">
          {/* <input
            type="checkbox"
            id="rememberMe"
            className="mr-2"
            {...register("rememberMe")}
          />

          <label htmlFor="rememberMe" className="text-sm text-gray-600">
            Remember me
          </label> */}
          <Checkbox
            defaultChecked={false}
            label="Remember Me"
            color="violet"
            size="md"
            {...register("rememberMe")}
          />
        </div>

        {/* Login Button */}
        <div className="mt-8">
          {/* <Button
            className=" px-16 py-5 text-base cursor-pointer text-white rounded-md hover:bg-blue-600"
            onClick={onSubmit}
          >
            Login
          </Button> */}
          <Button
            fullWidth
            className="text-base cursor-pointer"
            variant="filled"
            color="violet"
            size="md"
            radius="md"
            rightSection={
              isFormSubmitting ? <Spinner /> : <FaArrowRightLong size={16} />
            }
            disabled={isFormSubmitting}
            onClick={onSubmit}
          >
            Login
          </Button>
          <p className="mt-2">
            Not registered yet ?{" "}
            <Anchor href="/auth/register">Signup Here</Anchor>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
