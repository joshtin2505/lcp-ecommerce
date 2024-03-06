import { Button } from "@/components/ui/button"

function page() {
  return (
    <main className="flex flex-col justify-center items-center">
      <form action="" className="flex flex-col max-w-80">
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
        <Button
          type="submit"
          className="bg-primary-500 hover:bg-primary-300 max-w-28"
        >
          Sign Up
        </Button>
      </form>
    </main>
  )
}

export default page
