import Image from "next/image";
import InformationalPricing from "@/components/InformationalPricing";
import BottomCTA from "@/components/BottomCTA";
import HeroCTA from "@/components/HeroCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <ScrollReveal />
      {/* Navbar */}
      <header className="sticky top-2 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mt-2 mb-2 px-4 py-2 glass rounded-2xl flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/favicon.png" alt="Logo" width={28} height={28} className="rounded" />
              <span className="ml-2 font-semibold">Mileage Tracker Pro</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#benefits" className="hover:text-blue-700">Benefits</a>
              <a href="#how" className="hover:text-blue-700">How it works</a>
              <a href="#pricing" className="hover:text-blue-700">Pricing</a>
              <a href="#faq" className="hover:text-blue-700">FAQ</a>
              <a href="#cta" className="px-3 py-1.5 rounded-xl text-white" style={{backgroundColor:'#2F4062'}}>Get the App</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#2F4062] text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image src="/favicon.png" alt="App" width={48} height={48} className="rounded mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Track mileage. Scan receipts. Maximize deductions.</h1>
            <p className="text-xl mb-6">Your AI-powered assistant for effortless trip logging and expense management.</p>
            <HeroCTA />
          </div>
          <div className="hidden md:block">
            <div className="relative device-frame reveal w-[260px] sm:w-[300px] md:w-[320px] mx-auto shadow-xl">
              <span className="device-notch" aria-hidden="true"></span>
              <Image src="/assets/04.png" alt="Preview" width={1200} height={800} className="w-full h-auto rounded-[20px]" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Live GPS Tracking', description: 'Track your trips in real-time with precision.', span: 'lg:col-span-2' },
            { title: 'Route-Based Distance', description: 'Accurate mileage using Google Maps APIs.' },
            { title: 'Trip Entry', description: 'Manual and automatic trip logging.' },
            { title: 'Trip Categorization', description: 'Easily classify trips as business or personal.' },
            { title: 'Fuel & Reimbursement', description: 'Calculate fuel costs and reimbursements.' },
            { title: 'Statistics', description: 'In-depth trip summaries and statistics.' },
            { title: 'CSV Export', description: 'Export your trip data for reporting.' },
            { title: 'Map View', description: 'Visualize routes with polylines and markers.' },
            { title: 'Reverse Geocoding', description: 'Automatic address lookup from coordinates.' },
            { title: 'Secure Auth', description: 'Secure user authentication with Supabase.' },
            { title: 'Custom Settings', description: 'Personalize user and vehicle settings.' },
            { title: 'Cross-Platform', description: 'Available on both iOS and Android.' },
          ].map((b, i) => (
            <button
              type="button"
              key={i}
              aria-label={`Benefit: ${b.title}`}
              className={`w-full text-left glass rounded-2xl p-6 border border-transparent shadow-sm card ease-standard ${b.span ?? ''} reveal hover:shadow-md hover:-translate-y-1 active:translate-y-0.5 active:scale-[0.99] ring-1 ring-transparent hover:ring-blue-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer transition`}
            >
              <p className="text-xl font-semibold mb-2">{b.title}</p>
              <p className="text-gray-600">{b.description}</p>
            </button>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Drive & Track',
              description: 'Start a trip with one tap. Mileage is calculated automatically.',
              premium: false,
            },
            {
              title: 'Scan Receipts',
              description: 'AI extracts vendor, date, and amount from a quick photo. Available in the Expenses tab.',
              premium: true,
            },
            {
              title: 'Export & Save',
              description: 'Generate tax-ready reports and reclaim your deductions.',
              premium: false,
            },
          ].map((step, index) => (
            <button
              type="button"
              key={index}
              aria-label={`Step ${index + 1}: ${step.title}`}
              className="w-full text-left glass rounded-2xl p-6 border border-transparent shadow-sm card ease-standard reveal hover:shadow-md hover:-translate-y-1 active:translate-y-0.5 active:scale-[0.99] ring-1 ring-transparent hover:ring-blue-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer transition"
            >
              <div className="h-9 w-9 rounded-full flex items-center justify-center text-white mb-3 font-semibold" style={{backgroundColor:'#2F4062'}}>{index + 1}</div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-lg">{step.title}</p>
                {step.premium && (
                  <span className="text-xs font-semibold text-white px-2 py-0.5 rounded-full" style={{backgroundColor:'#e57138'}}>
                    Premium
                  </span>
                )}
              </div>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Pricing (Informational only) */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
        <div className="max-w-5xl mx-auto">
          <div className="reveal">
            <InformationalPricing />
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">Reference (CAD): Monthly $8.99, Yearly $49.99, Lifetime $74.99. Display adapts using public FX rates.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {q:"Is my data secure?", a:"Yes, encrypted in transit and deletion on request."},
            {q:"Can I export data?", a:"CSV and PDF exports are available."},
            {q:"Does it work on iOS and Android?", a:"Yes, data syncs across devices."},
            {q:"What’s in Premium?", a:"Unlimited AI scans, advanced analytics, priority support."}
          ].map((f,i)=> (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="font-semibold mb-2">{f.q}</p>
              <p className="text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <BottomCTA />

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-center gap-6 text-sm">
            <a href="/privacy_policy.html" className="hover:underline">Privacy Policy</a>
            <a href="/terms_of_service.html" className="hover:underline">Terms of Service</a>
            <a href="/delete-account.html" className="hover:underline">Delete Account</a>
          </div>
          <p className="mt-4 text-gray-400 text-center">© 2024 <a href="https://uniqubit.ca" target="_blank" rel="noopener noreferrer" className="hover:underline">uniQubit</a>. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
