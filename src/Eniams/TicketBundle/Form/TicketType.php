<?php

namespace Eniams\TicketBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;

class TicketType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('visitDate', DateTimeType::class, array(

                'widget' => 'single_text',
                'html5' => false,
                'format' => 'dd/MMMM/yyyy HH:mm',
                'model_timezone' => 'Europe/Berlin',
                'attr' =>['class' => 'js-datepicker'],
            ))

            ->add('nom', CollectionType::class, array('allow_add' => true))
            ->add('prenom', CollectionType::class, array('allow_add' => true))
            ->add('price', CollectionType::class, array('allow_add'=>true, 'entry_type' => ChoiceType::class, 
                'entry_options'=> array(   
                                            'label' => 'ticket', 
                                                'choices' => array('tarif normal, à partir de 12ans 16€'=>'16', 
                                                                    'tarif enfant, de 4 à 12 ans 8€'=>'8',
                                                                    'tarif senior, plus de 60 ans 12€' => '12',
                                                                    'tarif reduit, etudiant, employé du musée, militaire 10€' => '10',
                                                                     'gratuit pour les moins de 4 ans' => '0')    
                )))
            
            ->add('birthday', CollectionType::class, array('allow_add' => true, 'entry_type'=> BirthdayType::class,
                'entry_options'=> array(
                    'label' => 'date de naissance :',
                    'format' => 'dd - MMMM - yyyy',
                    'widget' => 'choice',
                    'view_timezone' => 'Europe/Berlin',
                    'years' =>  array_combine( \range(date('Y')-90, date('Y')), \range(date('Y')-90, date('Y'))),
                )))

            ->add('save', SubmitType::class, array('label' => 'Create ticket'))
            ->getForm();


        ;
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Eniams\TicketBundle\Entity\Ticket'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'eniams_ticketbundle_ticket';
    }


}
