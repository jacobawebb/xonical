import Box from '@/app/components/Box'
import Button from '@/app/components/Button'
import Col from '@/app/components/Col'
import Paragraph from '@/app/components/Paragraph'
import Row from '@/app/components/Row'
import Title from '@/app/components/Title'
import TextAreaInput from '@/app/components/inputs/TextAreaInput'
import TextInput from '@/app/components/inputs/TextInput'
import { iconSize } from '@/app/globals/defaults'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
    return (
        <Row type='layout'>
            <Col type='content' className='w-full'>
                <Box special className='items-center justify-center z-50 w-full p-6 xl:p-20' background="dark">
                    <Col type='content' className='z-50'>
                        <div className='flex flex-col gap-3'>
                            <Title className='text-primary' type='h1'>Get in touch</Title>
                            <Title type='h3'>Contact us for assistance and information.</Title>
                        </div>
                        <Paragraph>{`We're here to help, chat, and answer your questions. Drop us a line anytime – we'd love to hear from you!`}</Paragraph>
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
                        {/* <Col type='content' className='w-[500px] max-w-[500px]'>
                            <Row type='content'>
                                <TextInput name='name' placeholder='John Doe' value='' label='Name' />
                                <TextInput name='email' placeholder='say-hello@xonical.co.uk' value='' label='Email' />
                            </Row>
                            <TextAreaInput name='message' placeholder='Tell us how we can help...' value='' label='Message' />
                            <Button href=''>
                                <Mail size={iconSize} /> Send
                            </Button>
                        </Col> */}
                    </Col>
                    {/* <div className='w-full h-full absolute top-0 left-0 rounded-md bg-secondary/60 z-10'></div> */}
                    <Image src="/contact_us.png" alt="network" className="rounded-lg object-cover z-0 opacity-30" fill />
                </Box>
            </Col>
        </Row>
    )
}
