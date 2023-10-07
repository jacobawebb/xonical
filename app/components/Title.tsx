export default function Title({
    type,
    children,
    className,
    xl = false,
    removeTag = false,
}: {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children: React.ReactNode;
    className?: string;
    xl?: boolean;
    removeTag?: boolean;
}) {
    const Tag = removeTag ? "span" : type;

    // Map heading types to their corresponding Tailwind CSS classes
    const headingClasses = {
        h1: 'text-3xl',
        h2: 'text-2xl',
        h3: 'text-xl',
        h4: 'text-lg',
        h5: 'text-base',
        h6: 'text-sm',
    };

    // Determine the appropriate class based on the heading type
    const fontSizeClass = headingClasses[type] || 'text-base';

    // Calculate the index of the new fontSize based on xl prop
    let modifiedFontSizeClass = fontSizeClass;

    if (xl) {
        // Extract the numeric part of the class (e.g., 'text-2xl' -> 2)
        const numericPart = fontSizeClass.match(/\d+/);
        if (numericPart) {
            const numericValue = parseInt(numericPart[0], 10);
            modifiedFontSizeClass = `text-${numericValue + 2}xl`;
        }
    }

    return (
        <Tag className={`${modifiedFontSizeClass} ${className} flex gap-3 items-center`}>
            {children}
        </Tag>
    );
}
