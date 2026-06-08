export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          TikTok Lead Generation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Extract Business Leads from{" "}
          <span className="text-[#58a6ff]">TikTok Comments</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Scan any TikTok video for buying intent keywords like &ldquo;price&rdquo;, &ldquo;buy&rdquo;, and &ldquo;interested&rdquo;. Capture contact info and export qualified leads with engagement metrics to CSV in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Extracting Leads — $15/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
          {[
            ["Intent Keywords", "Detects buy signals"],
            ["Contact Capture", "Emails & handles"],
            ["CSV Export", "Ready for outreach"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited TikTok video scans",
              "Buying intent keyword detection",
              "Email & handle extraction",
              "Engagement metrics per comment",
              "CSV & Excel export",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the comment scanning work?",
              a: "Paste any TikTok video URL and the tool fetches all public comments, then filters them using configurable buying intent keywords and regex patterns to surface the most promising leads."
            },
            {
              q: "What contact information can it extract?",
              a: "The extractor identifies email addresses, Instagram handles, WhatsApp numbers, and other contact details left in comments by potential customers."
            },
            {
              q: "Can I customize the intent keywords?",
              a: "Yes. You can add, remove, or edit keywords like \u2018price\u2019, \u2018how much\u2019, \u2018where to buy\u2019, and \u2018DM me\u2019 to match your specific niche and audience."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        &copy; {new Date().getFullYear()} TikTok Comment Lead Extractor. All rights reserved.
      </footer>
    </main>
  );
}
