---
permalink: /adult-deposit/
title: Adult Deposit
---

<section>
  <div class="container">
    <hr class="hr-dark" />
    <div class="row">
      <div class="col text-center">
        <h2 class="section-heading below-hr">{{ page.title }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-lg-6">
        <p class="section-body mt-0 mb-4">
          A non-refundable ${{ site.adult_deposit }} deposit will reserve your adult.
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <hr />
      </div>
    </div>
    <template class="deposit-confirmation--template"
      ><section class="deposit-confirmation">
        <h3 class="deposit-confirmation--title">Deposit Confirmation</h3>
        <p style="margin-bottom: 0">
          Thank you,
          <span class="deposit-confirmation--payer-name"></span>.
        </p>
        <p>We have received your reservation.</p>
      </section></template
    >
    <div
      class="kitten-deposit-alert row justify-content-center hidden"
      role="alert"
    >
      <div class="col col-lg-6 mt-4">
        <div class="kitten-deposit-alert--text">
          We're sorry, we're not able to process your request right now. Please
          try again soon.
        </div>
      </div>
    </div>
    <!-- PayPal Smart Buttons -->
    <div class="row justify-content-center mt-5">
      <div id="smart-button-container" class="col col-lg-6">
        <div style="text-align: center">
          <div id="paypal-button-container"></div>
        </div>
      </div>
      <script
        src="https://www.paypal.com/sdk/js?client-id=AcTyn-LfmJLGLfRyvuyExAAivIVsD-WqkX1wWCQFON_CkecIBU5e_sxlJizdWi6AoCSsFBh5IFfRGG7J&enable-funding=venmo&currency=USD"
        data-sdk-integration-source="button-factory"
      ></script>
      <script>
        var depositCost = '{{ site.adult_deposit }}';
        function initPayPalButton() {
          paypal
            .Buttons({
              style: {
                shape: 'rect',
                color: 'gold',
                layout: 'vertical',
                label: 'pay',
              },
              createOrder: function (data, actions) {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: `Adult deposit`,
                      amount: {
                        currency_code: 'USD',
                        value: depositCost,
                      },
                    },
                  ],
                  application_context: {
                    shipping_preference: 'NO_SHIPPING',
                  },
                });
              },
              onApprove: function (data, actions) {
                return actions.order.capture().then(function (details) {
                  var buttonContainer = document.getElementById(
                    'paypal-button-container'
                  );
                  var template = document.querySelector(
                    '.deposit-confirmation--template'
                  );
                  var clone = template.content.cloneNode(true);
                  clone.querySelector(
                    '.deposit-confirmation--payer-name'
                  ).textContent = details.payer.name.given_name;
                  buttonContainer.innerHTML = '';
                  buttonContainer.appendChild(clone);
                });
              },
              onError: function (error) {
                document
                  .querySelector('.kitten-deposit-alert')
                  .classList.remove('hidden');
              },
            })
            .render('#paypal-button-container');
        }
        initPayPalButton();
      </script>
    </div>
  </div>
</section>
