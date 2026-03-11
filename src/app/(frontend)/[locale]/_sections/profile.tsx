import { Button } from '@/components/ui/button'
import { BookOpenIcon } from 'lucide-react'
import { VideoProfile } from '../_components/video-profile'
import { getMessages } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

async function Profile({ locale }: { locale: string }) {
  const {
    pages: {
      home: { profile: t },
    },
  } = await getMessages({ locale })

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 p-6 md:p-4">
        <VideoProfile />
        <div className="flex flex-col justify-end max-w-2xl gap-4">
          <h2 className="text-2xl font-bold">{t.heading}</h2>
          <p className="text-muted-foreground text-lg text-justify">{t.description}</p>
          <div className="flex gap-2 items-center mt-4">
            <Link href={`/profile/${locale === 'en' ? 'about-us' : 'tentang-kami'}`}>
              <Button>
                <BookOpenIcon />
                {t.buttons.more}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
