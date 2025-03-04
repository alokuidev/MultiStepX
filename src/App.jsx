function App() {

  return (
    <>
      <div className="form-container">
    <h2>Complete Your Profile</h2>
    <p className="subtitle">Fill in the details to proceed</p>

    <div className="step active">
        <label for="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your name"/>
    </div>

    <div className="step">
        <label for="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email"/>
    </div>

    <div className="step">
        <label for="password">Create Password</label>
        <input type="password" id="password" placeholder="Enter a secure password"/>
    </div>

    <div className="buttons">
        <button id="prevBtn" disabled>⬅ Previous</button>
        <button id="nextBtn">Next ➡</button>
    </div>
</div>

    </>
  )
}

export default App
