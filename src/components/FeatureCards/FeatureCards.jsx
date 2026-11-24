import './FeatureCards.css'

export default function FeatureCards({ items }) {
  return (
    <div className="feature-cards">
      {items.map(({ title, text, action = 'Learn more' }) => (
        <article className="feature-card" key={title}>
          <h3>{title}</h3>
          <p>{text}</p>
          <button className="link">{action} →</button>
        </article>
      ))}
    </div>
  )
}