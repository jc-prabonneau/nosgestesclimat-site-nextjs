import getQuestionsOfMosaic from '@/publicodes-state/helpers/getQuestionsOfMosaic'
import { safeGetSituation } from '@/publicodes-state/helpers/safeGetSituation'
import {
  DottedName,
  Engine,
  NGCEvaluatedNode,
  NGCRuleNode,
  Situation,
} from '@/publicodes-state/types'
import { PublicodesExpression } from 'publicodes'
import { fixSituationWithPartialMosaic } from './fixSituationWithPartialMosaic'

type Props = {
  situation: Situation
  everyMosaic: DottedName[]
  everyMosaicChildren: DottedName[]
  everyQuestions: DottedName[]
  everyRules: DottedName[]
  pristineEngine: Engine
  safeGetRule: (rule: DottedName) => NGCRuleNode | null
  safeEvaluate: (rule: PublicodesExpression) => NGCEvaluatedNode | null
}

export const getPersonaFoldedSteps = ({
  situation,
  everyMosaic,
  everyMosaicChildren,
  everyQuestions,
  everyRules,
  pristineEngine,
  safeGetRule,
  safeEvaluate,
}: Props) => {
  const personaSituation = fixSituationWithPartialMosaic({
    situation,
    everyMosaic,
    everyMosaicChildren,
    safeGetRule,
    safeEvaluate,
  })
  const safeSituation = safeGetSituation({
    situation: personaSituation,
    everyRules,
  })

  pristineEngine.setSituation(safeSituation)

  // The persona folded steps are obtained by getting the missing variables and the situation variables.
  const personaFoldedSteps = [
    ...Object.keys(
      pristineEngine.evaluate('bilan')?.missingVariables || {}
    ).filter((missingVariable) => everyQuestions.includes(missingVariable)),
    ...Object.keys(safeSituation),
  ]

  // Then, for each mosaic in the model, we remove all mosaic children and replace it with the rule mosaic itself
  // as we need the parent rule in the folded steps and not the children.
  // If we don't find any mosaic children for a given mosaic, we don't do anything.
  everyMosaic.forEach((mosaic) => {
    const expectedMosaicGroup = getQuestionsOfMosaic({
      dottedName: mosaic,
      everyMosaicChildren,
    })
    let isMosaicInSituation = false

    expectedMosaicGroup.forEach((dottedName) => {
      const index = personaFoldedSteps.indexOf(dottedName)
      if (index > -1) {
        personaFoldedSteps.splice(index, 1)
        isMosaicInSituation = true
      }
    })

    if (isMosaicInSituation) {
      personaFoldedSteps.push(mosaic)
    }
  })

  return personaFoldedSteps
}
