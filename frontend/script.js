$.ajax({
  url: "http://localhost:3000/images", // URL do JSON Server
  method: "GET",
  success: function (data) {
    data.forEach(function (image) {
      $("body").append(`
        <div>
          <h3>${image.title}</h3>
          <img src="${image.url}" alt="${image.description}" />
          <p>${image.description}</p>
        </div>
      `);
    });
  },
  error: function () {
    alert("Erro ao carregar imagens.");
  }
});
