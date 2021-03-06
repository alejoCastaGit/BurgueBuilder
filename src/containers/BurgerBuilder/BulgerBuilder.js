import React, { Component } from 'react';

import Auxiliar from '../../hoc/Auxiliar'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updateCounted = oldCount + 1
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCounted
        const priceAddition = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return
        }
        const updateCounted = oldCount - 1
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCounted
        const priceDeduction = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients })
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Auxiliar>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />
            </Auxiliar>

        )
    }
}

export default BurgerBuilder;