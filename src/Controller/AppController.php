<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    #[Route(path: '/', name: 'index')]
    public function index(): Response
    {
        return $this->render('index.html.twig', [
            'label' => 'CLICK ME !',
        ]);
    }

    #[Route(path: '/authenticate', name: 'authenticate')]
    public function authenticate(): Response
    {
        return $this->render('authenticate.html.twig');
    }
}
