import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { Brand, BrandMark } from './Brand.jsx'

function AuthPage({ mode }) {
  const isRegister = mode === 'register'
  const [showPassword, setShowPassword] = useState(false)
  const [notice, setNotice] = useState('')

  function submitAuth(event) {
    event.preventDefault()
    setNotice(isRegister ? 'Your demo account is ready to go!' : 'You’re signed in to the demo.')
  }

  return (
    <main className="auth-page">
      <Link className="auth-brand" to="/" aria-label="Back to chat"><Brand /></Link>
      <div className="auth-layout">
        <section className="auth-card">
          <div className="auth-heading"><span className="auth-eyebrow">YOUR PEOPLE, IN ORBIT</span><h1>{isRegister ? 'Create your account' : 'Welcome back'}</h1><p>{isRegister ? 'Start connecting with your team in a more thoughtful way.' : 'Enter your details to pick up where you left off.'}</p></div>
          <button className="google-button" type="button" onClick={() => setNotice('Google sign-in is not connected in this demo.')}><span className="google-g">G</span>{isRegister ? 'Sign up with Google' : 'Continue with Google'}</button>
          <div className="auth-divider"><span />or continue with email<span /></div>
          <form className="auth-form" onSubmit={submitAuth}>
            {isRegister && <label>Full name<div className="auth-input"><input required placeholder="Jordan Davis" autoComplete="name" /></div></label>}
            <label>Email address<div className="auth-input"><input type="email" required placeholder="you@company.com" autoComplete="email" /></div></label>
            <label>Password<div className="auth-input"><input type={showPassword ? 'text' : 'password'} required minLength="8" placeholder="At least 8 characters" autoComplete={isRegister ? 'new-password' : 'current-password'} /><button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} className="password-eye" onClick={() => setShowPassword((visible) => !visible)}><Icon name="eye" size={18} /></button></div></label>
            {!isRegister && <button type="button" className="forgot-link" onClick={() => setNotice('Password reset is not connected in this demo.')}>Forgot password?</button>}
            <button className="auth-submit" type="submit">{isRegister ? 'Create account' : 'Sign in'}<Icon name="chevron" size={17} /></button>
          </form>
          <p className="auth-switch">{isRegister ? 'Already have an account?' : 'Don’t have an account?'} <Link to={isRegister ? '/login' : '/register'}>{isRegister ? 'Sign in' : 'Sign up'}</Link></p>
          {notice && <p className="auth-notice" role="status">{notice}</p>}
        </section>
        <aside className="auth-aside"><div className="auth-art"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="art-chat art-chat-one"><span className="art-avatar avatar-lavender">OR</span><span><b>Olivia Rhye</b><small>That sounds like a plan! ✨</small></span></div><div className="art-chat art-chat-two"><span className="art-avatar avatar-peach">PB</span><span><b>Phoenix Baker</b><small>Just sent it your way 🙌</small></span></div><div className="art-spark">✦</div><div className="art-center"><BrandMark /></div></div><h2>Good conversations<br />move things forward.</h2><p>A little more focus, a lot more connection.<br />Welcome to your team’s new favorite place.</p><div className="art-dots"><i /><i /><i /></div></aside>
      </div>
      <footer className="auth-footer"><span>© 2026 Orbit, Inc.</span><a href="mailto:hello@orbit.example">Need help?</a></footer>
    </main>
  )
}

export default AuthPage
