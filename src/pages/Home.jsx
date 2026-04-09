import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary font-headline leading-[1.1] mb-6 tracking-tight">
              Military Relocation <br />
              <span className="text-secondary">Made Simple</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-on-surface-variant mb-8 max-w-lg leading-relaxed">
              Connect with real estate professionals who understand PCS moves, VA loans, and the unique needs of military families.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-started" className="bg-primary text-on-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold font-headline shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all flex items-center gap-2">
                Get Started
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link to="/va-help" className="bg-surface-container text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold font-headline hover:bg-surface-container-high transition-all">
                Learn More
              </Link>
            </div>
            <div className="mt-8 sm:mt-12 flex items-center gap-4 sm:gap-6">
              <div className="flex -space-x-3">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full border-4 border-surface"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqWkQrZQzK3U1jnwKbt7TWcxwsiCReIR7CAR-IAk7O2QyZnCEtXmjyfRooYumfy8335a_nTR172aaiLSlYClx0AKOjcNq22vbzOcHAZrkMwPWf2bQ7eQSYtpn9Hj85frbsYSm0ivqp4wDjBIQh2QC68DtDUc--JGYMEiG3lOL4DWC0t7uy0Lr7K9qptkTvtj8-98sIB8ie7CBm8y9WwmIc_LCZl5kNiujVrE8xB2j9LPyerz4CUoG4rR-vcIzYsXPJX2mTPOb9Tf8"
                />
                <img
                  alt=""
                  className="w-12 h-12 rounded-full border-4 border-surface"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKXTY8pr5Omj6f1mUBw8K4QcULeH-ShPwqgj8nBfA9gUma9GqBOEwvIsqywnwGERjd3ZJXrZYeh28FpsfH8l9A73nN10V-eYTJ6pEoklo8U2NoNnzah7kg5xY_S8_J3UBuLIvn16oRjXWWYVFGKCJFkc4Ida6VEDA52xepZcrOJksVpFU9UMczLw8ND34se3IV_zVu4ExCI627ECrw8vT7fgZbBI3ePZiBATgGqWov6GQEysK6Mv5CxwF_EEbB9GKt9BzCSgmFiSo"
                />
                <img
                  alt=""
                  className="w-12 h-12 rounded-full border-4 border-surface"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAcQ-5PDfMU1BV3educ9TVUxqYBMM2KuTo2XPBpLXBW6rrgO0HYvi3FzWusk5f0nI1YAtgSLSDvetdHGea-PJjHnlazI96HpMAKiIAhTqQWiXWKcFTmy53oiLtIVBmrOSWbQuP-JpDtDlbV3oleaiTbHfsTAUU1bLb5a7Eoj_TOuGYOeYBMnClbdcGRCD3Rsyt4mbyaOn83NoyP6s2qQBMg7pa4S1aAP_tLDjXXOs-9kPrN2gtJrMA8GdoD-uwB7kvspsJ3iNbkno"
                />
              </div>
              <div className="text-sm">
                <span className="block font-bold text-primary">500+ Verified Specialists</span>
                <span className="text-on-surface-variant">Trusted by military families nationwide</span>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-fixed rounded-full blur-3xl opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Modern Family Home"
                className="w-full h-auto object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOXv3hQdfXLAlePWFFhpKSRbaLfjgm-m_VSHRt2uzc07rXsO4kkD7Xuhr7JNzYs8HzS9MNIshJUonbpGeQahrnVxyKgwyPhrOPpF_dZsyC3cr7dpzANLGz_b9J_gdOyKx9ToLhDMfOjU2vVfmndP5S-yj3ef_rkimdb19a0mmDKDQCiQtawzBEylzx7MOraEVQv-jbWUbjx3BlvS2rIg0MDhXU-ylla24fEB6fnK7nnmpiFG_FYjm2UuEc3RgOUFf5tvEustGZV7M"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              {/* Glass Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-nav rounded-xl shadow-xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary">VA Certified Lead</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Immediate Availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-primary font-headline mb-4 tracking-tight">Support Built for Service</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">We prioritize the unique logistics and financial advantages of military members.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl transition-all hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-surface-container mb-8 rounded-xl flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                <span className="material-symbols-outlined text-3xl">account_balance</span>
              </div>
              <h3 className="text-2xl font-bold text-primary font-headline mb-4">VA Loan Support</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Expert guidance for military buyers utilizing VA loan benefits. Maximize your entitlement with zero down payment options.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-2xl transition-all hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-surface-container mb-8 rounded-xl flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                <span className="material-symbols-outlined text-3xl">local_shipping</span>
              </div>
              <h3 className="text-2xl font-bold text-primary font-headline mb-4">PCS Relocation Help</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Specialized support for short timelines and frequent moves. We coordinate the logistics so you can focus on the mission.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-2xl transition-all hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-surface-container mb-8 rounded-xl flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                <span className="material-symbols-outlined text-3xl">support_agent</span>
              </div>
              <h3 className="text-2xl font-bold text-primary font-headline mb-4">Military-Friendly Agents</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Work with vetted agents experienced with military families and the nuances of military base proximity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold tracking-widest uppercase rounded mb-6">
                The Process
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary font-headline mb-12 tracking-tight">Your Next Chapter Starts Here</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center font-bold text-secondary">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Tell us about your move</h4>
                    <p className="text-on-surface-variant">Fill out a simple 2-minute form about your timeline, location, and specific VA needs.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center font-bold text-secondary">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Get matched with a specialist</h4>
                    <p className="text-on-surface-variant">We hand-select a military relocation professional who fits your specific profile and requirements.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-secondary flex items-center justify-center font-bold text-secondary">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">Move with confidence</h4>
                    <p className="text-on-surface-variant">Finalize your transaction with an expert sentinel watching your back every step of the way.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-primary-container rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                  <span className="material-symbols-outlined text-white/10" style={{ fontSize: '9rem' }}>shield</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Relocation Readiness</h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm">Matching Agent...</span>
                        <span className="text-secondary-fixed text-sm font-bold">85%</span>
                      </div>
                      <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-[85%]"></div>
                      </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm">VA Eligibility Verification</span>
                        <span className="text-secondary-fixed text-sm font-bold">Done</span>
                      </div>
                      <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-full"></div>
                      </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm">Closing Timeline Estimate</span>
                        <span className="text-secondary-fixed text-sm font-bold">30 Days</span>
                      </div>
                      <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-[30%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-white rounded-xl shadow-lg">
                    <div className="flex items-center gap-3">
                      <img
                        alt=""
                        className="w-10 h-10 rounded-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaanClnkBNu5pTSU8Vwdw1Q007a16El8NhQ7DUllVt3EXw0lE5n7XcebqTN9bzavQaf3w_2aoDMTpZgvbqv5briBtESd3JAipsZH0zzBjUnhZr3VeKTLldtrR13fMoTJ4gySdVYyw1M1IuZjDfm6NB0YyGsNeR1ZvMV6_LAMaz_KqxD93vR5WpAEB1zbZwBg3VNPa2WloHNaFXxIosT6mAD9Ge9e3gOOQU63USWjkD3fyLcLsQhLnNCOTQnDhA-NqcGD-VNRpXTq8"
                      />
                      <div>
                        <p className="text-primary font-bold text-sm">Agent Sarah M. matched</p>
                        <p className="text-on-surface-variant text-xs">VA Specialist &bull; 12 years exp.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto rounded-3xl hero-gradient p-8 sm:p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-headline mb-8 tracking-tight">Ready to start your move?</h2>
            <p className="text-primary-fixed text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Join thousands of military families who successfully relocated using our trusted professional network.
            </p>
            <Link to="/get-started" className="inline-block bg-secondary text-white px-10 py-4 rounded-lg font-bold font-headline text-lg hover:bg-secondary-container transition-all shadow-xl shadow-secondary/20 hover:-translate-y-1">
              Get Matched
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
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
