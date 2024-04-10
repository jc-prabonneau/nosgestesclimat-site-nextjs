import { getBackgroundColor } from '@/helpers/getCategoryColorClass'
import { DottedName } from '@/publicodes-state/types'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

type Props = {
  type: 'vertical' | 'horizontal'
  value: string
  index?: number
  category?: DottedName
}

export default function BarChart({ type, value, index = 0, category }: Props) {
  const propertyAffected = type === 'vertical' ? 'height' : 'width'

  return (
    <motion.div
      className={twMerge(
        `min-w-[2px] max-w-full ${
          propertyAffected === 'width' ? 'h-4' : 'w-4'
        } rotate-180 rounded-lg`,
        category ? getBackgroundColor(category) : 'bg-secondary-500'
      )}
      initial={{ [propertyAffected]: 0 }}
      animate={{
        [propertyAffected]: value,
      }}
      transition={{
        delay: 0.2 + index * 0.2,
        duration: 0.75,
        ease: 'easeOut',
      }}
    />
  )
}
