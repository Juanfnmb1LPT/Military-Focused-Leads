import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const { pathname } = useLocation()
  const onForm = pathname === '/get-started'
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname])

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-primary font-semibold border-b-2 border-secondary pb-1 font-headline'
      : 'text-on-surface-variant hover:text-primary transition-colors font-headline'

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant/15 shadow-sm">
      <div className="flex items-center px-4 sm:px-8 py-4 max-w-7xl mx-auto">
        <NavLink to="/" className="text-lg sm:text-xl font-bold tracking-tight text-primary font-headline shrink-0">
          MilitaryFocusedLeads
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/va-help" className={linkClass}>VA Help</NavLink>
          {!onForm && (
            <Link
              to="/get-started"
              className="bg-primary text-on-primary px-6 py-2.5 rounded hover:opacity-90 transition-all font-semibold font-headline scale-95 active:scale-90 duration-100"
            >
              Get Started
            </Link>
          )}
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden ml-auto w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container transition-colors"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-primary">
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile dropdown — solid bg, pinned right below the nav bar */}
      {open && (
        <div className="md:hidden bg-surface border-t border-outline-variant/15 shadow-lg">
          <div className="flex flex-col px-6 py-5 gap-4 max-w-7xl mx-auto">
            <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/va-help" className={linkClass} onClick={() => setOpen(false)}>VA Help</NavLink>
            {!onForm && (
              <Link
                to="/get-started"
                onClick={() => setOpen(false)}
                className="mt-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold font-headline text-center hover:opacity-90 transition-all"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
