<template>
  <div class="hello">
    <!-- top nav -->
    <div class="mainnav">
      <nav class="navbar right-align">
        <ul class="navbar-nav main-ul">
                  <li class="nav-item dropdown dropper">
                    <a class="nav-link notification-icon" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="icon-bell"></i>
                    </a>
                      <ul class="dropdown-menu position-relative">
                        <li class="head bg-dark">
                          <div class="row">
                            <div class="col-lg-12 col-sm-12 col-12">
                              <span>Notifications (3)</span>
                            </div>
                          </div>
                        </li>
                        <li class="notification-box">
                          <div class="row">
                            <div class="col-lg-3 col-sm-3 col-3 text-center">
                              <img src="images/prof-4.jpg" class="w-50 rounded-circle">
                            </div>    
                            <div class="col-lg-8 col-sm-8 col-8">
                              <strong class="text-info">David John</strong>
                              <div>
                                Lorem ipsum dolor sit amet, consectetur
                              </div>
                              <small class="text-warning">27.11.2015, 15:00</small>
                            </div>    
                          </div>
                        </li>
                        <li class="notification-box bg-gray">
                          <div class="row">
                            <div class="col-lg-3 col-sm-3 col-3 text-center">
                              <img src="images/prof-4.jpg" class="w-50 rounded-circle">
                            </div>    
                            <div class="col-lg-8 col-sm-8 col-8">
                              <strong class="text-info">David John</strong>
                              <div>
                                Lorem ipsum dolor sit amet, consectetur
                              </div>
                              <small class="text-warning">27.11.2015, 15:00</small>
                            </div>    
                          </div>
                        </li>
                        <li class="notification-box">
                          <div class="row">
                            <div class="col-lg-3 col-sm-3 col-3 text-center">
                              <img src="images/prof-4.jpg" class="w-50 rounded-circle">
                            </div>    
                            <div class="col-lg-8 col-sm-8 col-8">
                              <strong class="text-info">David John</strong>
                              <div>
                                Lorem ipsum dolor sit amet, consectetur
                              </div>
                              <small class="text-warning">27.11.2015, 15:00</small>
                            </div>    
                          </div>
                        </li>
                        <li class="drop-footer bg-dark text-center">
                          <a href="activity.html" class="text-light">View All</a>
                        </li>
                      </ul>
                  </li>
                  <li class="nav-item dropdown pic-dropper">
                    <a class="nav-link notification-icon" href="#" id="profileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img class="profpic" src="images/prof-4.jpg">
                    </a>
                      <ul class="dropdown-menu position-relative profile-menu">
                        <li class="head text-light bg-dark">
                          <div class="row">
                            <div class="col-lg-12 col-sm-12 col-12">
                              <span>Jane Doe</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <ul>
                          <li class="prof-men-link">
                            <a href="#">Feedback</a>
                          </li>
                          <div class="dropdown-divider"></div>
                          <li class="prof-men-link">
                            Logout
                          </li>
                      </ul>
                        </li>
                      </ul>
                  </li>
        </ul>
      </nav>
    </div>
    
    <!-- End of row/top nav -->
  </div>

</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
        display: flex;
        align-items: stretch;
    }

    #sidebar {
      background: #FDFDFD;
      color: #222941;
      transition: all 0.3s;
      height: 100vh;
      position: sticky;
      position: -webkit-sticky;
      top: 0; /* required */
      box-shadow: 3px 0px 17px rgba(32, 30, 103, 0.03);
    }

    #sidebar.active {
        min-width: 80px;
        max-width: 80px;
        text-align: center;
    }

    #sidebar.active .sidebar-header strong {
        display: block;
    }

    #sidebar ul li a {
        text-align: left;
    }

    #sidebar.active ul li a {
        padding: 20px 10px;
        text-align: center;
        font-size: 0.85em;
    }

    #sidebar.active ul li a i {
        margin-right:  0;
        display: block;
        font-size: 1.8em;
        margin-bottom: 5px;
    }

    #sidebar.active ul ul a {
        padding: 10px !important;
    }

    #sidebar .sidebar-header {
        padding-left: 20px;
        padding-bottom: 0px;
        padding-right: 20px;
        padding-top: 5px;
    }

    #sidebar ul.components {
        padding: 20px 0;
    }

    #sidebar ul li a {
        padding: 10px;
        font-size: 1.1em;
        display: block;
        color: #222941;
    }

    #sidebar ul li a:hover {
        color: #222941;
        background: #EFF7FD;
    }

    #sidebar ul li a i {
        margin-right: 10px;
    }

    #sidebar ul li.active {
        color: #222941;
        background: #EFF7FD;
        border-left: 5px solid #5BB0FF;
    }

    .sidebar-header {
      padding-top: 0px;
    }
</style>
