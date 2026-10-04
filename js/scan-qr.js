let scanner = null;
let scannerRunning = false;

const startButton = document.getElementById("startScanner");
const stopButton = document.getElementById("stopScanner");
const statusBox = document.getElementById("scanStatus");

function setStatus(message) {
  statusBox.textContent = message;
}


/* Start QR Scanner */

async function startScanner() {

  if (scannerRunning) {
    return;
  }

  scanner = new Html5Qrcode("reader");

  try {

    const cameras = await Html5Qrcode.getCameras();

    if (!cameras || cameras.length === 0) {
      setStatus("No camera found on this device.");
      return;
    }

    const cameraId = cameras[0].id;

    await scanner.start(
      cameraId,

      {
        fps: 10,
        qrbox: {
          width: 240,
          height: 240
        }
      },

      onScanSuccess,

      onScanError
    );

    scannerRunning = true;

    startButton.style.display = "none";
    stopButton.style.display = "block";

    setStatus("Scanner active. Point your camera at the QR code.");

  } catch (error) {

    console.error(error);

    setStatus(
      "Camera permission is required to scan the QR code."
    );
  }
}


/* QR successfully scanned */

function onScanSuccess(decodedText) {

  console.log("QR scanned:", decodedText);

  setStatus("QR detected. Opening item...");

  stopScanner();

  /*
    Example:

    https://milgaya.in/f/MG-A82K91

    The QR contains only a unique URL/token.
  */

  if (decodedText.startsWith("http://") ||
      decodedText.startsWith("https://")) {

    window.location.href = decodedText;

    return;
  }

  /*
    If QR contains only an ID,
    e.g. MG-A82K91
  */

  const qrId = decodedText.trim();

  if (qrId) {

    window.location.href =
      `found-item.html?qr=${encodeURIComponent(qrId)}`;

  }
}


/* Scanner error */

function onScanError(errorMessage) {
  // Ignore continuous scanner frame errors.
}


/* Stop scanner */

async function stopScanner() {

  if (!scanner || !scannerRunning) {
    return;
  }

  try {

    await scanner.stop();

    scanner.clear();

    scannerRunning = false;

    startButton.style.display = "block";
    stopButton.style.display = "none";

    setStatus("Scanner stopped.");

  } catch (error) {

    console.error(error);

  }
}


/* Buttons */

startButton.addEventListener(
  "click",
  startScanner
);

stopButton.addEventListener(
  "click",
  stopScanner
);


/* Cleanup */

window.addEventListener(
  "beforeunload",
  () => {
    if (scanner && scannerRunning) {
      scanner.stop().catch(() => {});
    }
  }
);