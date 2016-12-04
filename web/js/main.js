 $(document).ready(function() {

            $('label').addClass('toHide');
            $('.toHide').css('display', 'none');

            var $container = $('#eniams_ticketbundle_ticket_nom'); //recupere input nom
            var $containerPrenom = $('#eniams_ticketbundle_ticket_prenom');
            var $containerPrice = $('#eniams_ticketbundle_ticket_price');

            var index = $container.find(':input').length;


            $('#add_ticket').click(function(e){

                addName($container, $containerPrenom, $containerPrice);
                e.preventDefault();
                return false;
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
              console.log(    new Date(2017, 12 - 1, 25));
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

            function addName($container, $containerPrenom, $containerPrice)
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


                $('#eniams_ticketbundle_ticket_save').css('display', 'block');

                var $divForm = $('<div class="formBoarder col s12">');
                var $divInput = $('<div class="input-field col s4">');
                var $divInputPrenom = $('<div class="input-field col s4">');
                var $divInputPrice = $('<div class="input-field col s4">');


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

                index++;

            }
              $('.js-datepicker').datetimepicker({
        format: "dd MM yyyy - hh:ii",                                                             
        autoclose: true,
        language: 'fr',
        pickerPosition: "bottom-left"
    });
           

        });