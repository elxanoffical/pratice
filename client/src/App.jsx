import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  // const demo = (e) => {
  //   e.preventDefault() // refresh qarsisini aldi

  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData.entries());

  //   console.log(data)

  // }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full  bg-black">
      <div className="container min-h-screen mx-auto flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          // onSubmit={demo}
          className="w-full max-w-lg py-8 px-12 rounded-xl shadow-lg shadow-red-500 transition duration-300 flex flex-col gap-8"
        >
          <h2 className="text-white text-center text-4xl tracking-wide font-extralight">
            Register Form
          </h2>

          <input
            // name='name'
            id="name"
            {...register("name", {
              required: true,
              minLength: 2,
              maxLength: 16,
              pattern: /^[A-Za-z]+$/i,
            })}
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none focus:border-red-500 border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter name.."
          />
          {errors.name && errors.name.type === "required" && (
            <span className="text-xl text-red-500"> xanani doldur</span>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <span className="text-xl text-red-500">min 2 simvol</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span className="text-xl text-red-500">max 15 simvol</span>
          )}

          <select
            className="text-2xl border focus:border-red-500 py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            id="gender"
            {...register("gender", {
              required: true,
            })}
          >
            <option className="text-black" value="">choose Gender</option>
            <option className="text-black" value="male">Male</option>
            <option className="text-black" value="famale">Female</option>
          </select>
          {errors.gender && errors.gender.type === "required" && (
            <span className="text-white">Gender qeyd edin</span>
          )}

          <input
            id="email"
            {...register("email", {
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
            className="text-2xl border py-2 px-4 focus:border-red-500 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter email.."
          />
          {errors.email && errors.email.type === "required" && (
            <span className="text-xl text-red-500">xanani doldur</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="text-xl text-red-500">
              Email sintaksisini duzgun yaz
            </span>
          )}

          <input
            id="age"
            {...register("age", {
              required: true,
              min: 18,
              max: 30,
              pattern: /^[0-9]+$/i,
            })}
            className="text-2xl border py-2 px-4 focus:border-red-500 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter age.."
          />
          {errors.age && errors.age.type === "required" && (
            <span className="text-xl text-red-500">xanani doldur</span>
          )}
          {errors.age && errors.age.type === "minLength" && (
            <span className="text-xl text-red-500">min 18 simvol</span>
          )}
          {errors.age && errors.age.type === "maxLength" && (
            <span className="text-xl text-red-500">max 30 simvol</span>
          )}

          <input
            id="password"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20,
              pattern: /^[0-9]+$/i,
            })}
            className="text-2xl border py-2 px-4 focus:border-red-500 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="password"
            placeholder="Enter Password"
          />
          {errors.password && errors.password.type === "required" && (
            <span className="text-xl text-red-500">xanani doldur</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span className="text-xl text-red-500">min 8 simvol</span>
          )}
          {errors.password && errors.password.type === "maxLength" && (
            <span className="text-xl text-red-500">max 20 simvol</span>
          )}

          <input
            id="resetPassword"
            {...register("resetPassword", {
              required: true,
              validate: (value) => value === watch("password"),
            })}
            className="text-2xl border py-2 px-4 focus:border-red-500 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="password"
            placeholder="Enter Password"
          />
          {errors.resetPassword && errors.resetPassword.type === "required" && (
            <span className="text-xl text-red-500">tekrar parolu yaz</span>
          )}
          {errors.resetPassword && errors.resetPassword.type === "validate" && (
            <span className="text-xl text-red-500">tekrar parolu yaz</span>
          )}

          <button
            className="text-white bg-red-500 py-2 text-2xl uppercase font-bold tracking-wider transition-all duration-300 hover:rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
