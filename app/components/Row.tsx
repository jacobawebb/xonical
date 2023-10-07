import React from 'react'
import { gapContent, gapLayout } from '../globals/defaults'

export default function Row({ children, type, reduceGap, className }: { children: React.ReactNode, type: 'layout' | 'content', reduceGap?: boolean, className?: string }) {
    return (
        <div className={`relative flex w-full max-w-full flex-wrap xl:flex-nowrap ${reduceGap && 'gap-3'} ${!reduceGap && type === 'layout' && gapLayout} ${!reduceGap && type === 'content' && gapContent} ${className}`}>{children}</div>
    )
}
