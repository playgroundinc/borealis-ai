# Trimac 2021 Theme

This is an extension of [the WordPress starter theme](https://github.com/playgroundinc/pg-wp-starter) based off the excellent work of [_s](https://underscores.me). 

## Getting Started
Trimac is built as a multi-site, so at this time many of the tools we use in other Pantheon / Wordpress projects aren't available and the workflow requires more manual steps. To get started clone this repo into a folder called trimac-2021 (*NOTE* this is important if you're using the tooling as the theme folder name locally needs to match the theme folder on Pantheon).

### Tooling
At this time the Lando/Pantheon support for multi-sites isn't fully implemented, and so since we don't have access any of the usual benefits of using Lando to access the Pantheon Database, I'm using the free version of the WP development tool [Local by Flywheel](https://localwp.com/)) and tracking the Trimac work as a theme rather than an entire WP build. Feel free to use whichever system for local WP development works best for you. 

### Pushing to Pantheon
At this time setting up a Pantheon multi-site environemnt means pushing changes over SFTP rather than git. 

- Add ssh key to Pantheon. [Instructions on how to do that here](https://pantheon.io/docs/ssh-keys)
- Either setup an SFTP like FileZilla and update files or install and run the bash script called deploy-to-pantheon.sh in the "scripts" folder to run an rsync command between the local folder and the Pantheon files.
- This will add changes to the code panel on the site's dev environment on Pantheon. There will be an input prompting you to add a commit message before committing these changes to the environment. Once you add this message and commit, it should sync the dev environment with these changes.

### Pushing Code Up in Pantheon
For this project, I'll be using the standard Pantheon workflow of code moving from dev -> test -> live. Once changes have been committed and reviewed in the dev environment and are ready to move up to Test. 

- Navigate to the deploys panel in the Test environment, there should be a notification that are x number of commits waiting to be deployed to test and a prompt for a commit message. Provide a commit message, and then select Deploy Code from Development to Test Environment. 
- There is a checkbox to pull files and the database from he Live environment, if you do this, make sure to follow the steps in the Migrating Databases.
- Once it's been cleared on Test, repeat these steps in the Deploys panel on the Live environment.

### Migrating Database & Files
For this project, I'll be using the standard Pantheon workflow of the database and files moving down from live -> test -> dev. 

- To migrate the database you can navigate to the database/files panel of the environment you want to migrate the database into. 
- One of the hangups of multisites is that all urls will be hardcoded, so you need to run a search and replace of environment urls. The code for this can be found in the pantheon-migrations.sh file in the scripts folder. If it works, there are npm scripts for migrating to test (npm run migrate-test) and to dev (npm run migrate dev).

## Troubleshooting

### Pantheon Environment shows database connection error
Likely an issue where the database has been migrated from another environment and urls have not been searched and replaced. See Migrating Database & Files and run search and replace code.

## Development Blocks

### Steps to Add New Fluid Type Element
This will create a set of three inputs current, maximum and minimum for the typography in question.

**NOTE** The development block will initially pull the current defaults from the Defaults class (```src/js/development/scripts/defaults.js```) to calculate the current size of the fluid type as we can't access those CSS values once they've been calculated. You can update values there to have it default to the new values.  

1. Add class name of the element you'd like to style as an attribute in ```src/js/development/blocks/development-container.jsx```
    - Add string of class name to booleanFields at top of the file
    - Add variable name to attributes deconstruction in registerBlock function
    - Add new checkbox control to Block Settings to toggle this option
2. Define new attribute in ```inc/gutenberg/development/render-development-blocks.php```
    - In the field array add new key value pair with the key set as the class name and the value set to false (this will be the default)
    - If you do nothing else this will generate a set of fluid type inputs.
3. Add this new item to the typography array in the FluidFont class constructor (```src/js/development/scripts/fluid-fonts.js```). 
4. Add the current values for this item in the typeDefaults object in the Defaults class (```src/js/development/scripts/defaults.js```).

### Steps to Add New Numeric Element Control
This input could control any css property with a numeric value, and allows you to define the unit of measure.

**NOTE** Since it's being used as an object key, class name needs to be written in either camelCase or snake_case. I've currently opted for snake_case.

1. Add class name of the element you'd like to style as an attribute in ```src/js/development/blocks/development-container.jsx```*
    - Add string of class name to booleanFields at top of the file
    - Add variable name to attributes deconstruction in registerBlock function
    - Add new checkbox control to Block Settings to toggle this option
2. Define new attribute in render-development-blocks.php
    - In the field array add new key value pair with the key set as the class name and the value set to false (this will be the default)
    - Add this new key to the switch statement below.
        - The first argument is always the key.
        - The second argument is an array, each key represents the CSS property it controls (written in camelCase), the value is either a string or an array that represents the units that value can use.
        - The third argument is the type of input. Right now it only supports numeric. (if this is left blank it'll render the Fluid Type inputs).
3. Add this new class to the inputs controlled in the development controls. At the top of development-blocks.js there's an object of arrays.
    - The key should be the class name of the element you're targeting.
    - The values in the array should be the css properties being targeted (written in camelCase).


## Go Live Gotchas

### Update wp-config.php
Once the domains were registered with Pantheon and the DNS had been switched over, we needed to also make the following update the wp-config.php file:

```
* Define DOMAIN_CURRENT_SITE conditionally.
 */
if ( ! empty( $_ENV['PANTHEON_ENVIRONMENT'] ) ) {
  switch( $_ENV['PANTHEON_ENVIRONMENT'] ) {
    case 'live':
      // Value should be the primary domain for the Site Network.
			// At set-up this is live-trimac.pantheonsite.io
      **define( 'DOMAIN_CURRENT_SITE', 'trimac.com' );**
      // Once you map a domain to Live, you can change DOMAIN_CURRENT_SITE
      // define( 'DOMAIN_CURRENT_SITE', 'example-network.com' );
      break;
    case 'test':
      define( 'DOMAIN_CURRENT_SITE', 'test-trimac.pantheonsite.io' );
      break;
    case 'dev':
      define( 'DOMAIN_CURRENT_SITE', 'dev-trimac.pantheonsite.io' );
      break;
    default:
      # Catch-all to accommodate default naming for multi-dev environments.
      define( 'DOMAIN_CURRENT_SITE', $_ENV['PANTHEON_ENVIRONMENT'] . '-' . $_ENV['PANTHEON_SITE_NAME'] . '.pantheonsite.io' );
      break;
    }
}
```

### Setting the Primary Domain
The other change we needed to make was to set the Primary Domain to "None" in the Pantheon dashboard at the bottom of the Domains page as this was causing the main site to bounce back and forth between [trimac.com](http://trimac.com) and live-trimac.pantheonsite.io

### Updating URLs
Once these steps had been completed, I had to run the terminus command to find and replace the urls on the live database to replace [live-trimac.pantheonsite.io](http://live-trimac.pantheonsite.io) with trimac.com. My ssh authentication wasn't working, so I had to re-add my ssh keys. 

Right now instructions for finding and replacing the URLs can be found here: [https://pantheon.io/docs/guides/multisite/workflows/#deploying-across-environments](https://pantheon.io/docs/guides/multisite/workflows/#deploying-across-environments)

Right now instructions on adding the ssh keys can be found here: [https://pantheon.io/docs/ssh-keys](https://pantheon.io/docs/ssh-keys)

-----------------------
ISC License
Copyright (c) 2019, Playground Inc.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
