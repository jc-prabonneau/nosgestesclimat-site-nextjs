import { NextResponse } from 'next/server'

type Props = {
  params: { filename: string }
}

export async function GET(request: Request, { params }: Props) {
  const filename = params.filename

  const file = await import(
    `@incubateur-ademe/nosgestesclimat/public/${filename}`
  ).then((module) => module.default)

  return NextResponse.json(file)
}
