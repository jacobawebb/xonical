import Box from "@/app/components/Box";
import Col from "@/app/components/Col";
import Paragraph from "@/app/components/Paragraph";
import Row from "@/app/components/Row";
import Title from "@/app/components/Title";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "XNC | Web Hosting Services North West and North Wales",
	description:
		"Explore professional web hosting services in the North West and North Wales. We offer reliable, secure, and high-performance hosting solutions for businesses of all sizes, ensuring your online presence is fast, secure, and always available.",
};

export default function Page() {
	return (
		<Col type="layout">
			<Box background="dark">
				{/* <Server size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" /> */}
				<Col type="content" className="justify-between z-50">
					<Title type="h1" className="text-primary">
						Web Hosting Services local to the North West and North Wales
					</Title>
					<Col type="content" reduceGap>
						<Paragraph>{`Welcome to your trusted provider of web hosting services in the North West and North Wales.`}</Paragraph>
						<Paragraph>{`We specialize in delivering reliable, secure, and high-performance hosting solutions for businesses of all sizes, ensuring your website is always fast, secure, and available.`}</Paragraph>
						<Paragraph>{`Explore our hosting services and discover why we’re the preferred choice for businesses looking to establish a strong and reliable online presence throughout the North West and North Wales.`}</Paragraph>
					</Col>
				</Col>
			</Box>
			<Box>
				<Col type="content" className="z-50">
					<Title type="h2" className="text-primary">
						Why choose XNC for your hosting needs?
					</Title>
					<Row type="layout">
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Reliable uptime</Title>
								<Paragraph>
									{`Our hosting services guarantee reliable uptime, so your website is always accessible to your customers, providing a seamless online experience.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Advanced security</Title>
								<Paragraph>
									{`Protect your website with our advanced security features, including regular backups, malware scanning, and SSL certificates to keep your data safe.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">High performance</Title>
								<Paragraph>
									{`Experience high-performance hosting with our optimized servers, delivering fast load times and a smooth browsing experience for your visitors.`}
								</Paragraph>
							</Col>
						</Box>
					</Row>
					<Row type="layout">
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Scalable solutions</Title>
								<Paragraph>
									{`Our hosting plans are scalable to meet the growing needs of your business, providing the flexibility to upgrade your resources as your website traffic increases.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Email hosting</Title>
								<Paragraph>
									{`Get professional email hosting with your domain name, enhancing your business communication and brand credibility.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">24/7 support</Title>
								<Paragraph>
									{`Our dedicated support team is available 24/7 to assist you with any issues or questions, ensuring your website is always running smoothly.`}
								</Paragraph>
							</Col>
						</Box>
					</Row>
				</Col>
				<Image
					src={"/textures/texture_6.png"}
					alt="XNC Digital - Web Hosting Services"
					width={0}
					height={0}
					className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
				/>
			</Box>
		</Col>
	);
}
