 $(document).ready(function() {

           // $('label').addClass('toHide');
           // $('.toHide').css('display', 'none');

            var $container = $('#eniams_ticketbundle_ticket_nom'); //recupere input nom
            var $containerPrenom = $('#eniams_ticketbundle_ticket_prenom');
            var $containerPrice = $('#eniams_ticketbundle_ticket_price');
            var $containerBirthday = $('#eniams_ticketbundle_ticket_birthday');

            var index = $container.find(':input').length;


            $('#add_ticket').click(function(e){

                addName($container, $containerPrenom, $containerPrice, $containerBirthday);
                e.preventDefault();
                return false;
            });

     /*
     $("select").change(function () {


     })
*/

     $("form").change(function () {
/*
            total =  parseInt($('#thePrice').text());

             var curent  = parseInt($('select .price:selected').val());

         $('#thePrice').text(curent);
*/

         var total = 0;

         $('select .price:selected').each(function(e,item){
           total += parseInt($(item).val());
         });

         $('#thePrice').text(total);

     });









     var date = new Date();
            date.setDate(date.getDate());
            /*
           // dayOff = ['01-05']//, '25-12'];
             dayOff = new Date();
             dayOff.setMonth(04,01);
           //  dayOff = dayOff.toString();
             
            console.log(dayOff);
     
     */
                //new Date(2017, 12 - 1, 25);
            //  console.log(    new Date(2017, 12 - 1, 25));
            $('.js-datepicker').datetimepicker({
                format: "dd MM yyyy - hh:ii",
                autoclose: true,
                language: 'fr',
                pickerPosition: "bottom-left",
                startDate: date,
                endDate: '2017-12-31',
                daysOfWeekDisabled: [2],
                datesDisabled: [ 
                    new Date(2017, 12 - 1, 25), 
                    new Date(2017, 5 - 1, 2)
                    ]
            });
          
            function addIN($place, $insert){
                $place.append($insert);
            }

            function addName($container, $containerPrenom, $containerPrice, $containerBirthday)
            {
                var template = $container.attr('data-prototype')
                                .replace(/__name__label__/g, 'Nom visiteur n°' + (index+1))
                                .replace(/__name__/g, index);
                var $prototype = $(template);

                var templatePrenom = $containerPrenom.attr('data-prototype')
                                .replace(/__name__label__/g, 'Prenom visiteur n°' + (index+1))
                                .replace(/__name__/g, index);
                var $prototypePrenom = $(templatePrenom);

                var templatePrice = $containerPrice.attr('data-prototype')
                                .replace(/__name__label__/g, 'Prix visiteur n°' + (index+1))
                                .replace(/__name__/g, index);
                var $prototypePrice = $(templatePrice);
                
                 var templateBirthday = $containerBirthday.attr('data-prototype')
                                .replace(/__name__label__/g, 'Date de naissance visiteur n°' + (index+1))
                                .replace(/__name__/g, index);
                var $prototypeBirthday = $(templateBirthday);


                $('#eniams_ticketbundle_ticket_save').css('display', 'block');

                var $divForm = $('<div class="formBoarder col s12">');
                var $divInput = $('<div class="input-field col s4">');
                var $divInputPrenom = $('<div class="input-field col s4">');
                var $divInputPrice = $('<div class="input-field col s4">');
                var $divInputBirthday = $('<div class="input-field col s4">');


                $('form').append($divForm);


                /* TO DO Factoriser ce code en fonction
                addIN($divForm,$divInput);
                addIN($divInput,$prototype);

                addIN($divInput,$prototypePrenom);
                addIN($divForm,$divInput);

                 */
                //$('label').css('display', 'block');
                $divInput.append($prototype);
                $divForm.append($divInput);

                $divInputPrenom.append($prototypePrenom);
                $divForm.append($divInputPrenom);

                $divInputPrice.append($prototypePrice);
                $divForm.append($divInputPrice);
                
                $divInputBirthday.append($prototypeBirthday);
                $divForm.append($divInputBirthday);

                index++;

            }
              $('.js-datepicker').datetimepicker({
        format: "dd MM yyyy - hh:ii",                                                             
        autoclose: true,
        language: 'fr',
        pickerPosition: "bottom-left"
    });
           

        });