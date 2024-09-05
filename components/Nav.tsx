"use client"

import { Button } from "./ui/button";
import { DarkMode } from "./DarkMode";
import { Logo } from '@/components/Logo'

export const Nav = () => {
  
  return (
    <div className="w-full flex items-center bg-card border-b px-3 py-2" >
      <h3 className="mr-auto text-xl flex items-center gap-2 font-semibold tracking-tight">
        <a href="/"><Logo /></a>
        整句学习
        <span className="hidden sm:inline text-sm text-muted-foreground">Improve your English using stateof-the-art Al.</span>
      </h3>

      <DarkMode />
      <a href="/signin">
        <Button variant="ghost">
          登录
        </Button>
      </a>
    </div >
  )
}