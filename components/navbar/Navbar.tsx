import Link from "next/link"
import MaxWidthWrapper from "../MaxWidthWrapper"
import { buttonVariants } from "../ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server"
import { ArrowRight } from "lucide-react";

const Navbar = () => {
    return (
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link
                        href='/'
                        className='flex z-40 font-bold'>
                        <span>Evently.</span>
                    </Link>

                    {/* todo: add mobile navbar */}

                    <div className='hidden items-center space-x-4 sm:flex'>
                        <>
                            <Link
                                href='/'
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: 'sm',
                                })}>Home
                            </Link>
                            <Link
                                href='/about'
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: 'sm',
                                })}>About
                            </Link>
                            <Link
                                href='/contact-us'
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: 'sm',
                                })}>Contact us
                            </Link>
                            <LoginLink
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: 'sm',
                                })}>
                                Sign In
                            </LoginLink>
                            <RegisterLink
                                className={buttonVariants({
                                    size: 'sm',
                                })}>
                                Get started <ArrowRight className='ml-1.5 h-5 w-5' />
                            </RegisterLink>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar;