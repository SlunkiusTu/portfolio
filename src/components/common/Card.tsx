import clsx from 'clsx';

export const Card = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={clsx(
                'bg-surface backdrop-blur-sm rounded-2xl border border-surface-border transition-all duration-300',
                'hover:border-accent-blue/40',
                className
            )}
        >
            {children}
        </div>
    );
};
