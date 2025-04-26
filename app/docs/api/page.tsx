export default function ApiPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 mx-auto">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            API Reference
          </h1>
          <p className="text-xl text-muted-foreground">
            Detailed documentation of the country_list package API.
          </p>
        </div>
      </div>
      <div className="grid gap-10 pb-20 pt-10">
        <div>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            CountryListView
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The main widget for displaying a list of countries.
          </p>
          <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            Constructor
          </h3>
          <pre className="my-4 overflow-auto rounded-lg border bg-muted p-4">
            <code>{`const CountryListView({
  Key? key,
  void Function(InternalCountry country)? onSelect,
  CountryItemBuilder? itemBuilder,
  OrderBy sortBy = OrderBy.name,
  ImageQuality quality = ImageQuality.small,
})`}</code>
          </pre>
          <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            Properties
          </h3>
          <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <th className="border px-4 py-2 text-left font-bold">
                    Property
                  </th>
                  <th className="border px-4 py-2 text-left font-bold">Type</th>
                  <th className="border px-4 py-2 text-left font-bold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left">onSelect</td>
                  <td className="border px-4 py-2 text-left">
                    void Function(InternalCountry country)?
                  </td>
                  <td className="border px-4 py-2 text-left">
                    Callback function called when a country is selected
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left">itemBuilder</td>
                  <td className="border px-4 py-2 text-left">
                    CountryItemBuilder?
                  </td>
                  <td className="border px-4 py-2 text-left">
                    Function to build custom country list items
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left">sortBy</td>
                  <td className="border px-4 py-2 text-left">OrderBy</td>
                  <td className="border px-4 py-2 text-left">
                    Determines how countries are sorted (by name or code)
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left">quality</td>
                  <td className="border px-4 py-2 text-left">ImageQuality</td>
                  <td className="border px-4 py-2 text-left">
                    Determines the quality of flag images (small or high)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Country
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Class representing a country with its name, code, and flag.
          </p>
          <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            Constructor
          </h3>
          <pre className="my-4 overflow-auto rounded-lg border bg-muted p-4">
            <code>{`const Country({
  required this.name,
  required this.code,
  required this.flag,
})`}</code>
          </pre>
          <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            Properties
          </h3>
          <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <th className="border px-4 py-2 text-left font-bold">
                    Property
                  </th>
                  <th className="border px-4 py-2 text-left font-bold">Type</th>
                  <th className="border px-4 py-2 text-left font-bold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left">name</td>
                  <td className="border px-4 py-2 text-left">String</td>
                  <td className="border px-4 py-2 text-left">
                    The name of the country
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left">code</td>
                  <td className="border px-4 py-2 text-left">String</td>
                  <td className="border px-4 py-2 text-left">
                    The ISO 3166-1 alpha-2 code of the country
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left">flag</td>
                  <td className="border px-4 py-2 text-left">String</td>
                  <td className="border px-4 py-2 text-left">
                    The path to the flag image asset
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Enums
          </h2>
          <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            OrderBy
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Enum for specifying the sort order of countries.
          </p>
          <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <th className="border px-4 py-2 text-left font-bold">
                    Value
                  </th>
                  <th className="border px-4 py-2 text-left font-bold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left">name</td>
                  <td className="border px-4 py-2 text-left">
                    Sort countries alphabetically by name
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left">code</td>
                  <td className="border px-4 py-2 text-left">
                    Sort countries alphabetically by country code
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            ImageQuality
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Enum for specifying the quality of flag images.
          </p>
          <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <th className="border px-4 py-2 text-left font-bold">
                    Value
                  </th>
                  <th className="border px-4 py-2 text-left font-bold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left">small</td>
                  <td className="border px-4 py-2 text-left">
                    Use smaller flag images (80px)
                  </td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2 text-left">high</td>
                  <td className="border px-4 py-2 text-left">
                    Use higher quality flag images (160px)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            TypeDefs
          </h2>
          <h3 className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
            CountryItemBuilder
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Function type for building custom country list items.
          </p>
          <pre className="my-4 overflow-auto rounded-lg border bg-muted p-4">
            <code>{`typedef CountryItemBuilder = Widget Function(BuildContext context, InternalCountry country);`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
