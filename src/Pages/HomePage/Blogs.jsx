import Cards from "../../Components/CardComponent/Cards"
import "./Blogs.scss"
function Blogs() {
    const data = [
        {
            image: "https://assets-global.website-files.com/5f6bd5d85587b65348960e08/61b22f3e2dd3ae7b9a8af7ea_Conceptual-thumbnail.png",
            header: "Karen Hong Explains How Illustrations Help Headspace Spread Mindfulness",
            paragraph: "A Brand Illustrator for Headspace shares how the company uses illustrations to help people all around the globe improve their mental well-being."
        },
        {
            image: "https://assets-global.website-files.com/5f6bd5d85587b65348960e08/61a5031fbe5c073a96ad67ae_Thumbnail-NonP-p-500.png",
            header: "Karen Hong Explains How Your Design Manual for Improving Instagram Stories",
            paragraph: "Instagram stories are fantastic for exploring content and connecting with your audience. Here's how you can crush your own IG stories!"
        },
        {
            image: "https://assets-global.website-files.com/5f6bd5d85587b65348960e08/61980aa78de9cf5b045b7a14_Thumbnail_Portfolio.png",
            header: "How to Create Your Online Portfolio in 5 Easy Steps",
            paragraph: "Building a great online portfolio is the first step to your next big career move. We'll show you how! With a few tweaks here and there, you can really wow recruiters and make a solid first impression."
        },
        {
            image: "https://assets-global.website-files.com/5f6bd5d85587b65348960e08/618c49d34433f497cb62fe52_Thumbnail-NonP-p-1080.png",
            header: "Illustrations for Nonprofit Organizations Making a Difference",
            paragraph: "Capture people's attention and move them to the action! Share your message using suitable illustrations to represent important matters."
        },
        {
            image: "https://assets-global.website-files.com/5f6bd5d85587b65348960e08/616bf1930fb07fe872fe2849_Thumbnail_Design-p-800.png",
            header: "A Beginners Guide to Open-Source Design",
            paragraph: "Heard of open-source design but not sure what it is? Don't sweat it! We covered the basics of the movement and the tools for you here."
        },
        {
            image: "https://assets-global.website-files.com/5f6bd5d85587b65348960e08/615f0f657d43e69bcadd3071_Thumbnail_Design-p-800.png",
            header: "Design Psychology: Principles and Concepts to Empower Your Projects",
            paragraph: "The power of psychology is never more apparent than in the world of design! Incorporating some ideas of psychology into your creative projects, it's easier than you think!"
        },
        {
            image: "https://assets-global.website-files.com/5f6bd5d85587b65348960e08/6156b9505923e776ad0279dd_9-p-800.png",
            header: "Doodle Ipsum: A New Illustration Tool for Developers",
            paragraph: "It's the Lorem Ipsum of illustrations, and developers are going to love it. Introducing Doodle Ipsum, a tool for placeholder illustrations. "
        }
    ]
    return (
        <>
            <div className="blogs">
                <>{data.map((item) => Cards(item))}</>
            </div>
        </>
    )
}

export default Blogs