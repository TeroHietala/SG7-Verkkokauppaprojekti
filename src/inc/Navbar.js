import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Cart from './Cart'
import Icon from './Icon'
import IconSearch from './IconSeach'
import Chatbot from './Chatbot'

export default function Navbar ({ url, cart, icon, steps }) {
  //Tilamuuttuja kategorialle
  const [categories, setCategories] = useState([])
  //Tilamuuttujat kirjautumiselle
  const [customers, setCustomers] = useState([])
  const [mail_username, setMail] = useState('')
  const [password, setPasswd] = useState('')

  //Hakee ja palauttaa kirjautujan etunimen
  const login = customers.map(customer => (
    <p className='nav-text'>
      Tervetuloa {customer.first_name}
      <Link
        className='bi bi-box-arrow-right'
        type='button'
        onClick={e => emptyUser()}
      >
        <svg 
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          className=' bi-door-open-fill'
          viewBox='0 0 20 20'
        >
          <path d='M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z' />
        </svg>
      </Link>
    </p>
  ))

  //Ottaa yhteyden backendiin ja sieltä tulee tieto onko käyttäjä validi
  function save () {
    const json = JSON.stringify({
      mail_username: mail_username,
      password: password
    })
    axios
      .post('http://localhost/verkkokauppa/customers/login.php', json)
      .then(response => {
        const json = response.data
        setCustomers(json)
        //tallentaa kirjautuneen käyttäjän sessionStorageen
        sessionStorage.setItem('user', JSON.stringify(json))
        console.log(sessionStorage.getItem('user'))
        //Tyhjentää inputit ja muuttujat
        setMail('')
        setPasswd('')
      })
      .catch(error => {
        // TÄMÄ PITÄÄ VIELÄ KORJATA!!!!
        alert('Väärä käyttäjätunnus tai salasana')
        window.location.reload(true)
      })
  }

  useEffect(() => {
    if ('user' in sessionStorage) {
      setCustomers(JSON.parse(sessionStorage.getItem('user')))
    }
  }, [])

  //Poistaa käyttäjän tiedot sessionStoragesta ja tyhjentää customer muuttujan
  function emptyUser (customers) {
    sessionStorage.clear(customers)
    setCustomers([])
    window.location.reload(false)
  }

  //Hakee backendistä kategoriat
  useEffect(() => {
    axios
      .get(url + 'products/getcategories.php')
      .then(response => {
        const json = response.data
        setCategories(json)
      })
      .catch(error => {
        if (error.response === undefined) {
          alert(error)
        } else {
          alert(error.response.data.error)
        }
      })
  }, [url])

  return (
    <nav class='navbar navbar-expand-lg fixed-top '>
      <div class='container-fluid'>
        <Link
          
          id='otsikko'
          to={{
            pathname: '/Home'
          }}
        >
          INSTRUMENT HEAVEN
        </Link>
        <button
          className='navbar-toggler custom-toggler '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to={{
                  pathname: '/Home'
                }}
              >
                {' '}
                Etusivu
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Tuotteet
              </a>
              <ul
                className='dropdown-menu'
                id='tuotteet'
                aria-labelledby='navbarDropdown'
              >
                {categories.map(category => (
                  <li className='nav-item' key={category.id}>
                    <Link
                      className='dropdown-item'
                      to={{
                        pathname: '/inc/Products',
                        state: {
                          id: category.id,
                          name: category.name
                        }
                      }}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to={{
                  pathname: '/inc/Discount'
                }}
              >
                {' '}
                Alennukset
              </Link>
            </li>

            <li className='nav-item'>
              <a className='nav-link'>{login}</a>
            </li>
          </ul>

          <ul className='navbar-nav ml-auto'>
            <li className='nav-item dropdown dropstart'>
              <a
                className='nav-link'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                data-bs-auto-close='false'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='currentColor'
                  className='bi bi-chat-left-dots'
                  viewBox='0 0 16 16'
                >
                  <path d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
                  <path d='M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
                </svg>
              </a>
              <ul
                className='dropdown-menu'
                id='chatbot'
                aria-labelledby='navbarDropdownClickable'
              >
                <Chatbot steps={steps} hideInput={true} />
              </ul>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item dropdown dropstart'>
              <a
                className='nav-link'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <Icon icon={icon} />
              </a>
              <ul
                className='dropdown-menu'
                id='login'
                aria-labelledby='navbarDropdown'
              >
                <li>
                  <p>Kirjaudu</p>
                  <input
                    placeholder='Sähköposti'
                    defaultValue='Reset'
                    value={mail_username}
                    onChange={e => setMail(e.target.value)}
                  />
                  <input
                    placeholder='Salasana'
                    type='password'
                    defaultValue='Reset'
                    value={password}
                    onChange={e => setPasswd(e.target.value)}
                  />
                  <Link className='nav-link' onClick={save}>
                    Kirjaudu
                  </Link>
                  <Link
                    className='nav-link'
                    aria-current='page'
                    to='/inc/Register'
                  >
                    Rekisteröidy
                  </Link>
                  <p>{login}</p>
                </li>
              </ul>
            </li>
          </ul>

          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <IconSearch icon={icon} />
            </li>
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Cart cart={cart} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
