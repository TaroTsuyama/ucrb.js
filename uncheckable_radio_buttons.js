window.onload =()=> {
    const radioButtons = document.querySelectorAll("input[type='radio']");

    const uncheckRadioButton = (target) => {
      setTimeout(func =()=>{
        target.checked = false;
      },0)
    }

    radioButtons.forEach(radioButton => {
      let label = document.querySelector('label[for="' + radioButton.id + '"]')

      radioButton.addEventListener("mouseup", func=()=>{
        if(radioButton.checked){
          uncheckRadioButton(radioButton)
        }
      });

      if(label){
        label.addEventListener("mouseup", func=()=>{
          if(radioButton.checked){
            uncheckRadioButton(radioButton)
          }
        });
      }

    });
}