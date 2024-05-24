/* let colorPickerInputs = $('form.COLOR-PICKER input[type="color"]');
let colorHexInputs = $('form.COLOR-PICKER input[type="text"]');

$('form.COLOR-PICKER input[type="color"]').on("input", () => {
  colorHexInputs[index].prop("value", colorPicker.prop("value"));
  colorHexInputs[index].prop("placeholder", colorPicker.prop("value"));
}); */

/* Object.values(colorPickerInputs).forEach((colorPicker, index) => {
  console.log(colorPicker);
  colorPicker.on("input", () => {
    colorHexInputs[index].prop("value", colorPicker.prop("value"));
    colorHexInputs[index].prop("placeholder", colorPicker.prop("value"));
    colorHexInputs[index].value = colorPicker.value;
    colorHexInputs[index].placeholder = colorPicker.value;
  });
}); */

/* Object.values(colorHexInputs).forEach((text, index) => {
  text.on("change", () => {
    colorPicker[index].value = text.value;
  });
}); */

let keys = ["Background", "Post", "Accents", "Text"];

keys.forEach((key) => {
  let color = $(`#${key}ColorPicker`);
  let text = $(`#${key}ColorHex`);

  color.on("input", () => {
    text.prop("value", color.prop("value"));
  });

  text.on("input", () => {
    color.prop("value", text.prop("value"));
  });
});

//no submit on enter
$("#createPost input, #createPost textarea").on("keydown", (event) => {
  
  if (event.key === 'Enter') {
    event.preventDefault();
    $(event.target).next().focus();
  };

});
