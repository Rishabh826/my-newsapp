import React, { Component } from 'react';
import Newsrow from './Newsrow';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class Newscontainer extends Component {
  static defaultProps = {
    category: 'general',
    pageSize: 6,
  }

  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
    setprogress: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=0c4a31b46d5c4ae79f7831b51de1b4a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setprogress(40);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    if (parsedData.status === 'ok' && parsedData.articles) {
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        loading: false,
      });
      this.props.setprogress(100);
    } else {
      console.error('Error fetching news data:', parsedData.message);
      this.setState({ loading: false });
      this.props.setprogress(100);
    }
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, () => this.fetchData());
  };

  render() {
    return (
      <>
        <h1 className="d-flex justify-content-center" style={{ background: 'linear-gradient(90deg, #020201, #1eb92a, #1bc5ae)', color: 'transparent', backgroundClip: 'text' }}>
          Today's News - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <Newsrow
                    title={element.title}
                    description={element.description}
                    imageurl={element.urlToImage}
                    url={element.url}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default Newscontainer;
