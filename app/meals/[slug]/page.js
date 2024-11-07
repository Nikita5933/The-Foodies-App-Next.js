export default function MealsDetailPage({params}) {
    return (
        <main>
            <h1>Meals detail Page</h1>
            <p>{params.slug}</p>
        </main>
    )
}