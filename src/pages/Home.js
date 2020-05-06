import React, { Component } from 'react'
import { Text, View } from 'react-native'

import api from '../services/api'

export default class Home extends Component {

  state = {
    contratos:[]    
  }


  componentDidMount() {
    this.getData();
  }

  getData = async() => {
    const token = '06907913-de63-49be-895c-80be5b021cf9';
    const response = await api.post('/consultacliente', {
      token,
      app: 'fortics',
      cpfcnpj: "68.857.751/0001-62"
    })
    const resultado = response.data;
    this.setState(resultado)
  }

  render() {

    console.log(this.state)

    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
