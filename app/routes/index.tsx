import { Link } from 'remix'

import type { LinksFunction } from 'remix'
import { useTheme } from 'remix-theme'
import SunIcon from '~/components/SunIcon'
import MoonIcon from '~/components/MoonIcon'

export default function Index() {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <nav>
        <ul className="flex justify-between max-w-screen-xl mx-auto py-10 ">
          <li>
            <Link to="/">Remix Theme</Link>
          </li>
          {theme === 'light' ? (
            <button onClick={() => setTheme('dark')}>
              <SunIcon />
            </button>
          ) : (
            <button onClick={() => setTheme('light')}>
              <MoonIcon />
            </button>
          )}
        </ul>
      </nav>
    </div>
  )
}
