<?php
// database connection
$dbserver="localhost";
$dbuser="root";
$dbpwd="";
$dbname="zeus";
$conn=new mysqli($dbserver,$dbuser,$dbpwd,$dbname);
if($conn->connect_error)
{
    die("Connection failed".$conn->connect_error);
}
else{
    //echo "connected";
}
if($_SERVER["REQUEST_METHOD"]=="POST")
{
    // login
       if(isset($_POST["login"]))
       {
        $email=$_POST["email"];
        $password=$_POST["pwd"];
        if(!empty($email) && !empty($password))
        {
            $check="select * from signup_details where email='$email' and password='$password';";
            $result=$conn->query($check);
            if($result->num_rows>0)
            {
                echo "Login sucessfull";
            }
            else{
                echo "Login failed";
            }
        }
       }
    // sign up
    if(isset($_POST["signup"]))
    {
        $name=$_POST["name"];
        $signup_email=$_POST["signup_email"];
        $signup_password=$_POST["signup_pwd"];
        if(!empty($name) && !empty($signup_email) && !empty($signup_password))
        {
            $check1="select * from signup_details where email='$signup_email';";
            $result1=$conn->query($check1);
            if($result1->num_rows>0)
            {
                echo "Account already exist";
            }
            else{
                $check2="insert into signup_details(name,email,password) values('$name','$signup_email','$signup_password');";
                $conn->query($check2);
                echo "Account created sucessfully";
            }
        }
    }
}
?>