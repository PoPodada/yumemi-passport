import { getPrefectures } from '@/_api/resas'

const FetchPrefectures = async () => {
  let prefectures = await getPrefectures()

  return <div></div>
}

export default FetchPrefectures
