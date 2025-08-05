import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-6 bg-softGreen text-deepPlum">
      {/* Header */}
      <header className="w-full max-w-5xl py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-navyBlue">LastTable</h1>
        <nav className="space-x-4">
          <a href="#" className="text-sm text-eggplant hover:underline">
            About
          </a>
          <a href="#" className="text-sm text-eggplant hover:underline">
            Neighborhoods
          </a>
          <a href="#" className="text-sm text-eggplant hover:underline">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-24">
        <h2 className="text-4xl font-bold text-navyBlue mb-4">
          Explore Toronto like a Local
        </h2>
        <p className="text-deepPlum max-w-xl mb-6">
          Discover walkable, vibrant neighborhoods in Toronto — curated for your
          lifestyle and mood.
        </p>
        <Button className="text-lg px-6 py-3 bg-paleBlue text-white hover:bg-navyBlue">
          Start Exploring
        </Button>
      </section>

      {/* Map Section */}
      <section className="w-full max-w-5xl mt-24"></section>

      {/* CTA */}
      <section className="mt-24 text-center">
        <h3 className="text-xl font-semibold text-eggplant mb-2">
          Not sure where to start?
        </h3>
        <p className="text-deepPlum mb-4">
          Try browsing by neighborhood, vibe, or transit access.
        </p>
        <Button variant="outline" className="border-paleBlue text-eggplant">
          See Neighborhoods
        </Button>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-5xl py-6 mt-24 border-t border-eggplant text-sm text-eggplant text-center">
        &copy; 2025 LastTable. All rights reserved.
      </footer>
    </main>
  );
}
