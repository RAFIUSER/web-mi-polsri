import { Media } from '@/payload-types'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { getMessages } from 'next-intl/server'
import config from '@payload-config'
import { getPayload } from 'payload'

export default async function Partners({ locale }: { locale: string }) {
  // const t = useTranslations('pages.home.partners')
  const {
    pages: {
      home: { partners: section },
    },
  } = await getMessages({ locale })

  const payload = await getPayload({ config })

  const partners = await payload.find({
    collection: 'partner',
  })

  if (partners.docs.length < 1) return null

  return (
    <div className="flex flex-col gap-8 my-8 items-center max-w-full lg:max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold">{section.heading}</h2>
        <p className="text-sm text-muted-foreground">{section.description}</p>
      </div>
      {/* <div className="flex flex-row items-center justify-around w-full"> */}
      <Marquee>
        {partners?.docs.map((item, idx) => (
          <Image
            key={idx}
            src={(item.logo as Media).url!}
            alt={item.name}
            width={100}
            height={100}
            className="object-contain h-16 mr-8"
          />
        ))}
      </Marquee>
      {/* </div> */}
    </div>
  )
}
