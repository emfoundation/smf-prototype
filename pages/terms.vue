<template>
  <div class="terms has-background-emf">
    <section class="terms-content wrap">
      <div class="terms-heading ">
        <h2 class="title is-2 has-text-white">Terms <span class="has-text-primary">&</span> Conditions</h2>
      </div>

      <p class="has-text-white">This is a summary of the terms and conditions for the Circular Economy Learning Prototype.  "EMF" or "we" is together the Ellen MacArthur Foundation and Ellen MacArthur Foundation Trading Limited.  By accessing and using our Circular Economy Learning Prototype ('the programme'), you agree to comply with and be bound by the terms and conditions (‘the terms’), which can be found as a pdf at the bottom of this page.  In the event of any discrepancy or inconsistency between this summary and the terms, the terms prevail.</p>

      <p class="has-text-white">We own the content of the programme and you agree that you will only use it as allowed by its terms. You agree that you will keep your information up-to-date at all times.  We might remove material that you have uploaded.</p>

      <p class="has-text-white">You are free to use the material in the programme for internal use within your organisation. You agree not to exploit the information within the programme for commercial advantage in any market.</p>

      <p class="has-text-white">You agree to respect the programme's software and use it appropriately. Abusing the use of the programme or others' materials other than for its intended purpose would be in breach of the terms.
      You must not upload inappropriate material.  You must not use others' branding without their consent.</p>

      <p class="has-text-white">It is your responsibility to keep any password we supply secure and confidential to you. You must not tell anyone your password and we may terminate your account if you do.  If you think someone else knows your password please let us know as soon as possible.</p>

      <p class="has-text-white">Privacy is extremely important to us. We will hold your data under the terms of our privacy policy. It is extremely important you read and agree to our privacy policy prior to using the programme, which can be found as a pdf at the bottom of this page.</p>

      <p class="has-text-white">Whilst we try our best to keep everything working, up-to-date and error-free, we can’t promise that we'll always be successful. We can't accept responsibility for any errors, changes, viruses or other problems that occur.  We disclaim and limit our legal liability to you in order to protect our organisation.  You are responsible to us if you upload material that you should not, and that causes us a loss.</p>

      <p class="has-text-white">You can ask us to terminate at any time. We can terminate if you seriously breach the terms, if we are asked to do so by an official body or if the licence under which the programme operates is terminated for any reason.</p>

      <p class="has-text-white">The terms set out the agreement between us. We might need to update the terms from time to time. We'll do this by updating the terms in the programme. You need to check the terms regularly to make sure you're aware of the terms on which you are using the programme. We might also change the programme and its functions from time to time.  The terms outline the relationship between you and us and as such you cannot transfer this agreement to someone else. We and the programme operate under English law.</p>
      <div class="columns is-gapless download-block">
        <div class="buttons column has-addons">
          <a
            class="button has-text-weight-semibold"
            href="docs/Circular Economy Learning Terms and Conditions.pdf"
            target="_blank">
            View full T&C's
          </a>
          <a
            class="button"
            href="docs/Circular Economy Learning Terms and Conditions.pdf"
            target="_blank">
            <i class="fas fa-file"/>
          </a>
        </div>
        <div class="buttons column has-addons">
          <a
            class="button has-text-weight-semibold"
            href="docs/Circular Economy Learning Privacy Policy.pdf"
            target="_blank">
            View privacy policy
          </a>
          <a
            class="button"
            href="docs/Circular Economy Learning Privacy Policy.pdf"
            target="_blank">
            <i class="fas fa-file"/>
          </a>
        </div>
      </div>
      <div class="button-container mt-4">
        <back-button label="Back"/>
      </div>
    </section>
  </div>
</template>

<script>
import BackButton from "~/components/UI/buttons/BackButton";

export default {
  components: {
    BackButton
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 1rem 0;
}
.button-container {
  text-align: right;
  padding-top: 2rem;
}
.terms {
  min-height: 100vh;
}
.terms-content {
  padding-top: 7rem;
  @include tablet() {
    width: 80%;
  }
  @include desktop() {
    width: 70%;
  }

  .terms-heading {
    border-bottom: 1px white solid;
    padding-bottom: 1.5rem;
    margin-bottom: 3rem;
  }
}
.download-block {
  margin: 2rem 0;
  width: 35rem;
  .buttons {
    font-size: 1.5rem;
    a {
      border: solid 2px white;
      padding: 1.2rem;
      i {
        color: $emf;
        font-size: 1.5rem;
      }
      &:first-of-type {
        background-color: $emf;
        color: white;
        border-top-left-radius: 18px;
        border-bottom-left-radius: 18px;
        &:hover {
          background-color: white;
          color: $emf;
        }
      }
      &:last-of-type {
        border-top-right-radius: 18px;
        border-bottom-right-radius: 18px;
      }
    }
  }
}
@include mobile() {
  .download-block {
    .buttons {
      margin-top: 0.5rem;
    }
  }
  .button-container {
    text-align: left;
    padding-top: 2rem;
  }
}
</style>
