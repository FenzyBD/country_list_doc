export default function ExamplesPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 mx-auto">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Examples
          </h1>
          <p className="text-xl text-muted-foreground">
            Code examples showing how to use the country_names package.
          </p>
        </div>
      </div>
      <div className="grid gap-10 pb-20 pt-10">
        <div>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Basic Country Selector
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            A simple country selector that returns the selected country:
          </p>
          <pre className="my-4 overflow-auto rounded-lg border bg-muted p-4">
            <code>{`import 'package:flutter/material.dart';
import 'package:country_names/country_names.dart';

class CountryPickerPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Select Country'),
      ),
      body: CountryListView(
        onSelect: (country) {
          // Return the selected country to the previous screen
          Navigator.pop(context, country);
        },
      ),
    );
  }
}

// Usage:
Future<void> _selectCountry() async {
  final selectedCountry = await Navigator.push(
    context,
    MaterialPageRoute(builder: (context) => CountryPickerPage()),
  );
  
  if (selectedCountry != null) {
    setState(() {
      _country = selectedCountry;
    });
  }
}`}</code>
          </pre>
        </div>
        <div>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Custom Item Builder
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Customize the appearance of each country item:
          </p>
          <pre className="my-4 overflow-auto rounded-lg border bg-muted p-4">
            <code>{`CountryListView(
  onSelect: (country) {
    Navigator.pop(context, country);
  },
  itemBuilder: (context, country) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(8),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 4,
            offset: Offset(0, 2),
          ),
        ],
      ),
      child: ListTile(
        contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        leading: ClipRRect(
          borderRadius: BorderRadius.circular(4),
          child: Image(
            image: AssetImage(country.flag),
            width: 40,
            height: 30,
            fit: BoxFit.cover,
          ),
        ),
        title: Text(
          country.name,
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 16,
          ),
        ),
        subtitle: Text(
          'Code: \${country.code}',
          style: TextStyle(
            color: Colors.grey[600],
            fontSize: 14,
          ),
        ),
        trailing: Icon(Icons.arrow_forward_ios, size: 16),
      ),
    );
  },
)`}</code>
          </pre>
        </div>
        <div>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Sorting Countries
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Sort countries by code instead of name:
          </p>
          <pre className="my-4 overflow-auto rounded-lg border bg-muted p-4">
            <code>{`CountryListView(
  onSelect: (country) {
    Navigator.pop(context, country);
  },
  sortBy: OrderBy.code,
)`}</code>
          </pre>
        </div>
        <div>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            High-Quality Flags
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Use high-quality flag images:
          </p>
          <pre className="my-4 overflow-auto rounded-lg border bg-muted p-4">
            <code>{`CountryListView(
  onSelect: (country) {
    Navigator.pop(context, country);
  },
  quality: ImageQuality.high,
)`}</code>
          </pre>
        </div>
        <div>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Country Picker Dialog
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Show a country picker in a dialog:
          </p>
          <pre className="my-4 overflow-auto rounded-lg border bg-muted p-4">
            <code>{`Future<Country?> showCountryPickerDialog(BuildContext context) {
  return showDialog<Country>(
    context: context,
    builder: (BuildContext context) {
      return Dialog(
        child: Container(
          width: double.maxFinite,
          height: 500,
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: Text(
                  'Select a Country',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              Divider(),
              Expanded(
                child: CountryListView(
                  onSelect: (country) {
                    Navigator.pop(context, country);
                  },
                ),
              ),
            ],
          ),
        ),
      );
    },
  );
}

// Usage:
ElevatedButton(
  onPressed: () async {
    final country = await showCountryPickerDialog(context);
    if (country != null) {
      setState(() {
        _selectedCountry = country;
      });
    }
  },
  child: Text('Select Country'),
)`}</code>
          </pre>
        </div>
        <div>
          <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Country Picker with Search
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Implement a search functionality with the CountryListView:
          </p>
          <pre className="my-4 overflow-auto rounded-lg border bg-muted p-4">
            <code>{`class CountrySearchPage extends StatefulWidget {
  @override
  _CountrySearchPageState createState() => _CountrySearchPageState();
}

class _CountrySearchPageState extends State<CountrySearchPage> {
  final TextEditingController _searchController = TextEditingController();
  List<InternalCountry> _filteredCountries = [];
  List<InternalCountry> _allCountries = [];
  
  @override
  void initState() {
    super.initState();
    // Initialize with all countries
    _allCountries = sovereignCountries;
    _filteredCountries = _allCountries;
    
    _searchController.addListener(_filterCountries);
  }
  
  void _filterCountries() {
    final query = _searchController.text.toLowerCase();
    setState(() {
      if (query.isEmpty) {
        _filteredCountries = _allCountries;
      } else {
        _filteredCountries = _allCountries
            .where((country) => 
                country.name.toLowerCase().contains(query) || 
                country.code.toLowerCase().contains(query))
            .toList();
      }
    });
  }
  
  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Search Countries'),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: TextField(
              controller: _searchController,
              decoration: InputDecoration(
                labelText: 'Search',
                hintText: 'Enter country name or code',
                prefixIcon: Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: _filteredCountries.length,
              itemBuilder: (context, index) {
                final country = _filteredCountries[index];
                return ListTile(
                  leading: Image(
                    image: AssetImage(
                      "assets/_80/\${country.code.toLowerCase()}.png",
                      package: "country_names"
                    ),
                    width: 32,
                  ),
                  title: Text(country.name),
                  subtitle: Text(country.code),
                  onTap: () {
                    Navigator.pop(context, country);
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
