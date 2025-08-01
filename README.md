# Quasar App (amplify-quasar-template)

## Setup Instructions

Start by cloning this template repository.

Alternatively start a new quasar project repository and copy the `amplify` folder, merge the `.gitignore` copy the `src/boot/amplify.ts` file and add `amplify` to the boot line in `quasar.config.ts` : `    boot: ['i18n', 'axios', 'amplify'],`. Then run `npm install --legacy-peer-deps aws-amplify @aws-amplify/ui-vue @aws-amplify/backend @aws-amplify/backend-cli aws-cdk aws-cdk-lib aws-lambda constructs`

Now in the amplify web console start a new amplify project pointing at the repo you have just created. You can specify package versions in the build. This template requires Node 24 to build correctly.


## Adding Auth


## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
