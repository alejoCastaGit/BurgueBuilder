import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import style from './Burger.module.css'


const Burger = (props) => {
    const transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
    return (
        <div className={style.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger;