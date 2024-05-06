import { useForm } from "react-hook-form";
import { Form, FormSection, FormSubmit, Input } from "../components/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "../validator/form.validator";
import { TSignUpSchema } from "../types/types";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="md:py-5">
      {/* <NormalForm double={true}></NormalForm> */}
      <Form double={true} onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <Input label={"Name"} register={register("name")} errors={errors} />
          <Input
            type={"email"}
            label={"Email"}
            register={register("email")}
            errors={errors}
          />
          <Input
            type={"password"}
            label={"Password"}
            register={register("password")}
            errors={errors}
          />
          <Input
            type={"password"}
            label={"Confirm Password"}
            register={register("password")}
            errors={errors}
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </div>
  );
};

export default Home;
