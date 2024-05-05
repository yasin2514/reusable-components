import cn from "../../utils/cn";
import Button from "../ui/Button";

const NormalForm = ({ double }: { double: boolean }) => {
  return (
    <form
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
            name="name"
            id="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="re-password" className="block">
            Confirm Password
          </label>
          <input
            type="password"
            name="rePassword"
            id="re-password"
            placeholder="Enter Your Password Again"
          />
        </div>
        {/* radio button section start */}
        <div className="w-full max-w-md">
          <label className="block">Religion</label>
          <div className="grid grid-cols-2 md:flex justify-between items-center">
            <div className="space-x-2 flex items-center">
              <input type="radio" name="religion" id="islam" value="Islam" />
              <label htmlFor="islam">Islam</label>
            </div>
            <div className="space-x-2 flex items-center">
              <input
                type="radio"
                name="religion"
                id="christian"
                value="Christian"
              />
              <label htmlFor="christian">Christian</label>
            </div>
            <div className="space-x-2 flex items-center">
              <input type="radio" name="religion" id="hindus" value="Hindus" />
              <label htmlFor="hindus">Hindus</label>
            </div>
            <div className="space-x-2 flex items-center">
              <input type="radio" name="religion" id="others" value="Others" />
              <label htmlFor="others">Others</label>
            </div>
          </div>
        </div>
        {/* checkbox section start */}
        <div className="w-full max-w-md">
          <label className="block">Hobby</label>
          <div className="grid grid-cols-2 md:grid-cols-3 md:flex justify-between items-center">
            <div className="space-x-2 flex items-center">
              <input
                type="checkbox"
                name="hobby"
                id="reading-books"
                value="Reading Books"
              />
              <label htmlFor="reading-books">Reading Books</label>
            </div>
            <div className="space-x-2 flex items-center">
              <input
                type="checkbox"
                name="hobby"
                id="swimming"
                value="Swimming"
              />
              <label htmlFor="swimming">Swimming</label>
            </div>
            <div className="space-x-2 flex items-center">
              <input
                type="checkbox"
                name="hobby"
                id="traveling"
                value="Traveling"
              />
              <label htmlFor="traveling">Traveling</label>
            </div>
          </div>
        </div>
        {/* select section start */}
        <div className="w-full max-w-md">
          <label htmlFor="country" className="block">
            Choose Your Country
          </label>
          <select name="country" id="country">
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Nepal">Nepal</option>
            <option value="Bhutan">Bhutan</option>
          </select>
        </div>
        {/* text area section start */}
        <div className="w-full max-w-md">
          <label htmlFor="textarea" className="block">
            Write Something
          </label>
          <textarea name="textarea" id="textarea"></textarea>
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
