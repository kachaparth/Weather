const n= cities[35975]

let temprature = document.querySelector(".temp")
let image= document.querySelector("img")
let humidityspan=document.querySelector(".humidityvalue")
let windspan=document.querySelector(".windspeed")
let windirection=document.querySelector(".windir")
let nature = document.querySelector(".nature")
async function tem( p ){

        git 
    let response = await fetch(LINK);
    let wheather = await response.json();


   temprature.innerHTML=wheather.current.temp_c+ "°C" 

 image.setAttribute("src", wheather.current.condition.icon)

 image.style.visibility="visible";

 humidityspan.innerHTML=wheather.current.humidity + "%"
   windspan.innerHTML=wheather.current.wind_kph + " ₖₚₕ"
 
   let direction = wheather.current.wind_dir;
   if(direction == "E")
       windirection.innerHTML="East";
    else 
    if(direction == "W")
        windirection.innerHTML="West";
    else
    if(direction == "S")
        windirection.innerHTML="South";
    else
    if(direction == "N")
        windirection.innerHTML="North";
    else if(direction == "SW")
    windirection.innerHTML="South West";

   nature.innerHTML=wheather.current.condition.text

     console.log(wheather.current.temp_c)
    console.log(wheather.current.condition.icon)
     console.log(wheather);
    
    }


    function call_to_tem() {
        let amount=document.querySelector(".place")
        let amtvalue= amount.value
         console.log(amtvalue)
         tem(amtvalue)
    }
    let search= document.querySelector(".place");
    
 
    search.addEventListener("keypress",(evt)=>{
        if(evt.key == "Enter"){
        evt.preventDefault();
        
        call_to_tem();
      
        }
    })
    
    let btn=document.querySelector(".btnf")

    btn.addEventListener("click",(evt)=>{
        evt.preventDefault();

           call_to_tem();
    })



//TO ADD OPTION IN DROPDOWN 


    // let city = document.querySelectorAll(".place select")

    // for(let select of city)
    // {
    //     for(code in cities)
    //     {
    //         let option=document.createElement("option")
    //         option.value=cities[code]
    //         option.innerText=cities[code]
    //         select.append(option)
    //     }
    // }





//SURYADEEP FETCH APPROCH

    // function getfact(){
    //     fetch("https://api.weatherapi.com/v1/current.json?key=6988433e6fb94462bf052126240707&q=London", {
    //         mode: 'cors',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*'
    //         }
    //     }).then((res) => {
    //         return res.json();
    //     }).then((ans) => {
    //         console.log(ans);
            
    //     });}