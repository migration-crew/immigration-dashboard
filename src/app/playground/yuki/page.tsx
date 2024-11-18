import { Caption } from '@/components/common/text/Caption'
import { CaptionSemi } from '@/components/common/text/CaptionSemi'
import { Heading } from '@/components/common/text/Heading'
import { HeadingLight } from '@/components/common/text/HeadingLight'
import { HeadingSemi } from '@/components/common/text/HeadingSemi'
import { Hero } from '@/components/common/text/Hero'
import { HeroLight } from '@/components/common/text/HeroLight'
import { Microtext } from '@/components/common/text/Microtext'
import { MicrotextSemi } from '@/components/common/text/MicrotextSemi'
import { Paragraph } from '@/components/common/text/Paragraph'
import { ParagraphRegular } from '@/components/common/text/ParagraphRegular'
import { SubheadingLead } from '@/components/common/text/SubheadingLead'
import { SubheadingLeadLight } from '@/components/common/text/SubheadingLeadLight'
import { Subtitle } from '@/components/common/text/Subtitle'
import { SubtitleRegular } from '@/components/common/text/SubtitleRegular'
import { Title } from '@/components/common/text/Title'
import { TitleLight } from '@/components/common/text/TitleLight'
import { Button } from '@/components/ui/upImmigrationButton'
import React from 'react'

const YukiPage = () => {
  return (
    <div className='bg-primary-gray'>
    <Hero>Hero</Hero>
    <HeroLight>HeroLight</HeroLight>
    <Title>Title</Title>
    <TitleLight>TitleLight</TitleLight>
    <Subtitle>Subtitle</Subtitle>
    <SubtitleRegular>SubtitleRegular</SubtitleRegular>
    <Heading>Heading</Heading>
    <HeadingSemi>HeadingSemi</HeadingSemi>
    <HeadingLight>HeadingLight</HeadingLight>
    <SubheadingLead>SubheadingLead</SubheadingLead>
    <SubheadingLeadLight>SubheadingLeadLight</SubheadingLeadLight>
    <Paragraph>Paragraph</Paragraph>
    <ParagraphRegular>ParagraphRegular</ParagraphRegular>
    <Caption>Caption</Caption>
    <CaptionSemi>CaptionSemi</CaptionSemi>
    <Microtext>Microtext</Microtext>
    <MicrotextSemi>MicrotextSemi</MicrotextSemi>

    <Button>default</Button>
    <Button disabled>default disabled</Button>

    <Button variant="secondary">secondary</Button>
    <Button variant="secondary" disabled>secondary disabled</Button>
    </div>
  )
}

export default YukiPage
