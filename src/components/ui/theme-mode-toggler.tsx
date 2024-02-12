"use client"

import * as React from "react"

import { useTheme } from "next-themes"

import { Button, ButtonProps } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoonIcon, SunIcon } from "lucide-react"
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./drawer"

interface ModeToggleProps extends ButtonProps {
    mobile?: boolean;
}

export function MobileModeToggle({ className, ...props }: ButtonProps) {
    const { setTheme } = useTheme();

    return (
        <>
            <Drawer>
                <DrawerTrigger>
                    <ThemeToggleButton {...props} className={className} />
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Velg fargetema</DrawerTitle>
                    </DrawerHeader>

                    <div className="flex flex-col gap-3 px-4" >
                        <Button variant="outline" onClick={() => setTheme("light")}>Light</Button>
                        <Button variant="outline" onClick={() => setTheme("dark")}>Dark</Button>
                        <Button variant="outline" onClick={() => setTheme("system")}>System</Button>

                    </div>

                    <DrawerFooter>
                        <DrawerClose>
                            <Button className="w-full">Lukk</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>

            </Drawer>
        </>
    )
}

export function ModeToggle({ className, mobile, ...props }: ModeToggleProps) {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <ThemeToggleButton {...props} className={className} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const ThemeToggleButton = ({ ...props }: ButtonProps) => {
    return (
        <Button variant="outline" size="icon" {...props} className="className">
            <SunIcon className="h-8 w-8 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-8 w-8 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}