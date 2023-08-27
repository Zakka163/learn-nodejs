for (let i = 0; i < 3000; i++) {
    fetch('http://localhost:80')
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
            // response.json().then((t)=>{console.log(t);})
        })

}
