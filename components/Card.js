import styled from 'styled-components'
import colors from '/utils/colors'

const BikeStationsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  flex-direction: row;
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

const Card = ({ id, name, address, stationId, capacity }) => {
  return (
    <BikeStationsContainer id={id}>
      <BikeStationCard>
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
    </BikeStationsContainer>
  )
}

export default Card
