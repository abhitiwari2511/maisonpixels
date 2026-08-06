import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import Meet, { bookMeet } from "@/components/Meet";
import {
  Code2,
  Smartphone,
  PenTool,
  Layers,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services & Pricing | Maison Pixels",
  description:
    "Comprehensive overview of Web Development, App Development, UI/UX Design, and transparent package pricing at Maison Pixels.",
};

const serviceSections = [
  {
    id: "web-development",
    category: "WEB ENGINEERING & DESIGN",
    title: "Web Development & Web UI/UX Design",
    icon: <Code2 className="w-8 h-8 text-[#ef4d23]" />,
    description:
      "We design and build ultra-fast, high-converting websites and custom web applications tailored to your business goals.",
    designAspects: {
      title: "Designing for Web",
      items: [
        "High-Conversion UI/UX Responsive Design Systems",
        "Figma Wireframing, User Flow & Interactive Prototypes",
        "Modern Dark/Light Themes, Typography & Micro-Animations",
        "Brand Identity & Pixel-Perfect Design Tokens",
      ],
    },
    devAspects: {
      title: "Developing for Web",
      items: [
        "Custom Full-Stack Code (React, Next.js 15, Vite, Node.js)",
        "Technical Search Engine Optimization (SEO) & Speed Optimization",
        "Headless CMS Integration (Sanity CMS) & Content Management",
        "Secure Custom Databases & Backend APIs (Supabase / Node.js)",
      ],
    },
    pricingTiers: [
      {
        name: "Premium Landing Page",
        price: "Starting from ₹4,999",
        badge: "PRE-MADE / TEMPLATE",
        desc: "High-conversion single-page website, contact form, optimized for mobile.",
        features: [
          "Single-page responsive layout",
          "Contact form & lead collection",
          "Mobile-first responsive optimization",
          "Basic SEO setup & meta tags",
          "Rapid 3-5 days delivery",
        ],
      },
      {
        name: "Business Multi-Page Suite",
        price: "Starting from ₹9,999",
        badge: "MOST POPULAR",
        desc: "Fully custom multi-page website with blog sitemaps, team bios, SEO setup.",
        features: [
          "Multi-page custom Next.js architecture",
          "Technical SEO & performance tuning",
          "Sanity Headless CMS integration",
          "Custom animations & design system",
          "Delivery in 7-10 days",
        ],
      },
      {
        name: "E-Commerce Suite",
        price: "Starting from ₹19,999",
        badge: "FULL STOREFRONT",
        desc: "Store setup, custom payment gateway integration, product admin panel.",
        features: [
          "Custom online store with product catalog",
          "Stripe / Razorpay payment gateway integration",
          "Customer admin panel & order management",
          "Product search, filtering, & cart workflow",
          "Delivery in 10-14 days",
        ],
      },
    ],
  },
  {
    id: "app-development",
    category: "MOBILE ENGINEERING & DESIGN",
    title: "App Development & Mobile Design",
    icon: <Smartphone className="w-8 h-8 text-[#ef4d23]" />,
    description:
      "Engineered for iOS & Android with touch-first interfaces, real-time cloud data sync, and fluid native performance.",
    designAspects: {
      title: "Designing for Apps",
      items: [
        "Touch-First Mobile UI/UX & Intuitive Gesture Controls",
        "iOS Human Interface & Android Material Design Guidelines",
        "Interactive Screen Flow Mockups & Haptic Micro-Interactions",
        "Custom Mobile Iconography & Splash Screen Branding",
      ],
    },
    devAspects: {
      title: "Developing for Apps",
      items: [
        "Cross-Platform Native Development (Flutter / React Native)",
        "Real-Time Database Sync & Offline Caching Capabilities",
        "Push Notifications, Cloud Services & Analytics Integration",
        "Apple App Store & Google Play Store Publishing & Maintenance",
      ],
    },
    pricingTiers: [
      {
        name: "Starter App Framework (MVP)",
        price: "Starting from ₹9,999",
        badge: "RAPID MVP",
        desc: "Clean MVP mobile layout with authentication, user profiles & static content.",
        features: [
          "Pre-built cross-platform UI screens",
          "Essential user auth & profile setup",
          "Standard push notification setup",
          "Basic backend API connector",
          "Delivery in 5-7 days",
        ],
      },
      {
        name: "Custom Mobile App",
        price: "Starting from ₹24,999",
        badge: "FULL TAILORED",
        desc: "Tailor-made cross-platform application with custom design, animations, & APIs.",
        features: [
          "Custom mobile UI/UX & micro-interactions",
          "Flutter / React Native cross-platform code",
          "Secure real-time DB & REST/GraphQL API sync",
          "App Store & Play Store publishing support",
          "Delivery in 14-21 days",
        ],
      },
      {
        name: "Enterprise App Suite",
        price: "Starting from ₹44,999",
        badge: "ENTERPRISE",
        desc: "Complex mobile ecosystem with real-time sync, offline mode, payment integration.",
        features: [
          "Full mobile app ecosystem & admin dashboard",
          "Offline storage & real-time background sync",
          "Payment gateway & subscription handling",
          "Custom push notification & analytics engine",
          "Dedicated 30-day post-launch support",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen font-sans text-white bg-[#09090b] relative overflow-x-hidden m-0 p-0">
      <Navbar />

      <section className="w-full pt-28 pb-10 md:pt-36 md:pb-12 px-6 md:px-12 bg-[#09090b] text-white relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ef4d23]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-zinc-400 hover:text-[#ef4d23] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#ef4d23]">
              Services & Pricing
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-6 border-b border-zinc-800/80">
            <div>
              <span className="text-[#ef4d23] uppercase tracking-widest text-xs font-extrabold mb-3 block flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> OUR CAPABILITIES & PACKAGES
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#fafafa] font-serif tracking-tight">
                Detailed Services & Pricing
              </h1>
            </div>
            <p className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed">
              Explore our complete design and development offerings for Web and Mobile Apps, along with transparent package options.
            </p>
          </div>
        </div>
      </section>

      {/* Main Detailed Service Sections */}
      <main className="w-full pb-16 px-6 md:px-12 bg-[#09090b]">
        <div className="max-w-7xl mx-auto space-y-14">
          {serviceSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="bg-zinc-900/40 rounded-3xl p-8 sm:p-12 border border-zinc-800/80 shadow-2xl relative overflow-hidden backdrop-blur-sm"
            >
              {/* Header inside section */}
              <div className="flex items-start gap-4 mb-8 pb-6 border-b border-zinc-800/80">
                <div className="p-3.5 rounded-2xl bg-[#ef4d23]/15 border border-[#ef4d23]/30 shrink-0">
                  {section.icon}
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#ef4d23] font-extrabold block mb-1">
                    {section.category}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-2">
                    {section.title}
                  </h2>
                  <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Designing Column */}
                <div className="bg-zinc-950/70 rounded-2xl p-6 border border-zinc-800/80">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-serif">
                    <PenTool className="w-5 h-5 text-[#ef4d23]" />
                    {section.designAspects.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.designAspects.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#ef4d23] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Developing Column */}
                <div className="bg-zinc-950/70 rounded-2xl p-6 border border-zinc-800/80">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-serif">
                    <Code2 className="w-5 h-5 text-[#ef4d23]" />
                    {section.devAspects.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.devAspects.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#ef4d23] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif text-white mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#ef4d23]" /> Packages & Delivery Pricing
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.pricingTiers.map((tier, idx) => (
                    <div
                      key={idx}
                      className="bg-zinc-950/80 rounded-2xl p-6 border border-zinc-800/80 flex flex-col justify-between hover:border-[#ef4d23]/50 transition-all duration-300"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-3 gap-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#ef4d23]/15 text-[#ef4d23]">
                            {tier.badge}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white font-serif mb-1">
                          {tier.name}
                        </h4>
                        <div className="text-2xl font-extrabold text-[#ef4d23] mb-3">
                          {tier.price}
                        </div>
                        <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                          {tier.desc}
                        </p>

                        <div className="border-t border-zinc-800/80 pt-4 mb-6">
                          <span className="text-[11px] uppercase tracking-widest font-extrabold text-zinc-400 block mb-3">
                            Key Highlights:
                          </span>
                          <ul className="space-y-2">
                            {tier.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ef4d23] shrink-0 mt-1.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <a
                        href="#contact"
                        className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-[#ef4d23] text-white text-center text-xs font-bold transition-colors border border-zinc-800 hover:border-[#ef4d23]"
                      >
                        Choose Package
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Book Call Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800/90 text-center relative overflow-hidden">
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
              Ready to Discuss Your Custom Project?
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Book a 30-minute discovery call directly with our lead developers to review your scope and get a tailor-made quote.
            </p>
            <div className="inline-block">
              <Meet />
            </div>
          </div>
        </div>
      </main>

{/* footer contact */}
      <Contact />
    </div>
  );
}
