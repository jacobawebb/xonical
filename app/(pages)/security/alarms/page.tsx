import Box from "@/app/components/Box";
import Col from "@/app/components/Col";
import Paragraph from "@/app/components/Paragraph";
import Row from "@/app/components/Row";
import Title from "@/app/components/Title";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'XNC | Alarm System Installers North West and North Wales',
    description: 'Discover top-tier alarm system installation services in the North West and North Wales with XNC. Elevate your security with our expertise. Get peace of mind today!',
}

export default function Page() {
    return (
        <Col type="layout">
            <Box background="dark">
                {/* <Shield size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" /> */}
                <Col type="content" className="justify-between z-50">
                    <Title type="h1" className="text-primary">Alarm System Installers local to the North West and North Wales</Title>
                    <Col type="content" reduceGap>
                        <Paragraph>{`Your trusted source for Alarm System installation services in the scenic North West and North Wales regions.`}</Paragraph>
                        <Paragraph>{`Our local team of experts brings a wealth of experience to provide tailored security solutions for homes and businesses.`}</Paragraph>
                        <Paragraph>{`Explore our services and discover why we're the go-to choice for safeguarding your peace of mind.`}</Paragraph>
                    </Col>
                </Col>
            </Box>
            <Box>
                <Col type="content" className="z-50">
                    <Title type="h2" className="text-primary">Why choose XNC?</Title>
                    <Row type="layout">
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Expert installation service
                                </Title>
                                <Paragraph>
                                    {`Unlock peace of mind with our professional Alarm System installation services, backed by years of expertise in setting up cutting-edge intrusion detection systems.`}
                                </Paragraph>
                            </Col>
                        </Box>
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Unparelled support team
                                </Title>
                                <Paragraph>
                                    {`Count on our unparalleled support team for expert assistance and guidance, ensuring your Alarm System operates seamlessly, day and night.`}
                                </Paragraph>
                            </Col>
                        </Box>
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Grade 3 (EN 50131)
                                </Title>
                                <Paragraph>
                                    {`Elevate your security with Grade 3 (EN 50131) alarm systems, trusted by arms stores, banks, ATMs, and high-security facilities for top-tier protection`}
                                </Paragraph>
                            </Col>
                        </Box>
                    </Row>
                    <Row type="layout">
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Remote control & alerts
                                </Title>
                                <Paragraph>
                                    {`Gain control and peace of mind with remote control and notifications, trusted by businesses and homeowners for staying connected and secure.`}
                                </Paragraph>
                            </Col>
                        </Box>
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Wired OR Wireless
                                </Title>
                                <Paragraph>
                                    {`Choose flexibility and reliability with wired OR wireless options, perfect for tailoring your security system to your specific needs.`}
                                </Paragraph>
                            </Col>
                        </Box>
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Reliable & secure
                                </Title>
                                <Paragraph>
                                    {`Enhance your security with dependable and secure solutions, trusted by businesses and homeowners alike.`}
                                </Paragraph>
                            </Col>
                        </Box>
                    </Row>
                </Col>
                <Image src={'/alarms.png'} alt="XNC Security - CCTV Services" width={0} height={0} className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0" />
            </Box>
        </Col >
    )
}
