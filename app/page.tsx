"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaPiggyBank,
  FaShieldAlt,
  FaChartLine,
  FaWallet,
  FaCreditCard,
  FaCoins,
  FaUniversity,
  FaHandshake,
  FaUsers,
  FaBuilding,
  FaStar,
  FaQuoteLeft,
  FaLock,
  FaRocket,
  FaGem,
  FaHeart,
  FaAward,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import HomeResearchAndNewsSection from "./(routes)/components/HomeResearchAndNewsSection";

const slides = [
  {
    title: "Loan Services",
    subtitle: "Get Instant Access to",
    description:
      "Choose from personal, home, or education loans with low interest rates and flexible repayment options.",
    image: "/asset-loan.jpg",
    gradient: "from-blue-600 via-blue-500 to-purple-600",
    path: "services/loan",
  },
  {
    title: "Insurance Plans",
    subtitle: "Protect Your Future with",
    description:
      "Health, car, and life insurance plans tailored to your needs — secure your family and assets today.",
    image: "/asset-insurance.jpg",
    gradient: "from-emerald-600 via-teal-500 to-cyan-600",
    path: "services/insurance",
  },
  {
    title: "Savings Account",
    subtitle: "Grow Your Wealth with a",
    description:
      "High-interest savings accounts with zero balance requirements and easy online access.",
    image: "/asset-saving.jpg",
    gradient: "from-green-600 via-emerald-500 to-teal-600",
    path: "services/saving-account",
  },
  {
    title: "Stock Investment",
    subtitle: "Invest Smartly in the",
    description:
      "Build a diversified portfolio and start investing in the stock market with expert guidance.",
    image: "/asset-stock.jpg",
    gradient: "from-violet-600 via-purple-500 to-indigo-600",
    path: "services/stock-investment",
  },
  {
    title: "Mutual Funds",
    subtitle: "Explore High-Return",
    description:
      "Access professionally managed mutual funds to meet your financial goals across risk profiles.",
    image: "/asset-mutual.jpg",
    gradient: "from-cyan-600 via-blue-500 to-indigo-600",
    path: "services/mutual-funds",
  },
  {
    title: "Credit Card",
    subtitle: "Power Your Spending with a",
    description:
      "Choose the right credit card for rewards, cashback, and low-interest EMIs.",
    image: "/asset-credit.jpg",
    gradient: "from-orange-600 via-red-500 to-pink-600",
    path: "services/credit-card",
  },
  {
    title: "Govt Bonds & FDs",
    subtitle: "Secure Investments with",
    description:
      "Low-risk government bonds and fixed deposits to preserve capital and earn steady returns.",
    image: "/asset-bondfd.jpg",
    gradient: "from-yellow-600 via-amber-500 to-orange-600",
    path: "services/govts-bond-&-fd",
  },
];

const services = [
  {
    name: "Loan Services",
    icon: FaWallet,
    desc: "Flexible and quick loans for every need.",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-100",
  },
  {
    name: "Insurance Plans",
    icon: FaShieldAlt,
    desc: "Comprehensive health and life coverage.",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-100",
  },
  {
    name: "Savings Account",
    icon: FaPiggyBank,
    desc: "High-interest, zero-minimum balance accounts.",
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-50 to-rose-100",
  },
  {
    name: "Stock Investment",
    icon: FaChartLine,
    desc: "Direct stock market access and tools.",
    gradient: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-100",
  },
  {
    name: "Mutual Funds",
    icon: FaCoins,
    desc: "Diversified expert-managed portfolios.",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-100",
  },
  {
    name: "Credit Card",
    icon: FaCreditCard,
    desc: "Rewards, cashback, and easy EMIs.",
    gradient: "from-red-500 to-pink-600",
    bgGradient: "from-red-50 to-pink-100",
  },
  {
    name: "Govt Bonds & FD",
    icon: FaUniversity,
    desc: "Stable income with guaranteed returns.",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-100",
  },
];

