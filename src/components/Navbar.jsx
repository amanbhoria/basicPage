import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
        <div class="container d-flex justify-content-between" >
            <div>
            <h5><img class="navbar-brand" href="#" alt='logo' /></h5>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            </div>
            <div class="" id="navbarSupportedContent">
                <ul class="navbar-nav ">
                    <li class="nav-item mx-3">
                    <h5><a class="nav-link active" aria-current="page" href="#">Home</a></h5>
                    </li>
                    <li class="nav-item mx-3">
                    <h5><a class="nav-link" href="#">Help</a></h5>
                    </li>
                    <li class="nav-item mx-3">
                    <h5> <a class="nav-link" href="#"><i class="fa-solid fa-magnifying-glass"></i></a></h5>
                    </li>
                    <li class="nav-item d-flex mx-2">
                        <i class="fa-solid fa-user m-auto"></i>
                        <h5> <a class="nav-link" href="#">My Account</a></h5>
                    </li>
                </ul>

            </div>
        </div>
</nav>
  )
}

export default Navbar