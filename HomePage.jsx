import React from "react";
import {
  CalendarDays,
  User,
  Video,
  Brain,
  Globe,
  Mic,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen scroll-smooth font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#4169E1]">ISPC 2025</h1>
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#overview" className="hover:text-[#4169E1]">Overview</a>
          <a href="#topics" className="hover:text-[#4169E1]">Topics</a>
          <a href="#speakers" className="hover:text-[#4169E1]">Speakers</a>
          <a href="#submission" className="hover:text-[#8B0000]">Submit Paper</a>
          <a href="#previous" className="hover:text-[#4169E1]">Previous</a>
        </div>
      </nav>

      {/* Overview */}
      <section id="overview" className="pt-32 pb-24 px-6 text-center bg-white">
        <h2 className="text-5xl font-extrabold text-[#4169E1] mb-4">Welcome to ISPC 2025</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Inspiring minds. Connecting professionals. Advancing knowledge across the globe. Join us this year for an unforgettable experience.
        </p>
        <Button className="mt-6 px-8 py-4 bg-[#4169E1] hover:bg-blue-700 text-white text-lg rounded-full">
          Register Now
        </Button>
      </section>

      {/* Topics */}
      <section id="topics" className="py-24 px-6 bg-gradient-to-r from-[#4169E1]/5 to-[#8B0000]/5">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "AI & Machine Learning", icon: <Brain className="text-pink-500 w-10 h-10 mb-4" /> },
            { title: "Climate & Sustainability", icon: <Globe className="text-green-600 w-10 h-10 mb-4" /> },
            { title: "Medical Innovations", icon: <Shield className="text-red-500 w-10 h-10 mb-4" /> },
            { title: "Digital Education", icon: <User className="text-blue-500 w-10 h-10 mb-4" /> },
            { title: "Cybersecurity", icon: <Shield className="text-purple-500 w-10 h-10 mb-4" /> },
            { title: "Space Science", icon: <Globe className="text-indigo-500 w-10 h-10 mb-4" /> }
          ].map(({ title, icon }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition hover:scale-105"
            >
              <div className="flex justify-center">{icon}</div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">{title}</h3>
              <p className="text-gray-600">Explore sessions and research on {title}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="py-24 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Keynote Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl bg-blue-100 p-6 shadow hover:shadow-lg transition hover:scale-105">
              <Mic className="mx-auto h-12 w-12 text-[#4169E1] mb-4" />
              <h3 className="text-xl font-medium text-gray-800">Dr. Jane Smith</h3>
              <p className="text-sm text-gray-600 mt-2">AI Ethics, Stanford University</p>
            </div>
          ))}
        </div>
      </section>

      {/* Paper Submission */}
      <section id="submission" className="bg-[#8B0000]/90 text-white py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Submit Your Paper</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Present your research at ISPC 2025. Submissions are peer-reviewed and selected papers will be published and presented live.
        </p>
        <Button className="bg-white text-[#8B0000] hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold">
          Submit Now
        </Button>
      </section>

      {/* Previous Conferences */}
      <section id="previous" className="py-24 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-[#4169E1] mb-12">Previous Conferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[2021, 2022, 2023, 2024].map((year) => (
            <div
              key={year}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition hover:scale-105"
            >
              <div className="flex items-center mb-3">
                <Video className="text-[#4169E1] mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">ISPC {year}</h3>
              </div>
              <p className="text-gray-600 mb-4">Watch recordings and download materials.</p>
              <Button
                variant="outline"
                className="text-[#4169E1] border-[#4169E1] hover:bg-[#4169E1]/10"
              >
                View ISPC {year}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 text-sm">
        © 2025 ISPC Conference. All rights reserved. | <a className="text-[#4169E1]" href="#overview">Back to Top</a>
      </footer>
    </div>
  );
}
