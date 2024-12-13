$.ajax({
    url: "http://localhost:3000/images",
    method: "GET",
    success: (images) => {
        images.forEach( (image) => {
        $("#gallery").append(`
            <div>
                <img src="${image.url}" alt="${image.description}" width="300px">
            </div>
            `)}
    )},
    error: (error) => {
        alert("algo deu errado!!");
        console.error(error);
    }
})