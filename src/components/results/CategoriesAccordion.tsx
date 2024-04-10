'use client'

import Button from '@/design-system/inputs/Button'
import Accordion from '@/design-system/layout/Accordion'
import { useSortedSubcategoriesByFootprint } from '@/hooks/useSortedSubcategoriesByFootprint'
import { useRule } from '@/publicodes-state'
import { useState } from 'react'
import AccordionItemWithRule from './categoriesAccordion/AccordionItemWithRule'

export default function CategoriesAccordion() {
  const { sortedSubcategories } = useSortedSubcategoriesByFootprint()

  const { numericValue: maxCategoryValue } = useRule(
    sortedSubcategories?.[0] ?? ''
  )

  const [isOpen, setIsOpen] = useState(false)

  const displayedSubcategories = isOpen
    ? sortedSubcategories
    : sortedSubcategories.slice(0, 5)
  return (
    <>
      <Accordion className="mb-4 mt-8">
        {displayedSubcategories.map((categoryDottedName, index) => {
          return (
            <AccordionItemWithRule
              key={categoryDottedName}
              dottedName={categoryDottedName}
              maxValue={maxCategoryValue}
              index={index}
            />
          )
        })}
      </Accordion>
      <div className="flex items-center justify-center">
        <Button
          onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          color="text">
          Voir toutes les catégories
        </Button>
      </div>
    </>
  )
}
