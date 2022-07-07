import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ProfileDefault = () => {
  const router = useRouter()
  const { profile } = router.query
  return (
    <div>
      <Head>
        <title>User </title>
      </Head>
      <h1>Profile Page {profile}</h1>
    </div>
  )
}
export default ProfileDefault
