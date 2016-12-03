 $(document).ready(function() {

            $('label').addClass('toHide');
            $('.toHide').css('display', 'none');

            var $container = $('#eniams_ticketbundle_ticket_nom'); //recupere input nom
            var $containerPrenom = $('#eniams_ticketbundle_ticket_prenom');
            var $containerReduction = $('#eniams_ticketbundle_ticket_reduction');

            var index = $container.find(':input').length;


            $('#add_ticket').click(function(e){

                addName($container, $containerPrenom, $containerReduction);
                e.preventDefault();
                return false;
            });
            var date = new Date();
            date.setDate(date.getDate());
             
           // dayOff = ['01-05']//, '25-12'];
             dayOff = new Date();
             dayOff.setMonth(05,01);
             dayOff = dayOff.toString();
             console.log(dayOff);
            $('.js-datepicker').datetimepicker({
                format: "dd MM yyyy - hh:ii",
                autoclose: true,
                language: 'fr',
                pickerPosition: "bottom-left",
                startDate: date,
                daysOfWeekDisabled: [2],
                datesDisabled: dayOff,
                
                
            });


            function addIN($place, $insert){
                $place.append($insert);
            }

            function addName($container, $containerPrenom, $containerReduction)
            {
                var template = $container.attr('data-prototype')
                                .replace(/__name__label__/g, 'Nom visiteur n°' + (index+1))
                                .replace(/__name__/g, index);
                var $prototype = $(template);

                var templatePrenom = $containerPrenom.attr('data-prototype')
                                .replace(/__name__label__/g, 'Prenom visiteur n°' + (index+1))
                                .replace(/__name__/g, index);
                var $prototypePrenom = $(templatePrenom);

                var templateReduction = $containerReduction.attr('data-prototype')
                                .replace(/__name__label__/g, 'Reduction visiteur n°' + (index+1))
                                .replace(/__name__/g, index);
                var $prototypeReduction = $(templateReduction);


                $('#eniams_ticketbundle_ticket_save').css('display', 'block');

                var $divForm = $('<div class="formBoarder col s12">');
                var $divInput = $('<div class="input-field col s4">');
                var $divInputPrenom = $('<div class="input-field col s4">');
                var $divInputReduction = $('<div class="input-field col s4">');


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

                $divInputReduction.append($prototypeReduction);
                $divForm.append($divInputReduction);

                index++;

            }
              $('.js-datepicker').datetimepicker({
        format: "dd MM yyyy - hh:ii",                                                             
        autoclose: true,
        language: 'fr',
        pickerPosition: "bottom-left"
    });
           

        });