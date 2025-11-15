import './App.css'

function App() {

  return (
    <>
      <h1 className='text-6xl text-purple-600'>Vite + React</h1>
      <form>
        <div className='flex'>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Coffee Name</legend>
            <input type="text" className="input" placeholder="Coffee Name" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Available Quantity</legend>
            <input type="text" className="input" placeholder="Available Quantity" />
          </fieldset>
        </div>
      </form>
    </>
  )
}

export default App
