import clsx from "clsx";

type HeaderProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    children: React.ReactNode;
    className?: string;
};

export function Header({
    as: Component = "h1",
    size = "lg",
    children,
    className
}: HeaderProps) {
    return (
        <Component
            className={clsx(
                size === "xs" && "~text-lg/xl",
                size === "sm" && "~text-2xl/4xl",
                size === "md" && "~text-3xl/5xl",
                size === "lg" && "~text-4xl/7xl",
                size === "xl" && "~text-4xl/8xl",
                "font-bold",
                className
            )}>
            {children}
        </Component>
    );
}
