# Responsive Law Firm Website

This website is developed for our client, Law Offices of Theodore A. Behlendorf. It consists of a `home` page, an `about` page, and a `contact` page - each with a responsive layout.


## Pages

Each page has the following: 

- `navbar` : The `navbar` is located at the top of the website. It consists of the law firm's logo on the left side and the page tabs on the right side. The three tabs are `home`, `about`, and `contact`. If this site is seen on a smaller device (i.e. a mobile phone), the `navbar` will be collapsed to a hamburger-style menu, where the user will be able to see all three tabs mentioned above. 

- `footer` : The `footer` is located at the bottom of the website. It is divided in four columns from left to right: (1) has the name of the law firm and a description of who they serve, (2) has the map with the location of the law firm's office, (3) has the contact information of the law firm, with the address, and the phone numbers, and (4) has the links of the three tabs mentioned in the `navbar` section above. 

### `home` Page

This page will be displayed when a user clicks on the site's link or when typed up on a browser's search bar. It consists of a small blurb about the law firm and the scope of work that the law firm focuses on. To the right of the page is a Twitter widget, which displays current tweets from the accounts that the law firm follows. More explanation is in the `functionality` section below. 

### `about` Page

This page displays after a user clicks on the `about` tab from the `navigation` bar or the link from the `footer`. This page features two lawyers from the law firm. If the user clicks on the photo or the name of the laywers, a short blurb about the lawyer will scroll from the bottom of the card and take over the photo. To exit the card blurb, the user will need to click on the `x`. To the right of the page, there is an `our law firm` card, also with the same characteristics as the two lawyer cards to its left. 

### `contact` Page

This page is accessible when the user clicks on the `contact` tab from the `navigation` bar or the link from the `footer`. The user will need to fill in all components on the form (`first name`, `last name`, `email`, and `what can we help you with`) before clicking on the `submit` button below. Should a part of the form be incomplete, the user will be notified to complete the form fully. 


## Functionality

### Twitter API

The Twitter widget was made through an API, where the URL to display it includes a `list` of the accounts that the law firm follows on the social media account. Every time the user refreshes the page, the Twitter widget will be updated with the most current tweets.  

### Law Firm Map

The map displays the location of the law firm's office and is found in the `footer` of all three pages. It is powered by an OpenLayers API, where we pinpoint the location using latitude and longitude coordinates. 

### Contact Form
    
The contact form has a `submit` button so that the user can send his/her/their inquiries to the law firm, when all parts of the form have been completed fully. The information gathered from the form in the `submit` button will then be sent through `https://elasticemail.com/` to the recipient. 


## Acknowledgment
This website was done with a collaborative effort from Brandon Myhan, Carolina Aldana, Cattleya Pia, Maira Garcia, and Zach Corpuz.
