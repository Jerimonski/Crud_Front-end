import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-[#0F172A] text-white py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-green-400">SportsCenter</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
          At <span className="text-white font-semibold">SportsCenter</span>, our mission is to provide a premium
          sports experience for everyone — from beginners to professionals.
          We believe in creating inclusive, high-quality training environments
          supported by technology, expert trainers, and modern facilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-md">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Our Vision</h3>
            <p className="text-gray-300">
              To become the leading digital sports booking platform that empowers users to take control of their health and performance.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-md">
            <h3 className="text-xl font-semibold text-green-400 mb-2">What We Offer</h3>
            <p className="text-gray-300">
              From tennis and yoga to basketball and swimming, our platform connects athletes with top-quality venues and trainers, easily and quickly.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-md">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Our Values</h3>
            <p className="text-gray-300">
              We value accessibility, innovation, and community. Our tools help users book, train, and grow with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
