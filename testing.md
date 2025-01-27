# Stardew Valley Themed Memory Game - Testing

![Mock-up](docs/mockups/mockup-allscreens.png)

#### **By Zoe Heathcote**
[Click here to view the live web application](https://zog08.github.io/memory-game-MP2)

This is the testing documentation for my web application: Stardew Valley Memory Game.

[Full README available here](README.md)


## Table of Contents

1. [Introduction](#introduction)
2. [Automated Testing](#automated-testing)
    * [HTML Validation](#html-validation)
    * [CSS Validation](#css-validation)
    * [JavaScript Validation](#javascript-validation)
    * [Accessibility](#accessibility)
    * [Performance](#performance)
3. [Manual Testing](#manual-testing)
    * [Testing User Stories](#testing-user-stories)
    * [Feature Testing](#feature-testing)
        * [Responsiveness / Device Testing](#responsiveness--device-testing)
        * [Browser Compatibility](#browser-compatibility)
        * [Feature Testing Results Table](#feature-testing-results-table)
4. [Bugs & Fixes](#bugs--fixes)
    * [Known & Remaining Bugs](#known--remaining-bugs)

- - -

## Introduction

While building my memory game site I developed a comprehensive testing plan to ensure all elements were functioning correctly, using predominantly manual testing. I did try some automated tests during and at the end of the development process, which was a great learning process as part of my Code Institute learning journey. I felt that due to the low complexity of the website and high complexxity of the automated testing that I would need to write that this wouldnt be necessary for my application, with it beng fairly simple in content, and that it would be better served with in-depth manual testing which is detailed below.

My manual testing involved going through the game and manually checking all elements behaved as expected and making sure that the JavaScript was producing the correct results based on the user selections. I have also included details of automated testing/validation that I undertook which included validation for HTML & CSS and checking the site for accessibilty and performance. The site was tested throughout the process, both in the development and deployed version of the sites. All the test results detailed below are based on the [deployed site](https://zog08.github.io/memory-game-MP2). 

## Automated Checks and Validation

### HTML Validation

I ran the code for all the pages through the [W3C HTML Validator](https://validator.w3.org/nu/).

#### **Errors**

There were 2 errors, some occurring on the same element across multiple pages:

<summary>Error 1</summary>

* I had closed my image tags with a trailing /> which isnt relevant to coding today.
* Fix: remove the trailing /> and replace with > on all image tags.

<summary>Error 2</summary>

* I had neglected to add the logo image / link into a header section (this also threw up errors in my WAVE report)
* Fix: Add header section above body HTML with the logo inside.


#### **HTML Validation Post-Fix**

<details><summary>HTML Validation Final Results - index.html</summary>
<img src="docs/testing/htmlchecker-index.png">
</details>

<details><summary>HTML Validation Final Results - game.html</summary>
<img src="docs/testing/htmlchecker-game.png">
</details>

<details><summary>HTML Validation Final Results - end.html</summary>
<img src="docs/testing/htmlchecker-end.png">
</details>

<details><summary>HTML Validation Final Results - 404.html</summary>
<img src="docs/testing/htmlchecker-404.png">
</details>

- - -

### CSS Validation

I ran the CSS code through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input). 

#### **Errors**
<summary>CSS Validation Initial Results</summary>

There were no errors, but 1 warning:

Warning 1: -webkit-transition-duration is a vendor extension
* Fix: No fix, these vendor extensions help support browser compatibility and are proprietary code that the validator cannot assess properly.

- - -

### JavaScript Validation

I ran the JavaScript code through [JSHint](https://jshint.com/). 

There were no errors but there were a number of warnings which can be grouped as follows:

<details><summary>Pre-Fix JS Warnings / Comments</summary><img src="docs/testing/jschecker-prefix.png">
</details>

<summary>Warning 1: Missing semi-colons</summary>

* Fix: add semi-colons as appropriate

<summary>Warning 2: "Expected an assignment or function call and instead saw an expression"</summary>

* Fix: No fix. This is correct code, as an on-click event found in HTML.

I did extensive investigation about these warnings, it seems to relate to the way I've written the function.

<summary>Warning 3: Undefined Variables</summary>

* Fix: These variables are referred to outside .js file (as onclick events within html etc) and therefore arent picked up by the input method of css checker

#### **JavaScript Validation Post-Fix**

<details><summary>JavaScript Validation Final Results</summary>
<img src="docs/testing/jschecker-postfix.png.png">
</details>

- - -

### Accessibility

I ran the site through the [Wave Web Accessibility Evaulation Tool](https://wave.webaim.org/). 

#### **Accessibility Errors**

On index, game and end .html there were 2 warnings, the same occuring across the pages:

<details><summary>Warnings and screenshot</summary>
<img src="docs/testing/wave-index-prefix.png">
</details>

##### Alert 1: Missing structural element
* Missing Header section
* Fix: Added Header section within html, with logo image and link within

##### Alert 2: Contrast error
* Low contrast on h1 across all pages
* Fix: I had not set a fallback background colour in case the background image fails to load. Set background colour for body. Also checked manually that the image and h1 text had sufficient contrast (7.92:1, passes)

<details><summary>Post-fix 404 page and screenshots</summary><img src="docs/testing/wave-404-postfix.png"><img src="docs/testing/wave-404-postfix-details.png"></details>

##### Alert 3: No fix made

* Redundant link
* I decided not to change the content of this 404 page. The test showed that there were two links next to each other that were the same. This was the 'Go Home' button beneath the 404 message, and also the link within the the page header logo. I decided that for the sake of continuity across the pages that I shouldn't remove the link from the top logo. I decided that I should keep the button to instruct the player to return to the index page as without it the page would be very confusing to navigate away from. These reasons, coupled with the hope that the 404 page wouldn't be needed very often and did not form part of the normal day-to-day usage of the page, I have concluded to ignore the warning on this page only.

#### **Wave Web Accessibility Results Post-Fix**

<details><summary>Wave Web Accessibility Final Results - index.html</summary>
<img src="docs/testing/wave-index-postfix.png">
</details>

<details><summary>Wave Web Accessibility Final Results - index.html</summary>
<img src="docs/testing/wave-game-postfix.png">
</details>

<details><summary>Wave Web Accessibility Final Results - index.html</summary>
<img src="docs/testing/wave-end-postfix.png">
</details>


#### **Additional Accessibility Checks - Placeholder Text & Images**

When tidying up the project in the final stages before submission I did some general house keeping and testing to ensure that everything looked easily readable to my own knowledge. I manually tested with the cherry picker tool on WAVE where a font appeared above my background image. I also ensured that all alt texts were sensibly named and didnt contain any uneeded or confusing information. I ensured that my form inputs were properly labelled.

- - -

### Performance

I ran the site through Google Chrome Dev Tools' Lighthouse to check on its performance on both mobile and desktop devices, where the scores and comments were identical for both devices tested.
I found that my website scored excellently in all areas tested, but I decided to look into some of the smaller warnings that were flagging to see improvements could be made in the timeframe given.

#### **Results**
<details><summary>All Pages - console warning</summary>

* 'Best Practise' flagged an error in console, "Browser errors were logged to the console" "Cannot set properties of null"
* Decision made to not change the code to improve this score. The error is logged because before the game is played there is no score to save / get from local storage hence the null output. This error does not show when tested after a game is played and the mostRecentScore is ready in local storage to be retrieved by the function that sets the innerText.
<img src="docs/testing/lighthouse-index.png">
<img src="docs/testing/lighthouse-game-error.png">
</details>

<details><summary>Console Error Test Rerun</summary>

* Lighthouse test re-run after playing game where there is a mostRecentScore stored locally and ready to get.

<img src="docs/testing/lighthouse-end-noconsolewarning.png">
</details>


<details><summary>Other Pages Results</summary>

**Game Page**
<img src="docs/testing/htmlchecker-gamepage.png">

**End Page**
<img src="docs/testing/testing_lh_404_mobile1.jpeg">

**404 Page**
This page had a warning for 'Low resolution image used'. I decided not to change the image because there was no other image of the Stardew specific magnifying glass available in greater resolution. I decided that because the image is small and by its very nature supposed to look lo-fi and pixelated that it did not affect enjoyment of the game. The previously found console warning also showed here regarding local storage cannot set property of null, but if I retested with a mostRecentScore saved in the local storage, again this negated the error and thus improved the score.

<img src="docs/testing/lighthouse-404.png">

</details>

- - -

////////////////////////////////////////////done to here!!/////////////////

## Manual Testing
### Testing User Stories

I tested the site based on my user stories:

| No. | User Goal | How is it achieved? |
| :--- | :--- | :--- |
| 1 | I want to take part in a fun, online game | The memoy game is a fun, online game which gives people an insight in to the worl of Stardew Valley. It has been designed to be light-hearted and lo-fi in style to keep things fun. |
| 2 | I want to test my memory skills | The memory game uses 12 upturned character cards to test the users memory skills |
| 3 | I want to improve my memory skills / brainpower / speed | While playing multiple times, scores improve as the user can more confidently identify each character from Stardew Valley. The timer and move counter quantify improvement, and the leader board with top 5 scores incentivise the user to improve |
| 4 | I want to enjoy the Stardew Valley theme | The website has been based on the original Stardew Valley artwork, using the official characters, font and theme throughout. |
| 5 | I want to access the quiz on any device | The site has been designed to be as minimal and lo-fi as possible. Special consideration has been taken to ensure that the game appears on small to large screens without loss of enjoyment or accessibility. |
| 6| I want to navigate the site easily | Every page has a link to the welcome screen within the logo header. The buttons are noticeable as a usable feature. There is uncluttered and friendly design layout throughout the website. Buttons and forms are labelled correctly, along with aria-labels for screen readers. |
| 7 | I want to entertain visitors to my site and keep them there for longer periods of time | The game is designed as simple and easy to understand, yet grabs the users attention. The hiscore board motivates the user to try again to beat a previous score. |
| 8 | I want to educate the user on Stardew Valley Characters and artwork | All of the artwork was lifted from the [Official Concerned Ape, Stardew Valley game](stardewvalleywiki.com). The images throughout are of good quality and the design is cohesive in terms of branding etc. |
| 9 | I want the user to enjoy visiting my site | The site is fun to play and easy to use. As a user its a fun way to become aware of the Stardew Valley brand and the original game. |
| 10 | I want to capture new audiences and translate them into regular visitors | The user should find the game enjoyable and easy to use, therefore resulting in the user staying to play for longer and getting acquainted with some of the characters presented within. The branding and visual imagery goes a long way to presenting an overview of how the original game looks, thus whetting the users appetite and search for more things Stardew Valley. |
| 11 | I want the site to work correctly and efficiently | The site has been extensively tested by myself and other throughout the site build, and also through validation sites and accesibility tests etc. Corrections and debugging has been ongoing until a useable version of the site had been produced for use. Links and buttons, and the game itself has been manually tested by family and acquaintances. A simple UX has worked perfectly for this project. |


#### User Story 1: I want to take part in a fun, online game

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Memory Game | Click 'Play Game', click 'Click to Play', play the game by tapping / clicking on the card images to find matching pairs | Game is played | Works as expected |
<details><summary>User Story 1: Screenshots</summary>
<img src="docs/testing/testing-us1.png">
**Screenshot of game in play**
</details>

#### User Story 2: I want to test my memory skills

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Memory Game | Click 'Play Game', click 'Click to Play', play the game by tapping / clicking on the card images to find matching pairs | Game is played | Works as expected |
| Hi-Score table | Click 'Play Game', click 'Click to Play', play the game by tapping / clicking on the card images to find matching pairs. Once game is over, enter username in form box, click Save Name button | Game is played, hiscore is stored locally. Name is saved. Top 5 scores displayed on screen | Works as expected |
<details><summary>User Story 2: Screenshots</summary>
<img src="docs/testing/testing-us1.png">
**Game in play**
<img src="docs/testing/testing-us2.png">
**Hiscore table offer qualitative visualisation of score**
</details>

#### User Story 3: I want to improve my memory skills / brainpower / speed

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Text box containing move counter and timer | Click 'Play Game', click 'Click to Play', play the game by tapping / clicking on the card images to find matching pairs. Timer move counter starts on first click and ends on game completion | Game is played, timer and moves counter shown correctly on screen. | Works as expected |
| Hi-Score table | Click 'Play Game', click 'Click to Play', play the game by tapping / clicking on the card images to find matching pairs. Once game is over, enter username in form box, click Save Name button | Game is played, hiscore is stored locally. Name is saved. Top 5 scores displayed on screen | Works as expected |
| Memory Game | Click 'Play Game', click 'Click to Play', play the game by tapping / clicking on the card images to find matching pairs | Game is played, knowledge of characters improve | Works as expected |
<details><summary>User Story 3: Screenshots</summary>
<img src="docs/testing/testing-us3.png">
**Time and move counters offer incentive to improve / beat the clock**
<img src="docs/testing/testing-us2.png">
**HiScore table offers incentive to improve and reach the leaderboard top**
<img src="docs/testing/testing-us1.png">
**Playing the game improves knowledge of characters and ease of memory**
</details>

#### User Story 4: I want to enjoy the Stardew Valley theme

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Logo header image from original Stardew Valley Game | Visible at the top of all the pages on the site. | Improves user knowledge and enjoyment of Stardew Valley branding and design. | Works as expected |
| Memory Game | Click 'Play Game', click 'Click to Play', play the game by tapping / clicking on the card images to find matching pairs | Game is played, knowledge of characters and branding design enjoyed | Works as expected |
| Stardew Valley official font | Visible on almost all text on the website. | On any given page of the site, knowledge andawareness of Stardew theme is enjoyed | Works as expected |
<details><summary>User Story 4: Screenshots</summary>
<img src="docs/testing/testing-us4.png">
**Official Stardew Valley logo**
<img src="docs/testing/testing-us1.png">
**Multiple official Stardew Valley characters and background image**
<img src="docs/testing/testing-us4-2.png">
**Official Stardew Valley custom font**
</details>

#### User Story 5: I want to access the quiz on any device

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Played on Apple Macbook air 2024 13" | All pages tested, screenshots shown from responsive google chrome inspection panel | User can play on laptop / desktop screen | Works as expected |
| Played on Apple iPad mini | All pages tested, screenshots shown from responsive google chrome inspection panel | User can play on tablet sized screen, in both portrait and landscape mode | Works as expected |
| Played on Apple iPhone SE | All pages tested, screenshots shown from responsive google chrome inspection panel | User can play on smaller phone screen in portrait and landscape mode | Works as expected |
<details><summary>User Story 5: Screenshots</summary>
<img src="docs/testing/testing-us5-1.png">
**Shown on Apple macbook Air 13" 2024**
<img src="docs/testing/testing-us5-2.png">
**Shown on iPad mini in portrait mode**
<img src="docs/testing/testing-us5-3.png">
**Shown on Apple iPhone SE in portrait mode**
</details>

#### User Story 6: I want to navigate the site easily

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Find correct open tab on browser | All pages tested, tab icon and title displayed on the tab. Click on tab to open the webpage where last left off. | User can easily find game on an opened tab | Works as expected |
| Stardew Valley logo with link to home page in | All pages tested, click on logo header to redirect to home welcome page | Return to home welcome page | Works as expected |
| Played on Apple iPhone SE | All pages tested, screenshots shown from responsive google chrome inspection panel | User can play on smaller phone screen in portrait and landscape mode | Works as expected |
<details><summary>User Story 6: Screenshots</summary>
<img src="docs/testing/testing-us6-1.png">
**Junimo character tab icon / favicon to navigate to correct tab**
<img src="docs/testing/testing-us6-2.png">
**All pages have back to home page link within the logo header image**
<img src="docs/testing/testing-us6-3.png">
**Buttons are easily identifiable and accessible**
<img src="docs/testing/testing-us6-4.png">
**Cards are laid out sensibly and large enough to observe correctly**
<img src="docs/testing/testing-us6-5.png">
**404 page notifies of broken links etc and redirects you home without back button**
</details>

#### User Story 7: I want to entertain visitors to my site and keep them there for longer periods of time
<<<<<<<<<<<<<<<<<<__***DONE TO HERE!!!!***__>>>>>>>>>>>>>>>>>>
| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| In game move counter and timer | Click to play game on home screen, play game on game screen and timer and moves counter start automatically | User can visually quantify how they are doing in the current game and figure out if they are improving. This incentivises the user to stay and play again. | Works as expected |
| Enter user name to save score | Once game has ended, user is automatically redirected to the end acreen. Click into the username form input. Enter name. Click save. | Name and most recent score is saved to the local storage. Incentivises user to stay and play again. | Works as expected |
| Hiscore list with player names and hiscores displayed |On end screen, after playing game and entering name to save as above, top 5 best score saved data is visually represnted on screen with player name and the corresponding score.  | The top 5 best scores and the corresponding player name is shown in the hiscore table on screen after page is refreshed. This incentivises the user to play again to beat a previous score. | Works as expected |
<details><summary>User Story 7: Screenshots</summary>
<img src="docs/testing/testing-us7-1.png">
**Moves counter and timer incentivises the user to stay and beat the clock**
<img src="docs/testing/testing-us7-2.png">
**Entering name incentivises the user to reach the hiscore board**
<img src="docs/testing/testing-us7-3.png">
**Seeing the users name on the hiscore board incentivises them to stay and reach it**
</details>

#### User Story 8: I want to educate the user on Stardew Valley Characters and artwork

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Junimo character favicon | Visible at the top tab on an open desktop window | User can see the recognisable Junimo character on the open tab top on all pages, reminding them of the Stardew Valley characters and branding | Works as expected |
| Stardew Valley Logo | Present at the top header of all pages.  | Makes the branding cohesive and instantly recognisable as the official stardew valley branding. | Works as expected |
| Stardew Valley official font used in all text areas of the page (where supported) | All pages use the Stardew Valley font where supported.  | Makes the branding cohesive and instantly recognisable as the official stardew valley font. | Works as expected |
| Stardew Valley official characters and background images  | On all pages, the backdrop is instantly recognisable as Stardew Valley from the original game.  | The design features are followed by my page throughout to keep it cohesive, simple and recognisable | Works as expected |
<details><summary>User Story 8: Screenshots</summary>
<img src="docs/testing/testing-us8-1.png">
<img src="docs/testing/testing-us8-2.png">
<img src="docs/testing/testing-us8-3.png">
<img src="docs/testing/testing-us8-4.png">
</details>

#### User Story 9: I want the user to enjoy visiting my site

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Stardew Valley Logo | Visible on all pages as the top header | User can see the recognisable Stardew Valley branding and be excited about playing something in a theme they love. Links back to home page when clicked to make the site easier to navigate and more joyful to use. The colours and design really tap in to the fun Stardew Theme and is very visually appealing. | Works as expected |
| Rules to play | On index welcome page, click on 'How to Play' button.  | An accordion box unfolds on screen containing the rules to the game. Nice and simple. | Works as expected |
| Stardew Valley Memory card game | Navigate to game page by clicking on 'Play Game' then 'Click to Play'. From here you can tap or click on pais of cards to play a fun game.  | Fun game to test the users memory and make them familiar with Stardew Valley and some of its characters. Play is smooth and easy to use. | Works as expected |
| HiScore Board  | Once you have played the game as outlined in the previous action, the user is automatically redirected the the End page. Here the user can enter their name and if the most recent score makes the top 5 best, it is displayed as 'name' and 'score' on the hiscore board.  | The hiscore board appeases to the users enjoyment and incentivises them to stay and play again. | Works as expected |
<details><summary>User Story 9: Screenshots</summary>
<img src="docs/testing/testing-us9-1.png">
<img src="docs/testing/testing-us9-2.png">
<img src="docs/testing/testing-us9-3.png">
<img src="docs/testing/testing-us9-4.png">
</details>

#### User Story 10: I want to capture new audiences and translate them into regular visitors

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Use of Official artwork and characters | Visible on all screens and all pages | The user is introduced to the world of Stardew Valley by making them familiar with the cute design and artwork, and one hopes that the user becomes a fan of this style if theyve never seen it before. Or visits based on their past familiarity with Stardew Valley. | Works as expected |
| Enter user name to save score and hiscore board | Once game has ended, user is automatically redirected to the end acreen. Click into the username form input. Enter name. Click save. | Name and most recent score is saved to the local storage. Incentivises user to stay and play again, or revist again and again themselves to beat the last score. The user would hopefully share the game with friends to see if they could also beat their hiscore. | Works as expected |
| The memory card game | From welcome screen, click 'Play Game' and then 'Click to Play'. User can tap or click on the cards to match characters together, havoing fun while using their brain, and visually seeing whether theyre beating a previous score or time.  | The top 5 best scores and the corresponding player name is shown in the hiscore table on screen after page is refreshed. This incentivises the user to play again or revisit to beat a previous score. | Works as expected |
<details><summary>User Story 10: Screenshots</summary>
<img src="docs/testing/testing-us10-1.png">
<img src="docs/testing/testing-us10-2.png">
<img src="docs/testing/testing-us10-3.png">
</details>

#### User Story 11: I want the site to work correctly and efficiently

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Multiple online tests taken out | The website has been put through rigorous online testing as outline in this document. To show Lighthouse testing, open the page on desktop Google Chrom. Right Click then choose 'Inspect'. Navigate to the Lighthouse menu in the top right corner and click 'Analyze page load'. Also used, JSHint, W3S CSS checker, W3S HTML checker, WAVE Accesibility reporting. | The user is subject to accessible and easy to use website, with good solid clean code at its core. The scores were all over the accepted levels. | Works as expected |
| Manual Testing | Throughtout development and at the end, manual testing was used by myself and those around me.  | Information and research from these tests were used to help generate an easier interface or smoother running game, and ensured no bugs or mistakes were shown in the final result | Works as expected |
<details><summary>User Story 11: Screenshots</summary>
<img src="docs/testing/testing-us11-1.png">
<img src="docs/testing/testing-us11-2.png">
</details>

- - -
### Feature Testing

#### **Responsiveness / Device Testing**

The site was tested on the following devices
* Apple Macbook M3 Air 13", iOS Sonoma 14.5, 2024, Safari browser.
* Apple iPad Pro 12.9" 3rd Gen, iOS 17.6.1, portrait and landscape, Safari browser.
* Apple iPhone SE 1st Gen, portrait and landscape.
* Apple iPhone 14 pro, iOS 18.2.1, portrait and landscape, Safari, Chrome and MS Edge browsers.
* Samsung Galaxy s22+, portrait and landscape. 
* Dell Optiplex 3050, Microsoft Edge browser, 23.5" screen.
* Google Chrome Developer Tools - simulator for all different device options as well as using the adjustable sizing options

**Bugs found - specific to device testing:**
* [Google Map API on mobile & Safari - border-radius](#2-google-map-api-on-mobile--safari---border-radius)
* [Mobile input zoom-in not resetting](#4-mobile-input-zoom-in-not-resetting)
* [Button colour on mobile](#5-button-colour-on-mobile)
* [Button styling on mobile](#8-button-styling-on-mobile)
* [IPhone 5S Safari 12.0 - Various Bugs](#11-iphone-5s-safari-120---various-bugs)
* [Scrolling too far on highlight marker click on small screens](#12-highlight-marker-click-scrolls-too-far-on-smaller-screens)


- - -
#### **Browser Compatibility**

The site was tested on the following browsers.
* Google Chrome
* Mozilla Firefox
* Apple Safari

**Bugs found - specific to browser testing:**
* [Console Error - Permissions Policy Header: on Chrome](#10-console-error-on-chrome-error-with-permissions-policy-header)
* [IPhone 5S Safari 12.0 - Various Bugs](#11-iphone-5s-safari-120---various-bugs)


- - -
### Feature Testing Results Table

**Every Page / Section**
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Whole Page | Layout is fully responsive | Checked all pages on various browsers and devices including Google Dev Tool device simulators | All elements were fully responsive on all devices tested | Pass |
| Main Page Contents | Background gradient, logo, footer & footer contents appear correctly and remain visible througout game | Checked on various browsers and devices throughout game | All content appeared as expected | Pass |
| Favicon | Appears in browser tab | Checked browser tabs in different browsers and devices | Favicon appeared as expected | Pass |
| Footer Image | Image changes on smallest devices | Check footer image using mobile device and with Dev Tools's inspect tool | Footer image changes to small version on small devices | Pass |
| Footer Social Links | Hover Effect with transition on hover | Hovered on icons | Hover colour change happens as expected | Pass |
| Footer Social Links | Open correct pages in separate tab | Clicked on social links | Links open correctly in separate tab | Pass |
| Console | No errors appear in console throughout game | Checked console in dev tools during game play | Console logged no errors. Warnings relating to Google Maps API did appear [more information here](#6-google-maps-api---console-errors) | Pass |

**Welcome Section**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Welcome Div Contents | Text, name input & start game button appear correctly | Loading page | All content appeared as expected | Pass |
| Welcome Section | Loads on page refresh - no other parts of game visible | Loading page | The correct divs load as expected | Pass |
| Name Input | Allows user to input name | Inputting name | User is able to input name | Pass |
| Name Input | User must enter name between 2-10 characters | Attempted to enter a name shorter than 2 & longer than 10 characters | Input box performs as expected ![Screen Recording](docs/testing/testing_features_welcome1.gif) | Pass |
| Start Quiz Button | Hover effect with transition on hover | Hovered on Start Quiz Button | Hover effect works as expected ![Screen Recording](docs/testing/testing_features_welcome2.gif) | Pass |
| Start Quiz Button | If no name inputted alert appears & game doesn't start | Clicked on start button with no name inputted | Alert pops up with message telling user to enter a name ![Screenshot](docs/testing/testing_features_welcome3.jpeg) | Pass |
| Start Quiz Button | Starts Quiz (hides welcome div and reveals game div) | Clicked on start game button (with username entered) | Game starts, welcome div disappears and game div appears | Pass |

**Game Section**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Game Div Contents | Progress text, progress bar, question text, 6x answer boxes with text contents & restart quiz button appear correctly  | Clicking start game button in Welcome Div | All content appeared as expected | Pass |
| Question & Answers | Correct question and answers load each time an answer is selected | Clicking through game and checking against questions and answers in questions array | All questions and answers appear as expected | Pass |
| Question & Answers | 10 questions & sets of answers appear in total | Clicking through game and counting questions | The correct number of questions appear | Pass |
| Answer Boxes | Hover Effect with transition on hover | Hovered on questions | Hover effect works as expected ![Screen Recording](docs/testing/testing_features_game1.gif) | Pass |
| Answer Boxes | Colour changes to orange with transition when user selects an answer | Clicked on answer | Answer box changes colour as expected ![Screen Recording](docs/testing/testing_features_game2.gif) | Pass |
| Answer Boxes | Brief timeout before question / answers refresh | Clicked on answer | Game pauses before refreshing (see gif above) | Pass |
| Answer Boxes | User cannot select another answer once a selection has been made during timeout | Clicked on an answer and attempted to select another quickly afterwards. Also checked console logs to if any additional answers were being added to the personalityTally array | Unable to select more than 1 answer during time out and nothing additional added to personalityTally | Pass |
| Answer Boxes | Colour of previously selected box changes back to original colour after question/answer refresh | Clicked on answer | Colour changes back on refresh as expected (see gif above) | Pass |
| Answer Boxes | Page scrolls to top on question/answer refresh | Using Dev Tool's device simulator scrolled down & clicked on answer | Page scrolls to top as expected *[(Smooth Scroll Bug Found on Safari IOS12 & earlier)](#11-iphone-5s-safari-120---various-bugs)* ![Screen Recording](docs/testing/testing_features_game3.gif) | Pass on majority of devices |
| Progress Bar | Shows "Question 1 of 10" on inital load & pink bar at 10% | Loaded game and checked progress bar | Progress bar and text were correct (see gif below) | Pass |
| Progress Bar | Increments each time a question is selected with the correct numbers & bar width | Played game and checked progress bar | Progress bar increments correctly ![Screen Recording](docs/testing/testing_features_game4.gif) | Pass |
| Quiz functionality | Correct personality type is added to personalityTally array when user selects an answer | Log personalityTally to console for testing purposes and check it matches the selected answer | console logs match the selected answers ![Screen Recording](docs/testing/testing_features_game5.gif) | Pass |
| Quiz functionality | personalityTally contains 10 personality types once main quiz is complete | Log personalityTally to console for testing purposes and check number of items in array | code performs as expected (see gif above) | Pass |
| Tie Breaker | If there is a tied result tie breaker appears & main game is hidden | Selecting answers that will result in a tie | Tie breaker appears correctly | Pass |
| Tie Breaker | Tie breaker title and text appear if result is tied | Using console logs to check whether result is tied and matches what's in the personalityTally | Tie breaker only appears when the result is tied ![Screenshot](docs/testing/testing_features_game6.jpeg) | Pass |
| Tie Breaker | Tie breaker only contains images of the tied personality types | Using console logs to check which results are tied and by going through and selecting different combinations of answers that will result in a different number of tied results | The correct number of tie breaker images appear and match the number of tied results ![Screenshot](docs/testing/testing_features_game7.jpeg) | Pass |
| Tie Breaker Photos | Hover Effect with transition on hover | Hovered on tie breaker image | Hover effect worked as expected ![Screen Recording](docs/testing/testing_features_game8.gif) | Pass |
| Restart Quiz Button | Hover effect with transition on hover | Hovered on restart quiz button | Hover effect worked as expected ![Screen Recording](docs/testing/testing_features_game9.gif) | Pass |
| Restart Quiz Button | Refreshes page, hides game div and reveals welcome div, resets all scores | Clicked on restart quiz button during game play | Restart Quiz button works as expected | Pass |


**Results Section**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Personality Results Contents | Personality heading, pie chart, colour key, percentages & description appear correctly | Clicking on the final question | All content appeared as expected *[(Pie Chart fails to load on Safari IOS12 & earlier - see bugs)](#11-iphone-5s-safari-120---various-bugs)* | Pass on majority of devices |
| Personality heading | Contains name inputted by user | Inputting name and checking it appears in results | Name appears correctly ![Screenshot](docs/testing/testing_features_results1.jpeg)![Screenshot](docs/testing/testing_features_results2.jpeg) | Pass |
| Personality heading | Contains correct personality type | Using console logs to check the winning personality at different stages of the game and checking it matches | Personality type appears correctly and matches the console logs ![Screenshot](docs/testing/testing_features_results3.jpeg)![Screenshot](docs/testing/testing_features_results4.jpeg)![Screenshot](docs/testing/testing_features_results5.jpeg) | Pass |
| Pie chart | Pie sections & colours match key | Visually checking the colours match between the key and the pie chart | All colours and percentages match *[(Pie Chart fails to load on Safari IOS12 & earlier - see bugs)](#11-iphone-5s-safari-120---various-bugs)* | Pass on majority of devices |
| Pie chart | Results are correct based on user answers in game | Using console logs to check the percentages and matching those with the pie and key | All numbers, personality types and colours match ![Screenshot](docs/testing/testing_features_results6.jpeg)![Screenshot](docs/testing/testing_features_results7.jpeg)| Pass |
| Pie chart | All personality types are listed in descending order | Checking that the percentages are in reverse order, largest to smallest | The personality types appear in the correct order | Pass |
| Pie chart | Percentages total 100 | Using console logs and testing the game with a tie break result (where the rounding issue occurs) and checking everything adds up | The percentages add up to 100 ![Screenshot](docs/testing/testing_features_results8.jpeg) | Pass |
| Pie chart | Pie chart is clickable, showing the percentages of each section | Click on sections of pie chart | Functions as expected and text matches key *[(Pie Chart fails to load on Safari IOS12 & earlier - see bugs)](#11-iphone-5s-safari-120---various-bugs)* ![Screenshot](docs/testing/testing_features_results8b.gif) | Pass on majority of devices |
| Personality Description | Matches winning personality type | Using console logs to check the winning time at different stages of the code and matching it to what appears on the page | The correct personality description appears ![Screenshot](docs/testing/testing_features_results9.jpeg)![Screenshot](docs/testing/testing_features_results10.jpeg) | Pass |
| Personality Description | 3rd paragraph contains reference to 2nd and 3rd place personalities if over 15% | Matching the 2nd and 3rd place personalties to what appears in the text using the pie chart and console logs | The correct personalities appear in the 3rd paragraph ![Screenshot](docs/testing/testing_features_results11.jpeg) | Pass |
| Recommended Country Contents | Country recommendation heading, photo & description appear correctly | Scrolling down the results and checking the content | All content appears as expected | Pass |
| Recommended Country | All contents recommend the correct country based on user answers | Using console logs and matching the result of those to the page content | The correct country appears ![Screenshot](docs/testing/testing_features_results12.jpeg)![Screenshot](docs/testing/testing_features_results13.jpeg) | Pass |
| Recommended Country Heading | Contains recommended country | Check country name against correct country | The correct country appears ![Screenshot](docs/testing/testing_features_results14.jpeg) | Pass |
| Recommended Country Image | Appears and matches the recommended country | Check image is of the correct country | The correct country image appears ![Screenshot](docs/testing/testing_features_results15.jpeg) | Pass |
| Recommended Country Text | Appears and matches the recommended country | Check the description is of the correct country | The description is of the correct country ![Screenshot](docs/testing/testing_features_results16.jpeg) | Pass |
| Country Highlights Contents | Highlights heading, map & map markers appear correctly | Scroll down to highlight content and check it appears correctly | All highlight content is present and works correctly | Pass |
| Country Highlights Heading | Contains the correct country name | Check heading contains the correct country name | Heading contains the correct country name ![Screenshot](docs/testing/testing_features_results17.jpeg) | Pass |
| Country Map | Calls the API correctly with no errors | Check the map appears and there are no console errors | The map appears correctly, some console warnings appear but no errors [see bugs section](#6-google-maps-api---console-errors) | Pass |
| Country Map | Shows the correct country | Check the map matches the recommended country | Map is of the correct place ![Screenshot](docs/testing/testing_features_results18.jpeg) | Pass |
| Country Map | Country is at an appropriate zoom level for device and screen size and all markers are visible | Check the country appears neatly within the map box and all markers are visible on different devices with appropriate zoom level | The country fits neatly within the map and all markers are visible on different devices ![Screenshot](docs/testing/testing_features_results19.jpeg) ![Screenshot](docs/testing/testing_features_results20.jpeg) | Pass |
| Country Map | Google Maps inbuilt functionality works (map/satellite, full screen, street view, zoom, pan & scroll on touchscreen devices) |  | All in built map functionality works correctly ![Screen Recording](docs/testing/testing_features_results21.gif) | Pass |
| Map Markers | Markers are clickable | Clicking on all markers | All markers are clickable and function correctly ![Screen Recording](docs/testing/testing_features_results22.gif) | Pass |
| Map Markers | Clicking on a marker reveals the correct highlight information below including text and images | Clicking on each marker and checking the highlight text and photos appear and are correct | All highlights' text and images are correct (see gif above) | Pass |
| Highlight Info | Page scrolls down smoothly to show highlight info | Clicking on a marker and checking the page scrolls smoothly to the correct place | Page scrolls correctly (see gif above) *[(Smooth Scroll Bug Found on Safari IOS12 & earlier)](#11-iphone-5s-safari-120---various-bugs)* | Pass on majority of devices |
| Highlight Info | Replaced when clicking on a different marker | Clicking on a marker and checking the content is replaced | Content is replaced correctly (see gif above) | Pass |
| Start Again Button & Text | Appear above footer | Scroll down and checking content appears correctly | Button and text appear correctly | Pass |
| Start Again Button | Hover effect with transition on hover | Hovering over button | Button hover effect works correctly ![Screen Recording](docs/testing/testing_features_results23.gif) | Pass |
| Start Again Button | Refreshes page, hides results div and reveals welcome div | Clicking Start Again button and checking the page reloads back to the welcome page | The page reloads correctly back to the welcome div | Pass |

**404 Page**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| 404 page contents | Heading, text & 'go home' button appear correctly | Load 404 page, check all content is correct | All content appears correctly | Pass |
| 404 page functionality | Typing in a non-existent URL will bring up 404 page | Typing in a non-existent url on website | 404 page appears | Pass |
| Go Home Button | Hover effect with transition on hover | Hovering over Go Home button | Button hover effect works correctly ![Screen Recording](docs/testing/testing_features_404_1.gif) | Pass |
| Go Home Button | Refreshes page, hides results div and reveals welcome div | Clicking on Go Home button | Welcome page loads ![Screen Recording](docs/testing/testing_features_404_2.gif) | Pass |



- - -
## Bugs & Fixes

During development and testing, in addition to the improvements described in the validation section above, I encountered the following bugs:
- - -
#### **1: Inset Shadow stopped click on map**

After adding an inset shadow on the map using a ::before element created in CSS I realised it had disabled any interaction with the map. After some research I discovered I needed to disable pointer events on the overlay and enable it on the map again in order to click through and interact with the map.

```
#map {
    pointer-events: all;
}

#map::before {
    pointer-events: none;
}
```

<details><summary>Screenshots</summary>

<img src="docs/bugs/bug1_before.gif">
<img src="docs/bugs/bug1_after.gif">

*Before & After*

</details>

- - -
#### **2: Google Map API on mobile & Safari - border-radius**

After deploying the site to GitHub pages and viewing on mobile and in Safari the Google Maps API was not contained within the div's border radius rounded corners. After investigating the issue using Dev tools and searching online I worked out that the issue related to the way that Google Maps API builds the HTML for the map, it creates a series of divs enclosed in each other and on certain browsers the border radius and overflow were not translating down in to these divs. I tried targeting all descendent divs, however I ran in to an issue where the overflow:hidden caused the map to disappear completely. After trial and error I discovered I needed to target the 2nd level of div with the CSS styling and this solved the issue.

```
#map > div > div {
    overflow: hidden;
    border-radius: 24px;
    -webkit-border-radius: 24px;
    -moz-border-radius: 24px;
    -o-border-radius: 24px;
}
```
<details><summary>Screenshots</summary>

<img src="docs/bugs/bug2_before.jpeg">
<img src="docs/bugs/bug2_after.jpeg">

*Before & After*

</details>

- - -
#### **3: Website not scrolling to top on reload & button click**

The website failed to scroll to the top when clicking on a button, this caused particular problems on mobile where less of the game was visible at once. I overcame this issue with the following techniques:

* Adding `<script>history.scrollRestoration = "manual"</script>` to the head element of the HTML file to turn off the automatic browser scroll settings.
* Adding `window.scrollTo({ top: 0, behavior: 'smooth' })` to the button clicks with a timeout to match the timeout on the button deselection.

<details><summary>Screenshots</summary>

<img src="docs/bugs/bug3_before.gif">
<img src="docs/bugs/bug3_after.gif">

*Before & After*

</details>

- - -
#### **4: Mobile input zoom-in not resetting**

During testing on mobile, when selecting the name input box, the browser would zoom in make the box bigger. This was due to the input box having text smaller than 16px. However upon input the browser wasn't zooming out again. I fixed this by adding the following to the viewport data in the head element of the HTML code: 
```
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```
However, later on, in performance testing using Google's Dev Tools Lighthouse I discovered that setting the maximum scale like this affected accessibility. You can see details of how I worked around this issue [here](#performance).


<details><summary>Screenshots</summary>

<img src="docs/bugs/bug4_before.gif">
<img src="docs/bugs/bug4_after.gif">

*Before & After*

</details>

- - -
#### **5: Button colour on mobile**

I found that the button text colour on mobile was set to blue rather than black, presumably as a result of this being a clickable button. I fixed this by explicitly setting the color of the button text in the CSS.


<details><summary>Screenshots</summary>

<img src="docs/bugs/bug5_before.jpeg">
<img src="docs/bugs/bug5_after.jpeg">

*Before & After*

</details>

- - -
#### **6: Google Maps API - Console Errors**

On page load Dev Tool's console was logging a series of errors relating to Google Maps API.

**Error 1**
<details><summary>Screenshots</summary>

<img src="docs/bugs/bug6_error1.jpeg">

</details>

This error was also stopping the map from loading. I fixed this by changing the order that the `<script>` files were called in the index.html file footer. The Google Maps API script had to be called after the map.js file containing the initmap function as in the code below.

**Index.html Footer - script files order**

```
    <script src="assets/js/questions_array.js"></script>
    <script src="assets/js/countries_array.js"></script>
    <script src="assets/js/personalities_array.js"></script>
    <script src="assets/js/map.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
    <script src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBp3bbw0F5d1sjzp5iet_vlxKb0RrevMCA&callback=initMap"></script>
    <script src="assets/js/quiz.js"></script>
```

**Error 2**
<details><summary>Screenshots</summary>

<img src="docs/bugs/bug6_error2.jpeg">

</details>

This error was due to the initMap function not being fed an index value from the countries array as it hadn't been calculated yet. I overcame this using an if statement at the start of the initMap function that checked if the parameter was undefined (ie it hadn't been given a value yet) and if so it gave it the value of 0 to load the first country in the countries array. This got rid of the console error. I found and adapted this solution from [here](https://www.javascripttutorial.net/es6/javascript-default-parameters/#:~:text=Setting%20JavaScript%20default%20parameters%20for,the%20default%20values%20of%20undefined%20.). (Credited in code comments.)
```
if (typeof index === 'undefined') {
        index = 0;
    } else {
        index = index;
    }
```


**Error 3**
<details><summary>Screenshots</summary>

<img src="docs/bugs/bug6_error3.jpeg">

</details>

Upon load the Google Maps API was causing a number of warnings on the Dev Tools console relating to non-passive event handlers. I researched what was causing this and it appeared to be within the code of the Google Maps API and Google Chrome's Dev Tools being sensitive to non-passive event listeners. The JavaScript written within the API wasn't something I could access in order to make the event handlers passive. I was unable to find a solution to these warnings despite extensive searching online and using Code Institute's tutor support.
More information [here](https://stackoverflow.com/questions/47799388/javascript-google-maps-api-non-passive-event-handlers)


- - -
#### **7: Console Errors with Chart.js**

On page load Dev Tool's console was logging an error and failing to load the pie chart.

I found the solution to this [here](https://www.youtube.com/watch?v=ens3HK88h5E). It was happening because the CDN link I was using to the chart.js library was out of date and I needed to update it to a more recent version - as in the code below.


```
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
```

<details><summary>Screenshots</summary>

<img src="docs/bugs/bug7_error.jpeg">

</details>


- - -
#### **8: Button styling on mobile**

When testing on mobile I discovered that the button styling had changed compared to the main site and dev tools phone simulators.

I found the solution to this was to add the following code to the CSS to over-ride the mobile device's built in styling that it adds to certain buttons and inputs. Whilst only one of the buttons was affected (the only one with a 'type' attribute defined, I decided to over-ride the styling for all the buttons incase there were any issues on other mobile devices elsewhere.)

```
.btn-game-main {
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
}
```

<details><summary>Screenshots</summary>

<img src="docs/bugs/bug8_before.jpeg">
<img src="docs/bugs/bug8_after.jpeg">

*Before & After*

</details>


- - -

#### **9: Country results can end in a tie**

In some circumstances 2 countries can have equal points and the site will automatically suggest whichever occurs first in the countries array. This is not so much a bug but a slight hole in the way that the quiz works. I did think about ways to overcome this but as the game already contains a tie-breaker I didn't want to add any more complexity to the project. I have mentioned this issue in the [README](README.md) as an area for future development of the app.

- - -

#### **10: Console Error on Chrome: Error with Permissions-Policy header**

During browser testing in Google Chrome I found that the console was throwing up an error of "Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'." I found various references online and in the Code Institute Slack group to this being an issue relating to Google's new tracking method [FLoC](https://www.howtogeek.com/724441/what-is-googles-floc-and-how-will-it-track-you-online/) which is being blocked by GitHub Pages. All references I found to it suggested that it was a browser issue rather than an issue with the site itself and that it can be safely disregarded.


[GitHub Blog Article](https://github.blog/changelog/2021-04-27-github-pages-permissions-policy-interest-cohort-header-added-to-all-pages-sites/)

[Stack Overflow Question](https://stackoverflow.com/questions/69619035/error-with-permissions-policy-header-unrecognized-feature-interest-cohort)

<details><summary>Screenshot</summary>

<img src="docs/bugs/bug10.jpeg">

</details>

- - -

#### **11: iPhone 5S Safari 12.0 - various bugs**

During Testing on iPhone 5S I ran in to a number of bugs and a complete breakdown in game functionality, which were all caused by using an older version of Safari (12.0).

**Bug 11.1**

<details><summary>Screenshots</summary>

<img src="docs/bugs/bug11_1_before1.jpeg">
<img src="docs/bugs/bug11_1_before2.jpeg">

*Before*

<img src="docs/bugs/bug11_1_after1.jpeg">
<img src="docs/bugs/bug11_1_after2.jpeg">

*After*

</details>

The Flexbox row gap & column gaps were not appearing which meant that my answer buttons, tie break buttons and footer social links had no margin between them, making them difficult to click without accidentally selecting the wrong answer or link. This was due to the flexbox row-gap and column-gap not being supported in Safari 12.0 and earlier.

In order to fix this I decided to re-write the CSS as a media query for smaller screens, which removed the need for the row and column gap, replacing them with margins or alternative layout techniques.


**Bug 11.2**

<details><summary>Screenshots</summary>

<img src="docs/bugs/bug11_2_before.gif">
<img src="docs/bugs/bug11_2_after.gif">

*Before & After*

</details>

The were some serious issues in the JavaScript functionality, with the pie chart, country details, highlights and 'start again' button all failing. After some investigation I discovered that this was down to a compatibility issue with chart.js on older versions of Safari (below 14.1). The JavaScript was breaking at the point it reached the buildPie() function, and so all code that came after that didn't work and only the placeholder content was visible for the country name, photo, map and highlights.

My initial fix for this was to re-order the code so that the pie chart was the last thing to happen. This solved all the other broken JavaScript. However the chart was still not loading, after extensive research I couldn't find a solution to this bug with my level of JavaScript experience, so instead I decided to handle the error with a try / catch statement around the buildPie() function. This tested to see if the function threw up an error, and if it did it added styling and text content to the div where the pie chart would normally appear which gave the user a friendly error message explaining that their browser didn't support the pie chart. I felt this was the best workaround and the best user experience in the circumstances.

```
try {
    buildPie(percentageArray, keyColors, pieLabels);
} catch (err) {
    pieDiv.classList.add("error-background");
    pieDiv.innerHTML = "<p class='text-centre'>Sorry!<br>Your browser version doesn't support our pie charts.</p>";
}

```


**Bug 11.3**

<details><summary>Screenshots</summary>

<img src="docs/bugs/bug11_3.gif">

</details>

Safari 12.0 also didn't support the smooth scroll functionality included in the JavaScript. I was unable to find a solution to this issue and so this bug remains.

- - -

#### **12: Highlight marker click scrolls too far on smaller screens**

During testing on the iPhone 5S I discovered that the scroll function I had added to the highlight markers on the Google Map of the country would go past the top of the text about that highlight due to the smaller screen size. The original plan had been to allow users to see that there were photos and to view the whole text and photo content together, however on a smaller screen this just wasn't possible.

To fix this issue I added an if statement within map.js to check the screen size and on smaller screens to scroll to the top of the text content, rather than the bottom of the photos.


```
// timeout to allow photos to load before scroll
// scroll to adjusted for screen size so screen doesn't scroll past top of content
    if (width <= 576) {
        setTimeout(function () {
            highlightContentDiv.scrollIntoView(true, {
                behavior: 'smooth'
            });
        }, 150);
    } else {
        setTimeout(function () {
            countryHighlightDiv.scrollIntoView(false, {
                behavior: 'smooth'
            });
        }, 150);
    };
```

<details><summary>Screenshots</summary>

<img src="docs/bugs/bug12_before.gif">
<img src="docs/bugs/bug12_after.gif">

*Before & After*

</details>


- - -


### Known & Remaining Bugs

All information about remaining bugs is included in the information above. Click on the links below to find out more details:

[Bug 6.3: Console error - Google Maps API Touchscreen Events](#6-google-maps-api---console-errors)

[Bug 9: Country results can end in a tie](#9-country-results-can-end-in-a-tie)

[Bug 10: Chrome - console error - permission policy header](#10-console-error-on-chrome-error-with-permissions-policy-header)

[Bug 11.2: Chart.js doesn't display pie chart on Safari IOS12 and earlier](#11-iphone-5s-safari-120---various-bugs)

[Bug 11.3: Safari IOS12 doesn't support smooth scroll](#11-iphone-5s-safari-120---various-bugs)



- - -
- - -

[Go to Top](#the-travel-personality-quiz---testing)

[Go to README](README.md)