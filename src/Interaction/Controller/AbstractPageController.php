<?php

namespace Interaction\Controller;

abstract class AbstractPageController
{
    public function render($request, $view, $dataModel = [])
    {
        $template = $view;

        if (isset($request['dc']['v']['model'][$view])) {
            $viewModel =
                $request['dc']['v']['model'][$view]->as_array(
                    $dataModel);
        } else {
            $viewModel = $dataModel;
        }

        if (isset($viewModel['title'])) {
            $title = $viewModel['title'];
        }

        $content =
            $request['dc']['v']['template_engine']->render(
                $template,
                $viewModel);

        return
            $request['dc']['v']['template_engine']->render(
                'layout',
                compact('title', 'content'));
    }
}
