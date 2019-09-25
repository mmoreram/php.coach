(function() {
    var stripe = Stripe('pk_live_U8eFdJctKPhWgsYEkeJUIP4b');

    var checkoutButtonEarly = document.getElementsByClassName('checkout-button-early');
    checkoutButtonEarly.addEventListener('click', function () {
        // When the customer clicks on the button, redirect
        // them to Checkout.
        stripe.redirectToCheckout({
            items: [{sku: 'sku_FsP7TtgcK4U5N2', quantity: 1}],

            // Do not rely on the redirect to the successUrl for fulfilling
            // purchases, customers may not always reach the success_url after
            // a successful payment.
            // Instead use one of the strategies described in
            // https://stripe.com/docs/payments/checkout/fulfillment
            successUrl: 'https://php.coach/thanks.html',
            cancelUrl: 'https://php.coach/oops.html',
        })
            .then(function (result) {
                if (result.error) {
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, display the localized error message to your customer.
                    var displayError = document.getElementById('error-message');
                    displayError.textContent = result.error.message;
                }
            });
    });

    var checkoutButtonRegular = document.getElementsByClassName('checkout-button-regular');
    checkoutButtonRegular.addEventListener('click', function () {
        // When the customer clicks on the button, redirect
        // them to Checkout.
        stripe.redirectToCheckout({
            items: [{sku: 'sku_FsPrnEG4pZZACP', quantity: 1}],

            // Do not rely on the redirect to the successUrl for fulfilling
            // purchases, customers may not always reach the success_url after
            // a successful payment.
            // Instead use one of the strategies described in
            // https://stripe.com/docs/payments/checkout/fulfillment
            successUrl: 'https://php.coach/thanks.html',
            cancelUrl: 'https://php.coach/oops.html',
        })
            .then(function (result) {
                if (result.error) {
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, display the localized error message to your customer.
                    var displayError = document.getElementById('error-message');
                    displayError.textContent = result.error.message;
                }
            });
    });
})();