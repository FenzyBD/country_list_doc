import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function DocsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 mx-auto">
      <div className="w-full flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn how to use the country_list package in your Flutter
            applications.
          </p>
        </div>
      </div>
      <div className="grid gap-10 pb-20 pt-10">
        <div>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Installation
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Add the package to your pubspec.yaml file:
          </p>
          <pre className="my-4 overflow-auto rounded-lg border bg-muted p-4">
            <code>{`dependencies:
  flutter:
    sdk: flutter
  country_list:
    git:
      url: https://github.com/khsuzan/country_list.git`}</code>
          </pre>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Run flutter pub get to install the package.
          </p>
        </div>
        <div>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Basic Usage
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Import the package and use the CountryListView widget:
          </p>
          <pre className="my-4 overflow-auto rounded-lg border bg-muted p-4">
            <code>{`import 'package:flutter/material.dart';
import 'package:country_list/country_list.dart';

class CountrySelector extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Select a Country')),
      body: CountryListView(
        onSelect: (country) {
          print('Selected: \${country.name} (\${country.code})');
          Navigator.pop(context, country);
        },
      ),
    );
  }
}`}</code>
          </pre>
        </div>
        <div>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Customization
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            You can customize the appearance of each country item using the
            itemBuilder parameter:
          </p>
          <pre className="my-4 overflow-auto rounded-lg border bg-muted p-4">
            <code>{`CountryListView(
  onSelect: (country) {
    // Handle country selection
  },
  itemBuilder: (context, country) {
    return Card(
      margin: EdgeInsets.symmetric(vertical: 4, horizontal: 8),
      child: Padding(
        padding: EdgeInsets.all(8.0),
        child: Row(
          children: [
            Image(
              image: AssetImage(country.flag),
              width: 48,
              height: 32,
            ),
            SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    country.name,
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                  Text(country.code),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  },
)`}</code>
          </pre>
        </div>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/docs/examples">
              View Examples
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/api">API Reference</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
