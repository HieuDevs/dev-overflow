"use client"


import { MoonIcon, SunIcon, MonitorIcon  } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Theme() {
  const { setTheme } = useTheme()
  const classSize = "h-[1.2rem] w-[1.2rem]"
  const classText = "text-dark-100 dark:text-light-900"
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className={`${classSize} scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 absolute`} />
          <MoonIcon className={`${classSize} scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0`} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <SunIcon className={classSize} />
          <p className={classText}>Light</p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <MoonIcon className={classSize} />
          <p className={classText}>Dark</p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <MonitorIcon className={classSize} />
          <p className={classText}>System</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
