import React, { Component } from 'react'
import Newsrow from './Newsrow';                                                                    
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class Newscontainer extends Component {
  static defaultProps = {
    category :'general'
  }
      NewscontainerPropTypes ={
        category : PropTypes.string  
      }
  constructor(){
    super();
    this.state ={
      article : [],
      loading : false,
      page: 1,
      totalResults:0
    }
  }
  async componentDidMount(){
    this.props.setprogress(10);
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=0c4a31b46d5c4ae79f7831b51de1b4a7&pagesize=6`;
    this.props.setprogress(40);
    this.setState({loading:true})
    let data = await fetch(url);
    
    let parsedData = await data.json();


    // Check if the API request was successful and if the data contains the expected structure
    if (parsedData.status === 'ok' && parsedData.articles) {
      this.setState({ article: parsedData.articles ,
      loading:false});
      this.props.setprogress(100);
    }

     else {
      console.error('Error fetching news data:', parsedData.message);
    }
  } catch (error) {
    console.error('Error fetching news data:', error);
  }
 /* clicktonext = async () => {
    console.log("next");
    try {
      let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=0c4a31b46d5c4ae79f7831b51de1b4a7&pagesize=6&page=${this.state.page + 1}`;
      this.setState({loading:true}) 
      let data = await fetch(url);
      
      let parsedData = await data.json();
  console.log("parseddata completed")
      this.setState ({
        page: this.state.page + 1,
        article: parsedData.articles
      });
      this.setState({loading:false})
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };
  
  clicktoprev= async()=>{
 console.log("prev")
 try {
  let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=0c4a31b46d5c4ae79f7831b51de1b4a7&pagesize=6&page=${this.state.page - 1}`;
  this.setState({loading:true}) 
  let data = await fetch(url);

  let parsedData = await data.json();
  
  
  // Concatenate the new articles with the existing ones
  this.setState ({
    page: this.state.page - 1,
    article:  parsedData.articles,
  });
  this.setState({loading:false})
} catch (error) {
  console.error("Error fetching news data:", error);
}
  }*/
  async fetchData() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=0c4a31b46d5c4ae79f7831b51de1b4a7&pagesize=6&page=${this.state.page}`;
    
    try {
      this.setState({ loading: true });
      const data = await fetch(url);
      const parsedData = await data.json();

      if (parsedData.status === 'ok' && parsedData.articles) {
        this.setState({
          article: this.state.article.concat(parsedData.articles),
          totalResults: parsedData.totalResults,
          loading: false,
        });
      } else {
        console.error('Error fetching news data:', parsedData.message);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error('Error fetching news data:', error);
      this.setState({ loading: false });
    }
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    await this.fetchData();
  };
  render() {
  /*  let{mode} =this.props;*/
    return (
 <>
        <h1 className="d-flex justify-content-center" style={{ background: 'linear-gradient(90deg, #020201, #1eb92a, #1bc5ae)', color: 'transparent', backgroundClip: 'text' }}>Today's news-{this.props.category} Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
      <div className="cont">
          <div className="row  mx-8px"> 
            {!this.state.loading && this.state.article.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsrow title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} publishedAt={element.publishedAt} source={element.name} />
              </div>;
            })}
         </div>
         </div>
      
      </InfiniteScroll>

      </>
       
     
    )
  }

}


export default Newscontainer
 