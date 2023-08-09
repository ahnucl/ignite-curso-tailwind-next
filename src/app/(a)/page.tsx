export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">

      <h1 className="text-5xl font-bold flex items-center gap-3 before:w-0.5 before:h-10 before:bg-sky-500 before:flex">
        Hello tailwind
      </h1>

      <h2>Hello tailwind</h2>
      <p>Hello tailwind</p>

      <button disabled className="bg-sky-500 px-4 py-2 rounded-md font-medium mt-4 hover:enabled:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">
        Sign in
      </button>
    </div>
  )
}
