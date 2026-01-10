# Milestone-project1


      <a href="index.html" class="logo">
        <span class="logo-accent">hospi</span>TABLE
      </a>
      <button id="hamburger" class="hamburger">
        &#9776;
      </button>
      <nav id="nav" aria-label="main navigation">
      <div> 
        <a href="index.html">Home</a>
        <a href="menu.html">Menu</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="events.html">Events</a>
        <a class="navlink-res" href="reservations.html">Reservations</a>
        </div>
      </nav>
    </div>

    nav {
  display: flex;
  gap: 1rem;

  &_menu @media (max-width: 1024px) {
    nav {
      position: absolute;
      top: 100%;
      right: 0;
      background-color: white;
      flex-direction: column;
      width: 100%;
      padding: 1.5rem;
    }

    .hamburger {
      display: block;
    }
  }
}


/* hamburger */
.hamburger {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
}

/* nav-bar */
nav {
  display: flex;
  gap: 1rem;

  @media (max-width: 1024px) {
    nav {
      position: absolute;
      top: 100%;
      right: 0;
      background-color: white;
      flex-direction: column;
      width: 100%;
      padding: 1.5rem;
    }

    .hamburger {
      display: block;
    }
  }
}