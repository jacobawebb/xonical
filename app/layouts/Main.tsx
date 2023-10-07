import { brandBorderStyles } from "../globals/defaults";

export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full max-w-full">
            {children}
        </main>
    )
}
