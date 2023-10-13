import Box from "@/app/components/Box";
import Col from "@/app/components/Col";
import Paragraph from "@/app/components/Paragraph";
import Row from "@/app/components/Row";
import Title from "@/app/components/Title";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'XNC | Access Control System Installers North West and North Wales',
    description: 'Your Trusted Access Control System Installers in North West and North Wales. Elevate Security with Expert Installation. Contact Us for Ultimate Access Control Solutions',
}

export default function Page() {
    return (
        <Col type="layout">
            <Box background="dark">
                {/* <Shield size={"25%"} className="absolute z-0 text-primary/10 right-0 top-[5%]" /> */}
                <Col type="content" className="justify-between z-50">
                    <Title type="h1" className="text-primary">Access Control System Installers local to the North West and North Wales</Title>
                    <Col type="content" reduceGap>
                        <Paragraph>{`Expert Access Control System Installers in the North West and North Wales region for seamless security solutions.`}</Paragraph>
                        <Paragraph>{`We ensure top-notch installation and support, enhancing your access control needs.`}</Paragraph>
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
                                    {`Unlock peace of mind with our professional Access Control System installation services, backed by years of expertise in setting up cutting-edge intrusion detection systems.`}
                                </Paragraph>
                            </Col>
                        </Box>
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Unparelled support team
                                </Title>
                                <Paragraph>
                                    {`Count on our unparalleled support team for expert assistance and guidance, ensuring your Access Control System operates seamlessly, day and night.`}
                                </Paragraph>
                            </Col>
                        </Box>
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Advanced technology
                                </Title>
                                <Paragraph>
                                    {`Experience the future of security with our advanced technology access control systems, redefining protection for homes and businesses.`}
                                </Paragraph>
                            </Col>
                        </Box>
                    </Row>
                    <Row type="layout">
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    Enhanced security
                                </Title>
                                <Paragraph>
                                    {`Enhance security to safeguard your premises with our advanced technology access control systems, setting a new standard for protection.`}
                                </Paragraph>
                            </Col>
                        </Box>
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    User friendly
                                </Title>
                                <Paragraph>
                                    {`Our user-friendly access control systems blend cutting-edge technology with enhanced security, ensuring comprehensive protection for your premises.`}
                                </Paragraph>
                            </Col>
                        </Box>
                        <Box className="basis-full xl:basis-1/3">
                            <Col type="content">
                                <Title type="h3">
                                    24/7 Monitoring
                                </Title>
                                <Paragraph>
                                    {`Enhance your security with dependable and secure solutions, trusted by businesses and homeowners alike.`}
                                </Paragraph>
                            </Col>
                        </Box>
                    </Row>
                </Col>
                <Image src={'/access_control.png'} alt="XNC Security - CCTV Services" width={0} height={0} className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0" />
            </Box>
        </Col >
    )
}
