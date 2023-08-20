import { OAuth2Client } from 'google-auth-library'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

export async function POST(request: Request) {
  const cookieStore = cookies()
  const csrfToken = cookieStore.get('g_csrf_token')?.value

  if (!csrfToken) {
    return new Response('No CSRF token in Cookie.', { status: 400 })
  }

  const res = await request.formData()
  const csrfTokenBody = res.get('g_csrf_token')?.toString()

  if (!csrfTokenBody) {
    return new Response('No CSRF token in post body.', { status: 400 })
  }

  if (csrfToken !== csrfTokenBody) {
    return new Response('Failed to verify double submit cookie.', { status: 400 })
  }

  const idToken = res.get('credential')?.toString()

  if (!idToken) {
    return new Response('No credential in post body.', { status: 400 })
  }

  const client = new OAuth2Client()
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID
    })
    const payload = ticket.getPayload()

    console.log(payload)

    return NextResponse.redirect(new URL('/topics', request.url), { status: 303 })
  } catch (error) {
    console.error(error)

    return NextResponse.redirect(new URL('/', request.url), { status: 303 })
  }
}


