


export default class ButtonProps {
    text:       String = "";
    handler:    (...args: any[]) => void = () => {};
    buttonStyle: any;

    // new (text: any, hanler: any, buttonStyle: any) {
    //     this.text = text;
    //     this.handler = hanler;
    //     this.buttonStyle = buttonStyle;
    // }
    
    constructor(text: any, hanler: any, buttonStyle: any)
    {

    }

}

// export default class ButtonProps implements IButtonProps {
//     constructor(props: any) {
//         this.text = props.text;
//         this.handler = props.hanndler;
//         this.buttonStyle = props.buttonStyle;
        
//     }

//     text:       String;
//     handler:    (...args: any[]) => void;
//     buttonStyle: any;
// }