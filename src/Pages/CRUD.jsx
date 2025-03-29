import React from "react";

const CRUD = () => {
  function readGoogleSheet() {
    // Sort results by id in descending order, take two
    // and return the age as an integer.

    fetch(
      "https://sheetdb.io/api/v1/4t0iurq1zjbyd"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function updateGoogleSheet() {
    fetch('https://sheetdb.io/api/v1/4t0iurq1zjbyd', {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                'name': "Emma"
            }
        })
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    
  }

  function updateGoogleSheet() {
    fetch('https://sheetdb.io/api/v1/4t0iurq1zjbyd', {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                'name': "Emma"
            }
        })
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    
  }

  function deleteGoogleSheet() {
      fetch('https://sheetdb.io/api/v1/4t0iurq1zjbyd', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    
  }


  
  return <div>CRUD</div>;
};

export default CRUD;
