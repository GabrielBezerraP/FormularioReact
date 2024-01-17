import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity, ScrollView } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: 0,
      nomeInput: '',
      idadeIput: 0,
      valorLimite: 0,
      estudade: false,
      textoResultados: ''
    }

    this.resultados = this.resultados.bind(this)
  }

  resultados(){
    let estudante = (this.state.estudade)? "Sim" : "Não"
    this.setState({
      textoResultados: 'Olá ' + this.state.nomeInput + '\n' + 
      'Segue seus resultados: ' + '\n' +
      'Nome: ' + this.state.nomeInput + '\n' +
      'Idade: ' + this.state.idadeIput + '\n' +
      'Estudande: ' + estudante + '\n' +
      'Seu Limite R$' + this.state.valorLimite
    })


  }

  render() {
    return (
      <View >
        <ScrollView>
        <Text style={styles.titulo}> Banco React </Text>

        <TextInput
          style={styles.Input}
          placeholder='Digite seu nome'
          onChangeText={(texto) => this.setState({ nomeInput: texto })}
        />
        <TextInput
          style={styles.Input}
          placeholder='Digite sua idade'
          onChangeText={(idade) => this.setState({ idadeIput: idade })}
        />
        <Text style={styles.textSlider}>Digite seu limite</Text>
        <Slider
          style={{ width: '70%', height: 20, alignSelf: 'center' }}
          minimumValue={0}
          maximumValue={10000}
          onValueChange={(valorSelected) => this.setState({ valorLimite: valorSelected })}
        />
        <Text style={styles.textSlider}>R$ {this.state.valorLimite.toFixed(2)}</Text>
        <View style={styles.containerSwicth}>
          <Switch
            style={styles.switch}
            value={this.state.estudade}
            onValueChange={(valorEstudante) => this.setState({ estudade: valorEstudante })}
          />

          <Text style={styles.textSlider}> {(this.state.estudade) ? "Estudante" : "Não Estudante"}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.resultados}>
          <Text style={styles.textButton}>Abrir Conta</Text>
        </TouchableOpacity>

        <View style={styles.containerResultado}>
          <Text style={styles.TextResultado}>
                  {this.state.textoResultados}
          </Text>
        </View>

        </ScrollView>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSwicth: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerTitulo: {
    height: 150,
    backgroundColor: '#74a3ed'
  },
  titulo: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  Input: {
    width: 250,
    height: 40,
    borderRadius: 5,
    marginTop: 30,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    textAlign: 'center'
  },
  textSlider: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10
  },
  switch: {
    alignSelf: 'baseline',
    marginLeft: 70
  },
  button:{
    width: 120,
    height:40,
    alignSelf:'center',
    marginTop: 40,
    borderRadius: 20,
    borderColor: 'black',
    backgroundColor: '#34e3dd',
    alignItems:'center',
    padding:7
  },
  textButton:{
    fontSize: 18,
    alignItems:'center',
  },
  containerResultado: {
    width: 350,
    height:200,
    backgroundColor: '#8ef5f1',
    alignSelf:'center',
    marginTop:80,
    borderRadius:15
  },
  TextResultado:{
    fontSize: 18,
    alignItems:'center',
    marginLeft: 20,
    marginTop:20
  }
});

export default App;




