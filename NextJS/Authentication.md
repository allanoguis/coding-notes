# Next.js Authentication

## Table of Contents

[Introduction](#introduction)
[Types of Authentication](#types-of-authentication)
    - [Session-Based Authentication](#session-based-authentication)
    - [Token-Based Authentication](#token-based-authentication)
[Using NextAuth.js](#using-nextauthjs)
    - [Installation](#installation)
    - [Basic Configuration](#basic-configuration)
    - [Callback URLs](#callback-urls)
[Protecting Routes](#protecting-routes)
    - [Client-Side Authentication](#client-side-authentication)
    - [Server-Side Authentication](#server-side-authentication)
[Fetching User Session](#fetching-user-session)
[Logging In and Logging Out](#logging-in-and-logging-out)
[Custom Authentication Providers](#custom-authentication-providers)
[Best Practices](#best-practices)
[Troubleshooting Common Issues](#troubleshooting-common-issues)

---

## Introduction

Authentication is a crucial aspect of web applications, and Next.js makes it easy to implement authentication using various methods. This note will cover different authentication methods, focusing on using NextAuth.js.

## Types of Authentication

### Session-Based Authentication

Session-based authentication stores user data on the server using cookies to maintain the user's session state.

### Token-Based Authentication

Token-based authentication uses tokens (like JWTs) to verify user identity. Users receive a token after logging in, which is sent in subsequent requests.

## Using NextAuth.js

NextAuth.js is a robust authentication library for Next.js applications that simplifies user authentication.

### Installation

To use NextAuth.js, first install it:

`bash npm install next-auth`

### Basic Configuration

NextAuth.js requires a configuration object to be passed to the `next-auth` middleware. This object specifies the authentication providers to use, as well as any other options.

Here's an example configuration:

```javascript
const nextAuthConfig = {
  providers: [
    {
      id: 'google',
      name: 'Google',
      type: 'oauth',
      version: '2.0',
      scope: 'email profile',
      params: { grant_type: 'authorization_code' },
      accessTokenUrl: 'https://accounts.google.com/o/oauth2/token',
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      profileUrl: 'https://www.googleapis.com/oauth2/v1/userinfo',
      profile: (profile) => {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture
        }
      }
    }
  ],
  secret: 'YOUR_SECRET_HERE',
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  callbacks: {
    async signIn(user, account, profile) {
      // ...
    },
    async redirect(url, baseUrl) {
      // ...
    },
    async session(session, user) {
      // ...
    }
  }
}
```

1. `providers`: This is an array of authentication providers to use. Each provider has a unique `id` and a `name`. The `type` can be `oauth` or `email`, depending on the authentication method. The `version` and `scope` fields are optional, and depend on the provider. The `params` field is used to pass additional parameters to the OAuth provider. The `accessTokenUrl`, `authorizationUrl`, and `profileUrl` fields are used to specify the URLs to use for the OAuth flow. The `profile` function is used to extract the user's information from the provider's response.

2. `secret`: This is a secret key used to sign the JWT tokens. It should be a string of at least 32 characters.

3. `session`: This object specifies the session options. The `jwt` field should be set to `true` to use JWT tokens, and the `maxAge` field specifies the maximum age of the session in seconds.

4. `callbacks`: This object specifies callback functions that are called during the authentication process. The `signIn` function is called when a user signs in, and it receives the user object, account object, and profile object. The `redirect` function is called when a user is redirected to the sign in page, and it receives the URL and base URL. The `session` function is called when a session is created or updated, and it receives the session object and user object.

### Callback URLs

The callback URLs are the URLs that the authentication provider will redirect the user to after they have authenticated. These URLs should be specified in the authentication provider's settings. For example, if using Google OAuth, the callback URL should be `http://localhost:3000/api/auth/callback/google`.

## Protecting Routes

### Client-Side Authentication

To protect a route on the client-side, use the `useSession` hook from NextAuth.js. This hook returns the user object, or `null` if the user is not authenticated.

```javascript
import { useSession } from 'next-auth/client'

function ProtectedPage() {
  const [session, loading] = useSession()

  if (loading) {
    return <div>Loading...</div>
  }

  if (!session) {
    return <div>You must be signed in to view this page</div>
  }

  return <div>Welcome {session.user.name}!</div>
}
```

1. `useSession`: This hook returns an array containing the session object and a loading state. If the session is not yet available, the loading state will be `true`. If the user is not authenticated, the session object will be `null`.

### Server-Side Authentication

To protect a route on the server-side, use the `getSession` function from NextAuth.js. This function returns the user object, or `null` if the user is not authenticated.

```javascript
import { getSession } from 'next-auth/client'

export default async function handler(req, res) {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' })
  }

  res.json({ message: `Hello, ${session.user.name}!` })
}
```

1. `getSession`: This function takes a request object and returns a Promise that resolves to the session object, or `null` if the user is not authenticated.

## Fetching User Session

To fetch the user session on the client-side, use the `getSession` function from NextAuth.js. This function returns the user object, or `null` if the user is not authenticated.

```javascript
import { getSession } from 'next-auth/client'

function ProfilePage() {
  const [session, loading] = useSession()

  useEffect(() => {
    if (session) {
      fetchUser(session.user.id)
    }
  }, [session])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!session) {
    return <div>You must be signed in to view this page</div>
  }

  return <div>Welcome {session.user.name}!</div>
}
```

1. `getSession`: This function takes a request object and returns a Promise that resolves to the session object, or `null` if the user is not authenticated.

2. `useEffect`: This hook is used to fetch the user data when the session is available. The `fetchUser` function should be defined elsewhere in the code.

## Logging In and Logging Out

To log in or log out a user, use the `signIn` and `signOut` functions from NextAuth.js. These functions redirect the user to the sign in page or the sign out page, respectively.

```javascript
import { signIn, signOut } from 'next-auth/client'


function LoginPage() {
  const handleLogin = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const provider = data.get('provider')
    const email = data.get('email')
    const password = data.get('password')
    try {
      await signIn(provider, { email, password })
      alert('You have been signed in!')
    } catch (error) {
      alert('Error signing in')
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label>
        Provider:
        <select name="provider">
          <option value="google">Google</option>
          <option value="github">GitHub</option>
          <option value="...">...</option>
        </select>
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  )
}

function LogoutButton() {
  const handleLogout = async (event) => {
    event.preventDefault()
    try {
      await signOut()
      alert('You have been signed out!')
    } catch (error) {
      alert('Error signing out')
    }
  }

  return (
    <button onClick={handleLogout}>Sign out</button>
  )
}
```

1. `signIn`: This function takes a provider and an object containing the user's credentials (e.g. email and password). It returns a Promise that resolves to the user object, or throws an error if the sign in fails.

2. `signOut`: This function logs the user out and returns a Promise that resolves to `true`.

## Custom Authentication Providers

To use a custom authentication provider, you can create a new provider object in the configuration object. The provider object should have the same properties as the built-in providers (e.g. `id`, `name`, `type`, `version`, `scope`, `params`, `accessTokenUrl`, `authorizationUrl`, `profileUrl`, and `profile`).

```javascript
const nextAuthConfig = {
  providers: [
    {
      id: 'custom',
      name: 'Custom',
      type: 'oauth',
      version: '2.0',
      scope: 'email profile',
      params: { grant_type: 'authorization_code' },
      accessTokenUrl: 'https://example.com/oauth/token',
      authorizationUrl: 'https://example.com/oauth/authorize',
      profileUrl: 'https://example.com/oauth/profile',
      profile: (profile) => {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture
        }
      }
    }
  ],
  secret: 'YOUR_SECRET_HERE',
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  callbacks: {
    async signIn(user, account, profile) {
      // ...
    },
    async redirect(url, baseUrl) {
      // ...
    },
    async session(session, user) {
      // ...
    }
  }
}
```

1. `id`: This is a unique identifier for the provider.

2. `name`: This is the display name for the provider.

3. `type`: This is the authentication method (e.g. `oauth` or `email`).

4. `version`: This is the OAuth version (e.g. `2.0`).

5. `scope`: This is the OAuth scope (e.g. `email profile`).

6. `params`: This is an object containing additional parameters to pass to the OAuth provider.

7. `accessTokenUrl`: This is the URL to use for exchanging an authorization code for an access token.

8. `authorizationUrl`: This is the URL to use for redirecting the user to the OAuth provider for authentication.

9. `profileUrl`: This is the URL to use for fetching the user's profile information.

10. `profile`: This is a function that extracts the user's information from the provider's response.

## Best Practices

- Use HTTPS for all URLs.
- Use a strong secret key for the JWT tokens.
- Use a secure password hashing algorithm (e.g. bcrypt).
- Use a secure session storage (e.g. Redis or a database).
- Use a secure database (e.g. MySQL or PostgreSQL).
- Use a secure email provider (e.g. SendGrid or Mailgun).
- Use a secure authentication provider (e.g. Google, GitHub, or a custom provider).
- Use a secure hosting provider (e.g. Vercel, AWS, or a custom provider).

## Troubleshooting Common Issues

### Error: "Invalid provider"

This error occurs when the provider specified in the `signIn` function is not defined in the configuration object. Check that the provider is defined in the `providers` array.

### Error: "Invalid CSRF Token"

This error occurs when the CSRF token in the request is invalid. This can happen if the user refreshes the page or if the session has expired. To fix this, make sure that the CSRF token is included in the request headers.

### Error: "Session has expired"

This error occurs when the session has expired. To fix this, set a longer `maxAge` value in the `session` object of the configuration object.

### Error: "Session has been revoked"

This error occurs when the session has been revoked. This can happen if the user has been deleted from the database or if the session has been manually deleted. To fix this, make sure that the user is still in the database and that the session is still valid.

### Error: "Session is not yet available"

This error occurs when the session is not yet available. This can happen if the user is not yet authenticated or if the session is being created. To fix this, make sure that the user is authenticated before trying to access the session.

### Error: "Session has been created but not yet available"

This error occurs when the session has been created but not yet available. This can happen if the user is not yet authenticated or if the session is being created. To fix this, make sure that the user is authenticated before trying to access the session.

### Error: "Session has been updated but not yet available"

This error occurs when the session has been updated but not yet available. This can happen if the user is not yet authenticated or if the session is being updated. To fix this, make sure that the user is authenticated before trying to access the session.

### Error: "Session has been invalidated"

This error occurs when the session has been invalidated. This can happen if the user has been deleted from the database or if the session has been manually deleted. To fix this, make sure that the user is still in the database and that the session is still valid.

### Error: "Session has been disabled"

This error occurs when the session has been disabled. This can happen if the user has been deleted from the database or if the session has been manually deleted. To fix this, make sure that the user is still in the database and that the session is still valid.

### Error: "Session has been expired"

This error occurs when the session has expired. This can happen if the user has been deleted from the database or if the session has been manually deleted. To fix this, make sure that the user is still in the database and that the session is still valid.

[EOF]
