import React, { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import colors from '/utils/colors'
import { breakpoints as bp } from '/utils/layout'
import Card from '/components/Card'
import { connectToDatabase } from '../lib/mongodb'

const Container = styled.div`
  background: ${colors.gray};
  height: 100%;
`

const PageHeadingContainer = styled.div`
  background: ${colors.darkGray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`
const SearchInputContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 0;
  flex-direction: row;
`
const SearchInput = styled.input`
  padding: 20px;
  margin: 0 20px;
  width: 100%;
  border-radius: 5px;
`
const Heading = styled.h1`
  text-shadow: 0.6px 0 0;
  font-size: 20px;
`
const BikeStationsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    background: ${colors.yellow};
  }
`

const Cycling = ({ properties }) => {
  console.log('properties', properties)
  const [searchStation, setSearchStation] = useState('')

  return (
    <Container>
      <Head>
        <title>Cycling</title>
      </Head>
      <PageHeadingContainer>
        <Heading>City Bikes Helsinki and Espoo</Heading>
      </PageHeadingContainer>
      <SearchInputContainer>
        <SearchInput
          placeholder='Search City Bike Station'
          onChange={(e) => setSearchStation(e.target.value)}
        />
      </SearchInputContainer>
      <BikeStationsContainer>
        {properties.map((property) => (
          <Card
            key={property._id}
            name={property.Nimi}
            stationId={property.ID}
            address={property.Osoite}
            capacity={property.Kapasiteet}
          />
        ))}
      </BikeStationsContainer>
    </Container>
  )
}

export default Cycling
export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  const data = await db.collection('just_bike_it').find({}).toArray()

  const properties = JSON.parse(JSON.stringify(data))

  return {
    props: { properties: properties },
  }
}
