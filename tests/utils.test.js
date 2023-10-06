const utils = require("../js/utils");

var mockTextObject = { textContent: "aaa"};

test("text for label should equal input string", () => {
    utils.setTextContent(mockTextObject, "test");
    expect(mockTextObject.textContent).toEqual("test");
});