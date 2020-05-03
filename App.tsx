import React from 'react';
import StartMenu from './components/startMenu';
<<<<<<< Updated upstream
=======
import PopUpMenu from './components/PopUpComponent/PopUpBox';
import ButtonProps from './components/PopUpComponent/ButtonProps';
import { TouchableHighlight, Text, TouchableOpacity, View } from 'react-native';
import { buttonStyle } from './components/PopUpComponent/Style';
>>>>>>> Stashed changes

export default function App() {
  const k = new ButtonProps("test", () => { console.log("SERSR")}, buttonStyle.okButton);
  return (
        <PopUpMenu handlers = { [() => {console.log("HOLA")}, () => {console.log("HOLA 2")}] }
               container = {  <TouchableOpacity>
                                <Text>TEST</Text>
                              </TouchableOpacity> }  
        >
        </PopUpMenu>
    );
}
