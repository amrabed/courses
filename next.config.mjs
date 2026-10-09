import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
})

const isProd = process.env.NODE_ENV === 'production'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? '/courses' : '')

export default withNextra({
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  transpilePackages: ['@amrabed/ui'],
  images: {
    unoptimized: true,
  },
})
