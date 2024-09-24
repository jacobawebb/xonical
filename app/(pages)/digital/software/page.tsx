import Box from "@/app/components/Box";
import Col from "@/app/components/Col";
import Paragraph from "@/app/components/Paragraph";
import Row from "@/app/components/Row";
import Title from "@/app/components/Title";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "XNC | Custom Web & Mobile Software Development North West and North Wales",
	description:
		"Explore custom web and mobile software development services in the North West and North Wales. We create tailored software solutions that help businesses streamline operations, enhance user experiences, and achieve their digital goals.",
};

export default function Page() {
	return (
		<Col type="layout">
			<Box background="dark">
				{/* <Terminal size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" /> */}
				<Col type="content" className="justify-between z-50">
					<Title type="h1" className="text-primary">
						Custom Web & Mobile Software Development local to the North West and North Wales
					</Title>
					<Col type="content" reduceGap>
						<Paragraph>{`Welcome to your trusted partner for custom web and mobile software development in the North West and North Wales.`}</Paragraph>
						<Paragraph>{`We specialize in building bespoke software solutions tailored to your business needs, helping you streamline operations, enhance user experiences, and achieve your digital goals.`}</Paragraph>
						<Paragraph>{`Explore our software development services and discover why we’re the preferred choice for businesses looking to innovate and grow through technology across the North West and North Wales.`}</Paragraph>
					</Col>
				</Col>
			</Box>
			<Box>
				<Col type="content" className="z-50">
					<Title type="h2" className="text-primary">
						Why choose XNC for your custom software needs?
					</Title>
					<Row type="layout">
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Tailored solutions</Title>
								<Paragraph>
									{`We create bespoke software solutions that are specifically designed to meet the unique requirements of your business, ensuring maximum efficiency and effectiveness.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Cross-platform development</Title>
								<Paragraph>
									{`Our expertise in cross-platform development allows us to build web and mobile applications that deliver consistent performance and user experience across all devices.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Scalable architecture</Title>
								<Paragraph>
									{`We design scalable software architectures that grow with your business, ensuring your solutions can handle increased demand and evolving needs.`}
								</Paragraph>
							</Col>
						</Box>
					</Row>
					<Row type="layout">
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">User-centric design</Title>
								<Paragraph>
									{`Our focus on user-centric design ensures that your software is intuitive, engaging, and provides a seamless experience for your customers.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Integration capabilities</Title>
								<Paragraph>
									{`We integrate your software with existing systems and third-party services, providing a cohesive digital ecosystem that enhances functionality and productivity.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Ongoing support & updates</Title>
								<Paragraph>
									{`Our relationship doesn’t end at delivery. We provide ongoing support and regular updates to ensure your software remains up-to-date and continues to meet your business needs.`}
								</Paragraph>
							</Col>
						</Box>
					</Row>
				</Col>
				<Image
					src={"/textures/texture_5.png"}
					alt="XNC Digital - Custom Software Development"
					width={0}
					height={0}
					className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
				/>
			</Box>
		</Col>
	);
}
