import Box from "@/app/components/Box";
import Col from "@/app/components/Col";
import Paragraph from "@/app/components/Paragraph";
import Row from "@/app/components/Row";
import Title from "@/app/components/Title";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "XNC | Electrical Inspections North West and North Wales",
	description:
		"Explore expert electrical inspection services in the North West and North Wales. We provide thorough and reliable inspections for homes and businesses, ensuring safety and compliance of electrical systems in the region.",
};

export default function Page() {
	return (
		<Col type="layout">
			<Box background="dark">
				{/* <ClipboardCheck size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" /> */}
				<Col type="content" className="justify-between z-50">
					<Title type="h1" className="text-primary">
						Electrical Inspections local to the North West and North Wales
					</Title>
					<Col type="content" reduceGap>
						<Paragraph>{`Welcome to the leading providers of electrical inspection services in the North West and North Wales.`}</Paragraph>
						<Paragraph>{`We are dedicated to ensuring the safety and compliance of your electrical systems, whether for residential or commercial properties.`}</Paragraph>
						<Paragraph>{`Explore our comprehensive inspection services and find out why we're the trusted choice for thorough and reliable electrical inspections across the North West and North Wales.`}</Paragraph>
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
								<Title type="h3">Comprehensive safety checks</Title>
								<Paragraph>
									{`Our thorough safety checks cover all aspects of your electrical systems, identifying potential hazards and ensuring compliance with the latest safety standards.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Detailed reports</Title>
								<Paragraph>
									{`Receive detailed inspection reports with clear recommendations for any necessary remedial work, helping you maintain a safe and compliant environment.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Experienced inspectors</Title>
								<Paragraph>
									{`Our team of experienced inspectors brings years of expertise in identifying and resolving electrical issues, providing peace of mind for your property.`}
								</Paragraph>
							</Col>
						</Box>
					</Row>
					<Row type="layout">
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Periodic inspections</Title>
								<Paragraph>
									{`Regular periodic inspections to ensure the ongoing safety and compliance of your electrical systems, helping prevent issues before they arise.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Pre-purchase inspections</Title>
								<Paragraph>
									{`Considering buying a property? Our pre-purchase inspections provide a comprehensive evaluation of the electrical systems, so you can make informed decisions.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Compliance certification</Title>
								<Paragraph>
									{`Ensure your property meets all necessary legal requirements with our compliance certification services, providing official documentation for peace of mind.`}
								</Paragraph>
							</Col>
						</Box>
					</Row>
				</Col>
				<Image
					src={"/textures/texture_2.png"}
					alt="XNC Electrical - Inspection Services"
					width={0}
					height={0}
					className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
				/>
			</Box>
		</Col>
	);
}
