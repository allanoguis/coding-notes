# Internationalization (i18n) in Next.js

## Table of Contents

[Introduction](#introduction)
[Why Use Internationalization?](#why-use-internationalization)
[Setting Up Internationalization in Next.js](#setting-up-internationalization-in-nextjs)
    - [Configuring i18n in `next.config.js`](#configuring-i18n-in-nextconfigjs)
[Using i18n with Routing](#using-i18n-with-routing)
[Handling Translations](#handling-translations)
    - [Using JSON Files for Translations](#using-json-files-for-translations)
    - [Dynamic Imports with Translations](#dynamic-imports-with-translations)
[Creating a Language Switcher](#creating-a-language-switcher)
[Best Practices for i18n](#best-practices-for-i18n)

---

## Introduction

Internationalization (i18n) in Next.js allows developers to build applications that can support multiple languages and locales, enhancing accessibility and user experience.

## Why Use Internationalization?

Internationalization helps cater to a global audience by providing content in various languages, accommodating cultural formats, and improving compliance with localization standards.

## Setting Up Internationalization in Next.js

To enable internationalization in your Next.js application, you need to add configuration settings in your project.

### Configuring i18n in `next.config.js`

You can specify the supported locales and default locale in your `next.config.js` file. Here’s an example configuration:

```javascript
// next.config.js
module.exports = {
  i18n: {
    locales: ['en-US', 'fr', 'es'],
    defaultLocale: 'en-US',
  },
};
```

1. `locales`: An array of supported locales.
2. `defaultLocale`: The default locale to use if the user’s locale is not available.

## Using i18n with Routing

To use i18n with routing in Next.js, you need to use the `useRouter` hook to get the current locale and set the correct path for the current page.

Here’s an example:

```javascript
// pages/index.js
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <h1>Welcome to my website</h1>
      <p>The current locale is {locale}</p>
    </div>
  );
};

export default IndexPage;
```

In this example, we use the `useRouter` hook to get the current locale and display it on the page. We also use the `locale` parameter to set the correct path for the current page.

## Handling Translations

To handle translations in Next.js, you can use either JSON files or dynamic imports with translations.

### Using JSON Files for Translations

To use JSON files for translations, you need to create a folder called `public/locales` and place JSON files for each locale.

Here’s an example:

```file
public/
└── locales/
    ├── en-US.json
    ├── fr.json
    └── es.json
```

Each JSON file should contain a key-value pair for each string that needs to be translated. Here’s an example:

```json
// public/locales/en-US.json
{
  "welcome": "Welcome to my website",
  "currentLocale": "The current locale is {locale}"
}
```

1. `welcome`: A string that needs to be translated.
2. `currentLocale`: A string that needs to be formatted with the current locale.

To use the translations in your application, you can use the `useTranslation` hook from the `next-i18next` library.

Here’s an example:

```javascript
// pages/index.js
import { useTranslation } from 'next-i18next';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('currentLocale', { locale: 'en-US' })}</p>
    </div>
  );
};

export default IndexPage;
```

In this example, we use the `useTranslation` hook to get the translations for the `welcome` and `currentLocale` keys. We also pass the current locale as a parameter to the `currentLocale` string to format it correctly.

### Dynamic Imports with Translations

To use dynamic imports with translations, you need to create a folder called `public/locales` and place JSON files for each locale.

Here’s an example:

```file
public/
└── locales/
    ├── en-US.json
    ├── fr.json
    └── es.json
```

Each JSON file should contain a key-value pair for each string that needs to be translated. Here’s an example:

```json
// public/locales/en-US.json
{
  "welcome": "Welcome to my website",
  "currentLocale": "The current locale is {locale}"
}
```

1. `welcome`: A string that needs to be translated.
2. `currentLocale`: A string that needs to be formatted with the current locale.

To use the translations in your application, you can use the `useTranslation` hook from the `next-i18next` library.

Here’s an example:

```javascript
// pages/index.js
import { useTranslation } from 'next-i18next';

const IndexPage = () => {
  const { t } = useTranslation();

  const translations = {
    welcome: () => import(`../locales/${router.locale}.json`).then(
      (mod) => mod.default.welcome,
    ),
    currentLocale: (locale) =>
      import(`../locales/${locale}.json`).then((mod) =>
        t('currentLocale', { locale }),
      ),
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{translations.currentLocale(router.locale)}</p>
    </div>
  );
};

export default IndexPage;
```

In this example, we use the `useTranslation` hook to get the translations for the `welcome` and `currentLocale` keys. We also use dynamic imports to load the translations for the current locale and format the `currentLocale` string with the current locale.

## Creating a Language Switcher

To create a language switcher in your Next.js application, you can use the `useRouter` hook to change the locale and reload the current page.

Here’s an example:

```javascript
// pages/index.js
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();

  const changeLocale = (locale) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <div>
      <h1>Welcome to my website</h1>
      <p>The current locale is {router.locale}</p>
      <button onClick={() => changeLocale('en-US')}>English</button>
      <button onClick={() => changeLocale('fr')}>Français</button>
      <button onClick={() => changeLocale('es')}>Español</button>
    </div>
  );
};
export default IndexPage;
```

1. `changeLocale`: A function that takes a locale as a parameter and changes the locale and reloads the current page.

## Best Practices for i18n

Here are some best practices for i18n in Next.js:

1. Use a dedicated translation service for your application.
2. Use a translation management system (TMS) to manage translations.
3. Use a localization service to provide translations in multiple languages.
4. Use a fallback strategy to handle missing translations.
5. Use a consistent naming convention for translation keys.
6. Use a consistent structure for translation files.
7. Use a consistent format for translation files.
8. Use a consistent naming convention for translation keys.
9. Use a consistent structure for translation files.
10. Use a consistent format for translation files.

> [!NOTE]
>
> Internationalization (i18n) in Next.js allows developers to build applications that can support multiple languages and locales, enhancing accessibility and user experience.
>
> Setting up i18n in Next.js requires adding configuration settings in your project. You can use either JSON files or dynamic imports with translations to handle translations in your application.
>
> Finally, you can create a language switcher to allow users to switch between languages.

[EOF]
