import Box from "@/app/components/Box";
import Col from "@/app/components/Col";
import Paragraph from "@/app/components/Paragraph";
import Row from "@/app/components/Row";
import Title from "@/app/components/Title";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'XNC | CCTV Installers North West and North Wales',
    description: 'Explore expert CCTV installation services in the North West and North Wales.We provide tailored security solutions for homes and businesses, earning our reputation as the trusted choice for safeguarding properties in the region.',
}

export default function Page() {
    return (
        <Col type="layout">
            <Box background="dark">
                {/* <Shield size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" /> */}
                <Col type="content" className="justify-between z-50">
                    <Title type="h1" className="text-primary">CCTV Installers local to the North West and North Wales</Title>
                    <Col type="content" reduceGap>
                        <Paragraph>{`Step into the world of CCTV installation specialists who call the North West and North Wales home.`}</Paragraph>
                        <Paragraph>{`We take pride in delivering top-tier security solutions tailored to your needs. Whether you're protecting your residence or business, our services have you covered.`}</Paragraph>
                        <Paragraph>{`Dive into our offerings and find out why we're the preferred partner for securing properties across the North West and North Wales.`}</Paragraph>
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
                                    {`Unlock peace of mind with our professional CCTV installation services, backed by years of expertise in setting up cutting-edge surveillance systems.`}
                                </Paragraph>
                            </Col>
                        </Box>
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Unparelled support team
                                </Title>
                                <Paragraph>
                                    {`Count on our unparalleled support team for expert assistance and guidance, ensuring your CCTV system operates seamlessly, day and night.`}
                                </Paragraph>
                            </Col>
                        </Box>
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Ultra 4K HD Quality
                                </Title>
                                <Paragraph>
                                    {`Elevate your security with ultra 4K HD quality, capturing every detail in crystal-clear precision for unbeatable surveillance clarity`}
                                </Paragraph>
                            </Col>
                        </Box>
                    </Row>
                    <Row type="layout">
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Remote access & mobile viewing
                                </Title>
                                <Paragraph>
                                    {`Stay connected and in control with seamless remote access and mobile viewing, putting your security at your fingertips, wherever you are.`}
                                </Paragraph>
                            </Col>
                        </Box>
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Storage & playback
                                </Title>
                                <Paragraph>
                                    {`Effortlessly store and playback your surveillance footage with our reliable storage solutions, ensuring easy access to critical video evidence.`}
                                </Paragraph>
                            </Col>
                        </Box>
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Motion detection & alerts
                                </Title>
                                <Paragraph>
                                    {`Experience proactive security with motion detection and instant alerts, providing real-time notifications for any unusual activity.`}
                                </Paragraph>
                            </Col>
                        </Box>
                    </Row>
                </Col>
                <Image unoptimized={true} src={'/cctv_v4.png'} alt="XNC Security - CCTV Services" width={0} height={0} className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0" />
            </Box>
        </Col >
    )
}
