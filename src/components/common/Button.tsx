import clsx from "clsx";
import type { ReactNode, ElementType } from "react";

type ButtonVariants = "primary" | "secondary" | "outline" | "icon";
type ButtonSizes = "sm" | "md" | "lg";

type Props<T extends ElementType = "button"> = {
    as?: T;
    children: ReactNode;
    variant?: ButtonVariants;
    className?: string;
    size?: ButtonSizes;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    disabled?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export const Button = <T extends ElementType = "button">({
    as,
    children,
    variant = "primary",
    className,
    size = "md",
    leftIcon,
    rightIcon,
    disabled = false,
    ...props
}: Props<T>) => {
    const Component = as || "button";

    const baseStyles =
        "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none cursor-pointer";

    const disabledStyles =
        "opacity-50 cursor-not-allowed pointer-events-none";

    const variants: Record<ButtonVariants, string> = {
        primary:
            "bg-gradient-to-r bg-blue-500 hover:bg-blue-400 focus:ring-blue-500 text-white shadow-lg hover:shadow-xl",
        secondary:
            "border-2 border-blue-500 text-blue-400 hover:bg-black hover:text-white focus:ring-blue-500",
        outline:
            "bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white p-3",
        icon:
            "bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-teal-400 p-3",
    };

    const sizes: Record<ButtonSizes, string> = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <Component
            className={clsx(
                baseStyles,
                sizes[size],
                variants[variant],
                disabled && disabledStyles,
                className
            )}
            disabled={Component === "button" ? disabled : undefined}
            aria-disabled={disabled}
            {...props}
        >
            {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
        </Component>
    );
};

