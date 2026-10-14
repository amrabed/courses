import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined

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
