## **The workflow**

This repo is part of a workflow that includes GitHub, CircleCI, and Pantheon.

*IMPORTANT: Never manually merge/alter code through the Pantheon repo or dashboard*

All new features and code edits should be made here in GitHub. Any changes to the `master` branch will be automatically deployed to Pantheon by CirclCI.

To add new code, create a new branch off of master. Once you're ready to merge, open a new PR. CircleCI will see this PR and create a multi-dev enviroment in Pantheon. The CircleCI bot will leave a comment letting you know where you can preview and test your changes (this can take a couple minutes).

Once your PR is merged into master, CircleCI will deploy this code to the Pantheon Dev enviroment.

## **Working locally**

### **Requirements**

### **Install Lando**

- To avoid running MySQL servers and PHP wildly on your system, we'll use Lando to work locally and have all the super powers that Pantheon and CircleCI offers.
- Lando is a wrapper for Docker that spins up a WordPress working environment when needed.
- Download and install the latest release of Lando here : [https://github.com/lando/lando/releases](https://github.com/lando/lando/releases)

### **Install Docker Desktop**

- You will need to create an account with Docker Hub in order to download a valid version of Docker Desktop.
- Create an account here : [https://hub.docker.com/signup](https://hub.docker.com/signup)
- After creating an account, sign in, and download Docker Desktop from here : [https://hub.docker.com/editions/community/docker-ce-desktop-mac/](https://hub.docker.com/editions/community/docker-ce-desktop-mac/)

### **Local setup**

1. Clone this repo into a local working directory.
2. In the root of your working directory, run `lando init --recipe pantheon`. Select your `current working directory` as the codebase. Use the `yourfriend@playgroundinc.com` Panteon account. The site is `borealis-ai`.
3. If you're prompted to enter a machine token, you'll have to create one. You can do this from the Pantheon Dashboard > Account > Machine Tokens.
4. Install the composer dependencies: `lando composer install --no-ansi --no-interaction --optimize-autoloader --no-progress`.
5. Pull down the current DB: `lando pull --code=none`. Choose the Live environment.

### **Local development**

1. Run `lando start` to start the service. Once that runs it will display some URLs where you can access your local site (something like borealis-ai.lndo.site/).
2. In a separate terminal window, run `lando npm start` to start up webpack, which will compile our code.
3. Our working directory will be the `web/wp-content/themes/borealis-2021`. Changes outside this folder shouldn't be commited to the repo (with the exception of plugins).
4. When you're ready to stop development, run `lando stop` to shut the process down.

***
[![CircleCI](https://circleci.com/gh/playgroundinc/borealis-ai.svg?style=shield&circle-token=000d534c7fb99f1c13ef8bd848d893d9a0038419)](https://circleci.com/gh/playgroundinc/borealis-ai)
[![Dashboard borealis-ai](https://img.shields.io/badge/dashboard-borealis_ai-yellow.svg)](https://dashboard.pantheon.io/sites/7c6ad968-c37a-40d5-8591-e6c85d4abc7f#dev/code)
[![Dev Site borealis-ai](https://img.shields.io/badge/site-borealis_ai-blue.svg)](http://dev-borealis-ai.pantheonsite.io/)