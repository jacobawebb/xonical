import Box from "@/app/components/Box";
import Button from "@/app/components/Button";
import Col from "@/app/components/Col";
import Paragraph from "@/app/components/Paragraph";
import Row from "@/app/components/Row";
import Title from "@/app/components/Title";
import { iconSize } from "@/app/globals/defaults";
import { ChevronRight, Wrench, ClipboardCheck, Zap } from "lucide-react";
import Image from "next/image";

export default function Page() {
	return (
		<Col type="layout">
			<Box background="dark" special className="p-6">
				<Zap size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" />
				<Col type="content" className="justify-between z-50">
					<Title type="h1" className="text-primary">
						Electrical Services across the North West and North Wales
					</Title>
					<Col type="content" reduceGap>
						<Paragraph>{`The local experts in electrical services across the North West and North Wales.`}</Paragraph>
						<Paragraph>{` Whether you need high-quality installations, thorough inspections, or reliable maintenance, we've got you covered.`}</Paragraph>
						<Paragraph>{`Explore our range of services to see why we're the trusted choice for electrical solutions throughout the North West and North Wales.`}</Paragraph>
					</Col>
					<Col type="layout">
						<Row type="layout">
							<Box className="basis-full xl:basis-1/3" background="light">
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
								{/* <Image  src={'/textures/texture_1.png'} alt="XNC Electrical - Installation Services" width={500} height={100} className="rounded-md absolute w-full h-full top-0 left-0 opacity-40 object-cover z-0" /> */}
							</Box>
							<Box className="basis-full xl:basis-1/3" background="light">
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
								{/* <Image  src={'/textures/texture_3.png'} alt="XNC Electrical - Inspection Services" width={500} height={100} className="rounded-md absolute w-full h-full top-0 left-0 opacity-40 object-cover z-0" /> */}
							</Box>
							<Box className="basis-full xl:basis-1/3" background="light">
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
								{/* <Image  src={'/textures/texture_2.png'} alt="XNC Electrical - Maintenance Services" width={500} height={100} className="rounded-md absolute w-full h-full top-0 left-0 opacity-40 object-cover z-0" /> */}
							</Box>
						</Row>
					</Col>
				</Col>
				<Image
					src={"/textures/texture_6.png"}
					alt="XNC Electrical - Services"
					width={500}
					height={100}
					className="rounded-md absolute w-full h-full top-0 left-0 opacity-40 object-cover z-0"
				/>
			</Box>
		</Col>
	);
}
