function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
}

function Brand({ className = '' }) {
  return <span className={`brand-lockup ${className}`}><BrandMark /><span className="brand-name">orbit<span className="brand-period">.</span></span></span>
}

export { Brand, BrandMark }
