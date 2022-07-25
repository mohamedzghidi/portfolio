import React from 'react'

const projects = [

    {
        title: 'Business Land',
        description: 'A simple landing page developed with HTML, css and JavaScript',
        url: 'https://mohamedzghidi.github.io/business-land/',
        githubId: 'business-land'
    },
    {

        title: 'Super Counter',
        description: 'A counter page developed with React',
        url: ' https://mohamedzghidi.github.io/super-counter/',
        githubId: 'super-counter'
    }
]

function Projects() {
    return (
        <div  className='mt-5 container'>
            <div className= 'row'>
            {projects.map((item) => {
                return (


                    <div className="card" key={item.githubId} >
                        <div className="card-body">
                            <h5 className="card-title"> {item.title} </h5>
                            <h6 className="card-subtitle mb-2 text-muted"> {item.githubId} </h6>
                            <p className="card-text">{item.description}</p>
                            <a href={item.url} target="_blank" className="card-link">Preview</a>
                        </div>
                    </div>
                )
            })}

            </div>
          


        </div>
    )
}

export default Projects