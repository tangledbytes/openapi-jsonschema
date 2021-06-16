# OpenAPI - JSON Schema

This is a very basic node based CLI for converting OpenAPI schema to JSON Schema Draft 4


```
Usage: openapi-jsonschema [options]

Options:
  -t, --type [type]           set type of input, can be either yaml or json (default: "yaml")
  -l, --location <location>   location of the schema
  -f, --filter [query]        give a query if a OpenAPISchema is nested
  --kubernetes                enable kubernetes specific filters (default: false)
  -o [output-format]          output format (default: "json")
  --o-filter [output-filter]  output filter query
  --silent                    skip output (default: false)
  -h, --help                  display help for command
```