function area() {

    return Math.abs(this.x * this.y);

};

function vol() {

    return Math.abs(this.x * this.y * this.z);

};

function solve(area, vol, input) {

    let coordinates = JSON.parse(input); // връща масива, който директно map-ваме 
    let result = coordinates.map(x=>{
        return{
            area: area.call(x),
            volume:vol.call(x),
        };
    });

    return result;
}