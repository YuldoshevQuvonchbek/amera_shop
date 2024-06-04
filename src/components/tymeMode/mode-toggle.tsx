import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle({ setActive, active }: any) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun
            className={`h-[1.2rem] w-[1.2rem] ${
              active ? "rotate-0 scale-100" : "rotate-90 scale-0"
            } transition-all dark:-rotate-90 dark:scale-0`}
          />
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] ${
              active ? "rotate-90 scale-0" : "rotate-0 scale-100"
            } transition-all dark:rotate-0 dark:scale-100`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            setTheme("light");
            setActive("light");
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("dark");
            setActive("dark");
          }}
        >
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
