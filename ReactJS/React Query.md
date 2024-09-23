# React Query Overview

React Query is a powerful library for managing remote data in React applications. It simplifies the process of fetching, caching, synchronizing, and updating server state. Instead of manually managing state for asynchronous operations, React Query provides a set of hooks that make it easier to work with data from APIs, enabling a more declarative style of programming.

## Key Features

1. **Data Fetching**: React Query provides hooks like `useQuery` to fetch data from APIs easily. It handles loading states, errors, and caching out of the box.

2. **Caching**: React Query automatically caches data fetched from the server. This reduces the number of requests made to the server and improves the performance of the application by serving data from the cached response.

3. **Automatic Refetching**: It automatically refetches data in the background based on certain triggers, such as when a component mounts, when the user refocuses the window, or at specified intervals.

4. **Mutations**: It provides hooks like `useMutation` to handle creating, updating, or deleting data in a simple way while managing the associated loading and error states.

5. **Query Invalidation**: React Query allows you to invalidate or refetch queries when certain data changes, ensuring that your UI stays up to date.

6. **Pagination and Infinite Querying**: It supports pagination and infinite scrolling out of the box, allowing you to handle large datasets effectively.

7. **DevTools**: React Query includes developer tools that help visualize the state of queries and mutations, aiding in debugging.

## Basic Usage

### Installing React Query

You can install React Query via npm or yarn:

```bash
npm install @tanstack/react-query
```

## Setup

To use React Query, you'll need to set up the QueryClient and QueryClientProvider at the root of your application.

```jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default Root;
```

### Fetching Data with useQuery

You can fetch data using the useQuery hook:

```jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const response = await fetch('https://api.example.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function Users() {
  const { data, error, isLoading } = useQuery('users', fetchUsers);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Mutations with useMutation

For creating or updating data, use the useMutation hook:

```jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';

const addUser = async (newUser) => {
  const response = await fetch('https://api.example.com/users', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

function AddUser() {
  const queryClient = useQueryClient();
  const mutation = useMutation(addUser, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('users');
    },
  });

  const handleAddUser = () => {
    mutation.mutate({ name: 'New User' });
  };

  return (
    <button onClick={handleAddUser}>
      Add User
    </button>
  );
}
```

> [!TIP]
>
> Best Practices
> Use Query Keys: Always use unique query keys for different queries to avoid data collisions and ensure proper caching.
> Error and Loading States: Handle loading and error states to improve user experience.
> Invalidate on Changes: Invalidate queries after mutations to keep data synchronized.
> Batch Requests: Use the useQueries or useQuery with dynamic keys for batch fetching.

[EOF]
