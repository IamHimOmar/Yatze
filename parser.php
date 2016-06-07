<?php
class htmlParser{
	var $output;
	function htmlParser($fileToParse='default_template.html'){
		(file_exists($fileToParse))?
			$this->output= file_get_contents($fileToParse):die('Error: file'.$fileToParse.'not found');
	}
	function parseHtml($keyValueArray=array()){
		if (count($keyValueArray)>0) {
			foreach ($keyValueArray as $key => $value) {
				$value=(file_exists($value))?
					$this->parseFile($value):$value;
				$this->output=str_replace('{'.$key.'}', $value, $this->output);
			}
		}
		else{
			die('Error: no key-value array given!');
		}
	}
	function parseFile($file){
		ob_start();
		require($file);
		$value=ob_get_contents();
		ob_end_clean();
		return $value;
	}
	function outputDisplay(){
		return $this->output;
	}
}
?>
