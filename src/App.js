import './App.css'
import motos from './motos'
import React from 'react'

let motos_por_marca = []
let idx_marca = -1;

motos.forEach(moto => {
  idx_marca = motos_por_marca.findIndex(item => item.marca === moto.marca)
  if (idx_marca >= 0) {
    motos_por_marca[idx_marca].quantidade = motos_por_marca[idx_marca].quantidade + 1
  }
  else {
    let item = {
      marca: moto.marca,
      quantidade: 1
    }
    motos_por_marca.push(item)
  }
})

const qtde_motos_por_marca = motos_por_marca.map( item => {
  return item.marca + ' (' + item.quantidade + ')'
})

const total_km = motos.reduce((acumulado, moto) => {
  if (acumulado.km) {
    return acumulado.km + moto.km
  } else {
    return acumulado + moto.km
  }
})

const motos_zero_km = motos.filter(moto => moto.km === 0).map(moto => moto.marca + ' ' + moto.modelo)

const listagem_motos = motos.map((moto, index) => {
  return (
    <tr key={index}>
      <td>{moto.marca}</td>
      <td>{moto.modelo}</td>
      <td>{moto.cilindrada}</td>
      <td>{moto.ano}</td>
      <td>{moto.km}</td>
      <td>{moto.cor}</td>
    </tr>
  )
})

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th colSpan="6">LISTAGEM DE MOTOS</th>
          </tr>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Cilindrada</th>
            <th>Ano</th>
            <th>KM</th>
            <th>Cor</th>
          </tr>
          {listagem_motos}
          <tr>
            <td colSpan="6">Soma da quilometragem das motos: {total_km} </td>
          </tr>
          <tr>
            <td colSpan="6">Motos zero km: {motos_zero_km.join(', ')} </td>
          </tr>
          <tr>
            <td colSpan="6">Quantidade de motos por marca: {qtde_motos_por_marca.join(', ')} </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
