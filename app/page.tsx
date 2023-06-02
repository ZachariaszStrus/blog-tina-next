import { client } from '@/tina/__generated__/client'

export default async function Home() {
  const myPost = await client.queries.post({ relativePath: 'hello-world.md' })

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <h1 className="text-xl">{myPost.data.post.title}</h1>
      <p>{JSON.stringify(myPost.data.post.body)}</p>
    </main>
  )
}
