function page() {
  return (
    <main className="">
      <form action="" className="flex flex-col maxw">
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </main>
  )
}

export default page
