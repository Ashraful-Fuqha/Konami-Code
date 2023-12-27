const pressed = [];
const secreteCode = 'mjafarsadiq'

window.addEventListener('keyup', e => {
    console.log(e.key)
    pressed.push(e.key)
    pressed.splice(-secreteCode.length - 1, pressed.length - secreteCode.length);
    if(pressed.join("").includes(secreteCode)){
        console.log("SEE THE PAGE")
        cornify_add();
        console.clear()
        pressed.splice(0,pressed.length)
    }
    console.log(pressed)
})

window.addEventListener('click', () =>{
    if(window.screen.availWidth <= 375){
        cornify_add();
    }
})