import React from 'react'

export default function TextAreaInput({ label, name, value, placeholder }: { label: string, name: string, value: string, placeholder: string }) {
    return (
        <div className='flex flex-col gap-1'>
            <label>{label}</label>
            <textarea name={name} className='rounded-md bg-secondary/90 border-2 border-secondary hover:border-primary transition-all ease-in-out w-full px-3 py-1' placeholder={placeholder} />
        </div>
    )
}
