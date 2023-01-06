import './Pokecard.css';

const Pokecard = ({name, id, type, base_experience}) => {
    let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="Pokecard">
            <h2 className="Pokecard-name">{name}</h2>
            <img src={imgSrc} className="Pokecard-img"></img>
            <p className="Pokecard-type">Type: {type}</p>
            <p className="Pokecard-exp">EXP: {base_experience}</p>
        </div>
    )
}

export default Pokecard;