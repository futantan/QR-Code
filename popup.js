chrome.tabs.getSelected(null, function (thisTab) {
    new QRCode(document.getElementById("qrcode"), {
        text: thisTab.url,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});



