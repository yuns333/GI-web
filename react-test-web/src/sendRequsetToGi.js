import React from 'react';
import axios from 'axios';

function sendRequsetToGi(s) {
    let response = axios
        .get("http://172.27.19.75/api"+s)
        .then(data =>{ 
          console.log("get data");
          if (data) {
            console.log(data);
          }
        })
        .catch(err => {
          console.log("------------------:::::",err);
          return null;
        });
  }

  export default sendRequsetToGi;