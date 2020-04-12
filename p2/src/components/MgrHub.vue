<template>
    <div id="mgrHub">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                <div class="panel panel-success">
                    <div class="panel-heading">Contact Center Dashboard</div>
                    <div class="panel-body"><img src="./../assets/images/CallCenterDashboard.jpg" class="img-responsive" alt="Contact Center Dashboard"></div>
                    <div class="panel-footer">Contact Center Floor Data</div>
                </div>
                </div>
                <div class="col-sm-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">Workforce Management</div>
                    <div class="panel-body"><img src="./../assets/images/wfm1.gif" class="img-responsive" alt="WFM"></div>
                    <div class="panel-footer">Contact Rep Management, Scheduling, Reports</div>
                </div>
                </div>
                <div class="col-sm-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">Social Media </div>
                    <div class="panel-body"><img src="./../assets/images/twitter2.png" class="img-responsive" alt="Twitter"></div>
                    <div class="panel-footer">Social Media Contact Queues</div>
                </div>
                </div>
            </div>
        </div><br>

        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">Reports & Analyics</div>
                    <div class="panel-body"><img src="./../assets/images/reports.png" class="img-responsive" alt="Reports & Analytics"></div>
                    <div class="panel-footer">Reports & Contact Center Metrics</div>
                </div>
                </div>
                <div class="col-sm-4">
                <div class="panel panel-success">
                    <div class="panel-heading">Knowledge Base</div>
                    <div class="panel-body"><img src="./../assets/images/knowledgebase.png" class="img-responsive" alt="Knowledge Base"></div>
                    <div class="panel-footer">Knowledge Base & Business Rules </div>
                </div>
                </div>
                <div class="col-sm-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">Technology Center</div>
                    <div class="panel-body"><img src="./../assets/images/contactCenter.jpg"  class="img-responsive" alt="Call Center Application"></div>
                    <div class="panel-footer">Manage Call Routes & Contact Flows</div>
                </div>
                </div>
            </div>
        </div><br><br>
        
        <footer class="container-fluid text-center">
            <span class="footer"> &nbsp;&nbsp; Manager/Agent Interaction:  &nbsp;&nbsp;
                <a href=# class="fa fa-headphones" title="Listen In" >&nbsp;&nbsp;&nbsp;</a>
                <a href=# class="fa fa-microphone-slash" title="Speak with Agent">&nbsp;&nbsp;&nbsp;</a>
                <a href=# class="fa fa-dot-circle-o" title="Record Live Agent" >&nbsp;&nbsp;&nbsp;</a>
                <a href=# class="fa fa-comments-o" title="Chat with Agent">&nbsp;&nbsp;&nbsp;</a>
            </span>
        </footer>
    </div>
</template>

<script>

export default {
    name: "",
    components: {},
    data: function() {
        return{};
    },
};
</script>

<style scoped>

    body {
        background-color: #FAF9F6;
    }
    .logo {
        position: absolute;
        top: 0px;
        right: 15px;
        font-size: 36px;
        font-weight: bold;
        font:
    }

    .navbar {
      margin-bottom: 50px;
      border-radius: 0;
      background-color: #1D024F;
    }

    /* Jumbotron*/
     .jumbotron {
        margin-bottom: 0;
        background-color: #C5B870;
    }

    img {
        margin-left: auto;
        margin-right: auto;
        width: 70%;
        height: 40%;
    }

    .panel {
        border-width: 2px;
        border-color: #C5B870;
    }

    .panel .panel-heading {
        background-color: #1D024F;
        color: #FAF9F6;
        border-width: 3px;
        border-color: #C5B870;
    }

    /* Footer styling and color */
    footer {
      background-color: #1D024F;
      padding: 25px;
    }

    footer i {
        color: #FAF9F6;
    }

    footer span {
        color: #FAF9F6;
        font-size:30px;
    }

    .footer .fa {
        color: #FAF9F6;
        font-size:48px;
    }
</style>