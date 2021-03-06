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

const Heading = styled.h1`
  text-shadow: 0.6px 0 0;
  font-size: 20px;
`

const BuyPass = () => {
  return (
    <Container>
      <Head>
        <title>Buy A Pass</title>
      </Head>
      <PageHeadingContainer>
        <Heading>Buy a Pass</Heading>
      </PageHeadingContainer>
    </Container>
  )
}

export default BuyPass
