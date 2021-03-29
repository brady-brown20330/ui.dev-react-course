import React from 'react';
import { battle } from '../utils/api';

export default class results extends React.Component {
  componentDidMount () {
    const { playerOne, playerTwo } = this.props

    battle([playerOne, playerTwo])
    .then((palyers) => {
      console.log('data: ', players)
    })
  }
  render() {
    return (
      <div>Hey, im the results component! 
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </div>
    )
  }
}