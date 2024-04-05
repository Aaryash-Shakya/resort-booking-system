// import axios from 'axios';
import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

// export default class TakeMoney extends React.Component {
//   onToken = (token: any) => {
//     fetch('/save-stripe-token', {
//       method: 'POST',
//       body: JSON.stringify(token),
//     }).then(response => {
//       response.json().then(data => {
//         alert(`We are in business, ${data.email}`);
//       });
//     });
//   }

//   // ...

//   render() {
//     return (
//       // ...
//       <StripeCheckout
//         token={this.onToken}
//         stripeKey="my_PUBLISHABLE_stripekey"
//       />
//     )
//   }
// }

const Payment: React.FC = () => {

  const onToken = (token: any) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  const amount = 60000

  return (
    <section className='nav-margin'>

      {/* payment btn */}
      <StripeCheckout
        amount={amount * 100}
        currency='NPR'
        token={onToken}
        stripeKey="pk_test_51LUpdxF7nwfGVnxLfgcy3MoW8VU4uGzcMxjeeU27WTxW7Chx83xiLGkSDqVc1E8MAktDnDuFADDRoqLVK1iD8F9w00oGXaILsK"
      />
    </section>
  )
}

export default Payment