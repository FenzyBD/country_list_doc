import Link from "next/link";
import { ArrowRight, Github, Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col">
        <div className="container flex h-14 items-center self-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Package className="h-6 w-6" />
              <span className="font-bold">country_list</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
            <Link
              href="/docs"
              className="transition-colors hover:text-foreground/80"
            >
              Documentation
            </Link>
            <Link
              href="/docs/examples"
              className="transition-colors hover:text-foreground/80"
            >
              Examples
            </Link>
            <Link
              href="/docs/api"
              className="transition-colors hover:text-foreground/80"
            >
              API
            </Link>
            <div className="flex-1" />
            <Link
              href="https://github.com/khsuzan/country_list"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground/80"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              country_list
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A customizable Flutter widget for displaying a list of countries
              with flags
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/docs">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/khsuzan/country_list"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Easily integrate a country selector in your Flutter applications
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Customizable</CardTitle>
                <CardDescription>
                  Fully customize the appearance of each country item
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Use the itemBuilder to create your own country item design
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sortable</CardTitle>
                <CardDescription>
                  Sort countries by name or country code
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Use the sortBy parameter to change the order of countries</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>High-Quality Flags</CardTitle>
                <CardDescription>
                  Choose between small and high-quality flag images
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Set the quality parameter to control flag image resolution
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Get Started
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Add country_list to your pubspec.yaml file and start using it in
              your Flutter app
            </p>
            <div className="w-full max-w-[48rem] overflow-hidden rounded-lg border bg-background shadow">
              <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <div className="flex-1" />
              </div>
              <pre className="p-4 text-left overflow-auto">
                <code>
                  {`
dependencies:
  flutter:
    sdk: flutter
  country_list:
    git:
      url: https://github.com/khsuzan/country_list.git
  `}
                </code>
              </pre>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Developed By:{" "}
            <Link href="https://github.com/khsuzan" target="_blank">
              Kawsar Hossain
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
