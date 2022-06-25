import './category.css'

export default function Category({category}) {
    return (
        <dl className="category">
            <dt className="a11y-hidden">Category</dt>
            {category.map( category => {
                return (<dd key={category}> {category}</dd>);
            })}
        </dl>
    )
}