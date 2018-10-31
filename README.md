# Kendraio App

**NOTE: further work is being done on the `material-refactor` branch**

To build PWA version for hosting on GitHub pages. The repo is set to host the 
built version from the `docs/` directory.

```
ionic cordova build browser
rm -rf docs/
cp -R platforms/browser/www docs
```

Use `git status` to check for changes.
Checkout any files you don't want to change, eg `git checkout docs/manifest.json`, 
to reset back to the version in the repo.

Commit remaining files, then push to GitHub.
