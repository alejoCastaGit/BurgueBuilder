import React, { Component } from 'react';

import Auxiliar from '../../hoc/Auxiliar'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxiliar>
                <Burger />
                <div>Build Controls</div>
            </Auxiliar>

        )
    }
}

export default BurgerBuilder;