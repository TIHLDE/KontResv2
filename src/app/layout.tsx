
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { getUserData } from '@/utils/apis/user'
import { cookies, headers } from 'next/headers'
import BottomBar from '@/components/layout/bottom-bar'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const userId = cookies().get('user_id');
	const userData = await getUserData(userId?.value ?? '');

	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Header userData={userData} className='md:flex hidden' />
					{children}
					<BottomBar className='fixed bottom-0 md:hidden' user={userData} />
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
