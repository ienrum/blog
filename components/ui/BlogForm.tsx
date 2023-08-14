"use client";

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

interface Props {
  userId: number;
  fromTitle: string;
  fromDescription: string;
}

interface Inputs {
  title: string;
  description: string;
  userId: number;
}

type BlogFormJsxSignature = (props: Props) => React.ReactNode;

const BlogForm: BlogFormJsxSignature = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: true })} />
      {errors.title !== undefined && <span>This field is required</span>}
      <input />
      <input {...register("description", { required: true })} />
      {errors.description !== undefined && <span>This field is required</span>}
      <input type="hidden" {...register("userId", { required: true })} />
      <input type="submit" />
    </form>
  );
};

export default BlogForm;
