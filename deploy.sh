#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
# cd dist

# # if you are deploying to a custom domain
# # echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# # if you are deploying to https://<USERNAME>.github.io
# # git push -f git@github.com:kabouras/kabouras.github.io.git master

# # if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:kabouras/terminal-hacking.git master:gh-pages

# cd -

mv ../terminal-game-deploy/terminal-hacking/* ../terminal-game-deploy/old

rm -rf  ../terminal-game-deploy/old/*

cp -r ./dist/* ../terminal-game-deploy/terminal-hacking/

cd ../terminal-game-deploy/terminal-hacking/

pwd

git add -A
git commit -m 'deploy'

git push