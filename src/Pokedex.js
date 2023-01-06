import Pokecard from './Pokecard'
import './Pokedex.css'

const Pokedex = (props) => {
    return (
        <>
            {props.data.map(p => <Pokecard name={p.name} id={p.id} type={p.type} base_experience={p.base_experience}/>)}
        </>
    )
}

export default Pokedex