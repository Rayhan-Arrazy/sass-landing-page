const themeBootScript = `(function(){function sync(){var r=document.documentElement;var dark=r.dataset.theme==="dark";r.style.colorScheme=dark?"dark":"light";var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",dark?"#0b1020":"#f6f7fb")}try{var t=localStorage.getItem("theme");var r=document.documentElement;r.dataset.theme=t==="dark"?"dark":"light"}catch(e){}sync();document.addEventListener("DOMContentLoaded",sync)})();`;

const themeToggleScript = `(function(){var r=document.documentElement;var b=document.getElementById("theme-toggle");if(!b)return;function sync(){var dark=r.dataset.theme==="dark";r.style.colorScheme=dark?"dark":"light";var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",dark?"#0b1020":"#f6f7fb")}b.addEventListener("click",function(){var next=r.dataset.theme==="dark"?"light":"dark";r.dataset.theme=next;try{localStorage.setItem("theme",next)}catch(e){}sync()})})();`;

export function ThemeScript() {
  return (
    <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
  );
}

export function ThemeToggle({ label }: { label: string }) {
  return (
    <>
      <button
        id="theme-toggle"
        type="button"
        className="btn btn-ghost btn-circle"
        aria-label={label}
        title={label}
      >
        <svg
          className="size-5 dark:hidden"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
        </svg>
        <svg
          className="hidden size-5 dark:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
        </svg>
      </button>
      <script dangerouslySetInnerHTML={{ __html: themeToggleScript }} />
    </>
  );
}
