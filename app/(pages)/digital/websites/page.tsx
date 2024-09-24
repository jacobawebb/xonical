import Box from "@/app/components/Box";
import Col from "@/app/components/Col";
import Paragraph from "@/app/components/Paragraph";
import Row from "@/app/components/Row";
import Title from "@/app/components/Title";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "XNC | Website Design & Development North West and North Wales",
	description:
		"Explore professional website design and development services in the North West and North Wales. We create captivating, responsive, and user-friendly websites that help businesses establish a strong online presence.",
};

export default function Page() {
	return (
		<Col type="layout">
			<Box background="dark">
				{/* <Layout size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" /> */}
				<Col type="content" className="justify-between z-50">
					<Title type="h1" className="text-primary">
						Website Design & Development local to the North West and North Wales
					</Title>
					<Col type="content" reduceGap>
						<Paragraph>{`Welcome to your trusted partner for website design and development in the North West and North Wales.`}</Paragraph>
						<Paragraph>{`We specialize in creating stunning, responsive, and user-friendly websites tailored to your business needs, helping you stand out online.`}</Paragraph>
						<Paragraph>{`Explore our web design services and discover why we’re the preferred choice for building impactful online experiences throughout the North West and North Wales.`}</Paragraph>
					</Col>
				</Col>
			</Box>
			<Box>
				<Col type="content" className="z-50">
					<Title type="h2" className="text-primary">
						Why choose XNC for your website?
					</Title>
					<Row type="layout">
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Custom design</Title>
								<Paragraph>
									{`Our custom-designed websites are built to reflect your brand identity, creating a unique and engaging online presence that resonates with your audience.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Responsive development</Title>
								<Paragraph>
									{`Every website we build is fully responsive, ensuring a seamless and optimized user experience across all devices, from desktops to mobile phones.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">SEO-friendly</Title>
								<Paragraph>
									{`We implement best SEO practices in our web development process, helping your website rank higher on search engines and attract more organic traffic.`}
								</Paragraph>
							</Col>
						</Box>
					</Row>
					<Row type="layout">
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">E-commerce solutions</Title>
								<Paragraph>
									{`Looking to sell online? We build e-commerce websites with integrated shopping carts, payment gateways, and user-friendly management systems to boost your sales.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Content management systems</Title>
								<Paragraph>
									{`We empower you with easy-to-use content management systems (CMS) so you can update and manage your website content without any technical skills.`}
								</Paragraph>
							</Col>
						</Box>
						<Box className="basis-full xl:basis-1/3">
							<Col type="content">
								<Title type="h3">Ongoing support & maintenance</Title>
								<Paragraph>
									{`Our commitment doesn’t end with the launch. We provide ongoing support and maintenance services to keep your website running smoothly and up-to-date.`}
								</Paragraph>
							</Col>
						</Box>
					</Row>
				</Col>
				<Image
					src={"/textures/texture_4.png"}
					alt="XNC Digital - Website Design & Development"
					width={0}
					height={0}
					className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0"
				/>
			</Box>
		</Col>
	);
}
