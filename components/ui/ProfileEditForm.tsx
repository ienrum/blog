import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import { User } from "../../redux/slices/usersSlice";
import React from "react";

import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/usersSlice";

interface Inputs {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface Props {
  user: User;
  editHandler: () => void;
}

const ProfileEditForm = ({ user, editHandler }: Props): React.ReactNode => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    editHandler();
    dispatch(updateUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input {...register("name", { value: user.name })} />
      {errors.name !== undefined && <span>This field is required</span>}
      <label htmlFor="email">Email</label>
      <input type="email" {...register("email", { value: user.email })} />
      <label htmlFor="password">Password</label>
      <input type="password" {...register("password")} />
      <label htmlFor="passwordConfirmation">Password Confirmation</label>
      <input type="password" {...register("passwordConfirmation")} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ProfileEditForm;
