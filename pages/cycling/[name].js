import { useRouter } from 'next/router'
import styled from 'styled-components'

const SingleStationContainer = styled.div`
  background: yellow;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BikeStation = () => {
  const router = useRouter()
  const { name } = router.query

  console.log('name1', router.query)
  console.log('name', name)
  return (
    <SingleStationContainer>
      <h1>Single Station Page</h1>
      <h2>Hello {name}!</h2>

      {/* <h2>Station Number: {stationId}</h2>
       <h2>Address: {address}</h2>
      <h2>Available Bikes: {capacity}</h2> */}
    </SingleStationContainer>
  )
}
export default BikeStation
