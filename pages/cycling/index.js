import Head from 'next/head'
import styled from 'styled-components'
import colors from '/utils/colors'

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

const Cycling = () => {
  return (
    <Container>
      <Head>
        <title>Cycling</title>
      </Head>
      <PageHeadingContainer>
        <Heading>City Bikes Helsinki and Espoo</Heading>
      </PageHeadingContainer>
    </Container>
  )
}

export default Cycling
