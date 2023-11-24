<?php

declare(strict_types=1);

namespace App\Presenters;

use Nette\Http\Request;
use Nette\Application\UI\Presenter;


class ApiPresenter extends Presenter
{


    public function actionDefault()
    {
        $this->getHttpResponse()->addHeader('Access-Control-Allow-Origin', ' * ');

        $request = $this->getHttpRequest();
        $postData = json_decode($request->getRawBody(), true);

        if ($postData != null) {
            if ($postData['login'] == 'test' && $postData['pwd'] == 'pwd') {
                $this->sendJson(['status' => 'ok']);
            } else {
                $this->sendJson(["error" => "unathorized"]);
            }
            // Fetch data from the database or other source based on $id
            // Return data in JSON format

        } else {
            $this->sendJson(["error" => "400"]);
        }
    }

    public function actionArticle($id)
    {
        $this->getHttpResponse()->addHeader('Access-Control-Allow-Origin', ' * ');
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
