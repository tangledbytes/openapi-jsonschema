// @ts-check
const { program } = require("commander");
const CreateQuery = require("./helper/createQuery");
const Output = require("./helper/output");
const ToJSONSchema = require("./helper/toJSONSchema");

program
  .option(
    "-t, --type [type]",
    "set type of input, can be either yaml or json",
    "yaml"
  )
  .option("-l, --location <location>", "location of the schema")
  .option("-f, --filter [query]", "give a query if a OpenAPISchema is nested")
  .option("--kubernetes", "enable kubernetes specific filters", false)
  .option("-o [output-format]", "output format", "json")
  .option("--o-filter [output-filter]", "output filter query")
  .option("--silent", "skip output", false);

program.parse(process.argv);

const options = program.opts();

Output(
  ToJSONSchema(
    options.location,
    options.type,
    CreateQuery(options.filter, options.kubernetes)
  ),
  options.o,
  options.oFilter,
  options.silent
);
