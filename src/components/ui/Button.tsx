/* eslint-disable no-console */
import React from 'react';
import arrow from "../../assets/svg/icon.svg"

interface Props {
  title: string | JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  capitalizeTitle?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  className?: string;
  altClassName?: string;
  isBusy?: boolean;
  type?: 'int' | "link" | "normal";
  withArrows?: boolean
}

const Button: React.FC<Props> = ({
  title,
  onClick,
  disabled,
  altClassName,
  isBusy,
  type,
  withArrows
}) => {
  return (
    <div className={disabled ? "opacity-75 w-full" : "w-full"}>
      <button
        className={
          altClassName ||
          `py-3 lg:text-lg w-full ${
            type === "int" ? "btn-int" : "btn-primary"
          } fw-500 ${
            disabled ? "cursor-not-allowed btn-disabled" : ""
          }`
        }
        onClick={onClick ? onClick : undefined}
        disabled={disabled}
      >
        {isBusy ? (
          "loading"
        ) : (
          <span className='flex justify-center gap-x-3 items-center'>
            {title} {withArrows && <img src={arrow} alt='arrow-icon'/>}
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;