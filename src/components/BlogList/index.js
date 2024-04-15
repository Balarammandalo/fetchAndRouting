// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updateData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogData: updateData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader
            type="Tailspin"
            color="#00Bff"
            height={50}
            width={50}
            data-testid="loader"
          />
        ) : (
          blogData.map(eachBlog => (
            <BlogItem blogItemList={eachBlog} key={eachBlog.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