const partners = [
  {
    title: "Business Partner",
    icon: FaBuilding,
    desc: "Join us in expanding financial services across the country.",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    title: "Referral Partner",
    icon: FaUsers,
    desc: "Refer and earn with our trusted partnership model.",
    gradient: "from-emerald-600 to-teal-700",
  },
  {
    title: "B2B Partner",
    icon: FaHandshake,
    desc: "Collaborate with us to deliver seamless financial integration.",
    gradient: "from-purple-600 to-violet-700",
  },
];

const testimonials = [
  {
    name: "Ravi Kumar",
    text: "Fiscal Forum made banking easier for my startup! Their support team is incredible and the platform is so intuitive.",
    role: "Entrepreneur",
    rating: 5,
    image: "/user1.jpg",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    name: "Priya Mehta",
    text: "Great financial guidance, I invested with confidence. The returns have exceeded my expectations completely.",
    role: "Investor",
    rating: 5,
    image: "/user2.jpg",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "Ankit Shah",
    text: "Their loan process was fast and transparent. Got approved within 24 hours with minimal documentation.",
    role: "Customer",
    rating: 5,
    image: "/user3.jpg",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Neha Jain",
    text: "Amazing service! I trust them for all money matters. Best financial platform I have ever used.",
    role: "Freelancer",
    rating: 5,
    image: "/user4.jpg",
    gradient: "from-indigo-500 to-purple-600",
  },
];

const features = [
  {
    title: "Certified Market Updates",
    icon: FaLock,
    desc: "Stay ahead with timely, verified market news and insights so you can make smart decisions with confidence.",
  },
  {
    title: "Research Reports That Guide Your Next Move",
    icon: FaAward,
    desc: "Make informed choices with the best researcg reports designed to empower your next intevtment-clear, actionable, and easy to trust.",
  },
  {
    title: "Everything in One Place",
    icon: FaRocket,
    desc: "Enjoy all your financial services under one trusted roof-the more you see, the more you use, the more rewards you unlock.",
  },
  {
    title: "Trusted Partners & Dedicated Support",
    icon: FaHeadset,
    desc: "We're connected with prominent companies and back you with reliable, friendly support whenever you need a helping hand.",
  },

];

const logos = [
  "/alice-blue.png",
  "/choice.png",
  "/motilal-oswal.png",
  "/Nj-wealth.jpeg",
  "/prudent.png",
  "/upstox.svg",
];


