import React, { useState } from 'react'
//import logo from '@image/~/logo.svg'
import logo from '~/logo.svg'
// @ts-ignore
import { content } from 'content:src'

export interface ImageProps {
  src: string
  alt: string
  className: string
}

export const Image = ({ src, ...props }: ImageProps): JSX.Element => {
  return <img src={src} {...props}></img>
}

export const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <header className="max-w-md w-full space-y-8 items-center">
        <Image src={logo} className="mx-auto h-12 w-auto" alt="logo" />
        <p className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Hello Vite + React!
        </p>
        <pre className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          <code>{content}</code>
        </pre>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p className="text-center text-gray-900 dark:text-gray-100">
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p className="text-center">
          <a
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-pink-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-pink-400"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
