import { useEffect, useState } from "react";

export default function ThemedImage() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(localStorage.getItem("theme") === "dark");
    };
    window.addEventListener("theme-change", updateTheme);
    return () => window.removeEventListener("theme-change", updateTheme);
  }, []);

  return (
    <div className="relative max-w-5xl aspect-[5/3] flex items-center justify-center rounded-3xl">
      <img
        src="/Media/cdprospect1.png"
        alt="Light"
        className={`
          aabsolute inset-0 w-full h-full
          transition-opacity duration-1000
          ${isDark ? "opacity-0" : "opacity-100"}
        `}
        loading="lazy"
      />
      <img
        src="/Media/cdprospect2.png"
        alt="Dark"
        className={`
          absolute inset-0 w-full h-full
          transition-opacity duration-1000
          ${isDark ? "opacity-100" : "opacity-0"}
        `}
        loading="lazy"
      />
    </div>
  );
}
