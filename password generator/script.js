const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "0","1","2","3","4","6","7","8","9","!","@","#","$","%","^","&","*"];

let len = 5;

function randomPassword(){

    
    // console.log("e;;p")
    for(let i =0; i<4; i++){
        let id = "#a"+i
        let pass = ""

        for(let i = 0; i<len; i++){
            pass += alphabet[Math.floor(Math.random()*alphabet.length)] 

            }
        console.log(pass)
        document.querySelector(id).value = pass
        
    }
}

function generate(){
    let a = document.querySelector("#pass-len")
    if (a.value != ""){
        len = a.value
    }
    randomPassword()
}

document.querySelector("#pass-len").addEventListener( 'keyup', (event)=>{
        if(event.keyCode === 13){
            event.preventDefault();
            generate();
        }
    })

function copyToClipboard(id_no) {
    var copyText = document.getElementById("a"+id_no).value;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied to clipboard");
    });
}