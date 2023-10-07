"use client"

import { Eye, Fingerprint, Globe, Layout, Server, Shield, Siren, Terminal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Box from '../components/Box'
import Col from '../components/Col'
import Paragraph from '../components/Paragraph'
import Row from '../components/Row'
import Title from '../components/Title'
import { gapLayout, iconSize } from '../globals/defaults'
import { usePathname } from 'next/navigation'

export default function Footer() {
    const path = usePathname()
    if (path !== "/contact") {
        return (
            <Box background='dark' special className='mt-10'>
                <Row type='layout' className='p-6 justify-between z-50'>
                    <Col type='content'>
                        <div className={`flex ${gapLayout} items-center`}>
                            <Link href={'/'} className={`w-max h-full flex justify-center items-center`}>
                                <Image unoptimized={true} src={`/for_dark_backgrounds_no_padding.png`} alt="XNC Logo" width={200} height={200} />
                            </Link>
                        </div>
                        <Paragraph className='text-sm text-primary w-72'>{`Empowering Homes and Businesses with industry leading Security & Digital Solutions.`}</Paragraph>
                        <Col type='content' reduceGap>
                            <Link href={'tel:+441516650775'}>
                                <Title type='h1' removeTag>
                                    0151 665 0 775
                                </Title>
                            </Link>
                            <Link href={'mailto:hello@xonical.co.uk'} className='relative w-max group'>
                                <div className='absolute left-0 -bottom-1 w-1/3 h-[2px] bg-primary group-hover:w-full transition-all ease-in-out'></div>
                                <Title type='h6' removeTag>
                                    hello@xonical.co.uk
                                </Title>
                            </Link>
                        </Col>
                    </Col>
                    <Row type='layout' className='w-max'>
                        <Col type='content'>
                            <Title type='h1' removeTag>Security <Shield className='text-primary' /></Title>
                            <Link href={'/security/cctv'} className='relative w-max group'>
                                <div className='absolute left-0 -bottom-1 w-1/3 h-[2px] bg-primary group-hover:w-full transition-all ease-in-out'></div>
                                <Row type='content' className='items-center' reduceGap>CCTV Systems<Eye size={iconSize} className='text-primary' /></Row>
                            </Link>
                            <Link href={'/security/alarms'} className='relative w-max group'>
                                <div className='absolute left-0 -bottom-1 w-1/3 h-[2px] bg-primary group-hover:w-full transition-all ease-in-out'></div>
                                <Row type='content' className='items-center' reduceGap>Alarm Systems<Siren size={iconSize} className='text-primary' /></Row>
                            </Link>
                            <Link href={'/security/access-control'} className='relative w-max group'>
                                <div className='absolute left-0 -bottom-1 w-1/3 h-[2px] bg-primary group-hover:w-full transition-all ease-in-out'></div>
                                <Row type='content' className='items-center' reduceGap>Access Control Solutions<Fingerprint size={iconSize} className='text-primary' /></Row>
                            </Link>
                        </Col>
                        {/* <Col type='content'>
                            <Title type='h1' removeTag>Digital <Globe className='text-primary' /></Title>
                            <Link href={'/digital/websites'} className='relative w-max group'>
                                <div className='absolute left-0 -bottom-1 w-1/3 h-[2px] bg-primary group-hover:w-full transition-all ease-in-out'></div>
                                <Row type='content' className='items-center' reduceGap>Website Design<Layout size={iconSize} className='text-primary' /></Row>
                            </Link>
                            <Link href={'/digital/software'} className='relative w-max group'>
                                <div className='absolute left-0 -bottom-1 w-1/3 h-[2px] bg-primary group-hover:w-full transition-all ease-in-out'></div>
                                <Row type='content' className='items-center' reduceGap>Software Development<Terminal size={iconSize} className='text-primary' /></Row>
                            </Link>
                            <Link href={'/digital/hosting'} className='relative w-max group'>
                                <div className='absolute left-0 -bottom-1 w-1/3 h-[2px] bg-primary group-hover:w-full transition-all ease-in-out'></div>
                                <Row type='content' className='items-center' reduceGap>Web Hosting<Server size={iconSize} className='text-primary' /></Row>
                            </Link>
                        </Col> */}
                    </Row>
                    <Col type='content'>
                        <Title type='h2' removeTag>
                            {`Open 24/7`}
                        </Title>
                    </Col>
                </Row>
                {/* <Image unoptimized={true} src={'/network_texture_v1.png'} alt="XNC Security - CCTV Services" width={500} height={100} className="rounded-md absolute w-full h-full top-0 left-0 opacity-20 object-cover z-0" /> */}
            </Box>
        )
    }
}
