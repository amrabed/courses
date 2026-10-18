<script setup lang="ts">
import { withBase } from 'vitepress'
import { useSidebar } from 'vitepress/theme'

const { hasSidebar } = useSidebar()
</script>

<template>
  <div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <div class="title-container">
      <a
        href="https://amrabed.com"
        class="author-link"
        title="Return to Amr Abed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="26"
          height="26"
          fill="currentColor"
          class="logo-svg"
          aria-label="Amr Abed"
          role="img"
        >
          <path
            fill-rule="evenodd"
            d="
              M 86,50
              L 86,80.5
              L 75.9,75
              A 36 36 0 1 1 86 50
              Z
              M 50,32
              A 18 18 0 1 0 50,68
              A 18 18 0 1 0 50,32
              Z
            "
          />
        </svg>
        <span class="author-name">Amr Abed</span>
      </a>

      <span class="separator" aria-hidden="true">/</span>

      <a :href="withBase('/')" class="site-link">
        Courses
      </a>
    </div>
  </div>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  height: var(--vp-nav-height);
}

.title-container {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

.author-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.25s, opacity 0.25s;
}

.author-link:hover {
  color: var(--vp-c-brand-1);
}

.author-link:hover .logo-svg {
  opacity: 0.8;
}

.author-link:focus-visible,
.site-link:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
  border-radius: 4px;
}

.logo-svg {
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
  transition: opacity 0.25s;
}

.author-name {
  white-space: nowrap;
}

.separator {
  color: var(--vp-c-divider);
  font-weight: 300;
  user-select: none;
}

.site-link {
  font-weight: 700;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: opacity 0.25s;
  white-space: nowrap;
}

.site-link:hover {
  opacity: 0.8;
}

@media (min-width: 960px) {
  .VPNavBarTitle.has-sidebar {
    border-bottom: 1px solid var(--vp-c-divider);
    height: var(--vp-nav-height);
  }
}
</style>
