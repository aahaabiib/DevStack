## Dev Stack

A React-based web application that tets users explore modern web development technologies and build their own personalized tech stack.

## About the Project

Dev stack helps developers descover different frontend, backend, database, and Other Development technologies, compare them by rating and difficulty, and add their favorites to a personal 'Your Stack' list making it easier to plan out a tech stack for a new Project.

## Technologies Used

    **React.js (With Hooks)
    **Tailwind CSS
    **JavaScript (ES6)
    **React Toastify
    **JSON(Loca data source)
    **Vite 
    **Lucide React(for Icons)

## Feaures

    1. *Browse & Filter Technologies- View lots of technologies in a responsive grid, each showing category, fifficulty, ratting, and a short description.

    2. *Build Your Won Stack- Add technologies to a personal 'Your Stack' panel, remove individual items, or clear the whole stack at once.

    3. *Toast Notifications- Real time feedback for every add or remove action using React Toastify, instead of plain browser alerts.

## Links     

    -**GitHub Repository:** https://github.com/aahaabiib/DevStack.git

    -**Live Site:** https://dev-stack-lilac.vercel.app/

## React Concepts Q & A

   1. What is JSX, and why is it used in React?
        
        JSX syntax extension for JavaScript that lets us wite HTML like code directly inside our JS files. its used in React because it makes writing and understanding UI structure much easier and faster than writing plain React.createElement() calls its later compiled into regular JS.

  2. What is the difference between props and state?

         Props are data passed from aparent component to a chile component, they are read only, meaning the chile can't cahge them. 
        and State is data managed inside a component itself, and it can change over time causing the component to re-render.

  3. What does the useState hook do, and where did you use it in this project?

        "useState" lets a component keep  track of data that can change over time. in this project, i used it to store the leist of technologies, the loading state, and the 'Your Stack' , among other like the mobile menu toggle.

  4. What does the useEffect hook do, and why did you need it to load the JSON data?

        "useEffect" lets us run code after the component tenders, usually for things like fetching data, I used it to load the technology fata once when the app first mounts, and then update the state with taht data so it could be displayed.

  5. Why does every item in a '.map()' list need a unique key prop?

        The Key prop help React identifu which items have changed, added, or removed, so it can update the UI efficiently instead of re-rendaring the entire list every time. Without uinque keys, Teact can behave unpredictabley when the list changes.

  6. What is conditional rendering? Show one place you used it (example: the empty stack message).

        Conditional rendaring means showing different UI based on some condition. for example, in the "Your Stack" panel, I check if 'Stack.length === 0' to show an empty state massage "Your stack is empty", and if there are items, I render the list instead.

  7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

        Data is passed from parent to chile using props-- for example, app.jsx  passes the technologies  array down to Grid and Grid Passes individual tech  objects to each Card .To sen data back up, the parent passes a function as a prop like clickToAdd , and the chile calls that function with the relevant data -- like: onClick={(() => clickToAdd(tech))} this is how the child sends the selected technology back up to the parents state.
