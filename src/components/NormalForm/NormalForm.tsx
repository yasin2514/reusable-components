import { useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "./validator";

const NormalForm = ({ double }: { double: boolean }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("border border-gray-400 rounded-md shadow-sm p-5 mx-auto", {
        "max-w-5xl": double,
        "max-w-lg ": !double,
      })}
    >
      <div
        className={cn("grid grid-cols-1 gap-5 justify-items-center", {
          "md:grid-cols-2": double,
        })}
      >
        <div className=" w-full max-w-md">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">
              {errors?.name?.message}
            </span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">
              {errors?.email?.message}
            </span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors?.password?.message}
            </span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="re-password" className="block">
            Confirm Password
          </label>
          <input
            type="password"
            id="re-password"
            placeholder="Enter Your Password Again"
            {...register("rePassword")}
          />
          {errors.rePassword && (
            <span className="text-red-500 text-xs">
              {errors?.rePassword?.message}
            </span>
          )}
        </div>
        {/* radio button section start */}
        <div className="w-full max-w-md">
          <label className="block">Religion</label>
          <div className="grid grid-cols-2 md:flex justify-between items-center">
            <div className="space-x-2 flex items-center">
              <input
                type="radio"
                id="islam"
                value="Islam"
                {...register("religion")}
              />
              <label htmlFor="islam">Islam</label>
            </div>
            <div className="space-x-2 flex items-center">
              <input
                type="radio"
                id="christian"
                value="Christian"
                {...register("religion")}
              />
              <label htmlFor="christian">Christian</label>
            </div>
            <div className="space-x-2 flex items-center">
              <input
                type="radio"
                id="hindus"
                value="Hindus"
                {...register("religion")}
              />
              <label htmlFor="hindus">Hindus</label>
            </div>
            <div className="space-x-2 flex items-center">
              <input
                type="radio"
                id="others"
                value="Others"
                {...register("religion")}
              />
              <label htmlFor="others">Others</label>
            </div>
          </div>
          {errors.religion && (
            <span className="text-red-500 text-xs">
              {errors?.religion?.message}
            </span>
          )}
        </div>
        {/* checkbox section start */}
        <div className="w-full max-w-md">
          <label className="block">Hobby</label>
          <div className="grid grid-cols-2 md:grid-cols-3 md:flex justify-between items-center">
            <div className="space-x-2 flex items-center">
              <input
                type="checkbox"
                id="reading-books"
                value="Reading Books"
                {...register("hobby")}
              />
              <label htmlFor="reading-books">Reading Books</label>
            </div>
            <div className="space-x-2 flex items-center">
              <input
                type="checkbox"
                id="swimming"
                value="Swimming"
                {...register("hobby")}
              />
              <label htmlFor="swimming">Swimming</label>
            </div>
            <div className="space-x-2 flex items-center">
              <input
                type="checkbox"
                id="traveling"
                value="Traveling"
                {...register("hobby")}
              />
              <label htmlFor="traveling">Traveling</label>
            </div>
          </div>
          {errors.hobby && (
            <span className="text-red-500 text-xs">
              {errors?.hobby?.message}
            </span>
          )}
        </div>
        {/* select section start */}
        <div className="w-full max-w-md">
          <label htmlFor="country" className="block">
            Choose Your Country
          </label>
          <select id="country" {...register("country")}>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Nepal">Nepal</option>
            <option value="Bhutan">Bhutan</option>
          </select>
          {errors.country && (
            <span className="text-red-500 text-xs">
              {errors?.country?.message}
            </span>
          )}
        </div>
        {/* text area section start */}
        <div className="w-full max-w-md">
          <label htmlFor="textarea" className="block">
            Write Something
          </label>
          <textarea id="textarea" {...register("textarea")}></textarea>
          {errors.textarea && (
            <span className="text-red-500 text-xs">
              {errors?.textarea?.message}
            </span>
          )}
        </div>
      </div>
      {/* submit button section*/}
      <div
        className={cn("grid gap-5 grid-cols-1 my-8 justify-items-center", {
          "md:grid-cols-2": double,
        })}
      >
        <div
          className={cn(
            " w-full max-w-md flex justify-end items-center gap-5 ",
            {
              "md:col-start-2": double,
            }
          )}
        >
          <Button
            type="reset"
            variant="reset"
            className={cn("w-full", { " md:w-1/4": double })}
          >
            Reset
          </Button>
          <Button
            type="submit"
            variant="submit"
            className={cn("w-full", { " md:w-1/4": double })}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
