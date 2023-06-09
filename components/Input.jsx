import { useForm } from "react-hook-form";

const Input = ({ type, placeholder, name, label, register, setError }) => {
  return (
    <div className="flex flex-col items-start">
      {label && (
        <label className="flex mb-1 text-sm ml-[2px]" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        {...register(name)}
        className="relative w-full rounded-xl bg-gray-200 placeholder:text-gray-700 py-3 px-6 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 sm:text-sm"
      />
    </div>
  );
};

export default Input;
