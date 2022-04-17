import React from 'react';
import { MyCarousel } from '../../components/carousel';
import { Footer } from '../../components/footer';
import { Navbar} from '../../components/navbar';
import {Space} from '../../components/space'

export const Homepage = () => {

    return (
    <div>
        <Navbar/> 
    
        <section id="home">
            <div className="container">
                <div className="home-field row align-items-center">
                <div className="image text-center col-2 col-sm-1 col-xxl-2"></div>
                    <div className="image text-center col-8 col-sm-10 col-xxl-8">
                        <img className="img-fluid animate__animated animate__bounceIn animate__delay-1s" src="assets/images/logo.png" alt="home image"/>
                    </div>
                    <div className="image text-center col-2 col-sm-1 col-xxl-2"></div>                
                </div>
                <br/>
                <div className="row align-items-center">
                    <button type='button' className="btn btn-link animate__animated animate__jello" id="imgbutton" href='https://blog.betrybe.com/css/css-position/'/>
                </div>
            </div> 
        </section>

        <section id="about">
            <div className="container">
            <br/> <br/> <br/>
                <div className="row align-items-center">
                    <div className="container-fluid bd-ex col-4 col-sm-2 col-xxl-4">
                        <img className="img-fluid" id='caneca01' data-aos="zoom-in"  data-aos-delay="500" src="assets/images/caneca01.png" alt="print image"/>
                    </div>
                    <div className="container-fluid bd-ex col-8 col-sm-10 col-xxl-8">
                    <h1><img className="titles" data-aos="zoom-in"  data-aos-delay="500" src="assets/images/title01.png" alt="print image"/></h1>
                    <p>Inspired by one of the most famous party game of USA
                       <br/>PUB GAME was born, as a metaverse of comic and exclusive NFTs games, which stand out for their exceptionality in stimulating the fun side of life.
                       <br/> Its priority is to achieve anyone who wants to put together the fun always found in Pubs with profitability at the same time!
                    </p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </section>

        <section id="chars">
            <div className="container">
            <div className="row align-items-center">
                        <div className="container-fluid bd-ex2 col-12">
                        <h1><img className="titles" data-aos="zoom-in"  data-aos-delay="800" src="assets/images/title02.png" alt="titles"/></h1>
                    </div>
                <div className="row align-items-center">
                        <div className="container-fluid col-8" id='demo'>
                        <div className="ratio ratio-16x9">
                        <iframe src="https://pubgame.io/ChooseYourChar/index.html" data-aos="zoom-in"  data-aos-delay="1200" title="Teste game"></iframe>
                        </div>
                        </div>
                        <div className="container-fluid col-4">
                        <img id='barman' data-aos="zoom-in"  data-aos-delay="500" src="assets/images/barmanJoia.png" alt="barman"/>    
                        </div>
                </div>
                </div>
            </div>
            <br/> <br/>
        </section>
        
        <section id="prints">
            <div className="container">
            <div className="row align-items-center UpBoard">
                <div className="container-fluid bd-ex2 col-12">
                <h1><img  className="titles" src="assets/images/title03.png" alt="titles"/></h1>
                </div>
            </div>  
            <div className="row">
                <div className="col-md-12 col-xs-0">
                    <MyCarousel/>
                </div>
            </div>
            </div>
           <Space/>
        </section>
        
    
    <section id="team">
    <div className="container">
            <div className="row align-items-center UpBoard">
                <div className="container-fluid bd-ex2 col-12">
                <h1><img className="titles" src="assets/images/title04.png" alt="titles"/></h1>
                </div>
            </div>  
                <div className="row align-items-center">
                    <div className="container-fluid team col-3"><img className="img-team" src="assets/images/card.png" alt="team"/></div>
                    <div className="container-fluid team col-3"><img className="img-team" src="assets/images/card.png" alt="team"/></div>
                    <div className="container-fluid team col-3"><img className="img-team" src="assets/images/card.png" alt="team"/></div>
                    <div className="container-fluid team col-3"><img className="img-team" src="assets/images/card.png" alt="team"/></div>
                </div>
            <br/>
            <br/>
            <br/>
            </div>
    </section>

    <section id="rewards">
    <img id="imgnuvem2" src="assets/images/rewards/nuvem02.png" data-aos="fade-down"  data-aos-delay="500" alt="nuvem"/>   
            <div className="container">
            <br/><br/>
                <div className="row align-items-center">
                    <div className="border-box shadow">
                        <div className="bd-ex03 col-8 col-sm-10 col-xxl-8">
                            <h1>AMAZING REWARDS</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus accumsan leo viverra consequat. Donec vel sapien non magna laoreet mattis. Aenean pretium varius risus, ut ultricies diam dignissim vel. Maecenas euismod tempus commodo.</p>
                        </div>
                    </div>
                    <div className="col-4 col-sm-2 col-xxl-4">
                            <img className='animate__animated animate__wobble' id="caneca" src="assets/images/rewards/coqueteleira.png" alt="reward"/>
                    </div>
                    <img id="imgnuvem" src="assets/images/rewards/nuvem01.png" data-aos="fade-up"  data-aos-delay="600" alt="nuvem"/>
                </div>
            </div>
            <br/> <br/>
        </section>


    <section id="team">
    <div className="container">
            <div className="row align-items-center UpBoard">
                <div className="container-fluid bd-ex2 col-12">
                <h1><img className="titles" src="assets/images/title05.png" alt="titles"/></h1>
                </div>
            </div>  
                <div className="row align-items-center">
                    <div className="container-fluid team col-3"><img className="img-team" src="assets/images/partners.png" alt="team"/><p>NOME DA MARCA</p></div>
                    <div className="container-fluid team col-3"><img className="img-team" src="assets/images/partners.png" alt="team"/><p>NOME DA MARCA</p></div>
                    <div className="container-fluid team col-3"><img className="img-team" src="assets/images/partners.png" alt="team"/><p>NOME DA MARCA</p></div>
                    <div className="container-fluid team col-3"><img className="img-team" src="assets/images/partners.png" alt="team"/><p>NOME DA MARCA</p></div>
                </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>

    </section>


        <section id="token">
            <div className="container">
            <br/> <br/>
                <div className="row align-items-center">
                    <div className="container-fluid bd-ex col-4 col-sm-2 col-xxl-4">
                        <h1><img className="titles" data-aos="zoom-in"  data-aos-delay="800" src="assets/images/tokenomics/Site_Tokenomics_Title.png" alt="titles"/></h1>
                        <ul>
                            <li>
                                <p>Total Supply 1.000.000.000 PubCoins</p>
                            </li>
                            <li>
                                <p><img className="pontinhos" data-aos="zoom-in"  data-aos-delay="500" src="assets/images/tokenomics/Site_Tokenomics_Ball1.png" alt="titles"/> 50% (500.000.000) Reward Pool (Play to Earn)</p>
                            </li>
                            <li>
                                <p><img className="pontinhos" data-aos="zoom-in"  data-aos-delay="500" src="assets/images/tokenomics/Site_Tokenomics_Ball2.png" alt="titles"/> 20% (200.000.000)  Metaverse Design and Developmen</p>
                            </li>
                            <li>
                                <p><img className="pontinhos" data-aos="zoom-in"  data-aos-delay="500" src="assets/images/tokenomics/Site_Tokenomics_Ball3.png" alt="titles"/> 8%   (80.000.000)   Marketing and Promotional Actions</p>
                            </li>
                            <li>
                                <p><img className="pontinhos" data-aos="zoom-in"  data-aos-delay="500" src="assets/images/tokenomics/Site_Tokenomics_Ball4.png" alt="titles"/> 6,8% (68.000.000)  Token Pre-Sale and Listing</p>
                            </li>
                            <li>
                                <p><img className="pontinhos" data-aos="zoom-in"  data-aos-delay="500" src="assets/images/tokenomics/Site_Tokenomics_Ball5.png" alt="titles"/> 5%   (50.000.000)   Devs (Blocked wallet for 12 months)</p>
                            </li>
                            <li>
                                <p><img className="pontinhos" data-aos="zoom-in"  data-aos-delay="500" src="assets/images/tokenomics/Site_Tokenomics_Ball6.png" alt="titles"/> 5%   (50.000.000)   Liquidity Pool (Palliative Addition)</p>
                            </li>
                            <li>
                                <p><img className="pontinhos" data-aos="zoom-in"  data-aos-delay="500" src="assets/images/tokenomics/Site_Tokenomics_Ball7.png" alt="titles"/> 2%   (20.000.000)  Partners</p>
                            </li>
                            <li>
                                <p><img className="pontinhos" data-aos="zoom-in"  data-aos-delay="500" src="assets/images/tokenomics/Site_Tokenomics_Ball8.png" alt="titles"/> 1,2%   (12.000.000)  Security Pool (Inflation Control and Repurchase Token)</p>
                            </li>
                            <li>
                                <p><img className="pontinhos" data-aos="zoom-in"  data-aos-delay="500" src="assets/images/tokenomics/Site_Tokenomics_Ball9.png" alt="titles"/> 1% (10.000.000)   Airdrop </p>
                            </li>
                            <li>
                                <p><img className="pontinhos" data-aos="zoom-in"  data-aos-delay="500" src="assets/images/tokenomics/Site_Tokenomics_Ball10.png" alt="titles"/> 1% (10.000.000)   Consultants</p>
                            </li>
                        </ul>
                    </div>
                        <div className="container-fluid bd-ex col-8 col-sm-10 col-xxl-8">
                            <img id="caneca" src="assets/images/tokenomics/Site_Tokenomics_BeerPercent.png" data-aos="fade-up"  data-aos-delay="500" alt="token image"/>
                        </div>
                </div>
            <br/>
            <br/>
            </div>
        </section>

       <Footer/>


    </div>
    );
};

