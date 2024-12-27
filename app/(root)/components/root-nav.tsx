"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { HomeIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const RootNav = () => {
	const pathname = usePathname();

	const links = [
		{
			href: "/",
			label: "Home",
			isActive: pathname === "/",
			icon: HomeIcon,
		},
		{
			href: "/profile",
			label: "Profile",
			isActive: pathname === "/profile",
			icon: UserIcon,
		},
	];
	return (
		<header>
			<div className="container py-4">
				<nav className="flex items-center justify-between">
          <Button variant={'link'} asChild>
            <Link className="text-3xl font-bold" href={'/'}>
              Logo
            </Link>
          </Button>
					<ul className="flex items-center gap-10">
						{links.map((link, idx) => {
							const { href, icon: Icon, isActive, label } = link;

							return (
								<li key={idx}>
									<Button
										variant={"link"}
										className={cn(
											isActive &&
												"underline underline-offset-4",
											"hover:underline hover:underline-offset-4"
										)}
										asChild
									>
										<Link href={href}>
											<Icon />
											{label}
										</Link>
									</Button>
								</li>
							);
						})}
					</ul>
					<div>
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default RootNav;
