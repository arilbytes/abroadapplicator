// import { useState } from 'react'
// import './Login.css'
// import { Logo } from '../../components'

// import ROLES from '../../roles'
// export default function Login({ onLogin }) {
//   const [role, setRole] = useState('admin')
//   return (
//     <div className="login">
//       <section className="login-hero">
//         <Logo light />
//         <h1>Your one-stop solution for all your overseas needs.</h1>
//         <p>One portal for founder, managers, operations teams and students.</p>
//       </section>
//       <section className="login-form">
//         <h2>Sign in to JCG Portal</h2>
//         <label>Email<input type="email" defaultValue="name@jcg.com" /></label>
//         <label>Password<input type="password" defaultValue="password" /></label>
//         <span className="muted small">Sign in as</span>
//         <div className="chips" role="radiogroup">
//           {Object.entries(ROLES).map(([k, r]) => (
//             <button key={k} role="radio" aria-checked={role === k} className={'chip' + (role === k ? ' on' : '')} onClick={() => setRole(k)}>{r.label}</button>
//           ))}
//         </div>
//         <button className="btn" onClick={() => onLogin(role)}>Sign in</button>
//       </section>
//     </div>
//   )
// }

import { useState } from 'react'
import './Login.css'
import ROLES from '../../roles'
import monuments from '../../assets/jcg-monuments.png'

export default function Login({ onLogin }) {
  const [role, setRole] = useState('admin')

  return (
    <div className="login-page">

      {/* Top Navy Strip */}
      <div className="login-topbar" />

      {/* Main Login Section */}
      <main className="login-main">
        <section className="login-card">

          <div className="login-heading">
            <h2>Sign in to JCG Portal</h2>
            <p>Welcome back! Please enter your credentials.</p>
          </div>

          <div className="login-fields">
            <label>
              Email
              <input
                type="email"
                placeholder="Enter your email"
                defaultValue="name@jcg.com"
              />
            </label>

            <label>
              Password
              <input
                type="password"
                placeholder="Enter your password"
                defaultValue="password"
              />
            </label>
          </div>

          {/* Role Selection */}
          <div className="role-section">
            <span className="role-label">Sign in as</span>

            <div className="chips" role="radiogroup" aria-label="Select your role">
              {Object.entries(ROLES).map(([k, r]) => (
                <button
                  key={k}
                  type="button"
                  role="radio"
                  aria-checked={role === k}
                  className={'chip' + (role === k ? ' on' : '')}
                  onClick={() => setRole(k)}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sign In */}
          <button
            type="button"
            className="login-submit"
            onClick={() => onLogin(role)}
          >
            Sign in
          </button>

        </section>
      </main>

      {/* Monument Footer Image */}
    <footer className="login-footer">
     <img
     src={monuments}
     alt=""
     aria-hidden="true"
     />
    </footer>

    </div>
  )
}
