import type { Metadata, Viewport } from 'next'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Geist, Geist_Mono } from 'next/font/google'
import 'nextra-theme-docs/style.css'
import './globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'
import {
  Footer,
  Logo,
  Providers,
  icons,
  AUTHOR,
} from '@amrabed/ui'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Amr Abed | Courses',
    template: '%s | Amr Abed — Courses',
  },
  description: 'Course archives and lecture materials for Computer Science & Engineering courses by Amr Abed.',
  authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
  icons,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <Head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Providers>
          <Layout
            navbar={
              <Navbar
                logoLink={false}
                projectLink="https://github.com/amrabed/courses"
                logo={
                  <div className="flex items-center gap-2.5">
                    <Link
                      href="https://amrabed.com"
                      className="group flex items-center gap-2 text-sm font-semibold text-heading hover:text-primary transition-colors focus-visible:outline-none"
                      title="Return to Amr Abed"
                    >
                      <Logo size={26} className="text-primary group-hover:opacity-80 transition-opacity shrink-0" />
                      <span>{AUTHOR.name}</span>
                    </Link>
                    <span className="text-divider font-light select-none">/</span>
                    <Link
                      href="/"
                      className="text-sm font-bold text-primary hover:opacity-80 transition-opacity"
                    >
                      Courses
                    </Link>
                  </div>
                }
              />
            }
            footer={
              <Footer
                copyrightHolder="Amr Abed"
                tagline={
                  <>
                    Released under the{' '}
                    <a
                      href="https://creativecommons.org/licenses/by/4.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors underline underline-offset-2"
                    >
                      Creative Commons Attribution 4.0 International (CC BY 4.0)
                    </a>{' '}
                    License.
                  </>
                }
              />
            }
            pageMap={pageMap}
            docsRepositoryBase="https://github.com/amrabed/courses/tree/main"
            editLink="Edit this page"
            sidebar={{
              defaultMenuCollapseLevel: 2,
              autoCollapse: true,
            }}
          >
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  )
}
