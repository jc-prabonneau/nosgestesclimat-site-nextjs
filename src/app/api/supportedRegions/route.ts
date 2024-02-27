import { NextResponse } from 'next/server'

import { supportedRegions } from '@incubateur-ademe/nosgestesclimat'

export async function GET() {
  return NextResponse.json(supportedRegions)
}
