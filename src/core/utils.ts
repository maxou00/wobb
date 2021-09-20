import { CognitoUser } from "amazon-cognito-identity-js";
import { RAZORPAY_KEY_ID, UserPool } from "./constants";
import { randomID } from "./roles";

export function nameToUsername(name: string) {
    return randomID(12);
}

export function persistUname(str: string) {
    localStorage.setItem('wobb_uname', str);
}

export function getUname() {
    return localStorage.getItem('wobb_uname') || ''
}

export function userFromUname() {
    let uname = getUname();
    if(uname) {
        return new CognitoUser({
            Username: uname,
            Pool: UserPool
        })
    }
    return null;
}

declare var Razorpay: any;

/// ONGOING
export function callRazorPay(cost: number) {
    const options = {
        key: RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: cost+'',
        // "amount": "100",
        currency: 'INR',
        name: 'Wobb',
        description: 'Campaign Payment',
        image: 'https://kapils-first-aws-bucket.s3.ap-south-1.amazonaws.com/myFirstFolderOn-aws/wobb1/favicon.ico',
        handler: (response: any) => {
         
        },
        prefill: {
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp1 = new Razorpay(options);
      rzp1.on('payment.failed', (response: any) => {
        alert('Payment Failed. Please Try Again !');
        console.log(response);
      });
      rzp1.open();
}


export function padZero(value: number) {
  if(value >= 0 && value < 10) {
    return "0"+value;
  }
  return ''+value;
}