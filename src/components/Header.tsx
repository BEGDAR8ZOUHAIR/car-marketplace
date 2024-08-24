import React, { useState } from 'react';
import { UserButton, useUser, SignInButton } from '@clerk/clerk-react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
	const { user, isSignedIn } = useUser();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'New', href: '/new' },
		{ name: 'Preowned', href: '/preowned' },
	];

	return (
		<header className="bg-white shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<a href="/">
							<span className="sr-only">Car Marketplace</span>
							<img
								className="h-8 w-auto sm:h-10"
								src="/logo.svg"
								alt="Car Marketplace"
							/>
						</a>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<Button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						>
							<span className="sr-only">Open menu</span>
							<Menu className="h-6 w-6" aria-hidden="true" />
						</Button>
					</div>
					<nav className="hidden md:flex space-x-10">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								{item.name}
							</a>
						))}
					</nav>
					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						{isSignedIn ? (
							<div className="flex items-center space-x-4">
								<UserButton />
								<Button>Submit a listing</Button>
							</div>
						) : (
							<SignInButton>
								<Button>Sign in</Button>
							</SignInButton>
						)}
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<div>
									<img
										className="h-8 w-auto"
										src="/logo.svg"
										alt="Car Marketplace"
									/>
								</div>
								<div className="-mr-2">
									<Button
										onClick={() => setIsMenuOpen(false)}
										className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									>
										<span className="sr-only">Close menu</span>
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									{navItems.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
										>
											<span className="ml-3 text-base font-medium text-gray-900">
												{item.name}
											</span>
										</a>
									))}
								</nav>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							{isSignedIn ? (
								<div className="flex items-center space-x-4">
									<UserButton />
									<Button className="w-full">Submit a listing</Button>
								</div>
							) : (
								<SignInButton>
									<Button className="w-full">Sign in</Button>
								</SignInButton>
							)}
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;