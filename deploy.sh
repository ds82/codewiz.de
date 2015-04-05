#!/bin/bash

rsync -av --progress -e ssh --exclude 'node_modules' ./app/* fizz.rift.lan:/home/www/codewiz.de/codewiz.de
