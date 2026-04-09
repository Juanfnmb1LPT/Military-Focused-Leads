import { useState } from 'react'
import { Link } from 'react-router-dom'

const INITIAL = {
  fullName: '',
  email: '',
  phone: '',
  status: '',
  branch: '',
  intent: '',
  movingFrom: '',
  movingTo: '',
  timeline: '',
  propertyType: '',
  vaLoan: '',
  preApproved: '',
  priceRange: '',
  creditRange: '',
}

const INPUT = 'w-full bg-surface-container-highest border-none rounded-lg p-3.5 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all outline-none'
const SELECT = INPUT + ' appearance-none cursor-pointer'
const LABEL = 'text-xs font-bold font-label text-on-surface-variant uppercase tracking-wider'

export default function GetStarted() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const progress = step === 1 ? 33 : step === 2 ? 66 : 100
  const stepLabel = step === 1 ? 'About You' : step === 2 ? 'Your Move' : 'VA & Finances'

  if (submitted) {
    const firstName = form.fullName.split(' ')[0] || 'there'
    return (
      <>
        <main className="min-h-[calc(100vh-76px)] flex items-center justify-center px-6 pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          <div className="max-w-lg w-full">
          <div className="bg-surface-container-lowest rounded-xl p-12 text-center shadow-2xl border border-outline-variant/20">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-secondary/20">
              <span className="material-symbols-outlined text-white text-4xl">check_circle</span>
            </div>
            <h2 className="text-3xl font-headline font-extrabold text-primary mb-4">You've Been Matched, {firstName}</h2>
            <p className="text-on-surface-variant font-body mb-8 leading-relaxed">
              Great news! We've found 3 military relocation specialists in your destination area. A member of our logistics team will reach out within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => { setForm(INITIAL); setStep(1); setSubmitted(false) }}
                className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-headline font-bold transition-all active:scale-95 shadow-md"
              >
                Submit Another
              </button>
              <Link
                to="/"
                className="bg-surface-container hover:bg-surface-container-high text-primary px-8 py-4 rounded-lg font-headline font-bold transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
          <div className="mt-6 bg-surface-container-low rounded-xl p-6 flex items-start gap-4">
            <span className="material-symbols-outlined text-primary mt-0.5">verified_user</span>
            <div>
              <h4 className="font-headline font-bold text-primary text-sm uppercase tracking-wide mb-1">Your Privacy Matters</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">As your digital sentinel, we ensure your military relocation data is handled with the highest level of security and compliance.</p>
            </div>
          </div>
          </div>
        </main>

        <footer className="w-full border-t border-slate-200/50 bg-slate-50">
          <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 py-12 max-w-7xl mx-auto">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <div className="text-lg font-bold text-primary font-headline mb-2">MilitaryFocusedLeads</div>
              <p className="text-slate-500 font-body text-sm tracking-wide">
                &copy; 2026 MilitaryFocusedLeads. The Digital Sentinel for Lead Generation.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              <a className="text-slate-500 hover:text-primary transition-all font-body text-sm tracking-wide hover:underline" href="#">Privacy Policy</a>
              <a className="text-slate-500 hover:text-primary transition-all font-body text-sm tracking-wide hover:underline" href="#">Terms of Service</a>
              <a className="text-slate-500 hover:text-primary transition-all font-body text-sm tracking-wide hover:underline" href="#">Contact Us</a>
              <a className="text-slate-500 hover:text-primary transition-all font-body text-sm tracking-wide hover:underline" href="#">Security</a>
            </div>
          </div>
        </footer>
      </>
    )
  }

  return (
    <main className="min-h-[calc(100vh-76px)] flex flex-col items-center justify-start px-4 sm:px-6 pt-28 sm:pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <section className="max-w-2xl w-full text-center mb-8 sm:mb-12">
        <h2 className="text-secondary font-headline font-extrabold tracking-tight text-sm uppercase mb-3">Service First Support</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight mb-6">
          Get Matched With a Military-Friendly Specialist
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed font-body max-w-xl mx-auto">
          Tell us a little about your move and we'll connect you with the right support.
        </p>
      </section>

      <div className="max-w-xl w-full">
        <div className="bg-surface-container-lowest rounded-xl shadow-sm shadow-blue-900/5 overflow-hidden border border-outline-variant/15">
          <div className="p-8 pb-0">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Step {step} of 3: {stepLabel}</span>
              <span className="text-xs font-medium text-on-surface-variant">{progress}% Complete</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-secondary to-secondary-container rounded-full transition-all duration-700"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <form className="p-8 space-y-8" onSubmit={e => e.preventDefault()}>
            {/* Step 1: About You */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">person</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-primary">About You</h3>
                </div>

                <div className="space-y-2">
                  <label className={LABEL}>Full Name</label>
                  <input type="text" value={form.fullName} onChange={e => update('fullName', e.target.value)} placeholder="Your full name" className={INPUT} />
                </div>
                <div className="space-y-2">
                  <label className={LABEL}>Email</label>
                  <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com" className={INPUT} />
                </div>
                <div className="space-y-2">
                  <label className={LABEL}>Phone</label>
                  <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="(555) 123-4567" className={INPUT} />
                </div>
                <div className="space-y-2">
                  <label className={LABEL}>Are you?</label>
                  <select value={form.status} onChange={e => update('status', e.target.value)} className={SELECT}>
                    <option value="" disabled>Select your status</option>
                    <option>Active Duty</option>
                    <option>Veteran</option>
                    <option>Spouse</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className={LABEL}>Branch <span className="normal-case font-normal">(optional)</span></label>
                  <select value={form.branch} onChange={e => update('branch', e.target.value)} className={SELECT}>
                    <option value="" disabled>Select branch</option>
                    <option>Army</option>
                    <option>Navy</option>
                    <option>Air Force</option>
                    <option>Marines</option>
                    <option>Coast Guard</option>
                    <option>Space Force</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Your Move */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-primary">Your Move</h3>
                </div>

                <div className="space-y-2">
                  <label className={LABEL}>Are you</label>
                  <select value={form.intent} onChange={e => update('intent', e.target.value)} className={SELECT}>
                    <option value="" disabled>Select one</option>
                    <option>Buying</option>
                    <option>Selling</option>
                    <option>Renting</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={LABEL}>Moving From</label>
                    <input type="text" value={form.movingFrom} onChange={e => update('movingFrom', e.target.value)} placeholder="City, State" className={INPUT} />
                  </div>
                  <div className="space-y-2">
                    <label className={LABEL}>Moving To</label>
                    <input type="text" value={form.movingTo} onChange={e => update('movingTo', e.target.value)} placeholder="City, State" className={INPUT} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className={LABEL}>Timeline</label>
                  <select value={form.timeline} onChange={e => update('timeline', e.target.value)} className={SELECT}>
                    <option value="" disabled>Select your timeline</option>
                    <option>ASAP</option>
                    <option>1–3 months</option>
                    <option>3–6 months</option>
                    <option>Just exploring</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className={LABEL}>Property Type <span className="normal-case font-normal">(optional)</span></label>
                  <select value={form.propertyType} onChange={e => update('propertyType', e.target.value)} className={SELECT}>
                    <option value="" disabled>Select type</option>
                    <option>Single-family</option>
                    <option>Condo</option>
                    <option>Townhome</option>
                    <option>Not sure</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: VA & Finances */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">account_balance</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-primary">VA &amp; Financial Info</h3>
                </div>

                <div className="space-y-2">
                  <label className={LABEL}>Are you planning to use a VA loan?</label>
                  <select value={form.vaLoan} onChange={e => update('vaLoan', e.target.value)} className={SELECT}>
                    <option value="" disabled>Select one</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not sure</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className={LABEL}>Have you been pre-approved?</label>
                  <select value={form.preApproved} onChange={e => update('preApproved', e.target.value)} className={SELECT}>
                    <option value="" disabled>Select one</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className={LABEL}>Estimated Price Range</label>
                  <select value={form.priceRange} onChange={e => update('priceRange', e.target.value)} className={SELECT}>
                    <option value="" disabled>Select range</option>
                    <option>Under $200k</option>
                    <option>$200k–$400k</option>
                    <option>$400k–$600k</option>
                    <option>$600k+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className={LABEL}>Credit Range <span className="normal-case font-normal">(optional)</span></label>
                  <select value={form.creditRange} onChange={e => update('creditRange', e.target.value)} className={SELECT}>
                    <option value="" disabled>Select range</option>
                    <option>600–640</option>
                    <option>640–700</option>
                    <option>700+</option>
                    <option>Not sure</option>
                  </select>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center gap-4 pt-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(s => s - 1)}
                  className="flex-1 py-4 px-6 rounded-lg font-headline font-bold text-primary hover:bg-surface-container transition-colors duration-200"
                >
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(s => s + 1)}
                  className={`${step === 1 ? 'w-full' : 'flex-[2]'} py-4 px-6 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-lg font-headline font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2`}
                >
                  Continue
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="flex-[2] py-4 px-6 bg-gradient-to-r from-secondary to-secondary-container text-white rounded-lg font-headline font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Submit
                  <span className="material-symbols-outlined">check</span>
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Trust Badges */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              <span className="text-xs font-bold text-primary tracking-tighter uppercase">VA Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">security</span>
              <span className="text-xs font-bold text-primary tracking-tighter uppercase">Data Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">favorite</span>
              <span className="text-xs font-bold text-primary tracking-tighter uppercase">Military Owned</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200/50 bg-slate-50 mt-16 sm:mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 py-12 max-w-7xl mx-auto">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="text-lg font-bold text-primary font-headline mb-2">MilitaryFocusedLeads</div>
            <p className="text-slate-500 font-body text-sm tracking-wide">
              &copy; 2026 MilitaryFocusedLeads. The Digital Sentinel for Lead Generation.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <a className="text-slate-500 hover:text-primary transition-all font-body text-sm tracking-wide hover:underline" href="#">Privacy Policy</a>
            <a className="text-slate-500 hover:text-primary transition-all font-body text-sm tracking-wide hover:underline" href="#">Terms of Service</a>
            <a className="text-slate-500 hover:text-primary transition-all font-body text-sm tracking-wide hover:underline" href="#">Contact Us</a>
            <a className="text-slate-500 hover:text-primary transition-all font-body text-sm tracking-wide hover:underline" href="#">Security</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
