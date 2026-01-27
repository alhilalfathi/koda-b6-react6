

export const Create = () => {
  return (
    <div>
        <div className="flex flex-col gap-3">
            <label htmlFor="title" className="text-2xl font-bold">Title:</label>
            <input type="text" id="title" placeholder="Input Title" className="bg-white p-5" />
        </div>
    </div>
  )
}
