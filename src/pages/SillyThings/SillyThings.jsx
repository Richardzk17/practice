import ThingCard from '../../components/ThingCard/ThingCard'
import { Link } from 'react-router-dom'

const SillyThings = (props) => {
  return (
    <>
      <h1>Hunter's Things</h1>
      <Link to="/">Home</Link>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
    </>
  )
}
 
export default SillyThings
