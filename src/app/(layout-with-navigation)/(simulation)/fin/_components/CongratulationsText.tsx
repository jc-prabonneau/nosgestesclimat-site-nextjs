'use client'

import Trans from '@/components/translation/Trans'
import Button from '@/design-system/inputs/Button'
import CopyInput from '@/design-system/inputs/CopyInput'
import EmailInput from '@/design-system/inputs/EmailInput'
import Card from '@/design-system/layout/Card'
import Emoji from '@/design-system/utils/Emoji'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CongratulationsText() {
  const [isShareOpen, setIsShareOpen] = useState(false)
  return (
    <>
      <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="mb-2 text-xl md:text-2xl" data-cypress-id="fin-title">
            <span className="inline-block">
              <Trans>Vous avez terminé le test !</Trans>&nbsp;
              <Emoji className="inline-block">👏</Emoji>
            </span>
          </h1>

          <p>
            <Trans>
              Découvrez vos résultats, et nos idées d'actions pour vous
              améliorer.
            </Trans>
          </p>
        </div>
        <Button
          color="secondary"
          onClick={() => setIsShareOpen((prevIsShareOpen) => !prevIsShareOpen)}>
          Partager ou sauvegarder mes résultats
        </Button>
      </div>
      {isShareOpen ? (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mb-4 grid grid-cols-2 gap-4">
          <Card>
            <h3>Partager</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <CopyInput
              textToCopy="https://nosgestesclimat.fr/mon-empreinte?t=5&a=2&l=2.3&d=1.21"
              textToDisplay="https://nosgestesclimat.fr/mon-empreinte?t=5&a=2&l=2.3&d=1.21"
            />
          </Card>
          <Card>
            <h3>Sauvegarder</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <EmailInput
              email={'cleminou@ademe.fr'}
              setEmail={() => ''}
              error={''}
              setError={() => ''}
            />
          </Card>
        </motion.div>
      ) : null}
    </>
  )
}
