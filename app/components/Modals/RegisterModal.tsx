'use client';

import axios from "axios";
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import useRegisterModal from "../Hooks/useRegisterModal";
import { useState } from "react";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import { toast } from 'react-hot-toast'
import Button from "../Button";
import { signIn } from "next-auth/react";
const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading,setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues:{
      name:'',
      email:'',
      password:'',
    }
  });

  // 登录
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/register',data)
      .then(()=>{
        toast.success("login was successful")
        registerModal.onClose();
      })
      .catch((error)=>{
        toast.error(`Something went wrong.`);
      })
      .finally(()=>{
        setIsLoading(false);
      })
  }
  // body
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title={"Welcome to Airbnb"} subtitle="Create an account!"/>
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
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
        onClick={()=>{}}
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
      title="Register"
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
   );
}
 
export default RegisterModal;