export default function HomePage() {
  return (
    <div className="text-gray-800 font-sans bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      {/* Floating Background Elements */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-rose-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div> */}

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Swiper will control background image and content */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                {/* <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority
                /> */}
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}/80`}
                ></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center px-6 sm:px-12 md:px-20 lg:px-32">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white max-w-xl"
                >
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="uppercase tracking-widest text-sm text-yellow-200 font-semibold mb-2"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed"
                  >
                    {slide.description}
                  </motion.p>
                  <Link href={slide.path}>
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 flex items-center gap-3"
                    >
                      Know More
                      <FaRocket className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Pagination is now styled */}
        <div className="swiper-pagination absolute bottom-8 w-full flex justify-center z-20"></div>
      </section>

      {/* Top Stories */}
      <HomeResearchAndNewsSection/>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-200/50 to-purple-300/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-200/50 to-teal-300/50 rounded-full blur-3xl"></div>
        </div> */}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-indigo-600 bg-clip-text text-transparent"
          >
            💼 Our Premium Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <div
                  className={`bg-gradient-to-br ${service.gradient} p-1 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  <div
                    className={`bg-gradient-to-br ${service.bgGradient} p-8 rounded-3xl h-full hover:bg-white transition-all duration-300`}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <service.icon className="text-white text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-indigo-600 transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {service.desc}
                    </p>
                    <motion.div className="mt-6 flex items-center gap-2 text-indigo-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Learn More{" "}
                      <FaRocket className="text-sm group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fiscal Forum */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-indigo-200/40 to-purple-300/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-cyan-200/40 to-blue-300/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div> */}

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          >
            ✨ Why Choose Fiscal Forum?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-xl text-gray-700 max-w-4xl mx-auto mb-16 leading-relaxed"
          >

          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-3xl shadow-xl border border-indigo-100 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <feature.icon className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-indigo-700 mb-4 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="py-24 bg-gradient-to-br from-white via-purple-50 to-indigo-50 relative">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          >
            🤝 Work With Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div
                  className={`bg-gradient-to-br ${partner.gradient} p-1 rounded-3xl shadow-xl`}
                >
                  <div className="bg-white p-8 rounded-3xl hover:bg-gradient-to-br hover:from-white hover:to-purple-50 transition-all duration-300">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${partner.gradient} rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <partner.icon className="text-white text-3xl" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-purple-600 transition-colors">
                      {partner.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {partner.desc}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`mt-6 bg-gradient-to-r ${partner.gradient} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100`}
                    >
                      Join Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-300/30 rounded-full blur-3xl"></div>
        </div> */}

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-16 bg-gradient-to-r from-slate-800 to-indigo-600 bg-clip-text text-transparent"
          >
            💬 What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div
                  className={`bg-gradient-to-br ${testimonial.gradient} p-1 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="bg-white p-8 rounded-3xl text-left hover:bg-gradient-to-br hover:from-white hover:to-blue-50 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                        >
                          <FaQuoteLeft className="text-white text-xl" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, index) => (
                            <FaStar
                              key={index}
                              className="text-yellow-400 text-sm"
                            />
                          ))}
                        </div>
                        <h5 className="font-bold text-lg text-slate-800 group-hover:text-indigo-600 transition-colors">
                          {testimonial.name}
                        </h5>
                        <p className="text-sm text-gray-500 font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed text-lg group-hover:text-gray-800 transition-colors">
                      {testimonial.text}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <FaCheckCircle className="text-green-500 text-sm" />
                      <span className="text-sm text-green-600 font-medium">
                        Verified Customer
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="py-20 bg-gradient-to-r from-white via-indigo-50 to-purple-50 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-200/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-3xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            🏢 Our Trusted Affiliations
          </motion.h2>
          <div className="relative">
            <div
              className="flex space-x-16"
              style={{
                animation: "scroll 5s linear infinite",
              }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 w-40 h-24 relative group"
                >
                  <div className="">
                    <div className="w-full h-full relative group flex items-center justify-center">
                      <Image
                        src={logo}
                        alt={`Partner ${i}`}
                        width={150}
                        height={100}
                        className="object-cover opacity-70 group-hover:opacity-100 transition-opacity "
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white text-center relative overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-rose-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div> */}

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <FaHeart className="text-white text-2xl animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                📧 Stay Connected With Us
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Subscribe to our newsletter for exclusive financial tips, market
                insights, and special offers tailored just for you.
              </p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
            >
              <div className="relative flex-1 w-full">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full p-4 rounded-2xl text-gray-800 bg-white/95 backdrop-blur-sm border-0 shadow-xl focus:outline-none focus:ring-4 focus:ring-yellow-400/50 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl -z-10 blur-xl"></div>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 flex items-center gap-2 group whitespace-nowrap"
              >
                Subscribe Now
                <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center justify-center gap-6 text-white/60"
            >
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">No Spam</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLock className="text-blue-400" />
                <span className="text-sm">Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGem className="text-purple-400" />
                <span className="text-sm">Premium Content</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-indigo-900 text-white text-center relative overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        </div> */}

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Transform Your Financial Future?
            </h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Fiscal Forum for
              their financial needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-3 mx-auto group"
            >
              Get Started Today
              <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        // .animate-scroll {
        //   animation: scroll 5s linear infinite;
        // }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4f46e5, #7c3aed);
        }
      `}</style>
    </div>
  );
}
