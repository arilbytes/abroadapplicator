import { useState } from 'react'
import './Login.css'
import { Logo } from '../../components'

import ROLES from '../../roles'
export default function Login({ onLogin }) {
  const [role, setRole] = useState('admin')
  return (
    <div className="login">
      <section className="login-hero">
        <Logo light />
        <h1>Your one-stop solution for all your overseas needs.</h1>
        <p>One portal for founder, managers, operations teams and students.</p>
      </section>
      <section className="login-form">
        <h2>Sign in to JCG Portal</h2>
        <label>Email<input type="email" defaultValue="name@jcg.com" /></label>
        <label>Password<input type="password" defaultValue="password" /></label>
        <span className="muted small">Sign in as</span>
        <div className="chips" role="radiogroup">
          {Object.entries(ROLES).map(([k, r]) => (
            <button key={k} role="radio" aria-checked={role === k} className={'chip' + (role === k ? ' on' : '')} onClick={() => setRole(k)}>{r.label}</button>
          ))}
        </div>
        <button className="btn" onClick={() => onLogin(role)}>Sign in</button>
      </section>
    </div>
  )
}
