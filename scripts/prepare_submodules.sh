#!/bin/bash

# Prevent sub module fetching in node_modules folder.
# The relative gitdir in .git points to a non existing directory
echo Preparing submodules...
if [[ $(pwd) != *"node_modules"* ]]; then
    git submodule update --init
fi
