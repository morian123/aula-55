$.ajax({
  url: "http://localhost:3000/images", // URL do JSON Server
  method: "GET",
  success: function (data) {
    data.forEach(function (image) {
      $("#gallery").append(`
        <div class="col-6 col-md-3">
          <img 
            src="${image.url}" 
            alt="${image.description}" 
            class="img-thumbnail img-click" 
            data-bs-toggle="modal" 
            data-bs-target="#imageModal"
            data-caption="${image.description}">
        </div>
      `);
    });

    // Evento de clique para alterar imagem e legenda no modal
    $(".img-click").on("click", function () {
      const src = $(this).attr("src");
      const caption = $(this).data("caption");
      $("#modal-img").attr("src", src);
      $("#modal-caption").text(caption);
    });
  },
  error: function () {
    alert("Erro ao carregar imagens.");
  }
});
