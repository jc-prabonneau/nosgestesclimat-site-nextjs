import Trans from '@/components/translation/Trans'
import Image from 'next/image'

export default function PartnersSection() {
  return (
    <section className="-mx-8 mb-8 mt-28 rounded-xl bg-gray-100 px-8 py-16">
      <h3 className="mb-16 text-center">
        <Trans>Rejoignez nos partenaires</Trans>
      </h3>

      <div className="mx-auto flex flex-wrap items-center justify-center gap-12">
        <Image
          width="100"
          height="140"
          src="/images/misc/logo-sncf.png"
          alt="La SNCF"
        />

        <Image
          width="110"
          height="140"
          src="/images/misc/logo-ABC-web.png"
          alt="L'association ABC"
        />

        <Image
          width="140"
          height="140"
          src="/images/misc/logo-bonpote.png"
          alt="Le blog BonPote"
        />

        <Image
          width="180"
          height="140"
          src="/images/misc/logo-franceinfo.png"
          alt="France Info"
        />
      </div>
    </section>
  )
}
