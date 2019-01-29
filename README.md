# AnyMind Angular API library
>AnyMind Angular API library  compatible with AoT compilation &amp; Tree shaking.

## Install dependencies
* `npm i`

## Usage Description
>Build command grabs _swagger.json_ file from specific location and creates Angular models and services. It also updates _package.json_ file to align it with api version extracted from _swagger.json_

## How to use
* `npm run version`

### Custom usage

Script provides flexibility to get _swagger.json_ file from either web or local system file. Default values takes value from stage environment if none provided.
To provide new url execute index.js with --url='your_url' parameter.
To provide new file name execute index.js with --file='your_path_to_file' parameter.

It is not possible to provide both url and file. Script will overwrite file with url, because this is default method if retrieving _swagger.json_ schema.