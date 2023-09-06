import React, { useState } from 'react';

function App() {

  const [peso, setPeso] = useState(0);
  const [mantenimiento, setMantenimiento] = useState(0);
  const [mMasM2, setmMasM2] = useState(0);

  return (
    <>
      <div className='two-card'>
        <div className='card card1'>
          <h1>Hidratación Basal</h1>
          <p className='minititulo'>Completa todos los datos</p>

          <div className='inputcontainer'>
          <input
              className='inputcustom'
              type="text"
              name="peso"
              id="peso"
              placeholder='Ingresa el peso'
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
            <span className="unidadmedida">
              Kg
            </span>
          </div>
          <button className='mainbutton'>Calcular</button>

          <div style={{ "marginTop": "5px" }}>
            <p className='infotext'>
              70 cc/hr
            </p>
            <p className='infotext'>
              m+m/2 105 cc/hr
            </p>
          </div>
        </div>
        <div className='card card2'>
          <h1>¿Como se calcula?</h1>

          <ul>
            <li className='listitem'>
              De 0kg a 10kg, se calcular 100cc por cada kilo.
            </li>
            <li>
              Se suman 50cc por cada kilo de peso por arriba de 10kg hasta 20 kg
            </li>
            <li>
              De 20kg para arriba, se suman 20cc por cada kilo adicional
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
