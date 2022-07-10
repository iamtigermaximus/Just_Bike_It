import styled from 'styled-components'
import colors from '/utils/colors'
import Link from 'next/link'

const BikeStationsLinkItem = styled.a``

const BikeStationCard = styled.div`
  border: 1px solid ${colors.darkGray};
  padding: 20px;
  width: 600px;
  background: ${colors.darkGray};
  margin-bottom: 20px;
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

const Card = ({ id, name, address, stationId, capacity }) => {
  return (
    <>
      <Link
        as={`/cycling/${name}`}
        href={{
          pathname: '/cycling/[name]',
          query: { id, name, address, stationId, capacity },
        }}
      >
        <BikeStationsLinkItem>
          <BikeStationCard id={id}>
            <BikeStationCardHeading>
              <BikeStationName>{name}</BikeStationName>
              <BikeStationId>Bike station {stationId}</BikeStationId>
              <BikeStationAddress>{address}</BikeStationAddress>
            </BikeStationCardHeading>
            <BikeStationCardContent>
              <BikeStationCapacity>
                Bikes available at the station: {capacity}
              </BikeStationCapacity>
            </BikeStationCardContent>
          </BikeStationCard>
        </BikeStationsLinkItem>
      </Link>
    </>
  )
}

export default Card
