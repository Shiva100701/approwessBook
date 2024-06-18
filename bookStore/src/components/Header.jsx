import React, { useEffect, useState } from 'react'
import { Button, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
import BooksTable from "../components/BooksTable";
import axios from 'axios';
import BooksCard from './BookCard';
function Header() {

  
    
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="/home">
          <img
            src="data:image/jpeg;base64,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"
            className="mr-3 h-6 sm:h-9"
            alt="Approwess logo Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Approwess Books
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Link to="/books/create">
            <Button>Add Books</Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/home" active>
            Home
          </Navbar.Link>
          <Navbar.Link
            href={`#`}
          >
            About
          </Navbar.Link>
          
          <Navbar.Link href="/home">Pricing</Navbar.Link>
          <Navbar.Link href="/home">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      
    </>
  );
}

export default Header