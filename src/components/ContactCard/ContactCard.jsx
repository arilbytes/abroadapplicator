import './ContactCard.css'
const initials = n => n.split(' ').map(w => w[0]).slice(0, 2).join('')

// One reusable person card. Props: name, role, phone, city (optional), email, photo (optional)
export default function ContactCard({ name, role, phone, city, email, photo }) {
  return (
    <article className="contact-card">
      <div className="cc-main">
        {photo
          ? <img className="cc-photo" src={photo} alt={name} />
          : <span className="cc-photo cc-init" aria-hidden="true">{initials(name)}</span>}
        <div className="cc-info">
          <h3>{name}</h3>
          <p className="cc-role">{role}</p>
          <p className="cc-meta">
            <a href={'tel:' + phone.replace(/[^+\d]/g, '')}>{phone}</a>
            {city && <><span className="cc-sep">|</span>{city}</>}
          </p>
        </div>
      </div>
      <a className="cc-mail" href={'mailto:' + email}>{email}</a>
    </article>
  )
}

// A titled 2-column grid of cards. `people` is an array of ContactCard props.
export function ContactGrid({ title, people }) {
  return (
    <section className="contact-section">
      <h2>{title}</h2>
      <div className="contact-grid">{people.map(p => <ContactCard key={p.email} {...p} />)}</div>
    </section>
  )
}
