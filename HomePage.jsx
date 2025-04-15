import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, User, Video } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">ISPC Conferences</h1>
        <p className="mt-2 text-lg text-gray-600">
          Inspiring minds. Connecting professionals. Advancing knowledge.
        </p>
        <Button className="mt-6 px-6 py-3 text-lg">Explore Conferences</Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="p-6 text-center">
            <CalendarDays className="mx-auto mb-4 h-10 w-10 text-blue-600" />
            <h2 className="text-xl font-semibold">Upcoming Events</h2>
            <p className="mt-2 text-gray-600">
              View the calendar of international scientific and professional conferences.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <User className="mx-auto mb-4 h-10 w-10 text-green-600" />
            <h2 className="text-xl font-semibold">Speakers & Topics</h2>
            <p className="mt-2 text-gray-600">
              Discover keynotes and panel discussions led by leading experts.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Video className="mx-auto mb-4 h-10 w-10 text-purple-600" />
            <h2 className="text-xl font-semibold">Live & Recorded</h2>
            <p className="mt-2 text-gray-600">
              Access live sessions or rewatch past conference highlights anytime.
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Paper Submission</h2>
        <p className="text-gray-600 mb-4">
          Submit your research papers for upcoming ISPC conferences. Accepted papers will be presented during sessions and published in our digital proceedings.
        </p>
        <Button className="px-6 py-3">Submit Paper</Button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Previous Conferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[2021, 2022, 2023, 2024].map(year => (
            <Card key={year}>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Video className="mr-2 text-purple-600" />
                  <h3 className="text-xl font-medium">ISPC {year}</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Watch recordings and download conference documents for ISPC {year}.
                </p>
                <Button variant="outline">View ISPC {year}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
