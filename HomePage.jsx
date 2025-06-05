import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, User, Video } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 p-8">
      {/* Hero */}
      <header className="mb-20 text-center">
        <h1 className="text-5xl font-extrabold text-[#4169E1] tracking-tight">
          ISPC Conferences
        </h1>
        <p className="mt-4 text-xl text-gray-700">
          Inspiring minds. Connecting professionals. Advancing knowledge.
        </p>
      </header>

      {/* ISPC 2025 Feature Section */}
      <section className="bg-white shadow-xl rounded-3xl border border-[#4169E1] p-12 mb-20 text-center">
        <h2 className="text-4xl font-bold text-[#8B0000] mb-4">ISPC 2025</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Discover breakthrough research, connect with global experts, and shape the future.
        </p>
        <Button
          size="lg"
          className="bg-[#4169E1] hover:bg-[#3555c4] text-white text-lg font-semibold px-8 py-4 rounded-full"
        >
          Learn More
        </Button>
      </section>

      {/* What's New */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
          What’s New
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="rounded-xl shadow-md hover:shadow-lg transition">
            <CardContent className="p-6 text-center">
              <CalendarDays className="mx-auto mb-4 h-10 w-10 text-[#4169E1]" />
              <h3 className="text-xl font-semibold text-gray-800">Upcoming Events</h3>
              <p className="mt-2 text-gray-600">
                Explore upcoming international conferences across disciplines.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-md hover:shadow-lg transition">
            <CardContent className="p-6 text-center">
              <User className="mx-auto mb-4 h-10 w-10 text-[#8B0000]" />
              <h3 className="text-xl font-semibold text-gray-800">Speakers & Topics</h3>
              <p className="mt-2 text-gray-600">
                Learn from keynote speakers and expert panels on cutting-edge issues.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-md hover:shadow-lg transition">
            <CardContent className="p-6 text-center">
              <Video className="mx-auto mb-4 h-10 w-10 text-[#4169E1]" />
              <h3 className="text-xl font-semibold text-gray-800">Live & Recorded</h3>
              <p className="mt-2 text-gray-600">
                Join live sessions or watch conference highlights on demand.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Submit Paper Callout */}
      <section className="bg-[#8B0000]/10 p-12 rounded-3xl mb-20 text-center shadow-inner">
        <h2 className="text-3xl font-bold text-[#8B0000] mb-4">Submit Your Paper</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Present your work at ISPC 2025. All accepted papers will be published and presented in our live sessions.
        </p>
        <Button
          size="lg"
          className="bg-[#8B0000] hover:bg-red-800 text-white text-lg px-8 py-4 rounded-full font-semibold"
        >
          Submit Paper
        </Button>
      </section>

      {/* Previous Conferences */}
      <section>
        <h2 className="text-3xl font-semibold text-[#4169E1] mb-10 text-center">
          Previous Conferences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[2021, 2022, 2023, 2024].map((year) => (
            <Card
              key={year}
              className="rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Video className="mr-3 text-[#4169E1]" />
                  <h3 className="text-xl font-medium text-gray-800">ISPC {year}</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Watch recordings and access conference materials from ISPC {year}.
                </p>
                <Button
                  variant="outline"
                  className="text-[#4169E1] border-[#4169E1] hover:bg-[#4169E1]/10"
                >
                  View ISPC {year}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
