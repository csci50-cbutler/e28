<template>
    <div>
        <h2>Login Form</h2> 
        <form action="/action_page.php"> 
            <div class="imgcontainer">
                <span class="logo">{{logo}}</span>
            </div> 
    
            <div class="container"> 
                <label><b>Username</b></label> 
                <input type="text" placeholder="Enter Username" name="uname" required> 
    
                <label><b>Password</b></label> 
                <input type="password" placeholder="Enter Password" name="psw" required> 
    
                <button type="submit">Login</button> 
                <input type="checkbox" checked="checked"> Remember me 
            </div> 
    
            <div class="container" style="background-color:#f1f1f1"> 
                <button type="button" class="cancelbtn">Cancel</button> 
                <span class="psw">Forgot <a href="#">password?</a></span> 
            </div> 
        </form> 
    </div>
</template>

<script>
    export default {
        name: "CustomerPage",
        props: {
            logo:  {
                default: "G"
            }
        },
    }
</script>
<style scoped>
    form { 
        border: 3px solid #f1f1f1; 
    } 
    input[type=text], 
    input[type=password] { 
        width: 100%; 
        padding: 12px 20px; 
        margin: 8px 0; 
        display: inline-block; 
        border: 1px solid #ccc; 
        box-sizing: border-box; 
    } 
    .logo {
        position: absolute;
        top: -19px;
        right: 30px;
        font-family: 'Lobster', cursive;
        font-size: 9em;
        font-style: italic;
        font-weight: bold;
        color: #1D024F;
        opacity: 0.3;
    }
    button { 
        background-color: #4CAF50; 
        color: white; 
        padding: 14px 20px; 
        margin: 8px 0; 
        border: none; 
        cursor: pointer; 
        width: 100%; 
    } 
    button:hover { 
        opacity: 0.8; 
    } 
    .cancelbtn { 
        width: auto; 
        padding: 10px 18px; 
        background-color: #f44336; 
    } 
    .imgcontainer { 
        text-align: center; 
        margin: 24px 0 12px 0; 
    } 
    img.avatar { 
        width: 40%; 
        border-radius: 50%; 
    } 
    .container { 
        padding: 16px; 
    } 
    span.psw { 
        float: right; 
        padding-top: 16px; 
    } 
    @media screen and (max-width: 300px) { 
        span.psw { 
            display: block; 
            float: none; 
        } 
        .cancelbtn { 
            width: 100%; 
        } 
    } 
</style>