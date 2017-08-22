<?php
  include("classes/MP3.php");
  // Specify the word 
  $word = strtolower($_GET['word']);

  $word_count = strlen($word);

   // Set up the first file
    if ($word_count > 0) {
      $mp3 = new mp3('audios/alphabet/'.substr($word, 0, 1) . '.mp3');
      $mp3->striptags();
    }

  // Generate the mp3 file from each letter in the word 
  for ($i = 1; $i < $word_count; ++$i) {
    $cas_character = substr($word, $i, 1);
    $cas_mp3equivalent = new mp3('audios/alphabet/'.$cas_character . '.mp3');
    $mp3->mergeBehind($cas_mp3equivalent);
    $mp3->striptags();
  }
  
  // Spit out the audio file!  
  $mp3->output('word.mp3');
?>