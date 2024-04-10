'use client'

import Link from '@/components/Link'
import CategoriesAccordion from '@/components/results/CategoriesAccordion'
import CategoriesChart from '@/components/results/CategoriesChart'
import Trans from '@/components/translation/Trans'
import { endClickChangeAnswers } from '@/constants/tracking/pages/end'
import { trackEvent } from '@/utils/matomo/trackEvent'
import TotalCard from './results/TotalCard'

export default function Results() {
  return (
    <>
      <div className="flex flex-col items-stretch justify-center md:flex-row md:gap-4">
        <TotalCard />

        <CategoriesChart />
      </div>

      <CategoriesAccordion />

      <div className="mb-4 text-right">
        <Link
          href="/profil#answers"
          onClick={() => trackEvent(endClickChangeAnswers)}
          className="text-sm">
          <Trans>Modifier mes réponses</Trans>
        </Link>
      </div>
    </>
  )
}
