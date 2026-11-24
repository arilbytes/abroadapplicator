// import './Logo.css'
// import brandLogo from '../../assets/brandlogo.png'
// import { useBrand } from '../../context/BrandContext'

// export default function Logo({ light }) {
//   const { logo } = useBrand() // custom logo (founder/agent) or null
//   return (
//     <div className={'logo' + (light ? ' light' : '')}>
//       <img className={logo ? 'custom' : ''} src={logo || brandLogo} alt={logo ? 'Your logo' : 'Journey Consulting Group'} />
//     </div>
//   )
// }
import './Logo.css'
import { useBrand } from '../../context/BrandContext'

export default function Logo({ light }) {
  const { logo } = useBrand() // custom uploaded logo (founder/agent) or null
  return (
    <div className={'logo' + (light ? ' light' : '')}>
      {logo ? (
        <img className="logo-custom" src={logo} alt="Your logo" />
      ) : (
        <div className="logo-brand" role="img" aria-label="Abroad Applicator">
          <svg className="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
            <rect width="40" height="40" rx="11" />
            <path d="M10 20.5 30 11l-7.5 19-2.8-8.2L10 20.5z" />
          </svg>
          <span className="logo-text" aria-hidden="true">
            <span className="logo-name">Abroad</span>
            <span className="logo-sub">Applicator</span>
          </span>
        </div>
      )}
    </div>
  )
}