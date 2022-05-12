<?php

namespace Drupal\lesroisdelareno;

use Drupal\Core\Render\Element;
use Drupal\views\ViewExecutable;


class JobseekersResouces {
  
  static public function getView__resaliserPar(&$variables) {
    /**
     * On va charger la vue realiser par si le type de contenu inclut dans le
     * champs titre est 'nos realisations'.
     */
    if (!empty($variables['content']['titre'])) {
      $fields = Element::children($variables['content']['titre']);
      // dump($variables['content']);
      if (!empty($fields)) {
        $field = reset($fields);
        if (!empty($variables['content']['titre'][$field]['content']['#object'])) {
          /**
           *
           * @var \Drupal\node\Entity\Node $node
           */
          $node = $variables['content']['titre'][$field]['content']['#object'];
          
          if ($node->bundle() == 'nos_realisations' && !empty($node->field_domain_source)) {
            $view_id = 'realiser_par';
            /**
             *
             * @var ViewExecutable $view
             */
            $view = \Drupal::entityTypeManager()->getStorage('view')->load($view_id)->getExecutable();
            /**
             *
             * @var \Drupal\Core\Field\FieldItemList $field
             */
            $field = $node->field_domain_source;
            $domaine = $field->first();
            if ($domaine) {
              $domaine = $domaine->getValue();
              if (!empty($domaine['target_id'])) {
                $view->setArguments($domaine);
                $variables['content']['description'][] = $view->render();
              }
            }
          }
        }
      }
    }
  }
  
}