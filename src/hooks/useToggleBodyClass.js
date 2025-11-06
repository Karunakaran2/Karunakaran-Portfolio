import { useEffect } from "react";

export default function useToggleBodyClass(isDark) {
  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);
}
