const centerdiv = document.getElementById("centerdiv");
fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
  .then((apidata) => {
     return apidata.json();
  }).then ( (jsondata) => {
    // console.log(jsondata[0].url);
    jsondata.map ( (val) => {
        let key = val.id;
        let img = document.createElement("img");
        img.src = `https://picsum.photos/200/300?random=${val.id}`;
        centerdiv.appendChild(img)
        console.log(img);
    })
  });
