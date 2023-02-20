import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar  from './components/Navbar/Navbar';
import Hero     from './components/Hero/Hero';
import Servicios from './components/Servicios/Servicios';
import Portfolio  from './components/Portfolio/Portfolio';
import Experiencia from './components/Experiencia/Experiencia';
import Testimonios  from './components/Testimonios/Testimonios';
import Clientes      from './components/Clientes/Clientes';
import Contacto       from './components/Contacto/Contacto';
import Footer          from './components/Footer/Footer';
import Menu             from './components/Menu/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <Menu />
        <Navbar />
         <Hero />
          <Servicios />
           <Portfolio />
            <Experiencia />
           <Testimonios />
          <Clientes />
         <Contacto />
        <Footer />
    </React.StrictMode>
);

