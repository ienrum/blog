import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const ProfileEditForm = (): React.ReactNode => {
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
      <label htmlFor="name">Name</label>
      <input {...register("name")} />
      {errors.name !== undefined && <span>This field is required</span>}
      <label htmlFor="email">Email</label>
      <input type="email" {...register("email")} />
      <label htmlFor="password">Password</label>
      <input type="password" {...register("password")} />
      <label htmlFor="passwordConfirmation">Password Confirmation</label>
      <input type="password" {...register("passwordConfirmation")} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ProfileEditForm;
