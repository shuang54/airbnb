'use client';

import axios from "axios";
import { signIn } from 'next-auth/react'
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import useRegisterModal from "../Hooks/useRegisterModal";
import useLoginModal from "../Hooks/useLoginModal";

import { useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import { toast } from 'react-hot-toast'
import Button from "../Button";
import {useRouter} from "next/navigation"
const LoginModal = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal =  useLoginModal();

  const [isLoading,setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues:{
      email:'',
      password:'',
    }
  });

  // 登录
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn('credentials',{
      ...data,
      redirect: false,
    })
    .then((callback) => {
      setIsLoading(false);

      if(callback?.ok){
        toast.success('Logged in');
        router.refresh();
        loginModal.onClose();
      }
      if(callback?.error){
        toast.error(callback.error);
      }
    })
  }
  // body
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title={"Welcome back"} subtitle="Login to your account!"/>
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )
  
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        Icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label="Continue with Github"
        Icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className=" flex flex-row items-center justify-center gqp-2">
        <div>Already have an account?</div>
        <div onClick={registerModal.onClose} className="text-neutral-800 cursor-pointer hover:underline">
          Log in
        </div>
      </div>
    </div>
  )

  return ( 
    <Modal
      title="Login"
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
   );
}
 
export default LoginModal;