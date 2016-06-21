<?php

	header("Server:openBSD");
	header("X-Powered-By:lighttpd");


	echo json_encode(array(
		"bq"=>555
	));