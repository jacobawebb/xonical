import Box from "@/app/components/Box";
import Button from "@/app/components/Button";
import Col from "@/app/components/Col";
import Paragraph from "@/app/components/Paragraph";
import Row from "@/app/components/Row";
import Title from "@/app/components/Title";
import { iconSize } from "@/app/globals/defaults";
import { ChevronRight, Fingerprint, LucideEye, Shield, Siren } from "lucide-react";
import Image from "next/image";

export default function Page() {
    return (
        <Col type="layout">
            <Box background="dark" special className="p-6">
                <Shield size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" />
                <Col type="content" className="justify-between z-50">
                    <Title type="h1" className="text-primary">Security Systems across the North West and North Wales</Title>
                    <Col type="content" reduceGap>
                        <Paragraph>{`The local experts in security systems across the North West and North Wales.`}</Paragraph>
                        <Paragraph>{` If you're in need of high-quality CCTV, reliable alarm systems, or cutting-edge access control solutions, look no further.`}</Paragraph>
                        <Paragraph>{`Explore our range of services to see why we're the trusted choice for safeguarding homes and businesses throughout the North West and North Wales.`}</Paragraph>
                    </Col>
                    <Col type="layout">
                        <Row type="layout">
                            <Box className="basis-full xl:basis-1/3" background="light">
                                <Col type="content" className="z-50">
                                    <Title type="h2">CCTV <LucideEye className="text-primary" /></Title>
                                    <Col type="content" reduceGap>
                                        <Paragraph>{`CCTV services for homes and businesses, with top-tier technology and 24/7 access.`}</Paragraph>
                                        <Paragraph>{`Count on us when it comes to protecting what's yours.`}</Paragraph>
                                    </Col>
                                    <Button href="/security/cctv">CCTV services <ChevronRight size={iconSize} /></Button>
                                </Col>
                                {/* <Image unoptimized={true} src={'/textures/texture_1.png'} alt="XNC Security - CCTV Services" width={500} height={100} className="rounded-md absolute w-full h-full top-0 left-0 opacity-40 object-cover z-0" /> */}
                            </Box>
                            <Box className="basis-full xl:basis-1/3" background="light">
                                <Col type="content" className="z-50">
                                    <Title type="h2">Alarms <Siren className="text-primary" /></Title>
                                    <Col type="content" reduceGap>
                                        <Paragraph>{`Enhance security with our cutting-edge alarm systems, offering reliable protection for homes and businesses.`}</Paragraph>
                                        <Paragraph>{`Choose from fully wireless or wired systems.`}</Paragraph>
                                    </Col>
                                    <Button href="/security/alarms">Alarm systems <ChevronRight size={iconSize} /></Button>
                                </Col>
                                {/* <Image unoptimized={true} src={'/textures/texture_3.png'} alt="XNC Security - CCTV Services" width={500} height={100} className="rounded-md absolute w-full h-full top-0 left-0 opacity-40 object-cover z-0" /> */}
                            </Box>
                            <Box className="basis-full xl:basis-1/3" background="light">
                                <Col type="content" className="z-50">
                                    <Title type="h2">Access <Fingerprint className="text-primary" /></Title>
                                    <Col type="content" reduceGap>
                                        <Paragraph>{`Elevate security and control with our cutting-edge Access Control solutions.`}</Paragraph>
                                        <Paragraph>{`Take control of what's yours.`}</Paragraph>
                                    </Col>
                                    <Button href="/security/access-control">Access Control solutions <ChevronRight size={iconSize} /></Button>
                                </Col>
                                {/* <Image unoptimized={true} src={'/textures/texture_2.png'} alt="XNC Security - CCTV Services" width={500} height={100} className="rounded-md absolute w-full h-full top-0 left-0 opacity-40 object-cover z-0" /> */}
                            </Box>
                        </Row>
                    </Col>
                </Col>
                <Image unoptimized={true} src={'/textures/texture_7.png'} alt="XNC Security - CCTV Services" width={500} height={100} className="rounded-md absolute w-full h-full top-0 left-0 opacity-40 object-cover z-0" />
            </Box >
        </Col >
    )
}
