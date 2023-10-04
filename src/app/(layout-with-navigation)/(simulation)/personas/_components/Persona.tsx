'use client'

import Trans from '@/components/translation/Trans'
import Button from '@/design-system/inputs/Button'
import Card from '@/design-system/layout/Card'
import { useEngine, useTempEngine, useUser } from '@/publicodes-state'
import { Persona as PersonaType } from '@/publicodes-state/types'
import { v4 as uuid } from 'uuid'

type Props = {
  persona: PersonaType
  dottedName: string
}

export default function Persona({ persona, dottedName }: Props) {
  const {
    initSimulation,
    getCurrentSimulation,
    updateSituationOfSimulation,
    updateAllFoldedStepsOfCurrentSimulation,
  } = useUser()

  const isCurrentPersonaSelected =
    getCurrentSimulation()?.persona === dottedName

  const { getNumericValue } = useEngine()

  const { getRuleObject } = useTempEngine()

  const missingVariables = getRuleObject('bilan').missingVariables

  const defaultMissingVariables = Object.keys(missingVariables)

  const hasEmptySituation = Object.entries(persona.situation)?.length === 0

  // TODO: heavy artilery, there must be a better way to do this
  function getDefaultValues() {
    const currentSituationMissingVariables =
      getRuleObject('bilan').missingVariables

    return Object.keys(currentSituationMissingVariables).reduce(
      (accumulator: { [key: string]: number }, dotteName: string) => {
        accumulator[dotteName] = getNumericValue(dotteName)
        return accumulator
      },
      {}
    )
  }

  return (
    <Card
      className={`${
        isCurrentPersonaSelected
          ? '!border-2 border-green-500 bg-green-200'
          : ''
      } items-center`}>
      <div className="text-lg">{persona['icônes']}</div>

      <h3>{persona.nom}</h3>

      <p className="text-center text-sm">
        {persona['résumé'] || persona['description']}
      </p>

      {!isCurrentPersonaSelected && (
        <Button
          size="sm"
          className="align-self-end mt-auto"
          disabled={isCurrentPersonaSelected}
          onClick={() => {
            const id = uuid()
            initSimulation({
              id,
              situation: persona.situation,
              persona: dottedName,
              foldedSteps: hasEmptySituation
                ? defaultMissingVariables
                : Object.keys(persona.situation),
            })

            if (hasEmptySituation) {
              setTimeout(() => {
                updateSituationOfSimulation({
                  situationToAdd: getDefaultValues(),
                  simulationId: id,
                })

                updateAllFoldedStepsOfCurrentSimulation(defaultMissingVariables)
              }, 0)
            }
          }}>
          <Trans>Sélectionner</Trans>
        </Button>
      )}

      {isCurrentPersonaSelected && (
        <p className="align-self-end mb-0 mt-auto p-1 text-sm font-bold">
          <Trans>Sélectionné·e</Trans>
        </p>
      )}
    </Card>
  )
}
