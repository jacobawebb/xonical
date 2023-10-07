import React from 'react'

export default function Paragraph({ children, className, limit = false }: { children: React.ReactNode, className?: string, limit?: boolean }) {
    return (
        <p className={`${className} text-red ${limit ? `w-96` : ``}`}>{children}</p>
    )
}
