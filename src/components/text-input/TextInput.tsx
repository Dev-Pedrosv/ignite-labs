import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = (props: TextInputRootProps) => {
  return (
    <div
      className={clsx(`flex items-center gap-3 py-4 px-3 rounded h-12
      bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 
    `)}
    >
      {props.children}
    </div>
  );
};

TextInputRoot.displayName = "TextInputRoot.Root";

export interface TextInputIconsProps {
  children: ReactNode;
}

const TextInputIcon = (props: TextInputIconsProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
};

TextInputIcon.displayName = "TextInputIcon.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      {...props}
      className="bg-transparent flex-1 text-gray-100 text-xs 
      placeholder:text-gray-400 outline-none
      "
    />
  );
};

TextInputInput.displayName = "TextInputInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
