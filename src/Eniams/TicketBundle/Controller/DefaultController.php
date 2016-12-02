<?php

namespace Eniams\TicketBundle\Controller;

use Eniams\TicketBundle\Form\TicketType;
use Eniams\TicketBundle\Entity\Ticket;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    public function indexAction(Request $request)


    {   $em = $this->getDoctrine()->getManager();

        $allTickets = $em->getRepository('EniamsTicketBundle:Ticket')->findAll();

        $ticket = new Ticket();
        $form = $this->createForm(TicketType::class, $ticket);


        $form->handleRequest($request);

        if($request->isMethod('POST'))
        {
            $dateResa = $_POST['eniams_ticketbundle_ticket']['visitDate'];
            $ticket->setVisitDate($dateResa);
            var_dump($ticket);die();

            
            $em->persist($ticket);
            $em->flush();
        }
        return $this->render('EniamsTicketBundle:Ticket:index.html.twig',
            array('form' => $form->createView(),
                'allTickets' => $allTickets
            ));
    }
}
