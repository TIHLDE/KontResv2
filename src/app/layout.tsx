import BottomBar from '@/components/layout/bottom-bar/bottom-bar';
import Header from '@/components/layout/header/header';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import { getItems } from '@/utils/apis/items';
import { PermissionApp } from '@/utils/apis/types';

import {
    checkUserAuth,
    checkUserPermissions,
    getUserData,
} from '../utils/apis/user';
import './globals.css';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kontres - Reserver TIHLDEs gjenstander',
    description: 'Reserver alt som TIHLDE har å tilby!',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn(inter.className, 'overflow-x-hidden')}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header className="lg:flex hidden" />
                    <div className="md:py-page pt-8 pb-32">
                        <Toaster />
                        {children}
                    </div>
                    <div className="lg:hidden fixed bottom-5 w-full flex z-10">
                        <BottomBar />
                    </div>
                    {/* <Footer /> <-- Denne må fikses for mobilvisning!! */}
                </ThemeProvider>
            </body>
        </html>
    );
}
