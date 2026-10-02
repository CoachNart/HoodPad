import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/navigation'
export const metadata: Metadata = { title: 'HOOD — Launch Your Token', description: 'Launch creator tokens on Robinhood Chain and earn from the activity you create.' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><div className="shell"><Navigation /></div>{children}<div className="shell"><footer className="footer"><span>© 2026 HOOD</span><span>Built for Robinhood Chain</span><span>Protocol status: configuration required</span></footer></div><nav className="bottom-nav"><a href="/">Home</a><a href="/explore">Explore</a><a href="/dashboard">Dashboard</a><a href="/launch">Launch</a></nav></body></html> }
