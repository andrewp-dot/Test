<?php

declare(strict_types=1);

namespace App\Presenters;

use Nette\Application\UI\Presenter;

class ApiPresenter extends Presenter
{

    public function actionDefault()
    {
        // Handle GET request for a specific article
        // Fetch data from the database or other source based on $id
        $articleData = array("default" => "function");

        // Return data in JSON format
        $this->sendJson($articleData);
        $this->terminate();
    }

    public function actionArticle($id)
    {
        // Handle GET request for a specific article
        // Fetch data from the database or other source based on $id
        $articleData = array("hello" => "wrold");

        // Return data in JSON format
        $this->sendJson($articleData);
        $this->terminate();
    }

    public function actionCreateArticle()
    {
        // Handle POST request to create a new article
        // Access request data using $this->getHttpRequest()->getJsonBody()

        // Process data and return a response
        $this->sendJson(['status' => 'success']);
        $this->terminate();
    }

    // Add other CRUD actions as needed
}
