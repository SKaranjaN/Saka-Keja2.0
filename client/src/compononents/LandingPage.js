// import React from 'react';
// import '../assets/css/style.css';

// const LandingPage = () => {
//   return (
//     <html className="no-js" lang="en">
//       <head>
//         <meta charset="utf-8" />
//         <title>Saka Keja</title>
//         <meta name="description" content="" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="shortcut icon" href="assets/images/favicon.png" type="image/png" />
//         <link rel="stylesheet" href="assets/css/animate.css" />
//         <link rel="stylesheet" href="assets/css/lineicons.css" />
//         <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
//         <link rel="stylesheet" href="assets/css/default.css" />
//         <link rel="stylesheet" href="assets/css/style.css" />
//       </head>
//       <body>
//         <div className="preloader">
//           <div className="loader">
//             <div className="ytp-spinner">
//               <div className="ytp-spinner-container">
//                 <div className="ytp-spinner-rotator">
//                   <div className="ytp-spinner-left">
//                     <div className="ytp-spinner-circle"></div>
//                   </div>
//                   <div className="ytp-spinner-right">
//                     <div className="ytp-spinner-circle"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <header className="header-area">
//           <div className="navbar-area">
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-12">
//                   <nav className="navbar navbar-expand-lg">
//                     <a className="navbar-brand" href="index.html">
//                       <img src="" alt="" />
//                       <h2>Saka-Keja</h2>
//                     </a>
//                     <button
//                       className="navbar-toggler"
//                       type="button"
//                       data-toggle="collapse"
//                       data-target="#navbarSupportedContent"
//                       aria-controls="navbarSupportedContent"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                     >
//                       <span className="toggler-icon"></span>
//                       <span className="toggler-icon"></span>
//                       <span className="toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
//                       <ul id="nav" className="navbar-nav ml-auto">
//                         <ul className="d-flex">
//                           <li>
//                             <a id="loginButton" href="/login" className="main-btn wow " data-wow-duration="1.3s" data-wow-delay="0.8s">
//                               Login
//                             </a>
//                           </li>
//                         </ul>
//                         <ul className="d-flex">
//                           <li>
//                             <a
//                               id="signupButton"
//                               href="/signup"
//                               className="main-btn wow fadeInLeftBig"
//                               data-wow-duration="1.3s"
//                               data-wow-delay="0.8s"
//                             >
//                               Sign Up
//                             </a>
//                           </li>
//                         </ul>
//                       </ul>
//                     </div>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div id="home" className="header-hero bg_cover d-lg-flex align-items-center">
//             <div className="shape shape-1"></div>
//             <div className="shape shape-2"></div>
//             <div className="shape shape-3"></div>
//             <div className="shape shape-4"></div>
//             <div className="shape shape-5"></div>
//             <div className="shape shape-6"></div>
//             <div className="container">
//               <div className="row align-items-center justify-content-center justify-content-lg-between">
//                 <div className="col-lg-6 col-md-10">
//                   <div className="header-hero-content">
//                     <h3 className="header-title wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
//                       <span>Welcome to Saka-Keja</span> Best property management app
//                     </h3>
//                     <ul className="d-flex">
//                       <li>
//                         <button className="main-btn">Get started Now</button>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 col-sm-6 col-10">
//                   <div className="header-image">
//                     <img
//                       src="assets/images/header-app.png"
//                       alt="app"
//                       className="image wow fadeInRightBig"
//                       data-wow-duration="1.3s"
//                       data-wow-delay="0.5s"
//                     />
//                     <div className="image-shape wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.8s">
//                       <img src="" alt="" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="header-shape-1"></div>
//             <div className="header-shape-2">
//               <img src="" alt="" />
//             </div>
//           </div>
//         </header>
//         <section id="about" className="about-area pt-70 pb-120">
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-lg-6">
//                 <div className="about-image mt-50 wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
//                   <div className="about-shape"></div>
//                   <img className="app" src="assets/images/header-app2.png" alt="" />
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="about-content mt-50 wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
//                   <div className="section-title">
//                     <h3 className="title">View houses to rent</h3>
//                     <h3 className="text-no3">Also list properties to rent by patnering with us to easily get market for you.</h3>
//                   </div>
//                   <button className="main-btn">Get started Now</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <footer id="footer" className="footer-area">
//           <div className="footer-shape shape-1"></div>
//           <div className="footer-shape shape-2"></div>
//           <div className="footer-shape shape-3"></div>
//           <div className="footer-shape shape-4"></div>
//           <div className="footer-shape shape-5"></div>
//           <div className="footer-shape shape-6"></div>
//           <div className="footer-shape shape-7"></div>
//           <div className="footer-shape shape-8">
//             <img className="svg" src="assets/images/footer-shape.svg" alt="Shape" />
//           </div>
//           <div className="footer-widget pt-30 pb-80">
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-4 col-md-6">
//                   <div className="footer-about mt-50 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.2s">
//                     <ul className="social">
//                       <li>
//                         <i className="lni lni-facebook"></i>
//                       </li>
//                       <li>
//                         <i className="lni lni-twitter"></i>
//                       </li>
//                       <li>
//                         <i className="lni lni-instagram"></i>
//                       </li>
//                       <li>
//                         <i className="lni lni-linkedin"></i>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="col-lg-5 col-md-6">
//                   <div className="footer-link d-flex flex-wrap">
//                     <div className="footer-link-wrapper mt-45 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.6s">
//                       <div className="footer-title">
//                         <h4 className="title">Contact Us</h4>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-3 col-md-6">
//                   <div className="footer-contact mt-45 wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.8s">
//                     <div className="footer-title"></div>
//                     <ul className="contact-list">
//                       <li></li>
//                       <li>
//                         <div className="contact-info d-flex">
//                           <div className="info-content media-body">
//                             <p className="text">
//                               <i className="lni lni-envelope"></i> sakakeja.ke@gmail.com
//                             </p>
//                           </div>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="footer-copyright">
//             <div className="container"></div>
//           </div>
//         </footer>
//         <i className="lni lni-chevron-up"></i>
//         <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>
//         <script src="assets/js/vendor/modernizr-3.7.1.min.js"></script>
//         <script src="assets/js/popper.min.js"></script>
//         <script src="assets/js/bootstrap.min.js"></script>
//         <script src="assets/js/wow.min.js"></script>
//         <script src="assets/js/jquery.easing.min.js"></script>
//         <script src="assets/js/scrolling-nav.js"></script>
//         <script src="assets/js/main.js"></script>
//         <script>
//           {`
//           document.getElementById("loginButton").addEventListener("click", function() {
//             window.location.href = "/login";
//           });
//           document.getElementById("signupButton").addEventListener("click", function() {
//             window.location.href = "/signup";
//           });
//           `}
//         </script>
//       </body>
//     </html>
//   );
// };

// export default LandingPage;
