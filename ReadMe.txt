TITLE:	 ReadMe.txt
HISTORY: 11/09/15 - Created.
---------------------

PROJECT: AdventWreath
AUTHOR:  Margaret Hoang (about.me/mhoangcs)
TERMS OF USE: 
* Noncommercial use only.  You may use AdventWreath on your personal or church website, but it may not be displayed 
on or packaged with any site/code/material that is used for commercial purposes.
* No derivative works.  Feel free, however, to suggest modifications or submit a pull request if you find a bug.  :)
* No redistribution.
* Attribution is appreciated, but not required.
---------------------

DESCRIPTION: AdventWreath is a simple and easy-to-use script that displays a festive wreath on your website, blog, or 
any online space where you want to observe the season of Advent.  This wreath includes five candles: 

1.	Purple	(First Sunday of Advent)
2.	Purple	(Second Sunday)
3.	Rose	(Third Sunday)
4.	Purple	(Fourth Sunday)
5.	White	(Christmas Day) 

AdventWreath uses the current datetime to determine when Advent starts in your time zone, and each Sunday until 
Christmas, it "lights" the next Advent candle in the wreath. 
---------------------

REQUIREMENTS: jQuery 1.11.1

CONTENTS: preAdvent.png, Advent1.png, Advent2.png, Advent3.png, Advent4.png, Advent5.png, adventWreath.js
Total size about 380KB.
---------------------

HOW TO USE: 
Make sure jQuery 1.11.1+ is installed first.

For websites:
1.  Upload the "advent" folder to the root directory of your site.
2.  Add this <script> reference right before the closing </body> tag of your HTML page:
	<script src="advent/adventWreath.js"></script>
(You may need to change the src URL if your page is not in the root directory.)
3.  Use this image tag as a placeholder for the wreath - the width and style are optional, but the class 
"adventWreath" is required:
<img class="adventWreath" width="200px" style="display: block; margin: 0 auto;" />
 
For blogs:
1.  Upload the six wreath images to your blog or photo hoster.  
2.  Open the adventWreath.js in a text editor, like Notepad.  Replace the image URLs with the direct links to your 
hosted images:
	if (currentDate < adventFirst) {
		// pre-Advent
		$("img.adventWreath").attr("src", "LINK_TO_preAdvent.png_GOES HERE");
	} else if (currentDate >= adventFirst && currentDate < adventSecond) {
		// Advent 1
		$("img.adventWreath").attr("src", "LINK_TO_Advent1.png_GOES HERE");
	} else if (currentDate >= adventSecond && currentDate < adventThird) {
		// Advent 2
		$("img.adventWreath").attr("src", "LINK_TO_Advent2.png_GOES HERE");
	} else if (currentDate >= adventThird && currentDate < adventFourth) {
		// Advent 3
		$("img.adventWreath").attr("src", "LINK_TO_Advent3.png_GOES HERE");
	} else if (currentDate >= adventFourth && currentDate < christmas) {
		// Advent 4
		$("img.adventWreath").attr("src", "LINK_TO_Advent4.png_GOES HERE");
	} else {
		// Christmas!
		$("img.adventWreath").attr("src", "LINK_TO_Advent5.png_GOES HERE");
	}
3.  Right before the closing </body> tag of your blog, paste the entire contents of adventWreath.js, surrounding 
it with <script></script> tags.
4.  Use this image tag as a placeholder for the wreath - the width and style are optional, but the class 
"adventWreath" is required:
<img class="adventWreath" width="200px" style="display: block; margin: 0 auto;" />
