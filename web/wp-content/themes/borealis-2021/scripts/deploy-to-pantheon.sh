#!/bin/bash

# PORT_NUMBER USER_NAME, and HOST_NAME all need to be pulled from the SFTP details in the Pantheon Project.

cd <path/to/local/theme/folder>

# Ensures no uncommited work is pushed to dev
git stash
git checkout master
git pull origin master

# Synhronizes the code in the theme folder with the code on the Pantheon dev environment.
rsync -arvz --delete --exclude ".git" --exclude "node_modules" -e "ssh -p <PORT_NUMBER>" <PATH/TO/THEME/FOLDER> <USER_NAME>@<HOST_NAME>:/code/wp-content/themes