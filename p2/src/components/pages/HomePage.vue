<template>
  <div id="home">

    <div class="container-fluid text-center">
      <div class="row content">
        <div class="col-sm-2 sidenav">
          <p><a href="#">Banff Contact Center</a><br>
            <img src="@/assets/images/canada.jpg" alt="Baja Center">
          </p>
          <p><a href="#">Baja Contact Center</a><br>
            <img src="@/assets/images/mexico.jpg" alt="Baja Center">
          </p>
          <p><a href="#">Remote Call Center Project</a>
            <img src="@/assets/images/remote.jpg" alt="Baja Center">
          </p>
        </div>
        
        <div class="col-sm-8 text-left">
          <h2>Welcome</h2>
          <p>Welcome to the North America contact center site. We have five contact centers that service North America 
            and global premium secondary support. We have spotlight stories highlighting some recent achievements by our 
            stellar support team. Take a minute to see what's happening.<br><br>
          </p>
            
          <h2>CC's Stories</h2>
          <ul>
            <li>Canada & Mexico Get a Makeover. Links on the left</li>
            <li>Customer Calls Are Down, Making Way for Business Customers Elite Service Program</li>
          </ul>
        </div>
        
        <div class="col-sm-2 sidenav">
          <h4>Featured Reps</h4>
          <div class="well">
            <p>
              <span>Candace Cleveland</span>
              <img src="@/assets/images/csr3.jpg" alt="CSR Candace Cleveland">
            </p>
          </div>
          <div class="well">
            <p>
              <span>Aidan Reynaldo</span>
              <img src="@/assets/images/csr5.jpg" alt="CSR Aidan Reynaldo">
            </p>
          </div>
        </div>
      </div>
    </div><br>

    <div class="footer">
      <p> &nbsp;&nbsp; North America Call Centers -- All Rights Reserved &nbsp;&nbsp;</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  components: {},
  data: function (){
    return{};
  }
};
</script>

<style>
  body {
    background-color: #FAF9F6;
    }
  .navbar {
    margin-bottom: 50px;
    border-radius: 0;
    background-color: #1D024F;
    }
  .jumbotron {
    margin-bottom: 0;
    background-color: #C5B870;
    color: #1D024F;
    text-align: center;
    }
  a,
  .col-sm-8 li p {
    color: #1D024F;
    font-size: 16px;
    }
  .col-sm-8 {
    color: #1D024F;
    font-weight: bold;
    }
  .row.content {
    height: 450px;
    }
  .sidenav {
    padding-top: 15px;
    color: #1D024F;
    background-color: lightgrey;
    height: 100%;
    }
  img {
    border-radius: 20%;
    height: 90px;
    width: 100px;
    }
  @media screen and (max-width: 767px) {
    .sidenav {
      height: auto;
      padding: 15px;
      }
    .row.content {
      height: auto;
      }
    }
    .footer p {
      background-color: #1D024F;
      color: #C5B870;
      text-align: center;
      padding: 6px 0px 6px 0px;
      }
</style>
