import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="inner">
        <Link href="/"><a className="brand">Havenly</a></Link>
        <nav>
          <Link href="/reflect"><a>Reflect</a></Link>
          <Link href="/community"><a>Community</a></Link>
          <Link href="/premium"><a>Premium</a></Link>
          <Link href="/about"><a>About</a></Link>
        </nav>
      </div>
    </header>
  )
}
