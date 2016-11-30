<?php

namespace Eniams\TicketBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Validator\Constraints\Collection;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

class TicketType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('nom', CollectionType::class,
            array('allow_add' => true))
            ->add('prenom', CollectionType::class, array('allow_add' => true))
            ->add('reduction', CollectionType::class,
                array('allow_add' => true))
           // ->add('price')
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
