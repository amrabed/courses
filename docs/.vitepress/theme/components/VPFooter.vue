<script setup lang="ts">
import { useSidebar } from 'vitepress/theme'

const { hasSidebar } = useSidebar()
const currentYear = new Date().getFullYear()

interface SocialProfile {
  name: string
  url: string
  viewBox: string
  path: string
  hoverLight: string
  hoverDark: string
}

const profiles: SocialProfile[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/amrabed',
    viewBox: '0 0 448 512',
    path: 'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z',
    hoverLight: '#0A66C2',
    hoverDark: '#0A66C2'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/amrabed',
    viewBox: '0 0 496 512',
    path: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
    hoverLight: '#000000',
    hoverDark: '#f4f4f5'
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=vdrgnAYAAAAJ',
    viewBox: '0 0 512 512',
    path: 'M390.9 298.5c0 0 0 .1 .1 .1c9.2 19.4 14.4 41.1 14.4 64C405.3 445.1 338.5 512 256 512s-149.3-66.9-149.3-149.3c0-22.9 5.2-44.6 14.4-64h0c1.7-3.6 3.6-7.2 5.6-10.7c4.4-7.6 9.4-14.7 15-21.3c27.4-32.6 68.5-53.3 114.4-53.3c33.6 0 64.6 11.1 89.6 29.9c9.1 6.9 17.4 14.7 24.8 23.5c5.6 6.6 10.6 13.8 15 21.3c2 3.4 3.8 7 5.5 10.5zm26.4-18.8c-30.1-58.4-91-98.4-161.3-98.4s-131.2 40-161.3 98.4L0 202.7 256 0 512 202.7l-94.7 77.1z',
    hoverLight: '#4285F4',
    hoverDark: '#4285F4'
  },
  {
    name: 'Medium',
    url: 'https://amrabed.medium.com',
    viewBox: '0 0 640 512',
    path: 'M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z',
    hoverLight: '#000000',
    hoverDark: '#f4f4f5'
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/2070636/amrabed',
    viewBox: '0 0 384 512',
    path: 'M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z',
    hoverLight: '#F58025',
    hoverDark: '#F58025'
  },
  {
    name: 'X',
    url: 'https://twitter.com/amr_abed',
    viewBox: '0 0 512 512',
    path: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
    hoverLight: '#000000',
    hoverDark: '#f4f4f5'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@amr-abed',
    viewBox: '0 0 576 512',
    path: 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z',
    hoverLight: '#FF0000',
    hoverDark: '#FF0000'
  },
  {
    name: 'Goodreads',
    url: 'https://goodreads.com/user/show/15582377-amr-abed',
    viewBox: '0 0 384 512',
    path: 'M42.6 403.3h2.8c12.7 0 25.5 0 38.2.1 1.6 0 3.1-.4 3.6 2.1 7.1 34.9 30 54.6 62.9 63.9 26.9 7.6 54.1 7.8 81.3 1.8 33.8-7.4 56-28.3 68-60.4 8-21.5 10.7-43.8 11-66.5.1-5.8.3-47-.2-52.8l-.9-.3c-.8 1.5-1.7 2.9-2.5 4.4-22.1 43.1-61.3 67.4-105.4 69.1-103 4-169.4-57-172-176.2-.5-23.7 1.8-46.9 8.3-69.7C58.3 47.7 112.3.6 191.6 0c61.3-.4 101.5 38.7 116.2 70.3.5 1.1 1.3 2.3 2.4 1.9V10.6h44.3c0 280.3.1 332.2.1 332.2-.1 78.5-26.7 143.7-103 162.2-69.5 16.9-159 4.8-196-57.2-8-13.5-11.8-28.3-13-44.5zM188.9 36.5c-52.5-.5-108.5 40.7-115 133.8-4.1 59 14.8 122.2 71.5 148.6 27.6 12.9 74.3 15 108.3-8.7 47.6-33.2 62.7-97 54.8-154-9.7-71.1-47.8-120-119.6-119.7z',
    hoverLight: '#372213',
    hoverDark: '#f4f1ea'
  }
]
</script>

<template>
  <footer class="VPFooter custom-footer" :class="{ 'has-sidebar': hasSidebar }">
    <div class="footer-container">
      <div class="footer-info">
        <p class="copyright">
          © {{ currentYear }} Amr Abed
        </p>
        <p class="tagline">
          Released under the
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons Attribution 4.0 International (CC BY 4.0)
          </a>
          License.
        </p>
      </div>

      <div class="footer-social">
        <a
          v-for="profile in profiles"
          :key="profile.name"
          :href="profile.url"
          target="_blank"
          rel="noopener noreferrer me"
          :aria-label="`${profile.name} (opens in a new tab)`"
          :title="profile.name"
          class="social-icon-btn"
          :style="{
            '--social-hover-light': profile.hoverLight,
            '--social-hover-dark': profile.hoverDark
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :viewBox="profile.viewBox"
            width="16"
            height="16"
            fill="currentColor"
            class="social-svg"
            aria-hidden="true"
          >
            <path :d="profile.path" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  width: 100%;
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-divider);
  padding: 48px 24px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  z-index: var(--vp-z-index-footer, 10);
}

@media (min-width: 960px) {
  .custom-footer.has-sidebar {
    padding-left: calc(var(--vp-sidebar-width) + 32px);
  }
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
  }
}

.footer-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  order: 2;
}

@media (min-width: 768px) {
  .footer-info {
    align-items: flex-start;
    text-align: left;
    order: 1;
  }
}

.copyright {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin: 0;
  line-height: 1.5;
}

.tagline {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin: 0;
  line-height: 1.5;
}

.tagline a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.tagline a:hover {
  color: var(--vp-c-brand-1);
}

.footer-social {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  order: 1;
}

@media (min-width: 768px) {
  .footer-social {
    order: 2;
  }
}

.social-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  color: var(--vp-c-text-3);
  transition: background-color 0.25s, color 0.25s;
  text-decoration: none;
}

.social-icon-btn:hover {
  background-color: var(--vp-c-bg-soft);
  color: var(--social-hover-light);
}

:root.dark .social-icon-btn:hover {
  color: var(--social-hover-dark);
}

.social-icon-btn:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.social-svg {
  flex-shrink: 0;
}
</style>
