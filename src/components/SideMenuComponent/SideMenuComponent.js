import React, { Component } from 'react';
import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './SideMenuComponent.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function SideMenuComponent() {
  return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">
                
                <li className="nav-item">
                    <a class="nav-link " href="administrator_dashboard">
                        <i class="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#dodaj-nav" data-bs-toggle="collapse" href="#">
                        <i class="bi bi-file-earmark-plus-fill"></i>
                        <span>Dodaj</span>
                        <i class="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="dodaj-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="administrator_dashboard/pets">
                            <i class="bi bi-circle"></i><span>Ljubimci</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms-layouts.html">
                            <i class="bi bi-circle"></i><span>Form Layouts</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms-editors.html">
                            <i class="bi bi-circle"></i><span>Form Editors</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms-validation.html">
                            <i class="bi bi-circle"></i><span>Form Validation</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#izbrisi-nav" data-bs-toggle="collapse" href="#">
                        <i class="bi bi-trash3-fill"></i>
                        <span>Izbriši</span>
                        <i class="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="izbrisi-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="forms-elements.html">
                            <i class="bi bi-circle"></i><span>Form Elements</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms-layouts.html">
                            <i class="bi bi-circle"></i><span>Form Layouts</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms-editors.html">
                            <i class="bi bi-circle"></i><span>Form Editors</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms-validation.html">
                            <i class="bi bi-circle"></i><span>Form Validation</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="pages-contact.html">
                    <i class="bi bi-envelope"></i>
                    <span>Contact</span>
                    </a>
                </li>

            </ul>

        </aside>

  )
}

