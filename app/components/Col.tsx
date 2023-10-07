import React from 'react'
import { gapContent, gapLayout } from '../globals/defaults'

export default function Col({ children, type, reduceGap, className }: { children: React.ReactNode, type: 'layout' | 'content', reduceGap?: boolean, className?: string }) {
    return (
        <div className={`relative flex flex-col h-full max-w-full ${className} ${reduceGap && 'gap-3'} ${!reduceGap && type === 'layout' && gapLayout} ${!reduceGap && type === 'content' && gapContent}`}>{children}</div>
    )
}
