import { ChangeEvent } from "react";

type InputProps = {
  placeholder: string,
  name: string,
  type: string,
  // value: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>, name: string) => void,
}

const Input: React.FC<InputProps> = ({ placeholder, name, type, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

export default Input