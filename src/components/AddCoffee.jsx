import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex mb-8'>
                    <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend">Coffee Name</legend>
                        <input type="text" name='name' className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset md:w-1/2 ml-4">
                        <legend className="fieldset-legend">Available Quantity</legend>
                        <input type="text" name='quantity' className="input w-full" placeholder="Available Quantity" />
                    </fieldset>
                </div>
                {/* form supplier and taste row */}
                <div className='md:flex mb-8'>
                    <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend">Supplier Name</legend>
                        <input type="text" name='supplier' className="input w-full" placeholder="Supplier Name" />
                    </fieldset>
                    <fieldset className="fieldset md:w-1/2 ml-4">
                        <legend className="fieldset-legend">Taste</legend>
                        <input type="text" name='taste' className="input w-full" placeholder="Taste" />
                    </fieldset>
                </div>
                {/* form category and details row */}
                <div className='md:flex mb-8'>
                    <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend">Category</legend>
                        <input type="text" name='category' className="input w-full" placeholder="Category" />
                    </fieldset>
                    <fieldset className="fieldset md:w-1/2 ml-4">
                        <legend className="fieldset-legend">Details</legend>
                        <input type="text" name='details' className="input w-full" placeholder="Details" />
                    </fieldset>
                </div>
                {/* form row */}
                <div className=' mb-8'>
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                    </fieldset>
                </div>
                <input type="submit" className='btn btn-block' value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;