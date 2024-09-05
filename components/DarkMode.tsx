import { Button } from "./ui/button";
import { useLayoutEffect, useState, MouseEvent } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"
export const DarkMode = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const el = document.documentElement;

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      el.classList.toggle(e.matches ? 'dark' : 'light');
    }
    mediaQueryList.addEventListener("change", handleSystemThemeChange);


    // 初始化时检查系统偏好设置
    if (mediaQueryList.matches) {
      setIsDarkMode(true);
      el.classList.toggle("dark");
    }
    
    return () => mediaQueryList.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const toggleDark = (event: MouseEvent) => {
    const el = document.documentElement;

    const isAppearanceTransition = !!document.startViewTransition
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!isAppearanceTransition) {
      el.classList.toggle("dark");
      setIsDarkMode((prev) => !prev);
      return
    }

    const transition = document.startViewTransition(async () => {
      el.classList.toggle("dark");
      setIsDarkMode((prev) => !prev);
    })

    transition.ready
      .then(() => {
        const isDark = document.documentElement.classList.contains("dark");

        const x = event.clientX
        const y = event.clientY
        const radius = Math.hypot(
          Math.max(x, innerWidth - x),
          Math.max(y, innerHeight - y),
        )

        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`,
        ]
        document.documentElement.animate(
          {
            clipPath: isDark
              ? [...clipPath].reverse()
              : clipPath,
          },
          {
            duration: 400,
            easing: 'ease-out',
            pseudoElement: isDark
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)',
          },
        )
      })
    
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={toggleDark}
            variant="ghost"
            size="icon"
          >
            {isDarkMode ? (
              <span className="icon-[tabler--moon]"></span>
            ) : (
              <span className="icon-[tabler--sun]"></span>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Dark Mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}