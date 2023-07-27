export default  function fetchApiDataAction(url, method = 'GET'){
    fetch(url, {
        method : method,
    })
    .then((response) => response.json())
    .then((data) => {
        if(data){
            return data;
        }
    })
    .catch((err) => {
        console.log('Can not get blogs data' + err.message);
    });
   
}