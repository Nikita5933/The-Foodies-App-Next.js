import Link from "next/link";

export default function MealsPage() {
    return (
        <main>
            <h1>Meals Page</h1>
            <Link href='/meals/share'>Meals detail page</Link>
            <Link href='/meals/someLink'>Some link</Link>
        </main>
    )
}