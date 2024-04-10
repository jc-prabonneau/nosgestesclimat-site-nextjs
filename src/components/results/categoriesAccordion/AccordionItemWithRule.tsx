'use client'

import RecommendedActions from '@/components/actions/howToAct/RecommendedActions'
import HorizontalBarChartItem from '@/components/charts/HorizontalBarChartItem'
import Trans from '@/components/translation/Trans'
import { endClickCategory } from '@/constants/tracking/pages/end'
import AccordionItem from '@/design-system/layout/accordion/AccordionItem'
import { formatCarbonFootprint } from '@/helpers/formatCarbonFootprint'
import { useRule } from '@/publicodes-state'
import { trackEvent } from '@/utils/matomo/trackEvent'

export default function AccordionItemWithRule({
  dottedName,
  maxValue,
  index,
}: {
  dottedName: string
  maxValue: number
  index?: number
}) {
  const { title, icons, numericValue, category } = useRule(dottedName)

  const percentageOfTotalValue = (numericValue / maxValue) * 100

  const { formattedValue, unit } = formatCarbonFootprint(numericValue)
  return (
    <AccordionItem
      onClick={() => trackEvent(endClickCategory(dottedName))}
      title={
        <HorizontalBarChartItem
          percentageOfTotalValue={percentageOfTotalValue}
          index={index}
          title={title}
          icons={icons}
          displayValue={
            <span>
              <strong>{formattedValue}</strong> <Trans>{unit}</Trans>
            </span>
          }
          category={category}
        />
      }
      content={<RecommendedActions />}
    />
  )
}
