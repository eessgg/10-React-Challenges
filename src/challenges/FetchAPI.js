import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Book = styled.div `
  max-width: 250px;
  padding: 12px;
  margin: 24px;
  background: #F5D547;
  color: #0D2149;
  border-radius:6px;

  header {
    text-align:center;
    color:#0D2149;
  }

  h3 {
    margin: 1.2rem;
    text-align:center;
  }
`

const FetchAPI = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const results = await axios('https://www.anapioficeandfire.com/api/books?pageSize=30');
    console.log(results.data)
    setData(results.data)
  }

  return (
    <>
      <div className="row row-centered pos">
        <div className="col-12 text-center">
            <button className="btn btn-primary"
              onClick={getData}>
              Fetch Data
            </button>
        </div>
      </div>
      <div className="row row-centered pos">
        {
        data.map((result, id) => {
          return (
            <Book className="book col-lg-3 col-xs-3"
              key={
                result.isbn
            }>
              <header>
                📙 BOOK {
                id + 1
              } </header>
              <h3> {
                result.name
              } </h3>
              <p>
                👤 {
                result.authors
              } </p>
              <p>
                🔢 {
                result.numberOfPages
              } </p>
              <p>
                🌎 {
                result.country
              } </p>
            </Book>
          )
        })
      } </div>
    </>
  );
}

export default FetchAPI;
