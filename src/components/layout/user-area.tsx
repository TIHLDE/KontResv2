"use client"

import { UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { cn } from "@/utils/cn";
import { ModeToggle } from "../ui/theme-mode-toggler";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useUser } from "@/utils/hooks/user";
import { signOutUser } from "@/utils/apis/user";
import { useRouter } from "next/navigation";

interface UserAreaProps extends React.HTMLProps<HTMLDivElement> {
    username: string;
    image: string;
}

export const UserArea = ({ username, image, className, ...props }: UserAreaProps) => {
    // const { data, loading, error, signOut } = useUser();
    const router = useRouter();

    const signOut = () => {
        signOutUser();
        router.refresh();
    }
    return (
        <div {...props} className={cn('flex items-center justify-center w-fit gap-1', className)}>
            <Popover>
                <PopoverTrigger>

                        <Avatar>
                            <AvatarImage src={image} alt={"profilbilde"} />
                            <AvatarFallback><UserRound className="text-foreground" /></AvatarFallback>
                        </Avatar>
                </PopoverTrigger>
                <PopoverContent>
                    <h2 className="text-lg">Hei, { username }!</h2>
                        <div className="flex gap-3 mt-1">
                            <Button variant={"destructive"} className="w-full" onClick={signOut}>Logg ut</Button>
                            <Button className="w-full">Kule ting</Button>
                        </div>
               </PopoverContent>
            </Popover>
            <ModeToggle />
        </div>
    )
}