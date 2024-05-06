import { useFormContext } from 'react-hook-form';

const InputField = () => {
   const {
     register,
     formState: { errors },
   } = useFormContext();
   return (
     <div className=" w-full max-w-md">
       <label htmlFor="something" className="block">
         Something
       </label>
       <input
         type="text"
         id="something"
         placeholder="Enter Something"
         {...register("something")}
       />
       {errors.something && (
         <span className="text-red-500 text-xs">
           {errors?.something?.message}
         </span>
       )}
     </div>
   );
};

export default InputField;