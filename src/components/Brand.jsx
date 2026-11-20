function BrandMark() {
  return <img className="brand-mark" src="/favicon.svg" alt="" aria-hidden="true" />
}

function Brand({ className = '' }) {
  return <span className={`brand-lockup ${className}`}><BrandMark /><span className="brand-name">orbit<span className="brand-period">.</span></span></span>
}

export { Brand, BrandMark }
