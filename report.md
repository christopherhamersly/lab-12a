# OAuth Comparative Analysis

## OAuth Provider Name 

Wordpress

### Research Conducted By: 
Jennifer Chinzi
Christopher Hamersly
Daisyjane Johnson
Joshua Williams

### Overall Score and Comments
#### Score (Out of 10): 4
#### General Comments
<!-- Describe the stack (front-end only? full stack?), database, efficiency, etc.  -->
Full Stack (front end does exist, though it is limited)
References mySQL database to confirm user
<!-- Describe the general usability and learnability -->
Setup is fairly straigtforward for an OAuth, but has a sever limitation for users:
  - Wordpress OAuth is only available to Wordpress users with published websites - free accounts alone are insufficient.

#### Pros
* Offers optional parameters of blog and scope that allow for specialized access to particular or all blogs connected with the user 
* Allows for two response types: 
  - 'code' for server-side apps where secrets can be stored securely (these tokens do not expire)
  - 'token' for client-side apps where secrets cannot be stored securely (these tokens expire after 2 weeks)

#### Cons
* Paywall - Wordpress only allows OAuth to users who have created websites (i.e. active paying users) 
* This OAuth is not a viable option for users who do not already have reason to actively use Wordpress

### Ratings and Reviews
#### Documentation
Nothing intrinsically wrong with Wordpress, however it has a specific audience that we don't fall into.

#### Systems Requirements
Above and beyond 'node' and 'linux', what dependencies or core requirements exist for this framework?  Can it play at AWS/Heroku?  Does it require a certain database?
* OAuth authentication API for WordPress plugin is available on Github (https://github.com/WP-API/OAuth1)
* Should work just fine with Heroku
* Wordpress functions on a mySQL database

#### Ramp-Up Projections
How long would/should it take a team of mid-junior developers to become productive?

Given an environment where Wordpress OAuth is a good fit, ramp up should be relatively quick.

#### Community Support and Adoption levels
WordPress is the most popular CMS in the world and is used by nearly 75 million websites. According to WordPress, more than 409 million people view more than 23.6 billion pages each month and users produce 69.5 million new posts and 46.8 million new comments every month.


### Links and Resources
* [framework](https://www.studiopress.com/genesis-pro/?campaignid=1589980277&adgroupid=59849284237&adid=450866182462&gclid=Cj0KCQjw7ZL6BRCmARIsAH6XFDLSr0rwYhTqeVGm1AO89O2lRCX-QNPFa38IYxQIWuBNUg0JuhUgqGwaAnc2EALw_wcB)
* [docs](https://developer.wordpress.com/docs/oauth2/)
* [examples/tutorials](https://wordpress.org/plugins/oauth2-provider/)

---

## OAuth Provider Name 
GitHub

### Research Conducted By: Student Names
Jennifer Chinzi
Christopher Hamersly
Daisyjane Johnson
Joshua Williams

### Overall Score and Comments
#### Score (Out of 10): 9
#### General Comments
<!-- Describe the stack (front-end only? full stack?), database, efficiency, etc.  -->
* Github relies on a mySQL relational database
* Full stack
* Made by and for devs, so efficiency is top of mind

<!-- Describe the general usability and learnability -->

#### Pros
* Relatively easy setup
* No restrictions to access beyond a registered GitHub account

#### Cons
* No incentive for non-devs to have a GitHub account (free, but not useful)
* Not inherently the most secure system (hashed password is easily accessible)

### Ratings and Reviews
#### Documentation
Overall, a fairly intuitive OAuth option to implement for a user base that is likely to have established GitHub accounts.

#### Systems Requirements
<!-- Above and beyond 'node' and 'linux', what dependencies or core requirements exist for this framework?   -->
<!-- Can it play at AWS/Heroku?   -->
* No issues with AWS or Heroku
<!-- Does it require a certain database? -->
* GitHub uses a relational database

#### Ramp-Up Projections
<!-- How long would/should it take a team of mid-junior developers to become productive? -->
No reason that ramp-up would take a significant amount of time, set up is fairly straightforward for an OAuth

#### Community Support and Adoption levels
<!-- How popular is this framework? What big companies are running on it? How is it "seen" in the general JS community?  Is there an active community of developers supporting and growing it? -->
* Github currently reports 9 million users, including many major companies.

### Links and Resources
* framework: No JS Framework Available
* [docs](https://docs.github.com/en/developers/apps/authorizing-oauth-apps#web-application-flow)
* [examples/tutorials](http://thecodebarbarian.com/github-oauth-login-with-node-js.html)

### Code Demos
* [code repository](https://github.com/christopherhamersly/lab-12a)

### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* `npm i`
* Create a .env file using .env.md file for reference
* `npm start`
* Endpoint: `http://localhost:3000/`
  * Reroutes to GitHub OAuth landing page.
* Endpoint: `http://localhost:3000/oauth`
  * Returns a token.
