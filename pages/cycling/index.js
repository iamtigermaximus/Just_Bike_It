import Head from 'next/head'
import styled from 'styled-components'
import colors from '/utils/colors'
import { connectToDatabase } from '../lib/mongodb'
import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils'

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

const BikeStationsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  flex-direction: row;
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
  width: 40%;
  border-radius: 5px;
`

const BikeStationCard = styled.div`
  border: 1px solid ${colors.darkGray};
  padding: 20px;
  width: 50%;
  background: ${colors.darkGray};
`

const BikeStationCardHeading = styled.div`
  padding: 20px;
`
const BikeStationCardContent = styled.div`
  padding: 20px;
  background: ${colors.yellow};
`

const BikeStationName = styled.h1`
  font-weight: 800;
`
const BikeStationId = styled.h3`
  font-weight: 600;
`
const BikeStationAddress = styled.h3`
  font-weight: 600;
`
const BikeStationCapacity = styled.h3`
  font-weight: 800;
`

const Heading = styled.h1``

const Cycling = ({ properties }) => {
  console.log('properties', properties)
  return (
    <Container>
      <Head>
        <title>Cycling</title>
      </Head>
      <PageHeadingContainer>
        <Heading>City Bikes Helsinki and Espoo</Heading>
      </PageHeadingContainer>
      <SearchInputContainer>
        <SearchInput placeholder='Search City Bike Station' />
      </SearchInputContainer>
      {properties.map((property, _id) => (
        <BikeStationsContainer _id={_id}>
          <BikeStationCard>
            <BikeStationCardHeading>
              <BikeStationName>{property.Nimi}</BikeStationName>
              <BikeStationId>Bike station {property.ID}</BikeStationId>
              <BikeStationAddress>{property.Osoite}</BikeStationAddress>
            </BikeStationCardHeading>
            <BikeStationCardContent>
              <BikeStationCapacity>
                Bikes available at the station: {property.Kapasiteet}
              </BikeStationCapacity>
            </BikeStationCardContent>
          </BikeStationCard>
        </BikeStationsContainer>
      ))}
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
