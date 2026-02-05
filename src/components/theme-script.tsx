export function ThemeScript() {
  const script = `(function(){try{var stored=localStorage.getItem('theme');var prefers=window.matchMedia('(prefers-color-scheme: dark)').matches;var theme=stored|| (prefers?'dark':'light');if(theme==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
