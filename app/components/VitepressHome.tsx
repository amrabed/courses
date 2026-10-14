import Link from 'next/link'
import { FaCode, FaCloud, FaSliders } from 'react-icons/fa6'

export function VitepressHome() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-14rem)] w-full">
      {/* Hero Section matching VitePress HomeHero */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-12 sm:pt-20 pb-10 sm:pb-14 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-500 via-primary to-purple-600 bg-clip-text text-transparent">
            Amr Abed
          </span>
          <br />
          <span className="text-foreground mt-2 inline-block">Course Archives</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-default-500 max-w-2xl leading-relaxed">
          Computer Science & Engineering Lecture Notes, Problem Sheets, Labs & Assignments
        </p>

        {/* Action Buttons matching VitePress actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <Link
            href="/cse115/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-medium text-sm bg-primary text-white hover:bg-primary/90 transition-all shadow-sm hover:shadow active:scale-95"
          >
            CSE115 Programming Languages
          </Link>
          <Link
            href="/cse415/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-medium text-sm border border-divider bg-default-100 hover:bg-default-200 text-foreground transition-all shadow-sm hover:shadow active:scale-95"
          >
            CSE415 Cloud Computing
          </Link>
          <Link
            href="/cse422/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-medium text-sm border border-divider bg-default-100 hover:bg-default-200 text-foreground transition-all shadow-sm hover:shadow active:scale-95"
          >
            CSE422 Computer Controlled Systems
          </Link>
        </div>
      </section>

      {/* Features Section matching VitePress HomeFeatures */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: CSE115 */}
          <Link
            href="/cse115/"
            className="group relative rounded-2xl border border-divider/60 bg-default-50/50 dark:bg-default-100/30 hover:bg-default-100/70 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <FaCode className="size-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                CSE115 Programming Languages
              </h2>
              <p className="text-sm text-default-500 mt-3 leading-relaxed">
                First-year Computer Engineering course on C++ fundamentals, control structures, pointers, dynamic memory, OOP, and GitHub Classroom labs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-divider/40 flex items-center text-xs font-semibold text-primary">
              <span>View Course Materials</span>
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>

          {/* Card 2: CSE415 */}
          <Link
            href="/cse415/"
            className="group relative rounded-2xl border border-divider/60 bg-default-50/50 dark:bg-default-100/30 hover:bg-default-100/70 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <FaCloud className="size-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                CSE415 Cloud Computing
              </h2>
              <p className="text-sm text-default-500 mt-3 leading-relaxed">
                Senior undergraduate course covering core cloud concepts, AWS services (EC2, S3, DynamoDB, Machine Learning), GCP, and containerization.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-divider/40 flex items-center text-xs font-semibold text-primary">
              <span>View Course Materials</span>
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>

          {/* Card 3: CSE422 */}
          <Link
            href="/cse422/"
            className="group relative rounded-2xl border border-divider/60 bg-default-50/50 dark:bg-default-100/30 hover:bg-default-100/70 p-6 sm:p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <FaSliders className="size-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                CSE422 Computer Controlled Systems
              </h2>
              <p className="text-sm text-default-500 mt-3 leading-relaxed">
                Senior undergraduate course on discrete-time systems, Z-transform, state-space representations, digital filters, and stability analysis.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-divider/40 flex items-center text-xs font-semibold text-primary">
              <span>View Course Materials</span>
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
