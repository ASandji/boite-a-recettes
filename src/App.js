import React, { Component } from 'react'
import Header from './components/header'
import Admin from './components/Admin.js'
import Card from './components/Card.js'
import recettes from './recettes'

//firebase
import base from './base'


// CSS
import './App.css'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount(){
    base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  componentWillUnmount(){
    base.removeBinding(this.ref)
  }

  ajouterRecette = recette =>{
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({recettes})
  }

  majRecette = (key, newRecette) =>{
    const recettes = { ...this.state.recettes }
    recettes[key] = newRecette
    this.setState({recettes})
  }

  supprimerRecette = key =>{
    const recettes= { ...this.state.recettes}
    recettes[key] = null
    this.setState({recettes})
  }

  chargerExemple = () => this.setState({recettes})

  render () {
     const cards = Object.keys(this.state.recettes) //renvoie un tableau de clé des recettes
     .map(key => <Card key={key} details={this.state.recettes[key]}/>)

    return (
      <div className='box'>
      <Header pseudo={this.state.pseudo}/>
        <h1>Bonjour {this.state.pseudo}</h1>
        <div className='cards'>
          <div className='card'>
            {cards}
          </div>
        </div>
        <Admin 
        pseudo={this.state.pseudo}
        recettes= {this.state.recettes}
        ajouterRecette = {this.ajouterRecette}
        majRecette= {this.majRecette}
        supprimerRecette= {this.supprimerRecette}
        chargerExemple={this.chargerExemple}/>
      </div>
    )
  }
}

export default App
