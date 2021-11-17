package com.stripe.sample;

import java.nio.file.Paths;

import java.util.HashMap;
import java.util.Map;

import static spark.Spark.post;
import static spark.Spark.port;
import static spark.Spark.staticFiles;

import com.google.gson.Gson;
import com.google.gson.annotations.SerializedName;
import com.google.gson.JsonSyntaxException;

import com.stripe.Stripe;
import com.stripe.net.ApiResource;
import com.stripe.model.Event;
import com.stripe.model.EventDataObjectDeserializer;
import com.stripe.exception.SignatureVerificationException;
import com.stripe.net.Webhook;
import com.stripe.model.StripeObject;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import com.stripe.model.Price;
import com.stripe.param.PriceListParams;
import com.stripe.model.PriceCollection;
import com.stripe.model.Discount;
import com.stripe.model.Subscription;

public class Server {
  private static Gson gson = new Gson();

  public static void main(String[] args) {
    port(4242);

    // This is your real test secret API key.
    Stripe.apiKey = "sk_test_51HPKNxHJ8xTPZhVwTAczHwdoLMOC7gt6ZCKJsdRPg1vV43mupWl4gNL7coxwu6I01COve2frnk1MhVdoWIdepxxJ00v5yVENoN";
    // Replace this endpoint secret with your endpoint's unique secret
    // If you are testing with the CLI, find the secret by running 'stripe listen'
    // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
    // at https://dashboard.stripe.com/webhooks
    String endpointSecret = "whsec_12345";
    final String YOUR_DOMAIN = "https://datacryptoanalytics.com/";

    staticFiles.externalLocation(Paths.get("public").toAbsolutePath().toString());

    post("/create-checkout-session", (request, response) -> {
      PriceListParams priceParams = PriceListParams.builder().addLookupKeys(request.queryParams("lookup_key")).build();
      PriceCollection prices = Price.list(priceParams);

      SessionCreateParams params = SessionCreateParams.builder()
          .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
          .addLineItem(
              SessionCreateParams.LineItem.builder().setPrice(prices.getData().get(0).getId()).setQuantity(1L).build())
          .setMode(SessionCreateParams.Mode.SUBSCRIPTION)
          .setSuccessUrl(YOUR_DOMAIN + "/success.html?session_id={CHECKOUT_SESSION_ID}")
          .setCancelUrl(YOUR_DOMAIN + "/cancel.html")
          .build();
      Session session = Session.create(params);

      response.redirect(session.getUrl(), 303);
      return "";
    });

    post("/create-portal-session", (request, response) -> {
      // For demonstration purposes, we're using the Checkout session to retrieve the
      // customer ID.
      // Typically this is stored alongside the authenticated user in your database.
      // Deserialize request from our front end.
      Session checkoutSession = Session.retrieve(request.queryParams("session_id"));

      String customer = checkoutSession.getCustomer();
      // Authenticate your user.
      com.stripe.param.billingportal.SessionCreateParams params = new com.stripe.param.billingportal.SessionCreateParams.Builder()
          .setReturnUrl(YOUR_DOMAIN).setCustomer(customer).build();

      com.stripe.model.billingportal.Session portalSession = com.stripe.model.billingportal.Session.create(params);


      response.redirect(portalSession.getUrl(), 303);
      return "";
    });

    post("/webhook", (request, response) -> {
      String payload = request.body();
      Event event = null;
      try {
        event = ApiResource.GSON.fromJson(payload, Event.class);
      } catch (JsonSyntaxException e) {
        // Invalid payload
        System.out.println("⚠️  Webhook error while parsing basic request.");
        response.status(400);
        return "";
      }
      String sigHeader = request.headers("Stripe-Signature");
      if (endpointSecret != null && sigHeader != null) {
        // Only verify the event if you have an endpoint secret defined.
        // Otherwise use the basic event deserialized with GSON.
        try {
          event = Webhook.constructEvent(payload, sigHeader, endpointSecret);
        } catch (SignatureVerificationException e) {
          // Invalid signature
          System.out.println("⚠️  Webhook error while validating signature.");
          response.status(400);
          return "";
        }
      }
      // Deserialize the nested object inside the event
      EventDataObjectDeserializer dataObjectDeserializer = event.getDataObjectDeserializer();
      StripeObject stripeObject = null;
      if (dataObjectDeserializer.getObject().isPresent()) {
        stripeObject = dataObjectDeserializer.getObject().get();
      } else {
        // Deserialization failed, probably due to an API version mismatch.
        // Refer to the Javadoc documentation on `EventDataObjectDeserializer` for
        // instructions on how to handle this case, or return an error here.
      }
      // Handle the event
      Subscription subscription = null;
      switch (event.getType()) {
        case "customer.subscription.deleted":
          subscription = (Subscription) stripeObject;
          // Then define and call a function to handle the event
          // customer.subscription.deleted
          // handleSubscriptionTrialEnding(subscription);
        case "customer.subscription.trial_will_end":
          subscription = (Subscription) stripeObject;
          // Then define and call a function to handle the event
          // customer.subscription.trial_will_end
          // handleSubscriptionDeleted(subscriptionDeleted);
        case "customer.subscription.created":
          subscription = (Subscription) stripeObject;
          // Then define and call a function to handle the event
          // customer.subscription.created
          // handleSubscriptionCreated(subscription);
        case "customer.subscription.updated":
          subscription = (Subscription) stripeObject;
          // Then define and call a function to handle the event
          // customer.subscription.updated
          // handleSubscriptionUpdated(subscription);
          // ... handle other event types
        default:
          System.out.println("Unhandled event type: " + event.getType());
      }
      response.status(200);
      return "";
    });
  }
}