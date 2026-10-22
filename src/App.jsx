import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Code2,
  Smartphone,
  ShoppingBag,
  Zap,
  CheckCircle2,
  ExternalLink,
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  ArrowRight,
  Menu,
  X,
  Layers,
  Cpu,
  ShieldCheck,
  Sparkles,
  Clock,
  Server,
  Check,
  Send,
  Globe2,
  Palette,
  Terminal,
  Cloud,
  Users2,
  Award,
  ChevronDown,
  Compass,
  HelpCircle,
  Database,
  GitBranch,
  Box,
  Flame
} from 'lucide-react';
import brandLogo from './assets/logo.webp';
import heroTeamImg from './assets/hero-team.webp';
import whoWeAreImg from './assets/who-we-are.webp';
import cardStaticWeb from './assets/card-static-web.webp';
import cardDynamicApp from './assets/card-dynamic-app.webp';
import cardEcommerce from './assets/card-ecommerce.webp';
import cardMobileApp from './assets/card-mobile-app.webp';

// Exact WhatsApp Official SVG Icon
function WhatsAppIcon({ className = "w-4 h-4", fill = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function App() {
  // Navigation active tab / dedicated web page view state
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);

  // Scroll to top on page switch
  const navigateTo = (pageKey) => {
    setActivePage(pageKey);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll animation ref for Our Process line
  const processRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start center", "end end"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    projectType: 'Dynamic Web App',
    budget: '$500 - $1,500 / ₹40k - ₹1.2L',
    brief: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 900);
  };

  const constructWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*New Project Lead - Invito Solution*\n\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Contact:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Company / Brand:* ${formData.company || 'Not provided'}\n` +
      `*Service:* ${formData.projectType}\n` +
      `*Budget:* ${formData.budget}\n` +
      `*Brief:* ${formData.brief || 'Looking to discuss a new digital build.'}`
    );
    return `https://wa.me/918056604838?text=${text}`;
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'What We Do', id: 'what-we-do' },
    { label: 'Who We Are', id: 'who-we-are' },
    { label: 'Our Process', id: 'our-process' },
    { label: 'Why Choose Invito', id: 'why-choose-us' },
    { label: 'Our People', id: 'our-people' },
  ];

  // 4 Core Services with dedicated photos
  const services = [
    {
      title: 'Static & Animated Websites',
      category: 'Ultra-Fast Web',
      description: 'Zero-bloat static websites, silky smooth Framer Motion micro-interactions, edge CDN deployment, and stellar 99+ Google PageSpeed scores.',
      image: cardStaticWeb,
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      features: ['Sub-second load times', 'Custom interactive animations', 'SEO & OpenGraph ranking setup', 'Edge CDN globally hosted'],
      badge: 'Speed Score 99+'
    },
    {
      title: 'Dynamic Web Applications',
      category: 'Full-Stack Portals',
      description: 'Scalable cloud web applications, customer and admin operational portals, role-based access control, and real-time database sync.',
      image: cardDynamicApp,
      icon: <Code2 className="w-6 h-6 text-emerald-600" />,
      features: ['Scalable Node / React architecture', 'Real-time database sync', 'Custom CMS & admin tooling', 'Enterprise auth & RBAC'],
      badge: 'Enterprise Architecture'
    },
    {
      title: 'Semi & Full E-Commerce',
      category: 'Commerce Solutions',
      description: 'High-conversion product catalogues, direct WhatsApp one-click ordering workflows, Razorpay & Stripe integration, and live inventory tools.',
      image: cardEcommerce,
      icon: <ShoppingBag className="w-6 h-6 text-emerald-600" />,
      features: ['WhatsApp ordering pipelines', 'Razorpay & Stripe checkout', 'Catalog & SKU management', 'Conversion-optimized checkouts'],
      badge: 'High Conversion'
    },
    {
      title: 'Mobile App Engineering',
      category: 'Cross-Platform Mobile',
      description: 'Cross-platform iOS and Android mobile solutions engineered for fluid touch gestures, native device capabilities, push alerts, and offline sync.',
      image: cardMobileApp,
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
      features: ['Single codebase (Flutter / React Native)', 'Push notifications engine', 'Seamless App & Play Store submission', 'Offline-first SQLite/Realm sync'],
      badge: 'iOS & Android'
    }
  ];

  // Animated movable tech stack items
  const techStackRow1 = [
    { name: 'React 19', category: 'Frontend UI', icon: <Code2 className="w-4 h-4 text-emerald-600" /> },
    { name: 'Vite 8', category: 'Build Engine', icon: <Zap className="w-4 h-4 text-emerald-600" /> },
    { name: 'Tailwind CSS', category: 'Styling', icon: <Palette className="w-4 h-4 text-emerald-600" /> },
    { name: 'Framer Motion', category: 'Micro-Animations', icon: <Sparkles className="w-4 h-4 text-emerald-600" /> },
    { name: 'Node.js', category: 'Backend Engine', icon: <Server className="w-4 h-4 text-emerald-600" /> },
    { name: 'Next.js', category: 'Fullstack Edge', icon: <Globe2 className="w-4 h-4 text-emerald-600" /> },
    { name: 'Flutter', category: 'Cross-Platform App', icon: <Smartphone className="w-4 h-4 text-emerald-600" /> },
    { name: 'PostgreSQL', category: 'Relational DB', icon: <Database className="w-4 h-4 text-emerald-600" /> }
  ];

  const techStackRow2 = [
    { name: 'Cloudflare Edge', category: 'Global CDN', icon: <Cloud className="w-4 h-4 text-emerald-600" /> },
    { name: 'TypeScript', category: 'Type Safety', icon: <Terminal className="w-4 h-4 text-emerald-600" /> },
    { name: 'Razorpay / Stripe', category: 'Payment Gateways', icon: <ShoppingBag className="w-4 h-4 text-emerald-600" /> },
    { name: 'Docker', category: 'Containers', icon: <Box className="w-4 h-4 text-emerald-600" /> },
    { name: 'Firebase / Supabase', category: 'Realtime Backend', icon: <Flame className="w-4 h-4 text-emerald-600" /> },
    { name: 'GitHub CI/CD', category: 'DevOps Pipeline', icon: <GitBranch className="w-4 h-4 text-emerald-600" /> },
    { name: 'Redis Cache', category: 'Low-Latency', icon: <Cpu className="w-4 h-4 text-emerald-600" /> },
    { name: 'GraphQL / REST', category: 'API Interfaces', icon: <Layers className="w-4 h-4 text-emerald-600" /> }
  ];

  // Process Steps
  const processSteps = [
    {
      stepNumber: '01',
      title: 'Discovery & Strategic Planning',
      description: 'Understanding business objectives, competitive landscape, target demographics, and precise functional requirements before writing a single line of code.',
      deliverables: ['Product Requirement Blueprint', 'Tech Stack Evaluation', 'Project Milestone Timeline'],
      icon: <Compass className="w-6 h-6 text-emerald-600" />
    },
    {
      stepNumber: '02',
      title: 'UI/UX & Architecture',
      description: 'Creating high-fidelity Figma mockups, data flow diagrams, responsive component design systems, and user journeys crafted for rapid conversion.',
      deliverables: ['Interactive Prototypes', 'Design System Systematization', 'Database Schema & APIs'],
      icon: <Palette className="w-6 h-6 text-emerald-600" />
    },
    {
      stepNumber: '03',
      title: 'Agile Development',
      description: 'Sprint iterations, high-performance clean codebase creation using React, Vite, Node.js, and mobile frameworks with continuous progress updates.',
      deliverables: ['Weekly Staging Builds', 'Modular Codebase', 'API Integration & Webhooks'],
      icon: <Terminal className="w-6 h-6 text-emerald-600" />
    },
    {
      stepNumber: '04',
      title: 'Quality Assurance & Testing',
      description: 'Automated test suites, security patch validation, multi-browser cross-device compatibility checks, and rigorous 95+ Core Web Vitals audit.',
      deliverables: ['End-to-End Testing', 'Security & Load Validation', 'Core Web Vitals 98+ Audit'],
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
    },
    {
      stepNumber: '05',
      title: 'Cloud Deployment & Launch',
      description: 'Global Edge CDN distribution, automated CI/CD pipeline rollout, domain DNS configuration, SSL encryption, and turnkey production launch.',
      deliverables: ['Global CDN Acceleration', 'SSL & DNS Hardening', 'Production Go-Live Handover'],
      icon: <Cloud className="w-6 h-6 text-emerald-600" />
    }
  ];

  // Frequently Asked Questions
  const faqs = [
    {
      question: 'How long does a typical website or web application project take?',
      answer: 'High-speed static & animated websites typically take 5 to 10 business days. Custom dynamic web applications, e-commerce stores, or mobile apps usually take between 2 to 4 weeks depending on required integrations and database complexity.'
    },
    {
      question: 'Will my website achieve a 95+ Google PageSpeed score?',
      answer: 'Yes! We obsess over performance. We do not use bloated page-builders or slow CMS themes. Every web application is engineered with Vite/React, optimized image assets, and edge CDN delivery to consistently hit 98+ PageSpeed scores.'
    },
    {
      question: 'Do you offer direct WhatsApp order & inquiry integration?',
      answer: 'Absolutely. We specialize in building direct one-click WhatsApp order checkouts and lead dispatch channels so your business receives instant customer notifications directly on WhatsApp without friction.'
    },
    {
      question: 'Do I own 100% of the code and cloud infrastructure?',
      answer: 'Yes, 100%. Upon final project handover, you receive full administrative ownership of your Git repositories, domain, cloud deployments, and databases. We believe in zero vendor lock-in.'
    },
    {
      question: 'What happens after the project launch? Do you provide support?',
      answer: 'We provide post-launch warranty support, continuous uptime monitoring, security patching, and ongoing feature sprint options. Our engineering desk in Tirunelveli is always accessible via phone and WhatsApp.'
    }
  ];

  const whyChoosePoints = [
    {
      title: 'Obsessive 98+ PageSpeed & Core Vitals',
      description: 'We do not build slow, bloated websites. Every platform is fine-tuned for instant loading, sub-second TTFB, and top Google search rankings.',
      icon: <Zap className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Direct WhatsApp Sales & Lead Automation',
      description: 'Built-in direct click-to-chat WhatsApp workflows and instant notification leads that convert casual visitors into paying customers immediately.',
      icon: <MessageCircle className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Enterprise Architecture, Transparent Pricing',
      description: 'Clean scalable codebases without recurring platform lock-in. Full ownership of your code, cloud assets, and databases.',
      icon: <Cpu className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Rapid Sprint Delivery & 24/7 SLA',
      description: 'Fast turnarounds from initial concept to live staging in days, backed by direct engineer support during and after launch.',
      icon: <Clock className="w-6 h-6 text-emerald-600" />
    }
  ];

  const portfolioProjects = [
    {
      title: 'Aura Clinic',
      category: 'Healthcare & Wellness Portal',
      liveUrl: 'https://auraclinic-lyart.vercel.app',
      status: 'Live Production',
      description: 'A cutting-edge medical clinic website featuring a verified doctors directory, appointment lead generation system, service blueprints, and a 98+ Google Lighthouse rating.',
      metrics: ['98+ Lighthouse', 'Zero-Latency Edge', 'Mobile First'],
      badges: ['Static Web', 'Healthcare', 'Vercel Cloud Edge', 'Tailwind'],
      mockupPreview: (
        <div className="relative w-full h-52 bg-gradient-to-br from-emerald-50 via-teal-50/60 to-white p-4 flex flex-col justify-between overflow-hidden rounded-t-xl border-b border-emerald-100">
          <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              <span className="text-xs text-slate-500 font-mono ml-2">auraclinic-lyart.vercel.app</span>
            </div>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">98+ SPEED</span>
          </div>
          <div className="space-y-2 py-2">
            <div className="h-4 w-28 bg-emerald-200/70 rounded"></div>
            <div className="h-2 w-48 bg-emerald-100 rounded"></div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              <div className="h-14 bg-white rounded border border-emerald-100 p-1.5 flex flex-col justify-between shadow-sm">
                <div className="w-4 h-4 rounded bg-emerald-500/20"></div>
                <div className="w-10 h-1.5 bg-emerald-600/40 rounded"></div>
              </div>
              <div className="h-14 bg-white rounded border border-emerald-100 p-1.5 flex flex-col justify-between shadow-sm">
                <div className="w-4 h-4 rounded bg-emerald-500/20"></div>
                <div className="w-10 h-1.5 bg-emerald-600/40 rounded"></div>
              </div>
              <div className="h-14 bg-white rounded border border-emerald-100 p-1.5 flex flex-col justify-between shadow-sm">
                <div className="w-4 h-4 rounded bg-emerald-500/20"></div>
                <div className="w-10 h-1.5 bg-emerald-600/40 rounded"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[11px] text-emerald-700 font-medium">
            <span>Verified Clinic Lead Engine</span>
            <span>Edge Hosted</span>
          </div>
        </div>
      )
    },
    {
      title: 'AK Mobiles',
      category: 'Next-Gen E-Commerce Web App',
      liveUrl: 'https://akmobiles.netlify.app',
      status: 'Live Production',
      description: 'A modern consumer electronics showcase and sales ecosystem featuring interactive product cards, smartphone spec comparisons, instantaneous search, and direct order workflows.',
      metrics: ['Live Inventory', 'Instant Filters', 'High Conversion'],
      badges: ['E-Commerce', 'Web App', 'Netlify', 'Interactive Cart'],
      mockupPreview: (
        <div className="relative w-full h-52 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-4 flex flex-col justify-between overflow-hidden rounded-t-xl border-b border-emerald-100">
          <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              <span className="text-xs text-slate-500 font-mono ml-2">akmobiles.netlify.app</span>
            </div>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">ACTIVE RETAIL</span>
          </div>
          <div className="space-y-2 py-2">
            <div className="flex justify-between items-center">
              <div className="h-4 w-32 bg-emerald-300/60 rounded"></div>
              <div className="h-5 w-16 bg-emerald-100 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div className="h-16 bg-white rounded-lg border border-emerald-100 p-2 flex items-center space-x-2 shadow-sm">
                <div className="w-8 h-10 bg-emerald-50 rounded border border-emerald-200"></div>
                <div className="space-y-1">
                  <div className="h-2 w-14 bg-slate-300 rounded"></div>
                  <div className="h-2 w-8 bg-emerald-600 rounded"></div>
                </div>
              </div>
              <div className="h-16 bg-white rounded-lg border border-emerald-100 p-2 flex items-center space-x-2 shadow-sm">
                <div className="w-8 h-10 bg-emerald-50 rounded border border-emerald-200"></div>
                <div className="space-y-1">
                  <div className="h-2 w-14 bg-slate-300 rounded"></div>
                  <div className="h-2 w-8 bg-emerald-600 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[11px] text-emerald-700 font-medium">
            <span>Realtime Catalog</span>
            <span>WhatsApp Ready</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col relative overflow-x-hidden selection:bg-emerald-500 selection:text-white font-sans">
      
      {/* Background Soft Emerald Light Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-100/70 rounded-full blur-[140px]" />
        <div className="absolute top-[30%] -right-40 w-[650px] h-[650px] bg-emerald-50/90 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 w-[550px] h-[550px] bg-emerald-100/50 rounded-full blur-[150px]" />
      </div>

      {/* TOP NAVIGATION BAR WITH MULTI-PAGE TAB SWITCHING */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-emerald-100/90 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo with Real Emblem */}
          <button onClick={() => navigateTo('home')} aria-label="Go to Invito Solution Home" className="flex items-center space-x-3.5 group text-left">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full p-0.5 bg-white border border-emerald-200 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img
                src={brandLogo}
                alt="Invito Solution Logo"
                width="48"
                height="48"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors font-display">
                Invito<span className="text-emerald-600">Solution</span>
              </span>
              <span className="text-[10px] tracking-widest text-emerald-700 uppercase font-semibold">Digital Product Studio</span>
            </div>
          </button>

          {/* Desktop Navigation Links switching pages cleanly */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  aria-label={`Navigate to ${link.name}`}
                  className={`text-sm font-semibold transition-all relative py-2 ${
                    isActive ? 'text-emerald-700 font-bold' : 'text-slate-600 hover:text-emerald-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-emerald-600 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Nav Right Action Group */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/918056604838"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat with Invito Solution"
              className="flex items-center space-x-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-2.5 rounded-full transition-all hover:scale-105 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" fill="#25D366" />
              <span className="hidden md:inline">WhatsApp Direct</span>
            </a>
            <button
              onClick={() => navigateTo('contact')}
              aria-label="Navigate to Contact Us page"
              className={`relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold rounded-full transition-all transform hover:-translate-y-0.5 ${
                activePage === 'contact'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:shadow-[0_4px_20px_rgba(16,185,129,0.35)]'
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-slate-700 hover:text-emerald-700"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-emerald-100 px-6 py-6 space-y-4 shadow-xl"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => navigateTo(link.id)}
                    aria-label={`Navigate to ${link.name}`}
                    className={`text-left text-base font-semibold py-1.5 transition-colors ${
                      activePage === link.id ? 'text-emerald-700 font-bold' : 'text-slate-700 hover:text-emerald-600'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
                <a
                  href="https://wa.me/918056604838"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Invito Solution at +91 8056604838"
                  className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" fill="#25D366" />
                  <span>WhatsApp (+91 8056604838)</span>
                </a>
                <button
                  onClick={() => navigateTo('contact')}
                  aria-label="Navigate to Contact page"
                  className="text-center py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-600/20"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* DEDICATED PAGE VIEWS CONTAINER WITH PAGE TRANSITIONS */}
      <main className="flex-1 relative z-10">

        <AnimatePresence mode="wait">
          {/* ==================== PAGE 1: HOME ==================== */}
          {activePage === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {/* HERO SECTION - FULL BACKGROUND IMMERSIVE LANDING PAGE */}
              <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img
                    src={heroTeamImg}
                    alt="Invito Solution Software Engineering Team"
                    width="1376"
                    height="768"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-center transform scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/85"></div>
                  <div className="absolute inset-0 bg-radial-at-c from-emerald-950/40 via-transparent to-slate-950/80"></div>
                  <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center space-x-2"
                  >
                    <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-emerald-400 font-bold bg-emerald-950/90 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/40 shadow-lg shadow-emerald-900/30">
                      NEXT-GEN SOFTWARE & PRODUCT ENGINEERING STUDIO
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white leading-[1.12] drop-shadow-md"
                  >
                    Architecting High-Speed Platforms That Turn Clicks Into{' '}
                    <span className="text-emerald-400 relative inline-block">
                      Real Revenue
                      <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0,6 Q50,0 100,6" stroke="#34d399" strokeWidth="4" fill="none" strokeLinecap="round" />
                      </svg>
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto font-normal drop-shadow"
                  >
                    We build lightning-fast web experiences, custom dynamic portals, direct-to-WhatsApp e-commerce engines, and high-retention mobile apps with zero bloat and ruthless focus on speed.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                  >
                    <button
                      onClick={() => navigateTo('contact')}
                      aria-label="Claim Free Tech Assessment"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 transition-all shadow-[0_8px_30px_rgba(16,185,129,0.45)] hover:scale-105"
                    >
                      <span>Claim Free Tech Assessment</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </button>
                    <button
                      onClick={() => navigateTo('what-we-do')}
                      aria-label="Discover What We Build"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all shadow-lg hover:scale-105"
                    >
                      <span>Discover What We Build</span>
                      <ChevronDown className="w-4 h-4 text-emerald-400" />
                    </button>
                  </motion.div>

                  <div className="pt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-300 font-medium">
                    <div className="flex items-center space-x-2 bg-slate-900/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
                      <Users2 className="w-4 h-4 text-emerald-400" />
                      <span>Dedicated Engineering Squad</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-slate-900/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>100% Agile Engineering Sprints</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-slate-900/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      <span>Tirunelveli Hub • Worldwide Delivery</span>
                    </div>
                  </div>

                </div>
              </section>

              {/* CONTINUOUS ANIMATED MOVABLE TECH STACK MARQUEE */}
              <section className="py-14 bg-white border-y border-emerald-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                    <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Live Interactive Tech Stack</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                    Technologies Powering Production Builds
                  </h3>
                </div>

                {/* Animated Marquee Row 1 (Moving Left) */}
                <div className="relative w-full overflow-hidden mb-4">
                  <div className="animate-marquee">
                    {[...techStackRow1, ...techStackRow1].map((tech, idx) => (
                      <div
                        key={`row1-${tech.name}-${idx}`}
                        className="flex items-center space-x-3 px-5 py-3 mx-2 rounded-2xl bg-[#f8fafc] border border-emerald-100 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all flex-shrink-0 cursor-default"
                      >
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                          {tech.icon}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{tech.name}</div>
                          <div className="text-[10px] text-emerald-700 font-mono font-medium">{tech.category}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated Marquee Row 2 (Moving Right) */}
                <div className="relative w-full overflow-hidden">
                  <div className="animate-marquee-reverse">
                    {[...techStackRow2, ...techStackRow2].map((tech, idx) => (
                      <div
                        key={`row2-${tech.name}-${idx}`}
                        className="flex items-center space-x-3 px-5 py-3 mx-2 rounded-2xl bg-[#f8fafc] border border-emerald-100 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all flex-shrink-0 cursor-default"
                      >
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                          {tech.icon}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{tech.name}</div>
                          <div className="text-[10px] text-emerald-700 font-mono font-medium">{tech.category}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* QUICK SNAPSHOT PREVIEWS ON HOME */}
              <section className="py-20 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold font-display text-slate-900">
                      Explore All Dedicated Pages
                    </h2>
                    <p className="text-slate-600 text-sm mt-2">
                      Click any capability below to view its full dedicated webpage, workflows, and blueprints.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                      <div
                        key={service.title}
                        onClick={() => navigateTo('what-we-do')}
                        className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all text-left group cursor-pointer"
                      >
                        <div className="h-40 rounded-xl overflow-hidden mb-4 relative">
                          <img src={service.image} alt={service.title} width="800" height="533" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <span className="absolute top-2 right-2 text-[10px] bg-white/95 font-bold px-2 py-0.5 rounded-full text-slate-800 shadow">
                            {service.badge}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                          {service.description}
                        </p>
                        <div className="mt-4 flex items-center text-xs font-bold text-emerald-700 space-x-1 group-hover:translate-x-1 transition-transform">
                          <span>View Dedicated Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* ==================== PAGE 2: WHAT WE DO ==================== */}
          {activePage === 'what-we-do' && (
            <motion.div
              key="what-we-do-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-16 md:py-24"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                    <span>What We Do</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
                    Our 4 Dedicated Engineering Capabilities
                  </h1>
                  <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                    We deliver exclusively across four specialized domains: static web platforms, dynamic web applications, semi/full e-commerce pipelines, and cross-platform mobile apps.
                  </p>
                </div>

                {/* 4 Professional Animated Cards with Real Respective Photos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {services.map((service) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 1, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2"
                    >
                      {/* Respective Photo Banner */}
                      <div className="relative h-52 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          width="800"
                          height="533"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"></div>
                        
                        <span className="absolute top-3.5 right-3.5 text-[10px] font-bold bg-white/95 text-slate-900 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-slate-200">
                          {service.badge}
                        </span>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                        <div>
                          {/* Round Icon Badge */}
                          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-xs mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                            {React.cloneElement(service.icon, {
                              className: "w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300"
                            })}
                          </div>

                          <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-emerald-700 transition-colors mb-2.5 leading-snug">
                            {service.title}
                          </h3>

                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            {service.description}
                          </p>

                          {/* Key highlights */}
                          <div className="pt-4 space-y-1.5 border-t border-slate-100 mt-4">
                            {service.features.map((feat) => (
                              <div key={feat} className="flex items-center space-x-2 text-[11px] text-slate-600 font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Direct Consultation Link */}
                        <div className="pt-4 border-t border-slate-100">
                          <button
                            onClick={() => navigateTo('contact')}
                            aria-label={`Request consultation for ${service.title}`}
                            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-1 transition-all"
                          >
                            <span>Request This Service</span>
                            <ArrowRight className="w-4 h-4 text-emerald-600" />
                          </button>
                        </div>

                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Callout banner */}
                <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold font-display">Need a tailored solution combining multiple capabilities?</h3>
                    <p className="text-emerald-100 text-sm mt-1 max-w-xl">
                      Talk directly with our lead full-stack architect to get a consolidated scope and immediate turnaround estimate.
                    </p>
                  </div>
                  <button
                    onClick={() => navigateTo('contact')}
                    aria-label="Start Free Consultation"
                    className="px-8 py-4 rounded-xl bg-white text-emerald-900 font-bold text-sm shadow-md hover:scale-105 transition-all flex-shrink-0"
                  >
                    Start Free Consultation
                  </button>
                </div>

              </div>
            </motion.div>
          )}

          {/* ==================== PAGE 3: WHO WE ARE ==================== */}
          {activePage === 'who-we-are' && (
            <motion.div
              key="who-we-are-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-16 md:py-24"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  <div className="lg:col-span-6 relative">
                    <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl group">
                      <img
                        src={whoWeAreImg}
                        alt="Who We Are - Invito Solution Engineering Consultation"
                        width="1200"
                        height="896"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-[440px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                      
                      <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-emerald-100 shadow-md">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                            <Award className="w-5 h-5 text-emerald-700" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">Proven Architecture & Engineering Team</div>
                            <div className="text-[11px] text-emerald-700 font-medium">Headquartered in Melapalayam, Tirunelveli • Global Delivery</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                      <span>Who We Are</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
                      A Passionate Engineering Studio Transforming Digital Experiences
                    </h1>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Headquartered in Tirunelveli, Tamil Nadu, <strong className="text-slate-900 font-bold">Invito Solution</strong> is a premier technology studio that bridges visionary concepts with scalable, bulletproof software products.
                    </p>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      We never rely on generic templates, bloated WordPress installs, or heavy unoptimized page-builders. Every application is built with modern web standards (React, Vite, Node.js, Cloudflare Edge) to provide your users with sub-second page loads and seamless conversions.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                      <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm">
                        <div className="text-3xl font-extrabold text-emerald-600 font-display">100%</div>
                        <div className="text-xs text-slate-600 font-semibold mt-1">Clean Modular Code</div>
                      </div>
                      <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm">
                        <div className="text-3xl font-extrabold text-emerald-600 font-display">&lt; 15 min</div>
                        <div className="text-xs text-slate-600 font-semibold mt-1">WhatsApp Response Time</div>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4">
                      <button
                        onClick={() => navigateTo('our-process')}
                        aria-label="See Our Delivery Process"
                        className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-5 py-3 rounded-xl transition-all shadow-sm"
                      >
                        <span>See Our Delivery Process</span>
                        <ArrowRight className="w-4 h-4 text-emerald-600" />
                      </button>
                      <button
                        onClick={() => navigateTo('our-people')}
                        aria-label="Meet Our Leadership"
                        className="inline-flex items-center space-x-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 px-5 py-3 rounded-xl transition-all shadow-sm"
                      >
                        <span>Meet Our Leadership</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* ==================== PAGE 4: OUR PROCESS & FAQ ==================== */}
          {activePage === 'our-process' && (
            <motion.div
              key="our-process-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-16 md:py-24"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                    <span>Our Process</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
                    Systematic, Transparent & Agile Delivery Lifecycle
                  </h1>
                  <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                    Scroll down through each milestone. Notice the continuous animated emerald line illustrating live delivery progress.
                  </p>
                </div>

                {/* Animated Interactive Timeline with Scroll-Driven Line */}
                <div ref={processRef} className="max-w-4xl mx-auto relative pl-2 sm:pl-0 mb-28">
                  {/* Background vertical track guide line */}
                  <div className="absolute left-[31px] sm:left-[39px] top-6 bottom-8 w-1.5 bg-slate-200 rounded-full"></div>

                  {/* Animated glowing green progress line that moves down smoothly */}
                  <motion.div
                    style={{ height: lineHeight }}
                    className="absolute left-[31px] sm:left-[39px] top-6 w-1.5 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 rounded-full z-0 shadow-[0_0_12px_rgba(16,185,129,0.7)]"
                  ></motion.div>

                  <div className="space-y-6 sm:space-y-10 relative z-10">
                    {processSteps.map((step, idx) => {
                      const isCurrent = activeStep === idx + 1;
                      return (
                        <motion.div
                          key={step.stepNumber}
                          initial={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.01 }}
                          onClick={() => setActiveStep(idx + 1)}
                          className={`relative flex items-start space-x-5 sm:space-x-8 p-6 sm:p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
                            isCurrent
                              ? 'bg-white border-2 border-emerald-500 shadow-xl shadow-emerald-500/10'
                              : 'bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-lg'
                          }`}
                        >
                          {/* Circular icon badge */}
                          <div className="relative z-10 flex-shrink-0">
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                              isCurrent
                                ? 'bg-emerald-600 text-white shadow-emerald-600/40 ring-4 ring-emerald-100'
                                : 'bg-white border-2 border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-600'
                            }`}>
                              {React.cloneElement(step.icon, {
                                className: `w-6 h-6 sm:w-7 sm:h-7 ${isCurrent ? 'text-white' : 'text-emerald-600'}`
                              })}
                            </div>
                          </div>

                          {/* Content block */}
                          <div className="flex-1">
                            <div className="flex items-center space-x-2.5">
                              <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                                isCurrent ? 'text-emerald-700' : 'text-slate-400'
                              }`}>
                                STEP {step.stepNumber}
                              </span>
                              {isCurrent && (
                                <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
                                  ACTIVE STAGE
                                </span>
                              )}
                            </div>

                            <h3 className={`text-xl sm:text-2xl font-bold font-display mt-1.5 transition-colors ${
                              isCurrent ? 'text-slate-950 font-extrabold' : 'text-slate-800'
                            }`}>
                              {step.title}
                            </h3>

                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2.5">
                              {step.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-100">
                              {step.deliverables.map((item) => (
                                <span
                                  key={item}
                                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                                    isCurrent
                                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200 shadow-xs'
                                      : 'bg-slate-50 text-slate-600 border-slate-200'
                                  }`}
                                >
                                  ✓ {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* FREQUENTLY ASKED QUESTIONS (FAQ) SECTION IN OUR PROCESS */}
                <div className="max-w-4xl mx-auto pt-8 border-t border-emerald-100">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                      <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Got Questions?</span>
                    </div>
                    <h2 className="text-3xl font-extrabold font-display text-slate-900">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 text-sm mt-2">
                      Everything you need to know about our sprints, pricing, speed standards, and code ownership.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = openFaq === index;
                      return (
                        <div
                          key={faq.question}
                          className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-emerald-300 transition-colors"
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? -1 : index)}
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${index}`}
                            id={`faq-question-${index}`}
                            aria-label={`Toggle answer for: ${faq.question}`}
                            className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                          >
                            <span className="text-base sm:text-lg">{faq.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-emerald-600 transform transition-transform duration-300 flex-shrink-0 ml-4 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                id={`faq-answer-${index}`}
                                role="region"
                                aria-labelledby={`faq-question-${index}`}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                              >
                                {faq.answer}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ==================== PAGE 5: WHY CHOOSE INVITO ==================== */}
          {activePage === 'why-choose-us' && (
            <motion.div
              key="why-choose-us-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-16 md:py-24"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                    <span>Why Choose Invito</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
                    Engineering Integrity That Sets Us Apart
                  </h1>
                  <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
                    Here is why startup founders, retail brands, and clinics trust Invito Solution to build their business-critical digital systems.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                  {whyChoosePoints.map((point) => (
                    <div
                      key={point.title}
                      className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all flex items-start space-x-5"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                        {point.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                          {point.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Featured Client Projects */}
                <div className="border-t border-slate-200 pt-16">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                      Featured Live Client Projects
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {portfolioProjects.map((project) => (
                      <div
                        key={project.title}
                        className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-md hover:shadow-xl transition-all"
                      >
                        {project.mockupPreview}
                        <div className="p-8">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono font-bold text-emerald-700">{project.category}</span>
                            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">{project.status}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.description}</p>
                          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                            <div className="flex gap-2">
                              {project.metrics.map((m) => (
                                <span key={m} className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">✓ {m}</span>
                              ))}
                            </div>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Visit live demonstration for ${project.title}`}
                              className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-xl transition-all flex items-center space-x-1"
                            >
                              <span>Visit</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ==================== PAGE 6: OUR PEOPLE ==================== */}
          {activePage === 'our-people' && (
            <motion.div
              key="our-people-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-16 md:py-24"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                      <span>Our People</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
                      The Architects & Engineers Behind Your Builds
                    </h1>
                  </div>

                  <div className="bg-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-emerald-200 shadow-xl">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      
                      <div className="flex-shrink-0 text-center">
                        <div className="w-36 h-36 rounded-3xl bg-white border-2 border-emerald-300 p-2 flex items-center justify-center shadow-lg mx-auto">
                          <img
                            src={brandLogo}
                            alt="Invito Solution Founder and Lead Full-Stack Architect"
                            width="144"
                            height="144"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-contain rounded-2xl"
                          />
                        </div>
                        <div className="mt-4 inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verified Principal</span>
                        </div>
                      </div>

                      <div className="flex-1 space-y-4 text-center md:text-left">
                        <div>
                          <div className="text-xs uppercase tracking-widest text-emerald-700 font-bold font-mono">
                            Technical Leadership
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-1">
                            Founder & Lead Full-Stack Architect
                          </h2>
                          <p className="text-xs text-slate-500 font-semibold mt-1">
                            Principal Creative Frontend Engineer & Digital Product Strategist
                          </p>
                        </div>

                        <p className="text-slate-700 text-sm leading-relaxed italic border-l-4 border-emerald-500 pl-4 py-1.5 text-left bg-emerald-50/50 rounded-r-lg">
                          "Crafting zero-bloat, high-converting digital products with obsessive attention to micro-interactions, responsive fluidity, and enterprise-grade speed."
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
                            <div className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                              <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Core Competencies</span>
                            </div>
                            <div className="text-[11px] text-slate-600 mt-1.5">
                              Vite/React, Tailwind CSS, Node.js Backends, Serverless Cloudflare Edge, Next.js, and Mobile Cross-Platform UI.
                            </div>
                          </div>

                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
                            <div className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                              <Layers className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Product Standards</span>
                            </div>
                            <div className="text-[11px] text-slate-600 mt-1.5">
                              95+ Core Web Vitals score, WCAG accessibility, custom micro-animations, and direct WhatsApp / payment gateway integration.
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 flex flex-wrap gap-4 justify-center md:justify-start items-center">
                          <a
                            href="https://wa.me/918056604838?text=Hi%20Invito%20Solution%2C%20I%20would%20like%20to%20discuss%20a%20technical%20partnership."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Direct WhatsApp Consultation with Founder"
                            className="inline-flex items-center space-x-2 text-xs font-bold px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm transition-colors"
                          >
                            <WhatsAppIcon className="w-4 h-4 text-white" fill="white" />
                            <span>Direct WhatsApp Consultation</span>
                          </a>
                          <a
                            href="tel:+918056604838"
                            aria-label="Call Founder at +91 8056604838"
                            className="inline-flex items-center space-x-2 text-xs font-bold px-5 py-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5 text-emerald-600" />
                            <span>+91 8056604838</span>
                          </a>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ==================== PAGE 7: CONTACT US ==================== */}
          {activePage === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-16 md:py-24"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                    <span>Contact Us</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
                    Let's Build Something Exceptional Together
                  </h1>
                  <p className="text-slate-600 text-sm sm:text-base mt-2">
                    Submit your requirement below for a fast turnaround proposal, or contact us directly on phone or WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Estimator & Inquiry Form */}
                  <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-xl">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 font-display">Fast-Track Project Scope & Estimator</h3>
                      <p className="text-xs text-slate-500 mt-1">Average proposal turnaround in less than 4 business hours.</p>
                    </div>

                    {formSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-12 text-center space-y-5"
                      >
                        <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
                          <Check className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 font-display">Inquiry Successfully Received!</h3>
                        <p className="text-slate-600 text-sm max-w-md mx-auto">
                          Thank you, <span className="text-emerald-700 font-bold">{formData.name || 'there'}</span>. An engineering consultant from Invito Solution will contact you shortly.
                        </p>
                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                          <a
                            href={constructWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open submitted inquiry directly in WhatsApp"
                            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-sm shadow-md hover:scale-105 transition-all"
                          >
                            <WhatsAppIcon className="w-4 h-4 text-white" fill="white" />
                            <span>Open Chat in WhatsApp</span>
                          </a>
                          <button
                            onClick={() => setFormSubmitted(false)}
                            aria-label="Submit another requirement"
                            className="text-xs font-semibold text-slate-500 hover:text-emerald-700 underline"
                          >
                            Submit Another Requirement
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-2">Your Full Name *</label>
                            <input
                              id="contact-name"
                              type="text"
                              name="name"
                              required
                              aria-required="true"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Rahul Sharma"
                              className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-xs"
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 mb-2">WhatsApp / Phone *</label>
                            <input
                              id="contact-phone"
                              type="tel"
                              name="phone"
                              required
                              aria-required="true"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+91 98765 43210"
                              className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-xs"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-2">Corporate Email *</label>
                            <input
                              id="contact-email"
                              type="email"
                              name="email"
                              required
                              aria-required="true"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="rahul@company.com"
                              className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-xs"
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-company" className="block text-xs font-bold text-slate-700 mb-2">Company / Organization</label>
                            <input
                              id="contact-company"
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Invito Technologies"
                              className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-xs"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-2">Select Project Scope</label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {[
                              'Static & Animated Web',
                              'Dynamic Web App',
                              'E-Commerce Store',
                              'Mobile Application'
                            ].map((type) => (
                              <button
                                type="button"
                                key={type}
                                onClick={() => setFormData((prev) => ({ ...prev, projectType: type }))}
                                aria-label={`Select project scope: ${type}`}
                                aria-pressed={formData.projectType === type}
                                className={`px-3 py-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                                  formData.projectType === type
                                    ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm ring-1 ring-emerald-500'
                                    : 'bg-[#f8fafc] border-slate-200 text-slate-600 hover:bg-slate-100'
                                }`}
                              >
                                {type}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-2">Estimated Investment Range</label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {[
                              '< ₹25k / $300',
                              '₹25k - ₹60k / $700',
                              '₹60k - ₹1.5L / $1.8k',
                              '₹1.5L+ / Enterprise'
                            ].map((budget) => (
                              <button
                                type="button"
                                key={budget}
                                onClick={() => setFormData((prev) => ({ ...prev, budget }))}
                                aria-label={`Select budget range: ${budget}`}
                                aria-pressed={formData.budget === budget}
                                className={`px-3 py-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                                  formData.budget === budget
                                    ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm ring-1 ring-emerald-500'
                                    : 'bg-[#f8fafc] border-slate-200 text-slate-600 hover:bg-slate-100'
                                }`}
                              >
                                {budget}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label htmlFor="contact-brief" className="block text-xs font-bold text-slate-700 mb-2">Project Brief & Feature Requirements</label>
                          <textarea
                            id="contact-brief"
                            name="brief"
                            rows={3}
                            value={formData.brief}
                            onChange={handleInputChange}
                            placeholder="Tell us about your brand, key features needed, reference websites, or target timeline..."
                            className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-xs"
                          ></textarea>
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <a
                            href={constructWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Send inquiry directly via WhatsApp"
                            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all shadow-sm"
                          >
                            <MessageCircle className="w-4 h-4 text-emerald-600" />
                            <span>Send via WhatsApp</span>
                          </a>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            aria-label="Submit project consultation inquiry"
                            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-500/20 hover:scale-105 transition-all disabled:opacity-70"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Processing...</span>
                              </>
                            ) : (
                              <>
                                <span>Submit Project Inquiry</span>
                                <Send className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>

                  {/* Direct Contact Cards & Map */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-md space-y-4">
                      <h3 className="text-lg font-bold text-slate-900 font-display">Direct Support Channels</h3>
                      
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-emerald-100 shadow-xs flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-emerald-700 font-bold">Primary Contact</div>
                          <a href="tel:+918056604838" aria-label="Call primary phone +91 8056604838" className="text-sm font-bold text-slate-900 hover:text-emerald-700">
                            +91 8056604838
                          </a>
                        </div>
                        <a
                          href="https://wa.me/918056604838"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Chat on WhatsApp with primary contact +91 8056604838"
                          className="p-2 rounded-lg bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                        </a>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-emerald-100 shadow-xs flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-emerald-700 font-bold">Secondary Line</div>
                          <a href="tel:+919600471080" aria-label="Call secondary phone +91 9600471080" className="text-sm font-bold text-slate-900 hover:text-emerald-700">
                            +91 9600471080
                          </a>
                        </div>
                        <a
                          href="https://wa.me/919600471080"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Chat on WhatsApp with secondary contact +91 9600471080"
                          className="p-2 rounded-lg bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                        </a>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-emerald-100 shadow-xs">
                        <div className="text-[10px] uppercase tracking-wider text-emerald-700 font-bold">Official Email</div>
                        <a href="mailto:invitosolution@gmail.com" aria-label="Send email to invitosolution@gmail.com" className="text-sm font-bold text-slate-900 hover:text-emerald-700">
                          invitosolution@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-md space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase font-bold text-emerald-700">Registered Office</div>
                          <div className="text-xs font-bold text-slate-900">Melapalayam, Tirunelveli - 627005</div>
                        </div>
                        <a
                          href="https://maps.google.com/?q=Melapalayam,Tirunelveli,Tamil+Nadu+627005"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View Invito Solution location on Google Maps"
                          className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg shadow-xs"
                        >
                          Open Maps
                        </a>
                      </div>
                      
                      <div className="w-full h-48 rounded-xl overflow-hidden border border-emerald-200">
                        <iframe
                          title="Invito Solution Location"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.364426514798!2d77.72124589999999!3d8.6974246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411855a96ca73%3A0x6b4c330f6d629a73!2sMelapalayam%2C%20Tirunelveli%2C%20Tamil%20Nadu%20627005!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                          className="w-full h-full border-0"
                          allowFullScreen=""
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </main>

      {/* FLOATING WHATSAPP ACTION BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/918056604838?text=Hi%20Invito%20Solution%2C%20I%20would%20like%20to%20discuss%20a%20new%20project."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp Chat with Invito Solution"
          className="group relative flex items-center space-x-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-4 py-3 rounded-full shadow-[0_8px_25px_rgba(16,185,129,0.4)] hover:scale-105 transition-all font-bold text-xs"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600 border border-white"></span>
          </span>

          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#25D366] shadow-xs">
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" fill="#25D366" />
          </div>
          <span className="hidden sm:inline font-bold">Chat with Invito</span>
        </a>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t border-emerald-100 pt-16 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
            
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-white border border-emerald-200 p-0.5 shadow-sm flex items-center justify-center">
                  <img
                    src={brandLogo}
                    alt="Invito Solution Logo"
                    width="40"
                    height="40"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <span className="font-extrabold text-xl font-display text-slate-900">
                  Invito<span className="text-emerald-600">Solution</span>
                </span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
                Next-generation digital product studio. Crafting high-converting web apps, static interactive experiences, and cross-platform mobile systems designed for performance and scale.
              </p>
              <div className="text-xs text-emerald-700 font-semibold font-mono">
                Tirunelveli, Tamil Nadu • Global Client Delivery
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-xs text-slate-600 font-medium">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => navigateTo(link.id)}
                      aria-label={`Navigate to ${link.name}`}
                      className={`hover:text-emerald-600 transition-colors ${
                        activePage === link.id ? 'text-emerald-700 font-bold' : ''
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">Capabilities</h4>
              <ul className="space-y-2 text-xs text-slate-600 font-medium">
                {services.map((s) => (
                  <li key={s.title}>
                    <button onClick={() => navigateTo('what-we-do')} aria-label={`View ${s.title}`} className="hover:text-emerald-600 transition-colors text-left">
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">Direct Connect</h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <a href="tel:+918056604838" aria-label="Call +91 8056604838" className="hover:text-emerald-700">+91 8056604838</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <a href="tel:+919600471080" aria-label="Call +91 9600471080" className="hover:text-emerald-700">+91 9600471080</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <a href="mailto:invitosolution@gmail.com" aria-label="Send email to invitosolution@gmail.com" className="hover:text-emerald-700 truncate">invitosolution@gmail.com</a>
                </li>
                <li className="flex items-start space-x-2 text-[11px] text-slate-500 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>48A/51A, Rajanagar 2nd St, Melapalayam, Tirunelveli - 627005</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>
              © 2026 Invito Solution. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-emerald-700 font-mono font-medium">Precision Engineering • Modern Velocity</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
