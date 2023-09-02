type ContainerProps = {
    children: React.ReactNode,
    className?: string
}

export default function Container({ children, className }: ContainerProps) {
    return (
        <div className={`max-sm:px-10 px-40 py-5 ${className}`}>
            {children}
        </div>
    )
}