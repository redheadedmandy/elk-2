<template>
  <div class="hello">
    <!-- Sidebar Holder -->
            <nav id="sidebar" class="active">
                <div class="sidebar-header">
                    <a href="webstart.html"><img class="img-fluid logo-head" src="images/logo.png"></a>
                </div>

                <ul class="list-unstyled components">
                    <li class="active">
                        <a href="admin-dashboard-index.html">
                            <i class="icon-asset-3"></i>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="activity.html">
                            <i class="icon-cubes"></i>
                            Loads
                        </a>
                        <a href="manage-users.html">
                            <i class="icon-users"></i>
                            Drivers
                        </a>
                    </li>
                    <li>
                        <a href="admin-settings-integrate.html">
                            <i class="icon-cog"></i>
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
