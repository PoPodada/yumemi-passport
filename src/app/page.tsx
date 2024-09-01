import FetchPrefectures from '@/_components/FetchPrefectures'

export default function Home() {
  return (
    <main className="px-[4%]">
      <h2 className="text-xl font-bold">都道府県</h2>
      <FetchPrefectures />
    </main>
  )
}
