import jsonData from "../../public/article.json"
import { useParams } from "react-router-dom";

export const DetailArticle = () => {

    const { username, slug } = useParams()
    const localArticle = JSON.parse(localStorage.getItem("articleData")) || []
    const allArticle = [...localArticle,...jsonData]

    const article = allArticle.find(
        (item) => item.username === username && item.slug === slug
    )

  if (!article) {
    return <p className="p-10">Article not found</p>
  }
  return (

    <div className="max-w-3xl mx-auto p-10">
      
    {/* article author  */}
      <div className="mb-4 text-sm text-gray-600">
        <span className="font-medium">{article.name}</span>{" "}
        <span className="text-gray-400">{article.username}</span>
      </div>

    {/* article image  */}
        <img src={article.image} alt={article.title} />

    {/* article title  */}
      <h1 className="text-4xl font-bold mb-6 mt-10">
        {article.title}
      </h1>

    {/* body article  */}
      <p className="text-lg leading-relaxed text-gray-800">
        {article.body}
      </p>
    </div>
  )

}
