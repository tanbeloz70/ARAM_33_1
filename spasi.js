//=====================================================================================================
$(document).ready(function() {

    //============================================ 	



    $.ajax({
        type: "GET",
        url: "prise2.xml",
        dataType: "xml",
        success: xmlParser
    });

    //===================================================
    function xmlParser(xml) {

        function dok_sranisa() {
            this.tek_str = 1;
            this.kolich_na_stranise = 30;
            this.param_perem = 'parentid'; ///параметр идентификатор товара
            var pp = 'category:not([' + this.param_perem + '])';
            this.filtr = 'category:not([parentid])';
            // this.kolich_tovara= $(xml).find('category:not([parentid])').size(); 
            this.kolich_tovara = $(xml).find(this.filtr).size();
            this.kolich_stranch = this.kolich_tovara / this.kolich_na_stranise;
            this.ostatok = this.kolich_na_stranise * this.kolich_stranch - this.kolich_tovara;
            this.nachalo = 0;
            this.kones = 30;
            this.adres_str = 'http://localhost/aram_magazinagazina/main.tpl.php'; //текущая страница для карты сайта
            this.tekus_tovar = ""; //текущий товар
            this.tekus_kat_sistema = ""; //текущая категория системі   
            this.tekus_peremenna_kat_sistema = "kategor"; //переменная хмл по какой вібирать категорию

            this.tekus_sistema = "";
            this.tekus_kat_sistema = "kategor_all"; //переменная хмл по какой вібирать систему
            this.teg_xmla = "category";
            this.categor_sis = new Array();
            this.categorii_12 = new Array();

            this.kategorii_sistemi = function(sisss, massiv_sistema) {

                    var podstanovka = this.teg_xmla + "[" + sisss + "]";

                    var categorii_12_1 = Array();
                    var s = "";

                    $(xml).find(podstanovka).each(function() {

                        var tags = $(this).attr(sisss);
                        var re = /\s*,\s*/;
                        var tagList = tags.split(re);
                        // re =/|/g, '_';
                        var len = tagList.length;

                        for (i = 0; i < len; i++) { categorii_12_1.push(tagList[i].trim()); }
                    });
                    var dd = 0
                    categorii_12_1.sort();
                    var len = categorii_12_1.length;
                    for (i = 0; i < len; i++) {
                        sam = categorii_12_1[i];

                        if (s !== sam) {
                            s = sam;
                            massiv_sistema.push(s);
                        }

                    }

                } //end fun kategorii_sistemi

            //=====================================================================================================
            //=============все категории загоняю в массив єто фунция печати и построения меню'
            this.druk_kategorii_sistemi = function(element_stanisi, sistema_kategoria, massiv_sistema, dob) {

                    var len = Array.prototype.slice.call(massiv_sistema).length;

                    for (i = 0; i < len; i++) {

                        var teta = massiv_sistema[i];

                        $(element_stanisi).append("<li id='" + teta + "'>" + "</li>");
                        var my = '#' + teta;
                        $(my).append("<a href='index.html#tovari'  title='Sobralinho.ARAM.suplementos nutricionais " + massiv_sistema[i] + "'>" + massiv_sistema[i] + "</a>");

                        var gga = '#' + teta;
                        $(gga).append("<ul id='" + teta + "go'></ul>");
                        ss = '[' + sistema_kategoria + '="' + massiv_sistema[i] + '"]';

                        $(xml).find(ss).each(function() {
                            ggga = '#' + massiv_sistema[i] + 'go';
                            $(ggga).append("<li id='" + dob + $(this).attr('id') + "'><a href='index.html#tovari" +
                                "' title='Portugal.ARAM.comprar " + massiv_sistema[i] + "  " + $(this).text() + " ' >" + $(this).text() + "</a></li>");
                        });

                    } //end for
                } //end func druk kat sis


            //=============================================================================================
            this.gruk_razdela = function(razdel, kategoria, dob) {

                    $('#tovari').append("<ul id='" + razdel + "go'></ul>");
                    ss = '[' + kategoria + '="' + razdel + '"]';
                    $(xml).find(ss).each(function() {
                        $("#" + razdel + 'go').append("<li id='" + dob + $(this).attr('id') + "'><a href='index.html#" + $(this).attr('id') + "'   title='tratamento " + $(this).text() + "'  >" +
                            $(this).text() + "</a></li>");
                    });
                } //endgruk_razdela

            //====================================================================печать одного товара====           

            this.druk_odnogo_tovara = function(id) {
                //название товара   
                var fil = '[id=' + id + ']';
                $(xml).find(fil).each(function() {
                    nazva_tovara = $(this).text();
                    id = $(this).attr('id');

                    $('#yroven_nachalo1').append("<li id='t" + id + "'><a href='index.html#" + id + "'" + " title='ARAM.Sobralinho. " + nazva_tovara + "'" + " id='a" + id +
                        "'    ><h4>" + nazva_tovara + '</h4><h4>Numero=' + id + '</h4></a></li>');


                });


                //==========================наличие товара

                $(xml).find('[parentid=' + id + '][id=em_estoque]').each(function() {
                    var ppa = 'parentid';
                    $('#t' + $(this).attr(ppa)).append('<p' + " id='urn" + $(this).attr(ppa) + "' style='margin:10px' >" +
                        $(this).text() + "</p>");
                });

                // описание    
                var par = '[parentid=' + id + '][id*=' + '"DESCRI"' + ']';

                $(xml).find(par).each(function() {

                    $('#t' + $(this).attr('parentid')).append('<p style="display:none"><a href="index.html#dis' + id + '"   title="' + $(this).attr('id') + ' ' + nazva_tovara + '"   >' + $(this).attr('id') +
                        '<br/></a> <span id="#dis' + id + '">' + $(this).text() + '</span></p>');
                });

                //------   остальное    
                var par = '[parentid=' + id + '][id!=' + '"imj_jpg"' + '][id!=' + '"sena"' + ']:not([id*=' + '"DESCRI"' + '])';

                $(xml).find(par).each(function() {
                    if ($.trim($(this).text()) == "") {} else {
                        sii = $(this).text();
                        $('#t' + id).append('<p style="display:none"><a href="index.html#"   title="' + $(this).attr('id') + ' ' + nazva_tovara + '">' + $(this).attr('id') + '<br/></a> <span>' + $(this).text() +
                            '</span></p>');

                    }
                });




                //-----------картинки  

                var pp = '[parentid=' + id + '][id=imj_jpg]';
                $(xml).find(pp).each(function() {
                    var ppa = 'parentid';
                    nazva_tovara = nazva_tovara.replace(/\s+/g, '');


                    nazva_tovara = nazva_tovara.replace(/\|/g, '_');
                    nazva_tovara = nazva_tovara.replace(/\.|'/g, '');

                    nazva_tovara = nazva_tovara.replace(/\%/g, '__');
                    nazva_tovara = nazva_tovara.replace(/\+|-/g, "__");

                    nazva_tovara = nazva_tovara.replace(/\ /g, '');
                    nazva_tovara = nazva_tovara.replace(/\É|Ê|é/g, 'E');
                    nazva_tovara = nazva_tovara.replace(/\È/g, 'E');
                    nazva_tovara = nazva_tovara.replace(/\Ó|ó/g, 'O');
                    nazva_tovara = nazva_tovara.replace(/\Á|á/g, 'A');
                    nazva_tovara = nazva_tovara.replace(/\Í/g, 'I');
                    nazva_tovara = nazva_tovara.replace(/\Ú|ú/g, 'U');
                    nazva_tovara = nazva_tovara.replace(/\Ã|ã/g, 'A')

                    nazva_tovara = decodeURIComponent(nazva_tovara);

                    nazva_tovara1 = "./suplimentos/" + nazva_tovara;





                    $('#t' + $(this).attr(ppa)).append('<a href="' + nazva_tovara1 + '.php" title="' + nazva_tovara + '" class="ARAM_SUPLIMENTE">    <img' + " id='ur" + $(this).attr(ppa) +
                        "'     src='./pic/" + $(this).text() + "' alt=" + "' comparar suplementos " + nazva_tovara + ". Alverca do Ribatejo.ARAM.SOBRALINHO'    /></a>");
                });


            }


            //=================================++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            //druk_odnogo_tovara  

            //=========================================================================================================
            this.druk_kategorii_sistemi2 = function(element_stanisi, sistema_kategoria, massiv_sistema, dob) {

                    var len = Array.prototype.slice.call(massiv_sistema).length;

                    for (i = 0; i < len; i++) {
                        var teta = massiv_sistema[i];
                        $(element_stanisi).append("<li id='" + teta + "'><a href='index.html#tovari'  title='PORTUGAL.SOBRALINCHO.Suplementos o sistema " +
                            massiv_sistema[i] + "' >" + massiv_sistema[i] + "</a></li>");

                    }

                } //end druk_kategorii_sistemi2 
                //==========================================================================================================  



            this.druk_vsex_tovariv = function(nachalo, kones, smotret, j, marker_id, i, filtr, ide, dop1, dop2) {
                    //название товара   
                    //alert (filtr);  
                    $('#yroven_nachalo1').empty();

                    $(xml).find(filtr).slice(nachalo, kones).each(function() {
                        id = $(this).attr('id');

                        stranisa.druk_odnogo_tovara(id);
                    });


                    // var mm_etka=#tovari ul li .ARAM_SUPLIMENTE
                    $('#tovari ul li a:not(.ARAM_SUPLIMENTE)').click(function() {
                        $(this).css({ 'overflow-y': 'auto' });
                        //alert('*');
                        var sell = $(this).parent();
                        $(sell).children('p').toggle('slow');
                        return false;
                    });

                    $('#tovari ul li p a').click(function() {
                        $(this).css({ 'overflow-y': 'auto' });
                        $(this).next('span').toggle('slow');
                        return false;
                    });


                    //	 $('.ARAM_SUPLIMENTE').click(function(){
                    //$(this).css({'overflow-y':'auto'});
                    //alert('************');
                    //$(this).children('p').toggle('slow');
                    //			return false;
                    //						});

                    //  $('html, body').animate({ scrollTop: $('#tovari').offset().top }, 500); 

                    return false;

                } //end druk_vsex_tovariv  



        } //end dok_sranisa


        //=============================================================================================


        //вывод всех товаров
        stranisa = new dok_sranisa();
        var podstanovka = '[' + stranisa.param_perem + '=undefined]';
        //  ddiv= document.getElementById('tovari');   
        nachalo = 0;

        ///инфа про системы

        stranisa.kategorii_sistemi('sistema', stranisa.categor_sis);

        ///инфа про категории 12 систем            
        stranisa.kategorii_sistemi('kategor_all', stranisa.categorii_12);

        stranisa.druk_kategorii_sistemi("#sistema_produkto", 'sistema', stranisa.categor_sis, 'ss');
        stranisa.druk_kategorii_sistemi2("#sistema_kategoria", 'kategor_all', stranisa.categorii_12, 'kk');

        //===страниці вверху       
        smotret = "block";

        //=========================================печать===количество страниц 
        var j = 1;
        while (nachalo < stranisa.kolich_tovara) {
            kones = nachalo + stranisa.kolich_na_stranise;
            nachalo = kones;
            $('#nomer_stranisi').append("<a href='index.html#" + j + "str' title='ARAM.SUPLEMENTOS.pagina " + j + "'>" + j + '</a>');
            j = j + 1;
        }
        //==================================================================================
        //-----------------ВИВОД ТОВАРА
        marker_id = "yroven_nachalo";
        i = 1;
        filtr = 'category:not([' + stranisa.param_perem + '])';
        stranisa.druk_vsex_tovariv(0, stranisa.kolich_na_stranise, "block", 1, "yroven_nachalo", 1, filtr, "id", '', '');

        //======================вивод товара если клацнуить первоге меню

        $('#sistema_produkto li:has(ul)').click(function() {
            // alert($(this).attr('id'));
            //alert ('----');
            $('#yroven_nachalo1').empty();

            filtr = '[sistema="' + $(this).attr('id') + '"]';
            //  alert( filtr);
            stranisa.druk_vsex_tovariv(0, stranisa.kolich_na_stranise, "block", 1, "yroven_nachalo", 1, filtr, "id", '', '');
            $('html, body').animate({ scrollTop: $('#tovari').offset().top }, 500);




            return false;

        });



        //======================вивод товара в первом меню на конкретном товаре

        $('#sistema_produkto li ul li a').click(function() {
            //alert($(this).attr('href'));
            $('#yroven_nachalo1').empty();
            id = $(this).parent().attr('id').substr(2, ($(this).parent().attr('id').length - 2))


            stranisa.druk_odnogo_tovara(id);
            $('html, body').animate({ scrollTop: $('#tovari').offset().top }, 500);
            $('#tovari ul li').animate({ 'width': '50%', 'heigth': '50%' }, 1000);

            $('#tovari ul li img').animate({ 'width': '50%', 'heigth': '50%' }, 1000);




            $('#tovari ul li').click(function() {
                //alert('----****');
                $(this).css({ 'overflow-y': 'auto' });
                $(this).children('p').toggle('slow');
                return false;
            });

            $('#tovari ul li p a').click(function() {
                //alert('----');
                $(this).css({ 'overflow-y': 'auto' });
                $(this).next('span').toggle('slow');
                return false;
            });
            return false;


        });


        ///==================весь товар

        $('#ves_tovar').click(function() {
            $('#yroven_nachalo1').empty();

            filtr = 'category:not([' + stranisa.param_perem + '])';
            stranisa.druk_vsex_tovariv(0, this.kolich_tovara, "block", 1, "yroven_nachalo", 1, filtr, "id", '', '');
            $('html, body').animate({ scrollTop: $('#tovari').offset().top }, 500);
        });


        //============================================================клацаеш на втрое меню

        $('#sistema_kategoria li a').click(function() {

            $('#yroven_nachalo1').empty();

            filtr = '[kategor_all*="' + $(this).parent().attr('id') + '"]';

            stranisa.druk_vsex_tovariv(0, stranisa.kolich_na_stranise, "block", 1, "yroven_nachalo", 1, filtr, "id", '', '');

        });

        //=================================================== 


        //=======================================вивод товара в наличии=====================

        $('#em_estoque').click(function() {
            $('#tovari').empty();
            marker_id = "yroven_nachalo";

            i = 1;

            $('#tovari').append("<ul id= '" + marker_id + 1 + "' ></ul>");
            dop1 = '[id=';
            dop2 = ']';

            filtr = "[id='em_estoque']";

            $(xml).find(filtr).each(function() {
                filtr = '[id=' + $(this).attr('parentid') + ']';
                stranisa.druk_odnogo_tovara($(this).attr('parentid'));


            });


            $('#tovari ul li').click(function() {
                $(this).css({ 'overflow-y': 'auto' });
                $(this).children('p').toggle('slow');
                return false;
            });

            $('#tovari ul li p a').click(function() {
                $(this).css({ 'overflow-y': 'auto' });
                $(this).next('span').toggle('slow');
                return false;
            });






            $('html, body').animate({ scrollTop: $('#tovari').offset().top }, 500);
        });

        //=================================================== 


        $('#nomer_stranisi a').click(function() {


            this.kones = $(this).text() * 30;
            this.nachalo = ($(this).text() - 1) * 30;
            var i = ($(this).text() - 1);

            stranisa.druk_vsex_tovariv(this.nachalo, this.kones, "block", $(this).text(), "yroven_nachalo", 1, 'category:not([' + stranisa.param_perem + '])', 'id', "", "");
            $('html, body').animate({ scrollTop: $('#tovari').offset().top }, 500);
        });

        //---============================поиск препарата
        $('#posuka').submit(function() {

            var dd = ($(this).children().val().toUpperCase()).trim();
            $('#yroven_nachalo1').empty();

            filtr = "category:not([" + stranisa.param_perem + "]):contains(" + "'" + dd + "')";

            stranisa.druk_vsex_tovariv(0, stranisa.kolich_na_stranise, "block", 1, "yroven_nachalo", 1, filtr, "id", '', '');

            $('html, body').animate({ scrollTop: $('#tovari').offset().top }, 500);
            return false;
        });



        //===========================================================================

        //=========================================
        $('#sistema_produkto li:has(ul) ').hover(function() {

                var cord = $(this).position();
                $('li:has(ul)').children('ul').hide();

                var x = cord.left + $(this).width() - ($(this).width() / 2);
                var y = cord.top - ($(this).height() / 2);
                var pynkt_li = Math.ceil($(this).children().children().outerWidth());

                var vv = Math.ceil(Math.ceil(document.body.clientWidth / 2) / pynkt_li);

                var width_podmenu = (vv * pynkt_li) + 20;

                $(this).children('ul').css({ 'top': y, 'left': x });
                $(this).children('ul').css({ 'overflow': 'auto' });
                $(this).children('ul').css({ 'width': width_podmenu });

                $(this).children().show(300);
            },
            function() {
                $('li:has(ul)').children('ul').hide(300);
            }

        );
        //================================================================================



        //====================================================
        if ($('#tovari').length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $('#tovari').offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        //  return false; // выключаем стандартное действие

        ///////////////////--------------------выровнять менюпосредине горизонтальное
        //берем ширину горизонтального меню
        var menu_sirina = $('#sistema').width();

        //-- фактическую ширину каждого пункта меню с оступами
        var menu_element = $('#sistema').children().outerWidth();

        //минимальную ширину пункта меню определенного таблицей стилей
        var min_width_elem_m = $('#sistema_kategoria').children().css('min-width');
        var gg = min_width_elem_m.length - 2;

        //min_width_elem_m.substr(0,gg);
        var fak_sirina = menu_sirina / ((min_width_elem_m.substr(0, gg)));
        //if (menu_element<gg)


        //------------------------ віравниваю товари посередине 	 
        var sirina = $('#tovari').outerWidth();
        var sirina_l = $('#tovari li').outerWidth();

        var rizn = ((sirina - ((Math.floor(sirina / sirina_l)) * sirina_l)) - 5) / 2;

        $('#tovari').css({ 'padding-left': rizn + 'px' });
        $('#tovari').css({ 'padding-right': rizn + 'px' });



        ///------------ віравниваю menu посередине 

        var sirina = $('#sistema').width();

        var sirina_l = $('#sistema_kategoria li').outerWidth();


        kolichestvo = $('#sistema_kategoria li').length;
        f = sirina / kolichestvo;


        min_s_li = $('#sistema_kategoria li').css('min-width');

        //убираю рх из ширині

        min_s = Number(min_s_li.substring(0, (min_s_li.length - 2)));

        ///выясняю количество строк меню
        if (f < min_s) {
            vv = Math.ceil(min_s / f);

        } else { vv = 1; }

        //учитываю бордер 
        sir_bor = 2;

        //вісчитіваю ширину пукта меню
        min_s_li = (sirina / (kolichestvo / vv)) - sir_bor;

        $('#sistema_kategoria li').outerWidth((min_s_li));

        //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // віравниваю товари посередине 	 
        var sirina = $('#tovari').outerWidth();
        var sirina_l = $('#tovari li').outerWidth();

        var rizn = (sirina - ((Math.floor(sirina / sirina_l)) * sirina_l)) / 2 - 5;

        $('#tovari').css({ 'padding-left': rizn + 'px' });
        $('#tovari').css({ 'padding-right': rizn + 'px' });




    } //end parser   



}); // end ready