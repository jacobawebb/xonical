"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Title from "../components/Title";
import { gapLayout } from "../globals/defaults";

export default function Navigation() {
	// const [showModal, setShowModal] = useState<boolean>(true)

	// const path = usePathname()

	const NavLink = ({ label, href }: { label: string; href: string }) => (
		<Link
			href={href}
			className={`border-2 border-primary/20 hover:border-primary hover:bg-primary rounded-md px-3 py-1 w-max h-full flex justify-center items-center text-primary hover:text-black transition ease-in-out`}
		>
			<Title type="h3" removeTag>
				{label}
			</Title>
		</Link>
	);

	return (
		<div className="mb-10 flex flex-col gap-10 w-full max-w-full">
			<nav
				className={`w-full max-w-full flex ${gapLayout} justify-center xl:justify-between items-center flex-wrap xl:flex-nowrap`}
			>
				<div className={`flex ${gapLayout} items-center`}>
					<Link href={"/"} className={`p-6 w-max h-full flex justify-center items-center`}>
						<Image src={`/for_dark_backgrounds_no_padding.png`} alt="XNC Logo" width={200} height={200} />
					</Link>
				</div>
				<div className={`w-max items-center justify-end flex gap-6 h-full flex-wrap xl:flex-nowrap`}>
					<Button href="/security">Security</Button>
					<Button href="/electrical">Electrical</Button>
					<Button href="/digital">Digital</Button>
					{/* <Box className="flex flex-col gap-3 justify-center items-center p-3" special>
						<Link href={"/security"}>
							<Title type="h2" removeTag className="transition ease-in-out hover:opacity-75">
								Security <Shield className="text-primary" />
							</Title>
						</Link>
						<div className="flex gap-6">
							<Button href="/security/cctv">CCTV </Button>
							<Button href="/security/alarms">Alarms </Button>
							<Button href="/security/access-control">Access </Button>
						</div>
					</Box> */}
					{/* <Box className="flex flex-col gap-3 justify-center items-center p-3" special>
                        <Link href={'/security'}>
                            <Title type="h2" removeTag className="transition ease-in-out hover:opacity-75">Digital <Globe className="text-primary" /></Title>
                        </Link>
                        <div className="flex gap-6">
                            <Button href="/digital/websites">Websites</Button>
                            <Button href="/digital/software">Software</Button>
                            <Button href="/digital/hosting">Hosting</Button>
                        </div>
                    </Box> */}
				</div>
				<div className="flex flex-col justify-between gap-3">
					<div className={`w-full h-full flex justify-between items-center gap-6`}>
						<span className="text-xl">
							Making tech, <strong className="text-primary">work</strong>.
						</span>
						<Button href="/contact">Contact</Button>
					</div>
					<div className="flex gap-3 items-center">
						<Link href={"tel:+441516650775"} className="relative w-max group">
							<div className="absolute left-0 -bottom-1 w-1/3 h-[2px] bg-primary group-hover:w-full transition-all ease-in-out"></div>
							<Title type="h4" removeTag>
								0151 665 0775
							</Title>
						</Link>
						<span className="text-primary">{`//`}</span>
						<Link href={"mailto:hello@xonical.co.uk"} className="relative w-max group">
							<div className="absolute left-0 -bottom-1 w-1/3 h-[2px] bg-primary group-hover:w-full transition-all ease-in-out"></div>
							<Title type="h4" removeTag>
								hello@xonical.co.uk
							</Title>
						</Link>
					</div>
				</div>
			</nav>
			{/* {showModal && path === "/" &&
                <div className="w-full bg-secondary rounded-md py-3 px-6 flex justify-between items-center gap-3 flex-wrap xl:flex-nowrap">
                    <div className="flex gap-12 items-center flex-wrap xl:flex-nowrap">
                        <Title type="h3" removeTag>
                            {`Our locations`}
                        </Title>
                        <Row type="layout" className="w-max flex-wrap xl:flex-nowrap" reduceGap>
                            <Row type="content" className="items-center" reduceGap>
                                <MapPin size={iconSize} className="text-primary" />
                                <span>Merseyside</span>
                            </Row>
                            <Row type="content" className="items-center" reduceGap>
                                <MapPin size={iconSize} className="text-primary" />
                                <span>Cheshire</span>
                            </Row>
                            <Row type="content" className="items-center" reduceGap>
                                <MapPin size={iconSize} className="text-primary" />
                                <span>Flintshire</span>
                            </Row>
                            <Row type="content" className="items-center" reduceGap>
                                <MapPin size={iconSize} className="text-primary" />
                                <span>Denbighshire</span>
                            </Row>
                            <Row type="content" className="items-center" reduceGap>
                                <MapPin size={iconSize} className="text-primary" />
                                <span>Conwy</span>
                            </Row>
                        </Row>
                    </div>
                    <small>
                        {`We cover the entire UK, don't worry if you're not in these areas.`}
                    </small>
                    <Button onClick={() => setShowModal(false)} removeMinWidth>
                        <X size={iconSize} />
                    </Button>
                </div>
            } */}
		</div>
	);
}
