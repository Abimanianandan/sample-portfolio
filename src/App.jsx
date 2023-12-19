import React from 'react'

function App() {
  let data=[
    {
    tittle:"Project One",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!"    
  },
  {
    tittle:"Project Two",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."    
  },
  {
    tittle:"Project Three",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!"    
  },
  {
    tittle:"Project Four",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."    
  },
  {
    tittle:"Project Five",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."    
  },
  {
    tittle:"Project Six",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse."    
  },
]
  return <>
 
<div className="container">
  <h1 className="my-4">Page Heading
    <small>Secondary Text</small>
  </h1>

  <div className="row">
    {
      data.map((e,i)=>{
        return <div class="col-lg-4 col-sm-6 mb-4" key={i}>
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt=""/></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">{e.tittle}</a>
            </h4>
            <p class="card-text">{e.description}</p>
          </div>
        </div>
      </div>
      })
    } 
  </div>    
  </div>  
  </>
    
  
}

export default App