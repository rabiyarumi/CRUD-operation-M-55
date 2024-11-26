import { useLoaderData } from "react-router-dom";

const Update = () => {

    const loadedUser = useLoaderData()

    const handleUpdate = e => {
        e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    // const user = {name, email}
    // console.log(user);
    console.log(name, email);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    }


    return (
        <div>
           <h2>Update information of {loadedUser.name}</h2>
           <form onSubmit={handleUpdate}>
            <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
            <br />
            <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
            <br />
            <input type="submit" value="Update" />
           </form>
        </div>
    );
};

export default Update;