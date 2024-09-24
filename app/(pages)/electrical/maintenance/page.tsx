import Box from "@/app/components/Box";
import Col from "@/app/components/Col";
import Paragraph from "@/app/components/Paragraph";
import Row from "@/app/components/Row";
import Title from "@/app/components/Title";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "XNC | Electrical Maintenance North West and North Wales",
	description:
		"Explore expert electrical maintenance services in the North West and North Wales. We provide reliable maintenance solutions for homes and businesses, ensuring the longevity and safety of your electrical systems in the region.",
};

export default function Page() {
	return (
		<Col type="layout">
			<Box background="dark">
				{/* <Tool size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" /> */}
				<Col type="content" className="justify-between z-50">
					<Title type="h1" className="text-primary">
						Electrical Maintenance local to the North West and North Wales
					</Title>
					<Col type="content" reduceGap>
						<Paragraph>{`Welcome to the leading providers of electrical maintenance services in the North West and North Wales.`}</Paragraph>
						<Paragraph>{`We specialize in maintaining the health and safety of your electrical systems, whether for residential, commercial, or industrial properties.`}</Paragraph>
						<Paragraph>{`Explore our comprehensive maintenance services and find out why we're the trusted choice for keeping electrical systems running smoothly across the North West and North Wales.`}</Paragraph>
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
								<Title type="h3">Preventive maintenance</Title>
								<Paragraph>
									{`Ensure the longevity and optimal performance of your electrical systems with our preventive maintenance services, identifying and addressing issues before they escalate.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">24/7 emergency support</Title>
								<Paragraph>
									{`Our dedicated team offers 24/7 emergency support to handle any unexpected electrical issues, ensuring minimal downtime and disruption to your operations.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Scheduled maintenance plans</Title>
								<Paragraph>
									{`Tailored scheduled maintenance plans to fit your specific needs, keeping your electrical systems in top condition with regular check-ups and servicing.`}
								</Paragraph>
							</Col>
						</Box>
					</Row>
					<Row type="layout">
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Safety compliance checks</Title>
								<Paragraph>
									{`We conduct regular safety compliance checks to ensure your electrical systems meet all regulatory requirements, helping you maintain a safe environment.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">System upgrades & repairs</Title>
								<Paragraph>
									{`Whether it’s upgrading your electrical systems for better efficiency or repairing faulty components, our experts are here to help with all your needs.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Comprehensive documentation</Title>
								<Paragraph>
									{`Receive comprehensive documentation of all maintenance activities, providing you with a clear record of your system’s health and any work performed.`}
								</Paragraph>
							</Col>
						</Box>
					</Row>
				</Col>
				<Image
					src={"/textures/texture_3.png"}
					alt="XNC Electrical - Maintenance Services"
					width={0}
					height={0}
					className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
				/>
			</Box>
		</Col>
	);
}
