// eslint-disable-next-line react/prop-types
const Article = ({title, text, tags, image, alt}) => {
    return (
        <div className="alura-card">
            <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold ">{title}</h3>
            <div className="w-full flex-row justify-end gap-2 pr-5 my-1 hidden sm:flex">
                {
                    // eslint-disable-next-line react/prop-types
                    tags.map(tag => <span key={tag} className="alura-tag">{tag}</span>)
                }
            </div>
            <div className="gap-1 grid ">
                {
                    // eslint-disable-next-line react/prop-types
                    text.map((content, index) => <p key={index} className="text-alura-200 dark:text-gray-300">{content}</p>)
                }
            </div>
            {image && <img src={image} className="p-4"/>}
            {image && alt && <span className="sr-only">{alt}</span>}
        </div>
    )
}

export default Article