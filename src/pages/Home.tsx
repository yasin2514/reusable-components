import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormSection,
  FormSubmit,
  InnerSection,
  Input,
  Select,
  TextArea,
} from "../components/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "../validator/form.validator";
import { TSignUpSchema } from "../types/types";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: FieldValues) => {
    reset();
    console.log(data);
  };
  return (
    <div className="md:py-5">
      {/* <NormalForm double={true}></NormalForm> */}
      <Form
        double={true}
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
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
            register={register("confirmPassword")}
            errors={errors}
          />
          <Input.InnerSection
            type={"radio"}
            register={register("religion")}
            errors={errors}
            label={"Religion"}
          >
            <InnerSection.Input value={"Islam"} />
            <InnerSection.Input value={"Christian"} />
            <InnerSection.Input value={"Hindus"} />
            <InnerSection.Input value={"Others"} />
          </Input.InnerSection>
          <Input.InnerSection
            type={"checkbox"}
            register={register("hobby")}
            errors={errors}
            label={"Hobby"}
          >
            <InnerSection.Input value={"Reading Book"} />
            <InnerSection.Input value={"Swimming"} />
            <InnerSection.Input value={"Traveling"} />
            <InnerSection.Input value={"Others"} />
          </Input.InnerSection>

          <Select
            register={register("country")}
            errors={errors}
            label={"Choose Your Country"}
            options={[
              "Bangladesh",
              "India",
              "USA",
              "UK",
              "Canada",
              "Australia",
            ]}
          />

          <TextArea
            label={"Enter Message"}
            placeholder={"Write here"}
            register={register("message")}
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </div>
  );
};

export default Home;
