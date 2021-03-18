<?php

	// load in mailchimp library
	include('./MailChimp.php');
	
	// namespace defined in MailChimp.php
	use \DrewM\MailChimp\MailChimp;
	
	// connect to mailchimp
	$MailChimp = new MailChimp('95674f86056712a4430727efa4c565a2-us12'); // put your API key here
	$list = 'd9e043358c'; // put your list ID here
	$email = $_GET['EMAIL']; // Get email address from form
	$id = md5(strtolower($email)); // Encrypt the email address

	$result = $MailChimp->put("lists/$list/members/$id", array(
									'email_address'     => $email,
									'status'            => 'subscribed',
									'update_existing'   => true, // YES, update old subscribers!
							));
	echo json_encode($result);