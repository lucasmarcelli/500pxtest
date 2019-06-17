To run:

1. Clone Repo
2. Create `.env` with `REACT_APP_CONSUMER_KEY="THE_KEY"` in order to make API requests
3. `yarn install`
4. `yarn start`

This took me approximately 2.5 hours to complete.

For task 1, I went with a simple grid of cropped photos, with hover effects and buttons.
For task 2, I had it pop up in a modal with some details on the bottom. 

When thinking on how to do task 3 in limited time, I decided that rather than make it nice and responsive or have extensive test coverage, I'd instead make it really extensible. My reasoning is that at the code review, adding tests or some responsive CSS will take a short amount of time while having to refactor this to make it extensible would take longer. 

Instead, I implemented a full and extensible `redux` store and made sure that if we want to add new features, it would be simple. I also decided to work a bit on caching pages we visited already, to improve load times if we go to a page we have visited already. I also elected to use the new `hooks` api, partly because I've been wanting to try them for a while, but mostly because it can simplify logic a lot.

If you wanted _some_ tests before the in person review, please let me know. I'll spend another half hour and add unit testing. I didn't want to go over time on this and implementing the store seemed like a better use of limited time. 
