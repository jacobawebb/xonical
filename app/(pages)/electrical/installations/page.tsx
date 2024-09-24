import Box from "@/app/components/Box";
import Col from "@/app/components/Col";
import Paragraph from "@/app/components/Paragraph";
import Row from "@/app/components/Row";
import Title from "@/app/components/Title";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "XNC | Electrical Installations North West and North Wales",
	description:
		"Explore expert electrical installation services in the North West and North Wales. We provide tailored electrical solutions for homes and businesses, earning our reputation as the trusted choice for reliable electrical installations in the region.",
};

export default function Page() {
	return (
		<Col type="layout">
			<Box background="dark">
				{/* <Zap size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" /> */}
				<Col type="content" className="justify-between z-50">
					<Title type="h1" className="text-primary">
						Electrical Installations local to the North West and North Wales
					</Title>
					<Col type="content" reduceGap>
						<Paragraph>{`Step into the world of electrical installation specialists who serve the North West and North Wales.`}</Paragraph>
						<Paragraph>{`We take pride in delivering top-tier electrical solutions tailored to your needs. Whether it's for your home or business, our services ensure safety and efficiency.`}</Paragraph>
						<Paragraph>{`Explore our offerings and discover why we're the preferred choice for reliable electrical installations across the North West and North Wales.`}</Paragraph>
					</Col>
				</Col>
			</Box>
			<Box>
				<Col type="content" className="z-50">
					<Title type="h2" className="text-primary">
						Why choose XNC?
					</Title>
					<Row type="layout">
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Expert installation service</Title>
								<Paragraph>
									{`Experience peace of mind with our professional electrical installation services, backed by years of expertise in handling complex electrical systems.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Unparalleled support team</Title>
								<Paragraph>
									{`Rely on our unparalleled support team for expert assistance and guidance, ensuring your electrical systems operate seamlessly and safely.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Comprehensive solutions</Title>
								<Paragraph>
									{`From lighting and wiring to power systems and safety inspections, we offer comprehensive electrical solutions for all your needs.`}
								</Paragraph>
							</Col>
						</Box>
					</Row>
					<Row type="layout">
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Energy-efficient installations</Title>
								<Paragraph>
									{`Upgrade your property with energy-efficient installations, helping you save on energy costs while contributing to a sustainable future.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Regular maintenance & inspections</Title>
								<Paragraph>
									{`Ensure the longevity and safety of your electrical systems with our regular maintenance and inspection services, identifying potential issues before they become problems.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Smart home integration</Title>
								<Paragraph>
									{`Experience the future with smart home integration, allowing you to control lighting, security, and energy systems from your mobile device.`}
								</Paragraph>
							</Col>
						</Box>
					</Row>
				</Col>
				<Image
					src={"/textures/texture_1.png"}
					alt="XNC Electrical - Installation Services"
					width={0}
					height={0}
					className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
				/>
			</Box>
		</Col>
	);
}
