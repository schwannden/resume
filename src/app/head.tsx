export default function Head() {
  // Hardcoded theme detection script — safe for dangerouslySetInnerHTML
  // No user input, no external data, purely static logic for theme initialization
  const themeScript = `
    (function() {
      try {
        const theme = localStorage.getItem('theme') || localStorage.getItem('theme-mode');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        let resolvedTheme = theme;
        if (!theme || theme === 'system') {
          resolvedTheme = prefersDark ? 'dark' : 'light';
        }

        if (resolvedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: themeScript }}
        suppressHydrationWarning
      />
    </>
  )
}
