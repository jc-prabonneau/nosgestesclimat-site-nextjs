'use client'

import Link from '@/components/Link'
import Trans from '@/components/translation/Trans'
import { endClickEmpreinte } from '@/constants/tracking/pages/end'
import ExternalLinkIcon from '@/design-system/icons/ExternalLinkIcon'
import Button from '@/design-system/inputs/Button'
import Card from '@/design-system/layout/Card'
import { formatCarbonFootprint } from '@/helpers/formatCarbonFootprint'
import { useClientTranslation } from '@/hooks/useClientTranslation'
import { useRule } from '@/publicodes-state'
import { trackEvent } from '@/utils/matomo/trackEvent'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CountUp } from 'use-count-up'
import EndPlanet from './totalCard/EndPlanet'

export default function TotalCard() {
  const { t } = useClientTranslation()

  const { numericValue } = useRule('bilan')

  const { formattedValue, unit } = formatCarbonFootprint(numericValue, {
    localize: false,
  })

  const [isExplanationOpen, setIsExplanationOpen] = useState(false)

  return (
    <Card className="w-full flex-row items-stretch rounded-lg bg-primary-700 p-6 text-white shadow-none md:px-10">
      <div className="flex-1">
        <p className="mb-0 text-3xl md:text-4xl">
          <strong>
            <CountUp
              isCounting
              end={Number(formattedValue)}
              duration={2.5}
              decimalSeparator=","
            />
          </strong>{' '}
          <span className="text-xl md:text-2xl">{unit}</span>
        </p>

        <p className="mb-0 md:text-lg">
          <span className="text-primary-200">
            <Trans>de</Trans>{' '}
          </span>
          CO₂e{' '}
          <span className="text-primary-200">
            <Trans>chaque année</Trans>
          </span>
        </p>
        <Button
          color="link"
          className="text-white hover:text-white"
          onClick={() =>
            setIsExplanationOpen(
              (prevIsExplanationOpen) => !prevIsExplanationOpen
            )
          }>
          Qu'est-ce que ça veut dire&nbsp;?
        </Button>
        {isExplanationOpen ? (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="max-w-xl text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            laboriosam iste, possimus, porro vitae dolorem magni sint nam
            consequatur doloribus labore. Asperiores, nihil.
            <br />
            <br />
            <Link
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(
                "Qu'est-ce que ça veut dire ? Cette page s'ouvrira dans un nouvel onglet."
              )}
              className="text-xs text-white hover:text-primary-200 md:text-sm"
              href="/empreinte-climat"
              onClick={() => trackEvent(endClickEmpreinte)}>
              <Trans>En savoir plus&nbsp;</Trans>
              <ExternalLinkIcon className="stroke-white" />
            </Link>
          </motion.p>
        ) : null}
      </div>

      <EndPlanet isExplanationOpen={isExplanationOpen} />
    </Card>
  )
}
