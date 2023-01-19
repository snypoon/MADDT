<?php
$sServer		= 'https://' . $_SERVER['HTTP_HOST'];
$sURI				= trim(strtolower($_SERVER['REQUEST_URI']));
$sPath			= $_SERVER['DOCUMENT_ROOT'];
$sURL				= $sServer . '/' . substr(strtolower($_SERVER['HTTP_ACCEPT_LANGUAGE']) . 'de', 0, 2) . '/';
$pURI				= null;
$bRedirect	= false;
$iCount			= 0;

if ($sURI == '/') {
	$bRedirect	= true;
}

if (!$bRedirect) {
	$pURI				= explode('/', $sURI, 10);
	$iCount			= count($pURI);
	$bRedirect	= ($iCount < 2 or $iCount > 4);
}

if (!$bRedirect) {
	switch ($pURI[1]) {
		case 'de':
		case 'en':
		case 'ru':
			if ($iCount < 3) {
				$sURL				= $sServer . '/' . $pURI[1] . '/';
				$bRedirect	= true;
			} else {
				$sPath	.= '/lng/' . $pURI[1];
			}
			break;
		default:
			$sURL				=  $sServer . '/de/';
			$bRedirect	= true;
	}
}

if (!$bRedirect) {
	switch ($pURI[2]) {
		case '':
			$sPath	.= '/index.html';
			break;
		case 'legal':
			$sPath	.= '/legal.html';
			break;
		default:
			$bRedirect	= true;
	}
}

if (!$bRedirect) {
	switch ($pURI[3]) {
		case '':	break;
		default:	$bRedirect	= true;
	}
}

if ($bRedirect) {
	header	('Location: ' . $sURL);
	exit		();
}

$hFile	= fopen($sPath, 'r');
if ($hFile !== false) {
	echo		fread($hFile, filesize($sPath));
	fclose	($hFile);
}