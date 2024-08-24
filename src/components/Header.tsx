import { UserButton, useUser , SignInButton } from '@clerk/clerk-react'
import { Button } from './ui/button'

function Header() {
	const { user, isSignedIn } = useUser()
	return (
		<div className="flex justify-between p-5 shadow-sm items-center">
			<img src="/logo.svg" alt="car-marketplace" width={150} height={150} />

			<ul className="hidden  md:flex gap-16">
				<li className="font-medium hover:scale-105 transition-all corsor-pointer  hover:text-primary"><a href="/">Home</a></li>
				<li className="font-medium hover:scale-105 transition-all corsor-pointer  hover:text-primary"><a href="/contact">Contact</a></li>
				<li className="font-medium hover:scale-105 transition-all corsor-pointer  hover:text-primary"><a href="/new">New</a></li>
				<li className="font-medium hover:scale-105 transition-all corsor-pointer  hover:text-primary"><a href="/preowned">Preowned</a></li>
			</ul>
			{
				isSignedIn ?
					<div className="flex gap-5 items-center ">
						<UserButton user={user} />
						<Button >Submit a listing</Button>
					</div> :
					<SignInButton  >
					<Button >Sign in</Button>
					</SignInButton>
					
			}
		</div>
	)
}

export default Header