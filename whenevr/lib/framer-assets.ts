/**
 * CDN image URLs scraped from published Framer markup for whenevr.framer.website.
 * Matches the deployed template bundle (Hamza Ehsan / Whenevr).
 */

const base = "https://framerusercontent.com/images";

export const framerAssets = {
  favicon: `${base}/FLVRYW3WtUnn6HNMzq5CQEViIBM.png`,
  openGraph: `${base}/rx3gn5HsaoHahNCzHTXcBDAHZI.jpg`,

  heroPrimary: `${base}/922LPrLT3JS7JXQbJxraBeoo8I.png`,

  /** Card stack beneath hero visual (appear as Image 3 → 2 → 1 earlier in markup). */
  heroStackBehind: [
    `${base}/FO0GbO8rNEXzxKJ7N9jYNS92Nvk.jpg`,
    `${base}/MRXSykppVewwilGAfSKu7eZdgg.jpg`,
    `${base}/ebwTJIBeD2MM3iPO4JB6BPWF8.jpg`,
  ] as const,

  /** Logo strip (“Trusted by…”) component name `Desktop`, document order */
  trustedLogos: [
    `${base}/D4OlAav8RISd0opp4Z1aT4ypRXw.png`,
    `${base}/QbjA7E37T5SDQiAS2aDV1zMrG4.png`,
    `${base}/w5X4QRiIXVeXf71DL6mW0nV6Awk.png`,
    `${base}/UT4fxQBnxf542T5Cf7zZOvBxy0.png`,
    `${base}/4UX9uXT3N0WRExPOcc1r8bpVQAk.png`,
    `${base}/GSFkssTRojMMfTCPqH1HENDnw.png`,
    `${base}/pSEmRq7TZ5niunpklVk0dvh1mDA.png`,
    `${base}/WdMlO6P4eyTomKkSRBDtGLAio4.png`,
    `${base}/AcrDBNPoA5kazwDFtUC2IeoPoo.png`,
    `${base}/d8p3LHFKtLnBbQ65oGYA48cZwYI.png`,
    `${base}/505rrWNYkeLbF8KyvL2Owkhh7I.png`,
    `${base}/AOAg5gzJT8elHJjF4ot4zv58UAE.png`,
    `${base}/npXLqR8zSrRQ361syHkuwTjdeds.png`,
    `${base}/lEVDQNWDkdXcIlfM1j2Kfmp8at8.png`,
    `${base}/zRjU5BQHkKDyauYKM2E6MQnLpo.png`,
    `${base}/38I07rfLJ4DXJRQZ7YXCanY6ko.png`,
    `${base}/y3RHLfHQboDd91CD2B0QwpU4pno.png`,
  ] as const,

  /** Demo / “Example content…” frame — Framer calls this layer `Content` */
  howItWorksDemo: `${base}/hfneFL6CHBi5BnNvCeOaqU9HqE4.png`,

  blogFeatured: `${base}/oIZS8mYhVbr1mWW249pW69Cqs.jpeg`,
  blogListThumbs: [
    `${base}/PLq1ZlpB2PsLvsshgPjafwuzA.jpeg`,
    `${base}/4LHoTajbPsuxwmX9WgEagK5I.jpeg`,
    `${base}/5L6KoigpOpSnKvbf6HNxKNfWvu8.jpeg`,
    `${base}/UK3ji9XKftVKablDa07xbZ7o.jpeg`,
  ] as const,

  /** Sequential `Image` layers used for testimonials in the authored page */
  testimonialAvatars: [
    `${base}/DcNJgQIOkkv7HpGnt8XS2UJ0sGE.png`,
    `${base}/deHueM6CDFRvwo3KoYL9UlkKjo.png`,
    `${base}/KsgfJQmkr2IUJ4C1etP8vC5ywSU.png`,
    `${base}/9TFXEqtk3YFraXWfmvs6NgGjubE.png`,
    `${base}/PiA7xFeo1HUizwAFLgCrsctY.png`,
  ] as const,

  /** Template carousel control graphic */
  testimonialCarouselArrowSvg: `${base}/u6NHrizsQWk4u5sqIM2DGhO2EI.svg`,

  /** Portrait pool for the “100+ clients” arc (Framer avatars + blog stills, cycled). */
  clientArcFaces: [
    `${base}/DcNJgQIOkkv7HpGnt8XS2UJ0sGE.png`,
    `${base}/deHueM6CDFRvwo3KoYL9UlkKjo.png`,
    `${base}/KsgfJQmkr2IUJ4C1etP8vC5ywSU.png`,
    `${base}/9TFXEqtk3YFraXWfmvs6NgGjubE.png`,
    `${base}/PiA7xFeo1HUizwAFLgCrsctY.png`,
    `${base}/oIZS8mYhVbr1mWW249pW69Cqs.jpeg`,
    `${base}/PLq1ZlpB2PsLvsshgPjafwuzA.jpeg`,
    `${base}/4LHoTajbPsuxwmX9WgEagK5I.jpeg`,
    `${base}/5L6KoigpOpSnKvbf6HNxKNfWvu8.jpeg`,
    `${base}/UK3ji9XKftVKablDa07xbZ7o.jpeg`,
    `${base}/FO0GbO8rNEXzxKJ7N9jYNS92Nvk.jpg`,
    `${base}/MRXSykppVewwilGAfSKu7eZdgg.jpg`,
    `${base}/ebwTJIBeD2MM3iPO4JB6BPWF8.jpg`,
    `${base}/XTdwXzaaZ0uFZA76FvHmRgz1z4.jpeg`,
  ] as const,
};
