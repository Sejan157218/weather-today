const featchURL =async (url) =>{
    const res = await fetch(url);
    const data = await res.json();
    return data;
    
}


const showResult = (id,innertext) =>{
    document.getElementById(id).innerText = innertext;
}

const getWeather = ()=>{
    const searBox= document.getElementById('input-field');
    const searBoxValue = searBox.value;
    searBox.value = '';
    const url = 
    `https://api.openweathermap.org/data/2.5/weather?q=${searBoxValue}&units=metric&appid=1a06a9090632cab3debe2ffa50e8e0e6
    `;
    featchURL(url).then(data=>{
        showResult('city',data.name);
        showResult('temp',data.main.temp);
        showResult('condition',data.weather[0].main);
        showResult('condition-des',data.weather[0].description);
        const imgUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const img = document.getElementById('img');
        img.setAttribute('src',imgUrl)
    });   
}


