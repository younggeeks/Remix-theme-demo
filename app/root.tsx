import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from 'remix'
import type { MetaFunction } from 'remix'
import { ThemeProvider } from 'remix-theme'

export const meta: MetaFunction = () => {
  return { title: 'Remix Theme Example' }
}

export default function App() {
  return (
    <ThemeProvider attribute="class">
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </body>
      </html>
    </ThemeProvider>
  )
}
