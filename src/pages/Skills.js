import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Skills() {
    const [technologies, setTechnologies] = useState([])
    useEffect(() => {
        axios.get("https://devmastery-assets.vercel.app/technologies.json")
            .then((result) => {
                console.log(result.data)
                setTechnologies(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    console.log(technologies)

    return (
        <div className='container' mt-5>
            <div className='row'>
                {technologies.map(t => {
                    return (
                        <div key={t.id} className= "col-12 col-sm-6 col-md-4 col-lg-3 p-3">
                            <div className="card"  >
                                <img src={t.image} className="card-img-top" alt={t.name} />
                                <div className="card-body">
                                    <h5 className="card-title"> {t.name} </h5>
                                    
                                    <Link to={`/skills/${t.id}`}  className="btn btn-primary">
                                        learn about
                                    
                                    </Link>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Skills