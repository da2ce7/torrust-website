# Rebuilding a SvelteKit Website

This guide goes through te process of rebuilding our website in basic steps.

## Use `corepack` yarn.

>> Note: This guide used version 4.1.1 of yarn, the latest at the time of writing.

``` shell
echo "{}" >> package.json
corepack use yarn@4.1.1
```

## Setup SvelteKit using yarn.

``` shell
corepack yarn create svelte@latest
corepack yarn install
```

