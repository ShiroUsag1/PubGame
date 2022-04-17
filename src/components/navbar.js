import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

export const Navbar = () => {
        return (
    <nav class="navbar navbar-expand-lg" aria-label="Twelfth navbar example">
      <div class="container-fluid col-12">
        <button class="navbar-toggler navbar-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-end" id="navbarsExample10">

              <span id="homeinit">
                <a  aria-current="page" href="#">PUBGAME</a>
              </span>
           
              <span className='buttao'>
              <a   href="https://pubgame.gitbook.io/whitepaper/">WHITE PAPER</a>
              </span>

              <span className='buttao'>
              <a   href="#team">AIRDROP</a>
              </span>
            
              <span className='buttao'>
              <a href="#">SIGNUP</a>
            </span>
            
            <span className='buttao'>
              <a   href="https://pubgame.io/gameplay/">GAME</a>
           </span>
          
            <span className='buttao'>
              <a   href="#token">CONTRACT AUDITY</a>
            </span>

              <a   href="https://t.me/+4qZW6-5kS4kwOTEx"><img src='assets/images/btnDiscord.png'/></a>

        </div>
      </div>
    </nav>
        );
    }