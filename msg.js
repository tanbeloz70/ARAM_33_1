$(document).ready(function() {
    //===================================================================
    // $(":checkbox").click(function() {

    //$('.slader').load(function() {
    // alert('hello');
 /*   var el = $('.slader li');
    //  $('.slader li').hide();
    // $('.slader li:eq(0)').toggle(5000);
    var cord = $('.slader li:eq(0)').position();
    // x = cord.left - $('.slader li:eq(0)').width();
    // y = cord.top - $('.slader li:eq(0)').height();
    x = cord.left();
    y = cord.top() - $('.slader li:eq(0)').height();

    x1 = $('.slader li:eq(0)').position().top;
    y1 = $('.slader li:eq(0)').offset().left;
    // alert('x=' + x + ' y=' + y + ' x1=' + x1 + ' y1=' + y1);
    g = 0;
    i = 0;
    while (i <= 3) {
        $('.slader li:eq(' + i + ')').hide(10000);
        $('.slader li:eq(' + i + ')').offset({ top: y, left: x });
        $('.slader li:eq(' + i + ')').css('z-index', i);
        $('.slader li:eq(' + i + ')').css('top', (y));
        $('.slader li:eq(' + i + ')').css('left', (x));
        //  alert(i);
        i = i + 1;
    }


    while (i >= 0) {
        $('.slader li:eq(' + i + ')').show(10000);
        $('.slader li:eq(' + i + ')').css('position', 'absolute');
        $('.slader li:eq(' + i + ')').css('z-index', i);
        $('.slader li:eq(' + i + ')').css('top', (y));
        $('.slader li:eq(' + i + ')').css('left', (x));
        //  alert(i);
        i = i - 1;
    }

*/

//$('.katalog div a').click(function() {

//	window.location.assign('http://localhost/ARAM_33/PARA_LOJA/SUPLUMENTOS/katalog_xml/suplum_4.xml');
	
	
	
//});










});
/*
        var musa = $(this).next('p');

        //alert($(this).next('p').html().length);
        if ((el1 == '#h') && ($(this).next('p').html().length <= 1)) {

            $.ajax({
                type: "GET",
                headers: { 'Access-Control-Allow-Origin': 'https://www.xsocialx.com' },
                url: "https://www.xsocialx.com/lab/bilozorova/AdminXS/valid_metod.php",

                // headers: { 'Access-Control-Allow-Origin': '' },
                //  url: "valid_metod.php",
                dataType: 'html',
                data: { 'nutill': el2 },
                success: function(dato) {
                    //alert(dato);
                    if (dato.trim().length > 0) {
                        ss = JSON.parse(dato);
                        //alert(ss);
                        var hr = "#h" + ss["NUtil"];
                        var stroka = "";
                        for (key in ss) { stroka = stroka + "<b>" + key + ":</b><dfn>" + ss[key] + "</dfn><br/>  "; }

                        var el = "a[href='" + hr + "']";

                        $(el).next('p').html(stroka);
                    }
                }
            }).done(function() {

                $(musa).show(300).animate({
                    top: -60,
                    right: -10,
                    width: "200px",
                    opacity: 1,
                    height: "auto"


                }, 300);



            });



        } else {
            $(this).next('p').toggle(300).animate({
                top: -60,
                right: -10,
                width: "200px",
                opacity: 1,
                height: "auto"


            }, 300);

        }


    });
    $('.dispN').click(function() { $(this).toggle(300); });


    //===============para text_reclamasois

    $('.quem_descobriu').click(function() {

        var el = $(this).attr('href');

        var el1 = el.substr(0, 2);
        var el2 = el.substr(2, (el.length - 2));

        if ((el1 == '#t') && ($(this).parent().next('.text_id').html().length <= 1)) {


            $.ajax({
                type: "POST",
                headers: { 'Access-Control-Allow-Origin': 'https://www.xsocialx.com' },
                url: "https://www.xsocialx.com/lab/bilozorova/AdminXS/valid_metod.php",

                // headers: { 'Access-Control-Allow-Origin': '' },
                //  url: "valid_metod.php",
                dataType: 'html',
                data: { 'id_reclamacos_para_status': el2 },
                success: function(dato) {
                    if (dato.trim().length > 0) {
                        ss = JSON.parse(dato);
                        var el = "p[id*='t" + el2 + "']";
                        $(el).html(ss).toggle(300);
                    }

                    var el_style1 = "select[name='status_reclamacos_up[" + el2 + "]']";
                    var num1 = $(el_style1).attr('id').indexOf('_');
                    var num3 = $(el_style1).attr('id').substr(num1, ($(el_style1).attr('id').length - num1));

                    var el_style = el_style1 + ' option:selected';
                    if ($(el_style).val() == '0') {
                        $(el_style).val(1);
                        $(el_style).html('em processamento');

                        $("b[id='stat" + el2 + num3 + "']").html('em processamento');
                    }

                }
            });
        } else { $(this).parent().next('.text_id').toggle(300); }
    });

    //=================================================
    //
    var elem = "select[name*='status_reclamacos_up']";
    $(elem).change(function() {
        var elem1 = $(this).attr('id').substr(3, ($(this).attr('id').length - 3));
        var num1 = elem1.indexOf('_');
        var num3 = elem1.substr(num1, (elem1.length - num1));
        elem1 = elem1.substr(0, num1);

        var elem2 = "input[id='recla_id" + elem1 + num3 + "']";

        $(elem2).val(elem1);

    });


    //---------------------para  contactos-mostrar-responsa(problemas)
    $('.reclamacos_response').click(function() {


        var el2 = $(this).attr("data-id");

        if (!$(this).prev().is('b')) {
            $.ajax({
                type: "POST",
                headers: { 'Access-Control-Allow-Origin': 'https://www.xsocialx.com' },
                url: "https://www.xsocialx.com/lab/bilozorova/AdminXS/valid_metod.php",

                //  headers: { 'Access-Control-Allow-Origin': '' },
                //  url: "valid_metod.php",
                dataType: 'html',
                data: { 'id_reclamacos_response': el2 },
                success: function(dato) {
                    // alert (dato);
                    if (dato.trim().length > 0) {
                        ss = JSON.parse(dato);
                        var el_ = "input[data-id='" + el2 + "']";
                        var $stroka = $("<b>" + ss['data'] + ": " + ss['texto'] + "</b>");
                        $stroka.insertBefore($(el_));
                    }

                }
            });

        } else { $(this).prev().toggle(200); }

    });

    ///------------------------------------para screver responda
    $('.reclamacos_escrever').click(function() {
        if (!$(this).next().is('div')) {
            var el2 = $(this).attr("data-id");
            var $stroka = $("<div id='resp" + el2 + "'><textarea rows='2' cols='25' name='text_reclamacos_responda' form='responda_user' ></textarea>" +
                "<input type='hidden' name='text_reclamacos_id_responda'   value='" + el2 + "' form='responda_user' />" +
                "<input type='submit' value='mandar'  form='responda_user' /></div>");
            $stroka.insertAfter($(this));
        } else { $(this).next('div').toggle(200); }



    });


    $(":checkbox").click(function() {

        val = $(this).val();

        if (($(this).attr("name") == 'DDen') && ($(this).is(':checked'))) {

            $("#N" + val).next().attr('class', 'motiv_del');
            $("#N" + val).not(this).prop('checked', false);
        }
        if (($(this).attr("name") == 'NDen') && ($(this).not(':checked'))) {
            val = $(this).val();
            $(this).next().attr('class', 'motiv_show');
            $("#D" + val).not(this).prop('checked', false);
        }


        if (($(this).attr("id").substr(0, 1) == 'D') && ($(this).is(':checked'))) {
            var vall = $(this).attr('id').substr(1, ($(this).attr('id').length));


            $("#N" + vall).next().attr('class', 'motiv_del');
            $("#N" + vall).not(this).prop('checked', false);
        }



        if (($(this).attr("id").substr(0, 1) == 'N') && ($(this).not(':checked'))) {
            var vall = $(this).attr('id').substr(1, ($(this).attr('id')).length);

            $(this).next().attr('class', 'motiv_show');

            $("#D" + vall).not(this).prop('checked', false);
        }


        // $; //Disable all with the same name
    });


    $('.NCont').click(function() {

        var el = $(this).attr('href');
        var el_tip = $(this).attr('title');
        var el1 = el.substr(0, 2);
        var el2 = el.substr(2, (el.length - 2));
        var musa = $(this).next('p');
        if ((el1 == '#h') && ($(this).next('p').html().length <= 1)) {

            $.ajax({
                type: "GET",
                headers: { 'Access-Control-Allow-Origin': 'https://www.xsocialx.com' },
                url: "https://www.xsocialx.com/lab/bilozorova/AdminXS/valid_metod.php",

                // headers: { 'Access-Control-Allow-Origin': '' },
                // url: "valid_metod.php",
                dataType: 'html',
                data: {
                    'NContt': el2,
                    'Tipo_denuncia': el_tip
                },
                success: function(dato) {
                    //  alert(dato);
                    if (dato.trim().length > 0) {
                        ss = JSON.parse(dato);
                        var hr = "#h" + el2;
                        var stroka = "";
                        for (key in ss) { stroka = stroka + "<b>" + key + ":</b><dfn>" + ss[key] + "</dfn><br/>  "; }
                        var el = "a[href='" + hr + "']";
                        $(el).next('p').html(stroka);

                    }
                }
            }).done(function() {
                $(musa).show(300).animate({
                    top: -60,
                    right: -10,
                    width: "200px",
                    opacity: 1,
                    height: "auto"
                }, 300);
            });
        } else {
            $(this).next('p').toggle(300).animate({
                top: -60,
                right: -10,
                width: "200px",
                opacity: 1,
                height: "auto"
            }, 300);

        }

    });

    $('.delete').click(function(event) {

        var el = $(this).attr('href');

        var primeira = el.substr(el.indexOf("num_del"));

        var ultimo = primeira.indexOf("&");
        var el2 = primeira.substr((primeira + 8), (ultimo))
        var val = el2.indexOf("=");

        var mensa = 'Excluir número de entrada: ' + el2;


        var checkstr = confirm(mensa);
        return checkstr;

    });



    $('.paqet_val').click(function() {

        var el = $(this).attr('href');
        var el1 = el.substr(0, 2);
        var el2 = el.substr(2, (el.length - 2));
        if ((el1 == '#F')) {
            $.ajax({
                type: "GET",
                headers: { 'Access-Control-Allow-Origin': 'https://www.xsocialx.com' },
                url: "https://www.xsocialx.com/lab/bilozorova/AdminXS/valid_metod.php",

                dataType: 'html',
                data: {
                    'nutil_oferta': el2
                },
                success: function(dato) {

                    stroka = dato;

                    $('.para_informacao').html(stroka);
                }


            }).done(function() {
                $('.para_informacao').show(300).animate({
                    top: 100,
                    right: 500,
                    width: "500px",
                    opacity: 1,
                    height: "auto"
                }, 300)
            });



        }

    });



    $(document).on('click', '.mudaqi', function() {

        mensa = "Mudar de estado companii  id= " + $(this).attr('id-data') + ' do status';
        return confirm(mensa);

    });



    $(document).on('click', '.umora', function() {
        //$('.umora').click(function() {

        var ela = $(this).attr('href');
        var el = ela.substr(2, (ela.length - 2));

        var el_dias_ofer = $(this).attr('id-data');
        var el_dias = $(this).attr('title');

        var mensa = 'Alterar a tarifa para Util=' + el + ' tarif dias=' + el_dias + " tarif diasoferta= " + el_dias_ofer;
        var checkstr = confirm(mensa);
        if (checkstr == true) {


            $.ajax({

                type: "GET",
                headers: { 'Access-Control-Allow-Origin': 'https://www.xsocialx.com' },
                url: "https://www.xsocialx.com/lab/bilozorova/AdminXS/valid_metod.php",

                dataType: 'html',
                data: {
                    'nutil_oferta': el,
                    'DiasOferta': el_dias_ofer,
                    'Dias': el_dias
                },
                success: function(dato) {

                    if (dato.trim().length > 0) {

                        $('.para_informacao').html("");
                    }
                }

            });


        } //end if (checkstr == true)


    }); // end $('.umora').click


    $(document).on('click', '.para_informacao', function() {
        $('.para_informacao').toggle(300).animate({
            top: 100,
            right: 500,
            width: "500px",
            opacity: 1,
            height: "auto"
        }, 300);

    });

    ////-----------------------------------------------------------------------------------------------
    $('.video_user').click(function() {

        var el = $(this).attr('id-data');
        var el1 = $(this).attr('id-data1');
        // alert(el1);
        if ($(this).next('.video_todo_user').html().length <= 1) {

            $.ajax({
                type: "GET",
                headers: { 'Access-Control-Allow-Origin': 'https://www.xsocialx.com' },
                url: "https://www.xsocialx.com/lab/bilozorova/AdminXS/valid_metod.php",

                // headers: { 'Access-Control-Allow-Origin': '' },
                // url: "valid_metod1.php",
                dataType: 'html',
                data: {
                    'nutil_todo_video': el,
                    'para_tipo': el1
                },
                success: function(dato) {

                    ss = JSON.parse(dato);

                    var stroka = "";
                    for (i = 0; i < ss.length; i++) {

                        for (key in ss[i]) { stroka = stroka + "<b>" + key + ":</b><dfn>" + ss[i][key] + "</dfn>  "; }
                        stroka = stroka + "<br/>------------------------------------------------------------<br/>";
                    }


                    //alert(dato);
                    //stroka = dato;

                    $('.para_informacao').html(stroka);
                },
                error: function(jqXHR, exception) {
                    if (jqXHR.status === 0) {
                        alert('Not connect. Verify Network.');
                    } else if (jqXHR.status == 404) {
                        alert('Requested page not found (404).');
                    } else if (jqXHR.status == 500) {
                        alert('Internal Server Error (500).');
                    } else if (exception === 'parsererror') {
                        alert('Requested JSON parse failed.');
                    } else if (exception === 'timeout') {
                        alert('Time out error.');
                    } else if (exception === 'abort') {
                        alert('Ajax request aborted.');
                    } else {
                        alert('Uncaught Error. ' + jqXHR.responseText);
                    }
                }


            }).done(function() {
                $('.para_informacao').show(300).animate({
                    top: 100,
                    right: 500,
                    // width: "800",
                    opacity: 1,
                    height: "auto"
                }, 300)
            });

        }

    });

    //$(document).ready(function() {
    //  alert('OLA');
    $('.pais_adm_inf').show(300).animate({
        opacity: 1,
        height: "auto",
        // width: "auto"
    }, 300);

    //});
    */