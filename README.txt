Welcome to Film Quiz! On our website you get to explore different genres in an interesting and often challenging quiz game. You sign up for an account and can start quizzing right away! The website saves your previous games to a Highscore tab where you can review your accomplishments.

https://film-quiz-207ce.firebaseapp.com/login

OBSERVE: Firebase requires atleast 6 characters in your password.

Short description of our project:

We have a start menu, where the user can read up on how the game works, then they get to select 
a genre which they wanna do the quiz in, and will then be presented with 5 movies 
which they will get clues from and try to guess. For each clue they choose to view they get a reduced score,
so the goal is to make a correct guess of which movie the app is thinking of with as 
few hints as possible. When the user has completed guessing all X movies, they get a 
total score which can then (if they qualify) be shown in a high score list. 
 
Our project file structure (short description/purpose of each file)

We are following the same Model-View-Presenter model which we have done earlier in the labs. Movie model contains
the model functionality where we set/get our array of movies, the game points and the clue-object. The views we 
have at the moment are gamePlayInputView (view for the quiz alternatives), clueView (view for displaying the clue
content and the clue buttons), mainPageView (view for the start page, with how-to tutorial on how to do the quiz and start button),
genreView (view with all genres being displayed and buttons that leads to the quiz for each genre), 
resultView (view that the user will get when they’re done with the whole quiz, with their total score etc), 
highScoreView (for displaying the best games for each player), as well as login and signup views.
clueRendering (file for rendering all of the clues for the corresponding movie that is being quizzed). 
For the views we also have corresponding presenter files 
(mainpagePresenter, gamePlayInputPresenter, genrePresenter, menuPresenter, resultPresenter, clueViewPresenter)
 
In both the files app.css and index.css we have defined classNames for the layout and design of the app.

During our project have not always been running API calls in this build, this was to preserve our limited amount of allowed calls. 
The data presented now tho is through API calls.
