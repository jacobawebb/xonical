import {
	Bolt,
	ChevronRight,
	ClipboardCheck,
	Fingerprint,
	Globe,
	Layout,
	LucideEye,
	Server,
	Shield,
	Siren,
	Terminal,
	Wrench,
	Zap,
} from "lucide-react";
import Image from "next/image";
import Box from "./components/Box";
import Button from "./components/Button";
import Col from "./components/Col";
import Paragraph from "./components/Paragraph";
import Row from "./components/Row";
import Title from "./components/Title";
import { iconSize } from "./globals/defaults";

export default function Home() {
	return (
		<Col type="layout" className="items-center">
			<Row type="layout">
				<Box className="w-full rounded-lg h-[400px] flex justify-center items-center" special background="dark">
					<div className="flex flex-col gap-6 w-full h-full p-6 z-50">
						<span className="text-primary font-bold text-4xl mt-10">
							Connecting <strong className="text-colorText">you</strong> to a better world.
						</span>
						<Paragraph limit>
							In today&apos;s fast-paced digital age, ensuring the security of your home or local business and
							establishing a strong online presence are paramount.
						</Paragraph>
						<Paragraph limit>
							That&apos;s where XNC comes in, your trusted partner for all things security and development (digital).
						</Paragraph>
						<Button href="/">
							Learn more <ChevronRight size={iconSize} />
						</Button>
					</div>
					<div className="absolute z-40 bg-gradient-to-r from-colorBackground to-transparent rounded-lg w-full h-full left-0 bottom-0"></div>
					<Image src="/textures/texture_5.png" alt="network" className="rounded-lg object-cover z-0" fill />
				</Box>
			</Row>
			<Col type="layout">
				<Box className="basis-1/2">
					<Shield size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" />
					<Col type="content" className="justify-between z-25">
						<Title type="h1">
							Security <Shield className="text-primary" />
						</Title>
						<Col type="content" reduceGap>
							<Paragraph>{`As a trusted security provider, we specialize in safeguarding homes and businesses with state-of-the-art solutions.`}</Paragraph>
							<Paragraph>{`Offering comprehensive services including CCTV surveillance, advanced alarm systems, and precise access control measures.`}</Paragraph>
							<Paragraph>{`Count on our expertise for round-the-clock protection, ensuring peace of mind.`}</Paragraph>
							<Button href="/security">
								Security solutions <ChevronRight size={iconSize} />
							</Button>
						</Col>
						<Col type="layout">
							<Row type="layout">
								<Box background="light" className="basis-full xl:basis-1/3">
									<Col type="content" className="z-50">
										<Title type="h2">
											CCTV <LucideEye className="text-primary" />
										</Title>
										<Col type="content" reduceGap>
											<Paragraph>{`CCTV services for homes and businesses, with top-tier technology and 24/7 access.`}</Paragraph>
											<Paragraph>{`Count on us when it comes to protecting what's yours.`}</Paragraph>
										</Col>
										<Button href="/security/cctv">
											CCTV services <ChevronRight size={iconSize} />
										</Button>
									</Col>
									<Image
										src={"/textures/texture_1.png"}
										alt="XNC Security - CCTV Services"
										width={500}
										height={100}
										className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
									/>
								</Box>
								<Box background="light" className="basis-full xl:basis-1/3">
									<Col type="content" className="z-50">
										<Title type="h2">
											Alarms <Siren className="text-primary" />
										</Title>
										<Col type="content" reduceGap>
											<Paragraph>{`Enhance security with our cutting-edge alarm systems, offering reliable protection for homes and businesses.`}</Paragraph>
											<Paragraph>{`Choose from fully wireless or wired systems.`}</Paragraph>
										</Col>
										<Button href="/security/alarms">
											Alarm systems <ChevronRight size={iconSize} />
										</Button>
									</Col>
									<Image
										src={"/textures/texture_3.png"}
										alt="XNC Security - CCTV Services"
										width={500}
										height={100}
										className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
									/>
								</Box>
								<Box background="light" className="basis-full xl:basis-1/3">
									<Col type="content" className="z-50">
										<Title type="h2">
											Access <Fingerprint className="text-primary" />
										</Title>
										<Col type="content" reduceGap>
											<Paragraph>{`Elevate security and control with our cutting-edge Access Control solutions.`}</Paragraph>
											<Paragraph>{`Take control of what's yours.`}</Paragraph>
										</Col>
										<Button href="/security/access-control">
											Access Control solutions <ChevronRight size={iconSize} />
										</Button>
									</Col>
									<Image
										src={"/textures/texture_2.png"}
										alt="XNC Security - CCTV Services"
										width={500}
										height={100}
										className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
									/>
								</Box>
							</Row>
						</Col>
					</Col>
				</Box>

				<Box className="basis-1/2">
					<Zap size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" />
					<Col type="content" className="justify-between z-25">
						<Title type="h1">
							Electrical <Zap className="text-primary" />
						</Title>
						<Col type="content" reduceGap>
							<Paragraph>{`As a trusted electrical services provider, we specialize in delivering reliable and efficient solutions for residential, commercial, and industrial clients.`}</Paragraph>
							<Paragraph>{`Offering comprehensive services including installations, inspections, and maintenance.`}</Paragraph>
							<Paragraph>{`Count on our expertise for quality work and safety compliance, ensuring your electrical systems are running smoothly.`}</Paragraph>
							<Button href="/electrical">
								Electrical solutions <ChevronRight size={iconSize} />
							</Button>
						</Col>
						<Col type="layout">
							<Row type="layout">
								<Box background="light" className="basis-full xl:basis-1/3">
									<Col type="content" className="z-50">
										<Title type="h2">
											Installations <Wrench className="text-primary" />
										</Title>
										<Col type="content" reduceGap>
											<Paragraph>{`Professional electrical installations for homes and businesses, ensuring safety and efficiency with every project.`}</Paragraph>
											<Paragraph>{`Trust us for all your installation needs, from lighting to power outlets and beyond.`}</Paragraph>
										</Col>
										<Button href="/electrical/installations">
											Installation services <ChevronRight size={iconSize} />
										</Button>
									</Col>
									<Image
										src={"/textures/texture_1.png"}
										alt="XNC Electrical - Installation Services"
										width={500}
										height={100}
										className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
									/>
								</Box>
								<Box background="light" className="basis-full xl:basis-1/3">
									<Col type="content" className="z-50">
										<Title type="h2">
											Inspections <ClipboardCheck className="text-primary" />
										</Title>
										<Col type="content" reduceGap>
											<Paragraph>{`Ensure the safety and compliance of your electrical systems with our detailed inspection services.`}</Paragraph>
											<Paragraph>{`We offer thorough inspections to identify and resolve potential issues before they become problems.`}</Paragraph>
										</Col>
										<Button href="/electrical/inspections">
											Inspection services <ChevronRight size={iconSize} />
										</Button>
									</Col>
									<Image
										src={"/textures/texture_3.png"}
										alt="XNC Electrical - Inspection Services"
										width={500}
										height={100}
										className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
									/>
								</Box>
								<Box background="light" className="basis-full xl:basis-1/3">
									<Col type="content" className="z-50">
										<Title type="h2">
											Maintenance <Wrench className="text-primary" />
										</Title>
										<Col type="content" reduceGap>
											<Paragraph>{`Keep your electrical systems in top condition with our regular maintenance services.`}</Paragraph>
											<Paragraph>{`Preventive care to ensure longevity and efficiency of your electrical installations.`}</Paragraph>
										</Col>
										<Button href="/electrical/maintenance">
											Maintenance services <ChevronRight size={iconSize} />
										</Button>
									</Col>
									<Image
										src={"/textures/texture_2.png"}
										alt="XNC Electrical - Maintenance Services"
										width={500}
										height={100}
										className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
									/>
								</Box>
							</Row>
						</Col>
					</Col>
				</Box>

				<Box className="basis-1/2">
					<Globe size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" />
					<Col type="content" className="justify-between z-25">
						<Title type="h1">
							Digital <Globe className="text-primary" />
						</Title>
						<Col type="content" reduceGap>
							<Paragraph>{`Unlock the full potential the digital world with our hand-crafted solutions.`}</Paragraph>
							<Paragraph>{`We thrive on designing and developing captivating websites and creating tailored software solutions that meet your unique needs`}</Paragraph>
							<Paragraph>{`Don't worry, we can also take care of the hosting for you too.`}</Paragraph>
							<Paragraph>{`Your trusted partner in the digital realm.`}</Paragraph>
							<Button href="/digital">
								Digital solutions <ChevronRight size={iconSize} />
							</Button>
						</Col>
						<Col type="layout">
							<Row type="layout">
								<Box background="light" className="basis-full xl:basis-1/3">
									<Col type="content" className="z-40">
										<Title type="h2">
											Websites <Layout className="text-primary" />
										</Title>
										<Col type="content" reduceGap>
											<Paragraph>{`Expertly crafted websites that work for everyone.`}</Paragraph>
											<Paragraph>{`Get online or boost your online presence.`}</Paragraph>
										</Col>
										<Button href="/digital/websites">
											Website design & build <ChevronRight size={iconSize} />
										</Button>
									</Col>
									<Image
										src={"/textures/texture_4.png"}
										alt="XNC Security - CCTV Services"
										width={500}
										height={100}
										className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
									/>
								</Box>
								<Box background="light" className="basis-full xl:basis-1/3">
									<Col type="content" className="z-40">
										<Title type="h2">
											Hosting <Server className="text-primary" />
										</Title>
										<Col type="content" reduceGap>
											<Paragraph>{`Email and web hosting for your business, simple, fast.`}</Paragraph>
											<Paragraph>{`Never deal with a slow website again.`}</Paragraph>
										</Col>
										<Button href="/digital/hosting">
											Fast, reliable hosting <ChevronRight size={iconSize} />
										</Button>
									</Col>
									<Image
										src={"/textures/texture_6.png"}
										alt="XNC Security - CCTV Services"
										width={500}
										height={100}
										className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
									/>
								</Box>
								<Box background="light" className="basis-full xl:basis-1/3">
									<Col type="content" className="z-40">
										<Title type="h2">
											Software <Terminal className="text-primary" />
										</Title>
										<Col type="content" reduceGap>
											<Paragraph>{`Bespoke software created in-line with your business needs.`}</Paragraph>
											<Paragraph>{`Streamline your operations with a dedicated team of software developers.`}</Paragraph>
										</Col>
										<Button href="/digital/software">
											Bespoke software <ChevronRight size={iconSize} />
										</Button>
									</Col>
									<Image
										src={"/textures/texture_5.png"}
										alt="XNC Security - CCTV Services"
										width={500}
										height={100}
										className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
									/>
								</Box>
							</Row>
						</Col>
					</Col>
				</Box>
			</Col>
		</Col>
	);
}
