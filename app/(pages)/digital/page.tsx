import Box from "@/app/components/Box";
import Button from "@/app/components/Button";
import Col from "@/app/components/Col";
import Paragraph from "@/app/components/Paragraph";
import Row from "@/app/components/Row";
import Title from "@/app/components/Title";
import { iconSize } from "@/app/globals/defaults";
import { ChevronRight, Globe, Layout, Server, Terminal } from "lucide-react";
import Image from "next/image";

export default function Page() {
	return (
		<Col type="layout">
			<Box background="dark" special className="p-6">
				<Globe size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" />
				<Col type="content" className="justify-between z-50">
					<Title type="h1" className="text-primary">
						Digital Services across the North West and North Wales
					</Title>
					<Col type="content" reduceGap>
						<Paragraph>{`The local experts in digital services across the North West and North Wales.`}</Paragraph>
						<Paragraph>{` Whether you need a captivating website, tailored software, or reliable hosting, we've got you covered.`}</Paragraph>
						<Paragraph>{`Explore our range of digital solutions to see why we're the trusted choice for online success throughout the North West and North Wales.`}</Paragraph>
					</Col>

					<Col type="layout">
						<Row type="layout">
							<Box className="basis-full xl:basis-1/3" background="light">
								<Col type="content" className="z-50">
									<Title type="h2">
										Websites <Layout className="text-primary" />
									</Title>
									<Col type="content" reduceGap>
										<Paragraph>{`Expertly crafted websites that work for everyone.`}</Paragraph>
										<Paragraph>{`Get online or boost your online presence with our professional website design and development services.`}</Paragraph>
									</Col>
									<Button href="/digital/websites">
										Website design & build <ChevronRight size={iconSize} />
									</Button>
								</Col>
								{/* <Image  src={'/textures/texture_4.png'} alt="XNC Digital - Website Services" width={500} height={100} className="rounded-md absolute w-full h-full top-0 left-0 opacity-40 object-cover z-0" /> */}
							</Box>
							<Box className="basis-full xl:basis-1/3" background="light">
								<Col type="content" className="z-50">
									<Title type="h2">
										Hosting <Server className="text-primary" />
									</Title>
									<Col type="content" reduceGap>
										<Paragraph>{`Email and web hosting solutions for your business that are simple, fast, and reliable.`}</Paragraph>
										<Paragraph>{`Never deal with a slow or unreliable website again with our dedicated hosting services.`}</Paragraph>
									</Col>
									<Button href="/digital/hosting">
										Fast, reliable hosting <ChevronRight size={iconSize} />
									</Button>
								</Col>
								{/* <Image  src={'/textures/texture_6.png'} alt="XNC Digital - Hosting Services" width={500} height={100} className="rounded-md absolute w-full h-full top-0 left-0 opacity-40 object-cover z-0" /> */}
							</Box>
							<Box className="basis-full xl:basis-1/3" background="light">
								<Col type="content" className="z-50">
									<Title type="h2">
										Software <Terminal className="text-primary" />
									</Title>
									<Col type="content" reduceGap>
										<Paragraph>{`Bespoke software solutions created in-line with your business needs.`}</Paragraph>
										<Paragraph>{`Streamline your operations and improve efficiency with custom software developed by our experienced team.`}</Paragraph>
									</Col>
									<Button href="/digital/software">
										Bespoke software <ChevronRight size={iconSize} />
									</Button>
								</Col>
								{/* <Image  src={'/textures/texture_5.png'} alt="XNC Digital - Software Services" width={500} height={100} className="rounded-md absolute w-full h-full top-0 left-0 opacity-40 object-cover z-0" /> */}
							</Box>
						</Row>
					</Col>
				</Col>
				<Image
					src={"/textures/texture_3.png"}
					alt="XNC Digital - Services"
					width={500}
					height={100}
					className="rounded-md absolute w-full h-full top-0 left-0 opacity-40 object-cover z-0"
				/>
			</Box>
		</Col>
	);
}
