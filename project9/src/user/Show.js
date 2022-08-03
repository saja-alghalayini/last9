import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Show(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost/project-9/api/API/updateUser.php?id=1`)
        .then((res) => {
          //  console.log(res)
          const data = res.data;
          setUsers(data);
        });
    })

    return(
        <>

        </>
    )
}  