import { React, useEffect, useState } from "react";

const PokemonCard = ({ name, url, allPokemon }) => {

  const listPokemonSpecs = async () => {
    return await fetch(url);
  };

  // const { state: pokemonid } = useLocation();
  const [type1, setType1] = useState('none')
  const [type2, setType2] = useState('none')
  const [height, setHeight] = useState('none')
  const [weight, setWeight] = useState('none')
  const [id, setId] = useState(0)

  let color = ''
  let color2 = ''
  let colorWeight = ''

  if (type2 === 'none'){
    color2 = '#B7B7B7'
  }
  if (type1 === 'Grass'){
    color = 'green'
  }
  if (type1 === 'Fire'){
    color = 'red'
  }
  if (type1 === 'Water'){
    color = 'blue'
  }
  if (type1 === 'Bug'){
    color = '#2D7E38'
  }
  if (type1 === 'Normal'){
    color = '#FF9C14'
  }
  if (type2 === 'Poison'){
    color2 = '#9C20E7'
  }
  if (type2 === 'Flying'){
    color2 = '#5DCFFF'
  }
  if (weight <= 100){
    colorWeight = '#9FE3FF'
  }
  if (weight > 100 && weight < 500){
    colorWeight = '#F7CC53'
  }
  if(weight >= 500){
    colorWeight = '#FC3535'
  }
  

  const specs = async () => {
    try {
      const res = await listPokemonSpecs();
      const data = await res.json();
      setHeight(data.height)
      setWeight(parseInt(data.weight))
      setId(data.id)
      setType1(data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1))
      setType2(data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1))
      if(data.types.length === 2){
        type2 = data.types[1].type.name
      } 

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    specs();
  })


  return (
    
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-title">
          {`#${id} ${name}`}
        </h3>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{width: '50%'}}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" style={{ height: '120px', width: '120px' }} />
          </div>
          <div style={{width: '50%'}}>
            <p className="card-text mb-1">Type 1: <strong style={{color: color}}>{type1}</strong></p>
            <p className="card-text mb-1">Type 2: <strong style={{color: color2}}>{type2}</strong></p>
            <p className="card-text mb-1">Height: <strong>{height}"</strong></p>
            <p className="card-text mb-1">Weight: <strong style={{color: colorWeight}}>{weight} lbs.</strong></p>
          </div>
        </div>
        {/* <p className="card-text">Type:{info.types[0]}<strong></strong></p> */}
        {/* <a className="btn btn-primary">View Stats</a> */}
      </div>
    </div>
  )
}

export default PokemonCard;