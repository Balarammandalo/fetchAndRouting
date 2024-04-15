// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemList} = props
  const {id, imageUrl, avatarUrl, author, topic, title} = blogItemList

  return (
    <Link to={`/blogs/${id}`} className="linkAdd">
      <div className="blogItemContainer">
        <img src={imageUrl} alt="title" className="img1" />
        <div className="blogItemDescription">
          <p className="topicPara">{topic}</p>
          <h1 className="titleHead">{title}</h1>
          <div className="avatarDetails">
            <img src={avatarUrl} alt="avatarImage" className="img2" />
            <p className="authorPara">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
