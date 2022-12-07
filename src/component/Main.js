import React from 'react'

const Main = () => {
  return (
    <>
    <form method="POST" action="https://checkout.flutterwave.com/v3/hosted/pay">
    <div>
        Your Order = $100,000
    </div>
    <input type="hidden" name="public_key" value="FLWPUBK_TEST-80995fd0f969c9f9be0712c68c67d7b2-X" />
    <input type="hidden" name="customer[email]" value="niyohyacintha@gmail.com" />
    <input type="hidden" name="customer[name]" value="Niyo Hyancitha" />
    <input type="hidden" name="tx_ref" value="bitethtx-019203" />
    <input type="hidden" name="amount" value="3400" />
    <input type="hidden" name="currency" value="RwF" />
    <input type="hidden" name="meta[token]" value="54" />
    <input type="hidden" name="redirect_url" value="https://http://localhost:3000/" />
    <button type="submit" id="start-payment-button">Pay Now</button>
</form >

<script>
    
    
</script>
</>

  )
}

export default Main