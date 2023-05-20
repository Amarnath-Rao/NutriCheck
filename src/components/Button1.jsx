import React from "react";
{//<script src="https://accounts.google.com/gsi/client" async defer></script>
let acctoken=null}
function googlesignin(){
    let but = document.querySelector('#gsignin')
    if(but.innerHTML=='Sign Out'){
        localStorage.acctoken=null
        acctoken=null
        return
    }
    const client = google.accounts.oauth2.initTokenClient({
      client_id: '46732986109-fjpf0a3jnpmd7qp5o2hqcvscs8hi8emp.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/fitness.activity.read',
      callback: (response) => {
        console.log(response);
        acctoken=response.access_token
        localStorage.acctoken=acctoken
        //changeSignInState()
      },
    });
    client.requestAccessToken()
  }


const Button1 = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} >
    Get Started
  </button>

);

export default Button1;