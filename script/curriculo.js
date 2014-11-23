$('document').ready(function () {
    $.support.cors = true;

    fotohide();

    $.ajax({
        url: 'http://rarolabs.com.br:88/alunos.json',
        dataType: 'json',

        success: function (data) {
            
            data.sort(function (a, b) {
                if (a.nome > b.nome)
                    return 1;
                
                if (a.nome == b.nome)
                    return 0;
                
                if (a.nome > b.nome)
                    return -1;
            });

            $('document').delay(1000);

            data.forEach(function (e, i) {
                var link;

                if (e.link_html != "") {
                    link = e.link_html
                } else {
                    link = "#"
                }

                if (e.nome.toLowerCase().indexOf("rafael hanke") < 0)
                {
                    $("#divRelacionados").append("\n <a href='" + link + "' class='list-group-item'><h4 class='list-group-item-heading'>" + e.nome + "</h4><p class='list-group-item-text'>" + e.mini_curriculo + "</p></a>");
                }
            });

            $("#divAlerta").remove();
        },

        error: function (xhr, status, errorThrown) {
            console.log(errorThrown + '\n' + status + '\n' + xhr.statusText);
        }
    });
})

function fotoshow() {
    $('#fotoview').show();
}

function fotohide() {
    $('#fotoview').hide();
}