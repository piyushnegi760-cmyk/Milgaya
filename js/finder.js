const foundForm =
  document.getElementById("foundForm");


if (foundForm) {

  foundForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
      document.getElementById("finderName").value.trim();

    const contact =
      document.getElementById("finderContact").value.trim();

    const message =
      document.getElementById("finderMessage").value.trim();


    if (!name || !contact || !message) {

      document.getElementById("foundMessage").textContent =
        "Please fill all fields.";

      return;

    }


    document.getElementById("foundMessage").textContent =
      "Your report form is ready. Backend connection will be added later.";

  });

}