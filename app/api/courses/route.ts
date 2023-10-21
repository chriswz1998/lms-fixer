import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const { title } = await req.json()
    if (!userId) {
      return new NextResponse('unauthorized', { status: 401 })
    }
    const courses = await db.course.create({
      data: {
        userId,
        title
      }
    })

    return NextResponse.json(courses)

  } catch (error) {
    console.log('[courses]', error)
    return new NextResponse('internal error', { status: 500 })
  }
}

