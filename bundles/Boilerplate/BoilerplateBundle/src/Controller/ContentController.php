<?php

namespace Boilerplate\BoilerplateBundle\Controller;

use Pimcore\Controller\FrontendController;
use Symfony\Bridge\Twig\Attribute\Template;
use Symfony\Component\HttpFoundation\Request;

class ContentController extends FrontendController
{
  #[Template('@BoilerplateBoilerplate/content/default.html.twig')]
  public function defaultAction(Request $request): array
  {
    return [];
  }
}