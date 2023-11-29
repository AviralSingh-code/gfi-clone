# GFI

GFI is a platform that consolidates good first issues from various GitHub repositories, providing a centralized location to easily track and manage these opportunities for contribution.

## Look and Feel of the website

#### Landing Page
<img width="947" alt="1g" src="https://github.com/AviralSingh-code/gfi-clone/assets/72146088/d7b7b11e-56d4-44a0-9e7b-3b48812a5a55">

<br>

#### Sign In Page

<img width="960" alt="2g" src="https://github.com/AviralSingh-code/gfi-clone/assets/72146088/86e8551f-11be-4171-89ae-81eb7f252b82">

<br>

#### User Dashboard

<img width="945" alt="3g" src="https://github.com/AviralSingh-code/gfi-clone/assets/72146088/a99c9520-30f7-4277-8fd4-181ae35d7585">

<br>

#### Browse Issue Page

<img width="942" alt="4g" src="https://github.com/AviralSingh-code/gfi-clone/assets/72146088/a4d41f5e-c5ce-4da6-9c17-fe353bc69026">

<br>

#### Marking and Unmarking Issues
https://github.com/AviralSingh-code/gfi-clone/assets/72146088/913a2a14-fce3-4e14-afd5-35556984a4b5

<br>

#### Add Project Page
<img width="956" alt="5g" src="https://github.com/AviralSingh-code/gfi-clone/assets/72146088/45f28582-768b-4f2e-a9a0-454348c13127">





## Setting Up
First we need to clone the repo to a desired folder:
```sh
git clone https://github.com/AviralSingh-code/gfi-clone.git
```
```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)