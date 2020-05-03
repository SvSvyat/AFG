import React, { Component }             from 'react';
import { Text, View, TouchableOpacity, Modal, TouchableHighlight, Button, Alert } from 'react-native';

import { styles }                       from './Style';
import CSS from 'csstype'
/*
*
    @brief: Pop-up component for request user answer.
*
*/

interface IPopUpProperties {
    handlers:  any[];
    container: JSX.Element;
};

export default class PopUpComponent extends Component<IPopUpProperties> {
    constructor(props: any)
    {    
        super(props);

        this._test = props.greeting;

        this._handlers = props.handlers;
        this._container = props.contain; 
        // this._buttons = props.buttons;

        // this._container = props.container;
    }
      
    _handlers: any[];
    // _buttons: ButtonProps[];
    _test: String;
    _container: JSX.Element;
    _viusalState = { 
        isVisible: false
    };
    
    GetToucheble = () => {
        return (
        <View>
            { this._handlers.map( (handler: any) => {
                return( <TouchableOpacity onPress = { handler }>
                            <Text>YA SOSU</Text>
                        </TouchableOpacity>
                ); } ) }
        </View>)
    };

    GetContainer = () => {
        return (
        <View>
            { this._container }
        </View>)
    };

    render(): JSX.Element {
        const { isVisible } = this._viusalState;
  
        return (
            <View>
                <this.GetContainer/>

                <this.GetToucheble/>
            </View>
        );
    }
}