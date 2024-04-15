// Write your JS code here
import {Component} from 'react'
import './index.css'

// const blogData = {
//   id: 2,
//   title: 'React v16.7: No, This Is Not the One With Hooks',
//   image_url: 'https://miro.medium.com/max/3158/1*kEPCQNY4dwVyaFuLEwJcNQ.png',
//   avatar_url: 'https://avatars.githubusercontent.com/u/3624098?v=4',
//   author: 'Andrew Clark',
//   content:
//     'React follows semantic versioning. Typically, this means that we use patch versions for bugfixes, and minors for new (non-breaking) features. However, we reserve the option to release minor versions even if they do not include new features. The motivation is to reserve patches for changes that have a very low chance of breaking. Patches are the most important type of release because they sometimes contain critical bugfixes.',
//   topic: 'React.js',
// }

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const newDataUpdate = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogData: newDataUpdate})
  }

  renderBlogsItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogData
    return (
      <div className="blogContainer">
        <h1 className="titleHead">{title}</h1>
        <div className="imgAuthor">
          <img src={avatarUrl} alt="avatarUrl" className="avatarImage" />
          <p className="authorPara">{author}</p>
        </div>
        <img src={imageUrl} alt="img" className="reactImage" />
        <p className="contentPara">{content}</p>
      </div>
    )
  }

  render() {
    return <div>{this.renderBlogsItemDetails()}</div>
  }
}
export default BlogItemDetails
