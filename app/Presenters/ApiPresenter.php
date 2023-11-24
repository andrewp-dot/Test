<?php

declare(strict_types=1);

namespace App\Presenters;

use Nette\Http\Request;
use Nette\Application\UI\Presenter;

/* header for accept http request */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
class ApiPresenter extends Presenter
{

    public function actionDefault()
    {
        $this->getHttpRequest();
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
