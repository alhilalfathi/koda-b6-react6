import { useForm } from "react-hook-form"
import jsonData from "../../public/article.json"

export const Create = () => {
    const {handleSubmit, register} = useForm()

    function submitForm(value){
        const oldArticle = JSON.parse(localStorage.getItem("articleData")) || []
        const totalArticle = oldArticle.length + jsonData.length
        const newArticle = {
        id: totalArticle + 1,              
        title: value.title,
        slug: value.slug,
        body: value.body,
        name: "Hilal",               
        username: "@hils",
        image: value.image
        }

        const updatedArticle = [...oldArticle, newArticle]
        localStorage.setItem("articleData",JSON.stringify(updatedArticle))
    }

  return (
    <div>
        <div>
            <h1 className="text-4xl font-bold px-5">Create Article</h1>
            <p className="text-gray-600 px-6 mb-8">Create your own article</p>
        </div>
        <form onSubmit={handleSubmit(submitForm)}>
            <div className="flex flex-col gap-3 px-10 py-5">
                <label htmlFor="title" className="text-2xl font-bold">Title:</label>
                <input {...register("title")} type="text" id="title" placeholder="Input Title" className="bg-white p-5" />
            </div>
            <div className="flex flex-col gap-3 px-10 py-5">
                <label htmlFor="slug" className="text-2xl font-bold">Slug:</label>
                <input {...register("slug")} type="text" id="slug" placeholder="Input Slug" className="bg-white p-5" />
            </div>
            <div className="flex flex-col gap-3 px-10 py-5">
                <label htmlFor="image" className="text-2xl font-bold">Image url:</label>
                <input {...register("image")} type="text" id="image" placeholder="Input url" className="bg-white p-5" />
            </div>
            <div className="flex flex-col gap-3 px-10 py-5">
                <label htmlFor="body" className="text-2xl font-bold">Article body:</label>
                <input {...register("body")} type="text" id="body" placeholder="Input article body" className="bg-white px-5 h-40" />
            </div>
            <div>
                <button className="bg-black text-white p-3 rounded-2xl ml-10 hover:bg-gray-900">Submit</button>
            </div>
        </form>
    </div>
  )
}
