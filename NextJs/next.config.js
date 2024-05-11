/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_SECRET:"YKCCDQbI3ep2+Vso+U2zuvkSINNLXcEyPRaxQ9HstxI=",
      },
      images: {
        domains: ['fakestoreapi.com'],
      },
}

module.exports = nextConfig
