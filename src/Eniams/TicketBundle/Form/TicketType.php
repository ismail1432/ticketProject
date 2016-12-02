<?php

namespace Eniams\TicketBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

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
                'format' => 'dd-MMMM-yyyy HH:mm',
                'model_timezone' => 'Europe/Berlin',
                'attr' =>['class' => 'js-datepicker'],
            ))

            ->add('nom', CollectionType::class,
            array('allow_add' => true))
            ->add('prenom', CollectionType::class, array('allow_add' => true))
            ->add('reduction',CollectionType::class,
                 array(
                     'entry_type'=> CheckboxType::class,
                     'allow_add' => true,
                    'label'    => 'Reduction',
                    'required' => false,
                ))
            
            ->add('price')
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
