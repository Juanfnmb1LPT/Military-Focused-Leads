import { Link } from 'react-router-dom'

export default function VAHelp() {
  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="z-10">
              <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-primary mb-6 leading-tight">
                VA Loan &amp; Military Housing Help
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                Understand your benefits and get support from professionals who specialize in military relocation.
              </p>
              <Link to="/get-started" className="inline-block bg-primary text-on-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95">
                Get Started
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img
                  alt="Modern family home"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Ac3Cc-5foIOAwqA-kIsjzB4fkEoMFO8gAi3J7OIPMk3nIzsmsaogvpSZcislxKSQgJZ-FvW3nn9gSLoNljFI0bmQSY-71PPYsgsHYBjnzGDwcsZPFxehOjydF7oFweR-2rIQm28BxEubUl7a_RBE293PgdC3TZ79jJi5sZEFivAY0u5bBGp81JXgkd-9_VyzCzbDNhoH1uHA79MSeYSmfegYM7p8iJIEONn5q4t0WJoM8WH0dVOSonm3kVWaNLxW-0O78eQZ9PU"
                />
              </div>
              <div className="relative md:absolute mt-4 md:mt-0 md:-bottom-6 md:-left-6 bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-xl z-20 max-w-xs">
                <div className="flex items-center gap-3 text-secondary mb-2">
                  <span className="material-symbols-outlined">verified</span>
                  <span className="font-bold uppercase tracking-wider text-sm">Verified Specialists</span>
                </div>
                <p className="text-on-surface-variant text-sm">Dedicated support for active duty and veterans.</p>
              </div>
            </div>
          </div>
          {/* Atmospheric Gradient Texture */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-primary-fixed/30 to-transparent opacity-50 blur-3xl"></div>
        </section>

        {/* What is a VA Loan? */}
        <section className="py-16 md:py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-xl mb-6">
                  <span className="material-symbols-outlined text-secondary text-3xl">house</span>
                </div>
                <h2 className="font-headline text-3xl font-bold text-primary mb-6">What is a VA Loan?</h2>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  A VA loan is a home loan benefit available to eligible military members, veterans, and some spouses. It often allows home buying with no down payment and flexible requirements, acting as a foundational pillar for military financial stability.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm h-36 sm:h-48 flex flex-col justify-end">
                  <span className="material-symbols-outlined text-primary-container mb-4">security</span>
                  <span className="font-bold text-primary">Backed by the VA</span>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm h-36 sm:h-48 flex flex-col justify-end sm:translate-y-8">
                  <span className="material-symbols-outlined text-primary-container mb-4">savings</span>
                  <span className="font-bold text-primary">Lower Rates</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Bento Grid */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-primary mb-4">Key Benefits</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Powerful advantages designed to honor your service and simplify home ownership.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 bg-primary-container p-8 rounded-2xl text-white flex flex-col justify-between min-h-[280px]">
                <span className="material-symbols-outlined text-4xl">payments</span>
                <div>
                  <h3 className="text-2xl font-bold mb-2">No Down Payment</h3>
                  <p className="text-on-primary-container">Purchase a home without the traditional 20% down, keeping your liquidity for other needs.</p>
                </div>
              </div>
              <div className="bg-surface-container-high p-8 rounded-2xl flex flex-col justify-between">
                <span className="material-symbols-outlined text-secondary text-3xl">cancel</span>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">No PMI</h3>
                  <p className="text-sm text-on-surface-variant">Save hundreds monthly by eliminating private mortgage insurance costs.</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-outline-variant/15 shadow-sm flex flex-col justify-between">
                <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Flexible Credit</h3>
                  <p className="text-sm text-on-surface-variant">The VA guarantees part of the loan, allowing for more lenient qualification standards.</p>
                </div>
              </div>
              <div className="md:col-span-4 bg-surface-container-low p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 md:gap-8 border border-outline-variant/10">
                <div className="md:w-1/3 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Designed for Military Families</h3>
                  <p className="text-on-surface-variant text-sm sm:text-base">Tailored terms that account for the unique lifestyle and challenges of service life.</p>
                </div>
                <div className="md:w-2/3 flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="w-20 h-20 sm:w-32 sm:h-32 bg-primary/5 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">family_restroom</span>
                  </div>
                  <div className="w-20 h-20 sm:w-32 sm:h-32 bg-primary/5 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">military_tech</span>
                  </div>
                  <div className="w-20 h-20 sm:w-32 sm:h-32 bg-primary/5 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">real_estate_agent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why You Need a Specialist */}
        <section className="py-16 md:py-24 bg-primary text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-10 md:mb-16 text-center">Why You Need a Specialist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group">
                <div className="mb-6 h-1 w-12 bg-secondary transition-all group-hover:w-full"></div>
                <h3 className="text-xl font-bold mb-4">Frequent PCS Moves</h3>
                <p className="text-on-primary-container text-sm leading-relaxed">Navigating permanent change of station moves requires rapid response and coordination.</p>
              </div>
              <div className="group">
                <div className="mb-6 h-1 w-12 bg-secondary transition-all group-hover:w-full"></div>
                <h3 className="text-xl font-bold mb-4">Tight Timelines</h3>
                <p className="text-on-primary-container text-sm leading-relaxed">We understand the urgency of relocation dates and ensure the paperwork keeps pace.</p>
              </div>
              <div className="group">
                <div className="mb-6 h-1 w-12 bg-secondary transition-all group-hover:w-full"></div>
                <h3 className="text-xl font-bold mb-4">Base Proximity</h3>
                <p className="text-on-primary-container text-sm leading-relaxed">Finding the right home location relative to duty stations, gates, and essential amenities.</p>
              </div>
              <div className="group">
                <div className="mb-6 h-1 w-12 bg-secondary transition-all group-hover:w-full"></div>
                <h3 className="text-xl font-bold mb-4">Navigating BAH</h3>
                <p className="text-on-primary-container text-sm leading-relaxed">Maximizing your Basic Allowance for Housing to secure the best property for your family.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Relocation Support Section */}
        <section className="py-16 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="md:w-1/2 relative">
              <img
                alt="Moving boxes and keys"
                className="rounded-3xl shadow-2xl z-10 relative"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq_N7Xwvbufq4RmLJz2cL4BsbZr0TLZ0hc5ArP1NXuRxTu3KtjYAYDHmMBV1CAkICAzH-HzeB4voYTNpUZlaCS0anQMkovN8Kofz5YOWfFEqAT10uPDSB87WTViD5JNP89jOYi5ZEhho9IDaJi3M2dCCjxZbl4HESYtSg_58f2jwCrNUHwQSHchfuE2NHFcCmAyp2oCdsrVcIuhxAvw9ffBFFtEpTnSH3dmEQKN0F7BSu98nfd2kbDFRYuNuOb4e-XZ9zI7dor2xk"
              />
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-2xl"></div>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-headline text-4xl font-extrabold text-primary mb-8">Relocation Support</h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Moving is more than just shifting boxes; it's about establishing your new home base. We provide expert guidance on buying or renting near duty stations, ensuring your transition is seamless.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-primary font-medium">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  Dedicated PCS specialist matching
                </li>
                <li className="flex items-center gap-4 text-primary font-medium">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  Rental and purchase inventory analysis
                </li>
                <li className="flex items-center gap-4 text-primary font-medium">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  Local community and school insights
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary-container rounded-2xl md:rounded-[2rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to find your next home?</h2>
              <p className="text-on-primary-container text-xl mb-10 max-w-2xl mx-auto">Get help from a military relocation specialist who understands your specific needs and timelines.</p>
              <Link to="/get-started" className="inline-block bg-secondary hover:bg-secondary-container text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all hover:-translate-y-1">
                Get Matched
              </Link>
            </div>
            {/* Abstract visual elements */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mb-32 -mr-32"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -mt-16 -ml-16"></div>
          </div>
        </section>
      </main>

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
