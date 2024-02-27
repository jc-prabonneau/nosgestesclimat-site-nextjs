import { supportedRegions } from '@incubateur-ademe/nosgestesclimat'

type Props = {
  PRNumber?: string
}
/**
 * This function is used to get the supported regions. It can be called directly from a server component.
 */
export async function getSupportedRegions({
  PRNumber,
}: Props = {}): Promise<any> {
  return Promise.resolve(supportedRegions)
}
