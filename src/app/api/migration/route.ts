import { NextResponse } from 'next/server'

import migration from '@incubateur-ademe/nosgestesclimat/public/migration.json'

export async function GET() {
  return NextResponse.json(migration)
}
