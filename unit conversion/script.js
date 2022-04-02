let input = document.getElementById('num');

function length(val){

    document.getElementById('support1').textContent = val + " meters = " + (val*3.28084).toFixed(3) + " feet | " +
                                                                    val + " feet = " + (val/3.28084).toFixed(3) + " meters"
}
function volume(val){

    document.getElementById('support2').textContent = val + " liters = " + (val*0.264172).toFixed(3) + " gallons | " +
                                                                    val + " gallons = " + (val/0.264172).toFixed(3) + " liters"
}
function mass(val){

    document.getElementById('support3').textContent = val + " kilos = " + (val*2.20462).toFixed(3) + " pounds | " +
                                                                    val + " pounds = " + (val/2.20462).toFixed(3) + " kilos"
}
input.addEventListener('keyup', (event) =>{
    if(event.keyCode === 13){
        event.preventDefault();
        // console.log(input.value);
        let val = input.value;
        length(val);
        volume(val);
        mass(val);
    }
});
