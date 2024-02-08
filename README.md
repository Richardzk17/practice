# all-the-things

## Your task for today!

Each member of your team should add the following items to this project, following the GitHub Group Workflow Document:

1. A piece of data in `App.jsx`. For example:

    ```javascript
    const huntersThings = [
      {
        name: "energy drinks",
        image: "https://imgs.xkcd.com/comics/health_drink_2x.png",  
        attributes: ["efficient", "reusability", "not a taco", "beautiful"],
      },
    ]
    ```

2. Add a new component. This component will live inside it's own directory in the `Pages` directory, just like the existing `XxxxxxxThings.jsx` files inside the `XxxxxxxThings` directories. Name the component appropriately, it will be used to iterate over the things you put into state in step one and display them inside of the ThingCard component. Your `XxxxxxxThings.jsx` file will look similar to this, changing names where appropriate:
  
    ```javascript
    import ThingCard from '../../components/ThingCard/ThingCard'
    import { Link } from 'react-router-dom'

    const SillyThings = (props) => {
      return (
        <>
          <h1>Hunter's Things</h1>
          <Link to="/">Home</Link>

          {props.things.map((thing, idx) => 
            <ThingCard key={idx} thing={thing}/>
          )}
        </>
      )
    }
    
    export default SillyThings
    ```

3. Add a link to your new component inside of `Landing.jsx` alongside the existing links:

    ```javascript
    <>
      {/* All the <Link> components should live here */}
      <h1>All-The-Things</h1>
      <Link to="/the-manliest-things">Ben's Things</Link><br/>
      <Link to="/the-well-styled-things">David's Things</Link><br/>
      <Link to="/the-silly-things">Hunter's Things</Link><br/>
    </>
    ```

4. In `App.jsx` make a new route that points to the new link you just made, and displays the component you just created (don't forget to import the component you just made!) It should look something like this:

   	```javascript
    <Route
      path="/the-silly-things"
      element={<SillyThings things={huntersThings} />}
    />
   	```

After you have completed these steps follow the steps in the GitHub Group Workflow Document to get your work into the Git Commander's main repo from the project. When that is done pull any additional changes down to your local repository.
