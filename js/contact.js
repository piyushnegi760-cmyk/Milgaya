/* =========================================
   SUPPORT CENTER
========================================= */

function openSupportForm(type) {

  const supportType = document.getElementById("supportType");

  if (supportType) {
    supportType.value = type;
  }

  const form = document.querySelector(".support-form-card");

  if (form) {

    form.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    setTimeout(() => {

      const message =
        document.getElementById("supportMessage");

      if (message) {
        message.focus();
      }

    }, 500);
  }
}


/* Support form */

const supportForm =
  document.getElementById("supportForm");

if (supportForm) {

  supportForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      const type =
        document.getElementById("supportType").value;

      const email =
        document.getElementById("supportEmail").value.trim();

      const message =
        document.getElementById("supportMessage").value.trim();

      if (!email || !message) {

        alert("Please fill all required fields.");

        return;
      }

      /*
        Frontend stage:

        Later this will send the request
        to the Milgaya backend/database.
      */

      alert(
        "Support request received! We will get back to you soon."
      );

      supportForm.reset();

    }
  );
}