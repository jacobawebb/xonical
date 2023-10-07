import React from 'react'
import { brandBorderStyles } from '../globals/defaults'

export default function Box({ children, className, background, special }: { children: React.ReactNode, className?: string, background?: 'light' | 'dark', special?: boolean }) {
    return (
        <div className={`relative w-full max-w-full ${!special && brandBorderStyles} ${className} ${background === "light" && 'bg-secondary'} ${background === "dark" && 'bg-[#000000]'}`}>{children}</div>
    )
}
