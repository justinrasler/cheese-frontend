import { useState } from "react";

function Show(props) {
  // grab the id param from match
  const id = props.match.params.id;
  // save cheese standalone variable
  const cheese = props.cheese;
  // find the cheese to show
  const chez = cheese.find((singleChez) => {
    return singleChez._id === id;
  });

  // state for our form
  const [editForm, setEditForm] = useState(chez);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  // const newState = {...editForm}
  // newState[event.target.name] = event.target.value
  // setEditForm(newState)

  // handleSubmit function for form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateCheese(editForm, chez._id)
    // redirect Cheese back to index
    props.history.push("/")
  }

  //remove function
  const removeCheese = () => {
    props.deleteCheese(chez._id)
    props.history.push("/")

  }


  return (
    <div className="chez">
      <h1>{chez.name}</h1>
      <h2>{chez.countryOfOrigin}</h2>
      <img src={chez.image} alt={chez.name} />
      <button onClick={removeCheese} id="delete">
        DELETE
      </button>

      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={editForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
        />
        <input
        type="text"
        value={editForm.image}
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        />
        <input 
        type="text"
        value={editForm.countryOfOrigin}
        name="countryOfOrigin"
        placeholder="countryOfOrigin"
        onChange={handleChange}
        />
        <input type="submit" value="update cheese"/>
      </form>
    </div>
  );
}

export default Show;