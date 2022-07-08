import Head from 'next/head'
// import clientPromise from '../lib/mongodb'
import Image from 'next/image'
import styled from 'styled-components'
import colors from '../utils/colors'

const Container = styled.div`
  background: ${colors.gray};
  height: 100vh;
`

const PageHeadingContainer = styled.div`
  background: ${colors.darkGray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`

const Heading = styled.h1``

const Home = ({ isConnected }) => {
  return (
    <Container>
      <Head>
        <title>Just Bike It!</title>
      </Head>
      <PageHeadingContainer>
        <Heading>City Bikes</Heading>
      </PageHeadingContainer>
    </Container>
  )
}

export default Home
export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
