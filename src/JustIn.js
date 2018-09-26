import React from 'react';
import axios from 'axios';


import GridLayout from './GridLayout';

export default class extends React.Component {
  state = {
    hits: [],
    next: false
  }

  async componentDidMount() {
    await this.setHits('https://dev.lillypulitzer.com/s/lillypulitzer-us/dw/shop/v18_3/product_search?expand=availability%2Cimages%2Cprices%2Cvariations&count=18&refine_1=cgid%3Djust-in&q=&start=0&client_id=7469c353-e112-4902-bf40-ead35df41219');
  }

  setHits = async (endpoint) => {
    const res = await axios.get(endpoint);
    this.setState({
      hits: res.data.hits,
      next: res.data.next || false
    });
  }

  setNext = async () => {
    const res = await axios.get(this.state.next);
    this.setState(prev => ({
      hits: [...prev.hits, ...res.data.hits],
      next: res.data.next
    }));
  }


  render() {
    return (
      <div>
        <GridLayout title="Just In" cardType="" items={this.state.hits || []}/>
        {this.state.next && <button onClick={this.setNext}>Next</button>}
      </div>
    )
  }
}