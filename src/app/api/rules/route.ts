import { NextResponse } from 'next/server'

import rules from '@incubateur-ademe/nosgestesclimat'

export async function GET() {
  return NextResponse.json(rules)
}
